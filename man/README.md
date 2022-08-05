# man-style

Some think UNIX manual pages are a poor and outdated form of documentation. I disagree:

Manpages follow a well defined structure that's immediately familiar. This gives developers a starting point when documenting new tools, libraries, and formats.

Manpages get to the point. Because they're written in an inverted style, with a SYNOPSIS section followed by additional detail, prose and references to other sources of information, manpages provide the best of both cheat sheet and reference style documentation.

Historically, manpages use an extremely -- unbelievably -- limited set of text formatting capabilities. You get a couple of headings, lists, bold, underline and no more. This is a feature.

Although two levels of section hierarchy are technically supported, most manpages use only a single level. Unwieldy document hierarchies complicate otherwise good documentation. Remember that Feynman covered all of physics -- heavenly bodies through QED -- with only two levels of document hierarchy (The Feynman Lectures on Physics, 1970).

The classical terminal manpage display is typographically well thought out. Big bold section headings, justified monospace text, nicely indented paragraphs, intelligently aligned definition lists, and an informational header and footer.

Manpages have a simple referencing syntax; e.g., sh(1), fork(2), markdown(7). HTML versions can use this to generate links between pages.
