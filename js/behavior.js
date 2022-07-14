let $ = jQuery;

/*
 * ## Convert List of Files to File Tree
 * @param {Array} list Files in flat list
 * @return {Object} Files in tree (by folders)
 *
 * @example
 * ```javascript
 * Schema(list) == [{
 *   path: String,
 *   originalName: String,
 *   originalPath: String,
 *   name: String,
 *   lang: String,
 *   toc: [Headline]
 * }]
 * ```
 */
let listToTree = function(list) {
  let tree = {};

  for (let file of Array.from(list)) {
    let path = file.path.split('/');
    let fileDepth = path.length - 1;
    let cur = tree;

    for (let depth = 0; depth < path.length; depth++) {
      let part = path[depth];
      if (((cur[part] != null ? cur[part].type : undefined) !== 'file') && (depth === (fileDepth-1)) && file.originalName.match(/index\.(js|coffee)/)) {
        if (!cur[part]) { cur[part] = {}; }
        cur[part].path = file.path;
        cur[part].originalName = file.originalName;
        cur[part].originalPath = file.originalPath;
        cur[part].name = file.name;
        cur[part].title = part;
        cur[part].type = 'file';
        if (!cur[part].children) { cur[part].children = {}; }
        break;
      }
      if (depth === fileDepth) {
        cur[part] = file;
        cur[part].type = 'file';
      } else {
        if (!cur[part]) { cur[part] = {name: part, type: 'folder'}; }
        cur = cur[part].children || (cur[part].children = {});
      }
    }
  }

  return tree;
};

/*
 * ## Convert TOC to Headline Tree
 * @param {Array} toc List of Headlines
 * @return {Array} Tree of Headlines
 *
 * @example
 * ```javascript
 * Schema(toc) == [{
 *   level: Number,
 *   title: String,
 *   slug: String,
 * }]
 * ```
 */
let tocToTree = function(toc) {
  let headlines = [];
  let last = {};

  for (let headline of Array.from(toc)) {
    let level = headline.level || (headline.level = 1);
    if (last[level - 1]) {
      var name;
      if (!last[name = level - 1].children) { last[name].children = []; }
      last[level - 1].children.push(headline);
    } else {
      headlines.push(headline);
    }
    last[level] = headline;
  }

  return headlines;
};


/*
 * ## Build File Tree Recursively
 * @param {Array} tree List of file or folder Objects
 * @param {jQuery} ul DOM node of list to append this tree to
 * @param {Object} metaInfo Project information
 * @return {jQuery} The ul element
 */
var buildFileTree = function(tree, ul, metaInfo) {
  let $ul = $(ul);
  if (tree == null) {
    console.warn('No File Tree!');
    return $ul;
  }

  $.each(tree, function(fileName, node) {
    let position;
    let $node = $(`<li class="${node.type}"/>`);
    if (node.type === 'file') {
      let currentFile = node === metaInfo.currentFile;
      $node.append(`<a class="file${currentFile ? ' selected' : ''}" href="${metaInfo.relativeRoot}${node.path}" title="${node.originalName || node.name}">${node.title || node.originalName || node.name}</a>`);
    } else { // folder
      $node.append(`<span class="folder">${node.name}</span>`);
    }

    if (node.children != null) {
      let $children = $('<ol class="children"/>');
      $node.append(buildFileTree(node.children, $children, metaInfo));
    }

    if ((node.originalName != null ? node.originalName.match(/^readme\.(md|txt|rst)/i) : undefined)) {
      position = 'prepend';
    } else {
      position = 'append';
    }
    $ul[position]($node);
  });

  return $ul;
};


/*
 * ## Build Headlines Tree Recursively
 * @param {Object} tree Tree of headlines
 * @param {jQuery} ul DOM node of list to append this tree to
 * @param {Object} metaInfo Project information
 * @return {jQuery} The ul element
 */
var buildHeadlinesTree = function(tree, ul, metaInfo) {
  ul = $(ul);
  if (!(tree != null ? tree.length : undefined)) {
    return ul;
  }

  $.each(tree, function(index, node) {
    let $node = $("<li class=\"headline\"/>");
    $node.append(`<a class="label" href="#${node.slug}">${node.title}</a>`);

    if ((node.children != null ? node.children.length : undefined) > 0) {
      let $children = $('<ol class="children"/>');
      $node.append(buildHeadlinesTree(node.children, $children, metaInfo));
    }

    ul.append($node);
  });

  return ul;
};

/*
 * ## Create Navigation Element
 * @param {Object} metaInfo Project information
 * @return {jQuery} Navigation element
 */
let createNav = function(metaInfo) {
  let $nav = $(`\
<aside id="side-menu">
  <nav id="headlines">
    <details>
      <summary>This File</summary>
      <ul class="tools">
        <li class="search">
          <input id="search-headlines" type="search" autocomplete="off" placeholder="Search"/>
        </li>
      </ul>
      <ol class="tree" id="headline-tree"></ol>
    </details>
  </nav>
  <nav id="files">
    <details open>
      <summary>Files</summary>
      <ul class="tools">
        <li class="search">
          <input id="search-files" type="search" autocomplete="off" placeholder="Search"/>
        </li>
      </ul>
      <ol class="tree" id="file-tree"></ol>
    </details>
  </nav>
</aside>\
`
  );

  return $nav;
};

/*
 * ## Add Button to Toggle Side Menu Visibility
 * @param {jQuery} $container The element the button should be prepended to
 * @param {jQuery} $nav The navigation element; class 'open' will be toggled
 * @return {jQuery} $container element
 */
let createMenuToggle = function($container, $nav) {
  let $button = $(`<button type="button" class="toggle-menu">
  Menu
</button>`
  );

  $button.on('click', function(event) {
    event.preventDefault();
    return $nav.toggleClass('open');
  });

  // $('#file-area').on 'click', (event) ->
  //   return if $(event.target).hasClass('toggle-menu')
  //   if $nav.hasClass('open')
  //     event.preventDefault()
  //     $nav.removeClass('open')
  //   return

  $container.prepend($button);

  return $container;
};

/*
 * ## Search Tree
 * @param {jQuery} $tree The tree element to be searched
 * @param {jQuery} $search The search input field
 */
let searchTree = function($tree, $search) {
  /*
  @method throttle
  @param {Function} fn Callback
  @param {Number} timeout
  */
  let throttle = (function() {
    ({timer: null});
    return function(fn, timeout=100) {
      let timer;
      if (timer) { window.clearTimeout(timer); }
      return timer = window.setTimeout((function() {
        timer = null;
        return (typeof fn === 'function' ? fn() : undefined);
      }), timeout);
    };
  })();

  /*
   * @method search
   * @param {jQuery} tree
   * @param {String} value Search query
   */
  let search = function($tree, value) {
    value = value.trim().toLowerCase();
    $tree.find('.matched').removeClass('matched');

    if (value === "") {
      console.log('stop searching');
      $tree.removeClass('searching');
      return;
    }

    $tree.addClass('searching');
    return $tree.find('a').each(function(index, item) {
      let $item = $(item);
      if (($item.text().toLowerCase().indexOf(value) > -1) || ($item.attr('href').toLowerCase().indexOf(value) > -1)) {
        $item.addClass('matched');
        // show folders above matched item
        $item.parents('li').children('.label').addClass('matched');
      }
    });
  };

  let value = null;
  $search.on('keyup search', function(event) {
    let newVal = event.target.value;
    if (newVal === value) { return; }
    if ((newVal < 2) && (newVal !== "")) { return; }
    value = newVal;
    throttle(() => search($tree, value));
  });

  // ESC
  return $search.on('keydown', function(event) {
    if (event.keyCode === 27) { // Esc
      if ($search.val().trim() === '') {
        return $search.blur();
      } else {
        return $search.val('');
      }
    }
  });
};

/*
 * ## Build Navigation
 * @param {Array} files List of Files
 * @param {Object} metaInfo Project information
 * @return {jQuery} The nav element
 */
let buildNav = function(files, metaInfo) {
  if (!files) { return $(''); }
  let $nav = createNav(metaInfo);

  // Find current file
  for (let file of Array.from(files)) {
    if (file.originalPath === metaInfo.documentPath) {
      metaInfo.currentFile = file;
      break;
    }
  }

  // Build file tree
  let fileTree = listToTree(files);
  buildFileTree(fileTree, $nav.find('#file-tree'), metaInfo);
  searchTree($nav.find('#file-tree'), $nav.find('#search-files'));

  // Build headlines tree
  if (metaInfo.currentFile) {
    let headlineTree = tocToTree(metaInfo.currentFile.toc || []);

    buildHeadlinesTree(headlineTree, $nav.find('#headline-tree'), metaInfo);
    searchTree($nav.find('#headline-tree'), $nav.find('#search-headlines'));
  }

  return $nav;
};

$(function() {
  let metaInfo = {
    relativeRoot: $('meta[name="groc-relative-root"]').attr('content'),
    githubURL:    $('meta[name="groc-github-url"]').attr('content'),
    documentPath: $('meta[name="groc-document-path"]').attr('content'),
    projectPath:  $('meta[name="groc-project-path"]').attr('content')
  };

  let $nav = buildNav(window.files, metaInfo);
  $nav.prependTo($('body'));

  createMenuToggle($('#meta'), $nav);

  window.listToTree = listToTree;
  return window.tocToTree = tocToTree;
});
