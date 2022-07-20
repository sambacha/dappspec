# Notes

#### other formats

```javascript
     /**
     * NOTE:xref:learn::upgrading-smart-contracts.adoc[smart contract upgrade].
     */
     
```
    
```solidity
    /**
    * @custom:oz-upgrades-unsafe-allow state-variable-immutable
    */
```
    
#### modline
    
```shell
# -*- nginx -*-
```
<br />
    
```shell
# .gitattributes
conf.d linguist-language=Nginx
```

> ```nginx
> # -*- nginx -*-
> server {
> 	listen 8002;
> 	server_name homepage;
> 	root /home/ollien.com/www/;
> 	charset utf-8;
> 
> 	location / {}
> 
> 	location /index.html {}
> 
> 	location /static {
> 		autoindex off;
> 	}
> }
> ``



### Sidenotes

```
<link rel="stylesheet" href="https://unpkg.com/latex.css/style.min.css" />
```

Sidenotes can be used as an alternative to footnotes, where the user does not have to jump to the bottom of the page to read it. On mobile, click the superscript to reveal the noteYay, sidenotes!. If you are on mobile, I will appear inline. If you are using a larger screen, the sidenote will appear to the right of the text..

Sidenotes do need a little bit of setup, they are made up of a label, an invisible checkbox on top of the number and a span with the text inside. The superscript is set automatically and incremented using CSS when the checkbox has a class of sidenote-number.

```html
<label for="sn-1" class="sidenote-toggle sidenote-number"></label>
<input type="checkbox" id="sn-1" class="sidenote-toggle" />
<span class="sidenote"><!-- sidenote content --></span>
```
If you do not need superscripted numbers, you can opt out of the sidenote-number class and the sidenote will not have a number assigned. On a smaller screen, you will need to add a symbol inside the label for the user to click on.This is a sidenote without a number.

The snippet for a sidenote without a number is very similar:
```html
<label for="sn-anything" class="sidenote-toggle">⊕</label>
<input type="checkbox" id="sn-anything" class="sidenote-toggle" />
<span class="sidenote"><!-- sidenote content --></span>
```

Add a class of left to the span with the sidenote class to make the note appear on the left side of the page on instead of right.

The symbol you could use to indicate a sidenote is up to you. What about this notebook.A notebook indicating a note. Aha.
(if on a large screen, resize to mobile to see the emoji)



## Anchors

Support for modline anchors:

`#:~:text=`

```
#:~:text=A%20NatSpec%20Comment.
```

[see web.dev/text-fragments/](https://web.dev/text-fragments/)
[see github.com/GoogleChromeLabs/link-to-text-fragment](https://github.com/GoogleChromeLabs/link-to-text-fragment)



## Use GNU-style names with a stem and major.minor.patch numbering.

It's helpful to everybody if your archive files all have GNU-like names — all-lower-case alphanumeric stem prefix, followed by a dash, followed by a version number, extension, and other suffixes.

> Please _don't_ use names like \`foobar-ELF-1.2.3.tar.gz', because programs have a hard time telling type infixes (like \`-ELF') from the stem.

A good general form of the name has these parts in order:

1.  project prefix
    
2.  dash
    
3.  version number
    
4.  dot
    
5.  "src" or "bin" (optional)
    
6.  dot or dash (dot preferred)
    
7.  binary type and options (optional)
    
8.  archiving and compression extensions

```
foobar-1.2.3.tar.gz
```

```
foobar-1.2.3.bin.solc.0.8.15.tar.gz
```

```
foobar-1.2.3.ethereum.solc.0.8.15.tar.gz
```

```
foobar-1.2.3.ethereum.solc.0.8.15.tar.gz
```

