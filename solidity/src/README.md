#  Timeless Documentation[^1]

> Break any of these rules sooner than say anything outright barbarous.  <br />
>                     —George Orwell, "[Politics and the English Language](https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/)"
> 


[^1]: source: [emory.edu/documents/mcenerney-problem-of-the-problem.pdf](http://www.writingcenter.emory.edu/documents/mcenerney-problem-of-the-problem.pdf)



## Overview

- Don't be too clever
- Don't sacrifice clarity for efficiency
- Know your language
- Use the idioms of your language
- Every time you make a decision, do something
- Check boundary conditions
- Program defensively
- Make every comment count
- Don't comment bad code -- rewrite it

## Preface

On Craftsmanship

> [Software development is all about the unknown. The production process for software is trivially easy—just copy a disk or CD. The software engineering metaphor fails because we understand production, a mechanical task, much better than we understand design, an intellectual task.](https://learning.oreilly.com/library/view/software-craftsmanship-the/0201733862/ch06.html)
>

>**Note** <br />
> We use the term `author` throughout this work, that is you, the engineer/developer. You are authoring contracts, code, etc.



## Voice and tone

Unfortunately, many conventional models of introductions fail to show value.
US schools for many years relied on a model of writing in which the function of
introductions was not to establish value. This isn’t surprising: as we’ve seen, authors do
not, in fact, need to use their writing to establish its value for their teacher/readers. The
value is established in another way: **the teachers are paid to read.**

**Instead of learning to establish value, many authors learn a different function for
introductions, a function that emphasizes creating a stable base for the essay.** In this
model, the chief function of the writing as a whole is to explain, and so the function of
the introduction is to prepare the reader to understand the material. The imaginary
situation is that the reader doesn’t know much (or anything) about the topic, and so
the writer’s job in the introduction is primarily to give enough background information about
a topic so that readers could move smoothly to the main ideas of the paper.

>**Note** <br />
> We almost always overestimate our readers' sense of the importance of what we think is important. Any time you decide to skip stating a motivating problem, you ought to look hard at whether or not your readers are so motivated that they will read your prose even if they perceive it to be useless to them

*Here are just three of the standard theories of introductions, note that none of them
shows directly why the text will be valuable for readers.*

![](https://d.pr/i/tukopP.jpeg)



## Authoring Style

     
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
