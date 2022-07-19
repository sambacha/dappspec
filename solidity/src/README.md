# Style Guides

## Writing Style

     
Every ` , ` comma should be followed by a space or a line break.     
Each   ` ; ` semicolon at the end of a statement should be followed with a line break.          
Each   ` ; ` semicolon in the control part of a for statement should be followed with a space.     
 
### Comments

Be generous with comments. It is useful to leave information that will be read at a later time by people (possibly your future self) who will need to understand what you have done and why. The comments should be well-written and clear, just like the code they are annotating. An occasional nugget of humor might be appreciated. Frustrations and resentments will not.

It is important that comments be kept up-to-date. Erroneous comments can make programs even harder to read and understand.

Make comments meaningful. Focus on what is not immediately visible. Don't waste the reader's time with stuff like

```javascript
    // Set i to zero.

    i = 0;
```



## Shell

```console

root:~ (master) $ cmd run
    Finished dev [unoptimized + debuginfo] target(s) in 0.06s
     Running `target/debug/rust-bin`
error getting string?? "foo/bar/string"
```

<pre>
```console

root:~ (master) $ cmd run
    Finished dev [unoptimized + debuginfo] target(s) in 0.06s
     Running `target/debug/rust-bin`
error getting string?? "foo/bar/string"
```
</pre>


## Anchors

```
#:~:text=This%20action%20uses%20Size%20Limit,the%20cost%20exceeds%20the%20limit.

```

### Grammar Scopes

[see https://github.com/Alhadis/language-etc/tree/master/samples](https://github.com/Alhadis/language-etc/tree/master/samples)

```nanorc

     PRIMER PREVIEW - How grammar scopes look on GitHub:
                Last updated:  2021-02-18

│ TEXTMATE SCOPE NAME(S)                CSS CLASS     COLOUR   │
│ brackethighlighter.angle              pl-ba       ░▒▓███████ │
│ brackethighlighter.curly              pl-ba       ░▒▓███████ │
│ brackethighlighter.quote              pl-ba       ░▒▓███████ │
│ brackethighlighter.round              pl-ba       ░▒▓███████ │
│ brackethighlighter.square             pl-ba       ░▒▓███████ │
│ brackethighlighter.tag                pl-ba       ░▒▓███████ │
│ brackethighlighter.unmatched          pl-bu       ░▒▓███████ │
│ carriage-return                       pl-c2       ░▒▓███████ │
│ comment                               pl-c        ░▒▓███████ │
│ constant                              pl-c1       ░▒▓███████ │
│ constant.character.escape             pl-cce      ░▒▓███████ │
│ constant.other.reference.link         pl-corl     ░▒▓███████ │
│ entity                                pl-e        ░▒▓███████ │
│ entity.name                           pl-en       ░▒▓███████ │
│ entity.name.constant                  pl-c1       ░▒▓███████ │
│ entity.name.tag                       pl-ent      ░▒▓███████ │
│ invalid.broken                        pl-bu       ░▒▓███████ │
│ invalid.deprecated                    pl-bu       ░▒▓███████ │
│ invalid.illegal                       pl-ii       ░▒▓███████ │
│ invalid.unimplemented                 pl-bu       ░▒▓███████ │
│ keyword                               pl-k        ░▒▓███████ │
│ keyword.operator.symbole              pl-kos      ░▒▓███████ │
│ keyword.other.mark                    pl-kos      ░▒▓███████ │
│ markup.bold                           pl-mb       ░▒▓███████ │
│ markup.changed                        pl-mc       ░▒▓███████ │
│ markup.deleted                        pl-md       ░▒▓███████ │
│ markup.heading                        pl-mh       ░▒▓███████ │
│ markup.ignored                        pl-mi2      ░▒▓███████ │
│ markup.inserted                       pl-mi1      ░▒▓███████ │
│ markup.italic                         pl-mi       ░▒▓███████ │
│ markup.list                           pl-ml       ░▒▓███████ │
│ markup.quote                          pl-ent      ░▒▓███████ │
│ markup.raw                            pl-c1       ░▒▓███████ │
│ markup.untracked                      pl-mi2      ░▒▓███████ │
│ message.error                         pl-bu       ░▒▓███████ │
│ meta.diff.header                      pl-c1       ░▒▓███████ │
│ meta.diff.header.from-file            pl-md       ░▒▓███████ │
│ meta.diff.header.to-file              pl-mi1      ░▒▓███████ │
│ meta.diff.range                       pl-mdr      ░▒▓███████ │
│ meta.module-reference                 pl-c1       ░▒▓███████ │
│ meta.output                           pl-c1       ░▒▓███████ │
│ meta.property-name                    pl-c1       ░▒▓███████ │
│ meta.separator                        pl-ms       ░▒▓███████ │
│ punctuation.definition.changed        pl-mc       ░▒▓███████ │
│ punctuation.definition.comment        pl-c        ░▒▓███████ │
│ punctuation.definition.deleted        pl-md       ░▒▓███████ │
│ punctuation.definition.inserted       pl-mi1      ░▒▓███████ │
│ punctuation.definition.string         pl-pds      ░▒▓███████ │
│ punctuation.section.embedded          pl-pse      ░▒▓███████ │
│ source                                pl-s1       ░▒▓███████ │
│ source.regexp                         pl-pds      ░▒▓███████ │
│ source.ruby.embedded                  pl-sre      ░▒▓███████ │
│ storage                               pl-k        ░▒▓███████ │
│ storage.modifier.import               pl-smi      ░▒▓███████ │
│ storage.modifier.package              pl-smi      ░▒▓███████ │
│ storage.type                          pl-k        ░▒▓███████ │
│ storage.type.java                     pl-smi      ░▒▓███████ │
│ string                                pl-s        ░▒▓███████ │
│ string.comment                        pl-c        ░▒▓███████ │
│ string.other.link                     pl-corl     ░▒▓███████ │
│ string.regexp                         pl-sr       ░▒▓███████ │
│ string.regexp.arbitrary-repitition    pl-sra      ░▒▓███████ │
│ string.regexp.character-class         pl-pds      ░▒▓███████ │
│ string.unquoted.import.ada            pl-kos      ░▒▓███████ │
│ sublimelinter.gutter-mark             pl-sg       ░▒▓███████ │
│ sublimelinter.mark.error              pl-bu       ░▒▓███████ │
│ sublimelinter.mark.warning            pl-smw      ░▒▓███████ │
│ support                               pl-c1       ░▒▓███████ │
│ support.constant                      pl-c1       ░▒▓███████ │
│ support.variable                      pl-c1       ░▒▓███████ │
│ variable                              pl-v        ░▒▓███████ │
│ variable.language                     pl-c1       ░▒▓███████ │
│ variable.other                        pl-smi      ░▒▓███████ │
│ variable.other.constant               pl-c1       ░▒▓███████ │
│ variable.parameter.function           pl-smi      ░▒▓███████ │
│                                                              │

# vim: set ts=40:
# Local Variables:
# tab-width: 40
# End:
