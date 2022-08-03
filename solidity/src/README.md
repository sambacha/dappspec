---
title: Timeless Style & Documentation
description: Solidity and Yul contract style and conformance dogma
version: 2022.08.02
---

#  Timeless Style & Documentation[^1]

> Break any of these rules sooner than say anything outright barbarous.  <br />
>                     —George Orwell, "[Politics and the English Language](https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/)"
> 


[^1]: source: [emory.edu/documents/mcenerney-problem-of-the-problem.pdf](http://www.writingcenter.emory.edu/documents/mcenerney-problem-of-the-problem.pdf)


## Motivation

> **Note**    
> 🚧 _work in progress_ 🚧

## Principles

- Don't be too clever
- Don't sacrifice clarity for efficiency
- Know your language
- Use the idioms of your language
- Every time you make a decision, do something
- Check boundary conditions
- Program defensively
- Make every comment count
- Don't comment bad code -- rewrite it


## Style Axioms

- Strings MUST be quoted with double-quotes instead of single-quotes.

- Spaces are the preferred indentation method.

### Order of Layout

Layout contract elements in the following order:

<pre>
Pragma statements
Import statements
Interfaces
Libraries
Contracts
</pre>

Inside each contract, library or interface, use the following order:

<pre>
Type declarations
State variables
Events
Functions
</pre>

### Naming Styles

To avoid confusion, the following names will be used to refer to different naming styles.

<pre>Name Styles
b (single lowercase letter)
B (single uppercase letter)
lowercase
lower_case_with_underscores
UPPERCASE
UPPER_CASE_WITH_UNDERSCORES
CapitalizedWords (or CapWords)
mixedCase (differs from CapitalizedWords by initial lowercase character!)
Capitalized_Words_With_Underscores
</pre>

## Preface

On Craftsmanship

> [Software development is all about the unknown. The production process for software is trivially easy—just copy a disk or CD. The software engineering metaphor fails because we understand production, a mechanical task, much better than we understand design, an intellectual task.](https://learning.oreilly.com/library/view/software-craftsmanship-the/0201733862/ch06.html)
>

>**Note** <br />
> We use the term `author` throughout this work, that is you, the engineer/developer. You are authoring contracts, code, etc.



## Voice and tone

> Adapted from Mcenerney's *Problem of the Problem*

*Legend*
> Reader's are Auditors, or other Engineering/Developers.    
> The Topic in question is the codebase.   
> The writing is the documentation / comments.  

Unfortunately, many conventional models of introductions fail to show value.
US schools for many years relied on a model of writing in which the function of
introductions was not to establish value. This isn’t surprising: as we’ve seen, authors do
not, in fact, need to use their writing to establish its value for their teacher/readers. The
value is established in another way: **the teachers are paid to read.**

**Instead of learning to establish value, many authors learn a different function for
introductions, a function that emphasizes creating a stable base for their work (i.e a justification).** In this
model, the chief function of the documentation as a whole is to explain, and so the function of
the introduction is to prepare the reader (auditor) to understand the material. The imaginary
situation is that the reader doesn’t know much (or anything) about the topic (the work), and so
the author’s job in the introduction is primarily to give enough background information about
a topic so that readers could move smoothly to the main ideas of the paper.

>**Note** <br />
> We almost always overestimate our readers' sense of the importance of what we think is important. Any time you decide to skip stating a motivating problem, you ought to look hard at whether or not your readers are so motivated that they will read your prose even if they perceive it to be useless to them

*Here are just three of the standard theories of introductions, note that none of them
shows directly why the text will be valuable for readers.*

![](https://d.pr/i/tukopP.jpeg)


## Examples


#### Kakoune Design specification
This is a great example of a high level design spec that is easily accessible and communicates value to the end user as to why they should care about their approach. 
> [Kakoune design specification](https://github.com/mawww/kakoune/blob/master/doc/design.asciidoc)

