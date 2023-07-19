---
title:
abstract: 
version: 2023.07.19
tags: ['rules', 'natspec', 'style']
---
# Style Guide Ruleset for LanguageTool Rule Engine

[Language Tool Rule Index](https://community.languagetool.org/rule/list?lang=en)

**There are over 6,036 english rules available for LanguageTool.**

These are the errors that LanguageTool can detect that are relevant. 

---

> **Note**
> Visit the [LanguageTool homepage](https://languagetool.org/) to use it online or download it for free.

>**Warning**
> By default LanguageTool will check your text by sending it to: <br />
> https://languagetool.org over a securely encrypted connection. <br />
> **You have the option of running the server locally.**[^1]

---

## Rule selection and usage

These rules are handpicked to be relevant for accuracy and consistancy in numerical, accounting, and financial usage.

## Rules not currently within Language Tool

### Usage of Ergative' verbs

In English these can be used both transitively and intransitively, i.e. intransitive verbs become causatives when used transitively.

- sell
- unload
- upload
- unzip
- deactivate

Ensure understanding and correct usage.

## Rules

### Example: Accrue

[ACCRUE](https://community.languagetool.org/rule/show/ACCRUE?lang=en&subId=1)

### Principles behind some of the selected rules

- [Commas in Dates](https://languagetool.org/insights/post/date-formats/#commas-in-dates)

- [Ratios and Meaningfulness in Measurements](https://www.rasch.org/rmt/rmt214e.htm)

[TWICE_AS_COLD](https://www.rasch.org/rmt/rmt214e.htm)


- [Count and non-count nouns](https://staff.washington.edu/marynell/grammar/noncount.html). 
Quantifiers before non-count nouns.    
Determiners for countable.     

**Count**:
a time, times (a specific occurrence or period)     
**Non-count**:     
time (an abstract idea)    


## Must Include
```
PLAIN_ENGLISH
ACCRUE [1]
DATE_FUTURE_VERB_PAST
TWELFTH_OF_NEVER
COMMA_PERIOD_CONFUSION
CURRENCY
CURRENCY_SPACE
SPURIOUS_APOSTROPHE
```

## Code Documentation must include
```
ACCURATE
NEGATE_MEANING
WITH_THE_EXCEPTION_OF
ACCOUNTS_FOR
DIVIDE_IN_INTO
```


## Semantics and Word Choice
```
AT_ALL_TIMES [1]
IN_THE_EVENT [1]
MAKE_AN_ATTEMPT [1]
FROM_X_Y
SI_UNITS_OF_MEASURMENT_ADJECTIVES_PLURAL [1]
COMMA_PERIOD_CONFUSION [3]
UNIT_SPACE
BIT_HYPHEN
ORDINAL_NUMBER_SUFFIX
TWICE_AS_COLD [1](https://www.rasch.org/rmt/rmt214e.htm)
INVALID_DATE
COMMA_PERIOD_CONFUSION
CD_TH
HYPOTHESIS_TYPOGRAPHY
ARROWS
MULTIPLICATION_SIGN
PLUS_MINUS
WHEN_WHERE
```


## Grammar
```
DT_NNS_AGREEMENT [1]
DT_NNS_AGREEMENT [2]
SHORT_SUPERLATIVES
ONE_YEARS_OLD [1]
ADVERB_WORD_ORDER_10_TEMP
FEWER_UNCOUNTABLE [1]
MANY_FEW_UNCOUNTABLE [2]
GOOD_IN_AT
```


## Documentation Rules Must Include
```
DATE_FUTURE_VERB_PAST
TWELFTH_OF_NEVER
COMMA_PERIOD_CONFUSION
CURRENCY
CURRENCY_SPACE
SPURIOUS_APOSTROPHE
CAPITALIZATION_NNP_DERIVED
FEWER_LESS [2]
A_UNCOUNTABLE [4]
DETERMINER_GEOGRAPHICAL_WORD
ACCURATE
NEGATE_MEANING
PREPOSITION_VERB
AGREEMENT_SENT_START
```

## Documentation Optional
```
WILL_ALLOW
PREPOSITION_VERB [22]
A_UNCOUNTABLE [4]
ADMIT_ENJOY_VB
HE_VERB_AGR
E_PRIME_STRICT
TOO_OFTEN_USED_ADJECTIVE_EN
EXCEPTION_OF_TO [1]
TAKING_INTO_CONSIDERATION
TWELFTH_OF_NEVER
DATE_FUTURE_VERB_PAST
INVALID_DATE
DATE_WEEKDAY_WITHOUT_YEAR
```
## Coherance
```
A_RB_NN
DETERMINER_GEOGRAPHICAL_WORD
COMPOSE_FROM_OF
```


## Optional 
```
FOUR_NN
PROFANITY
PROFANITY_TYPOS
```
## Unsure (WORK IN PROGRESS?)
```
METRIC_UNITS_EN_IMPERIAL
DATE_WORD_ORDER_4
DATE_IN_WORD_DAY
IN_THE_EVENT
```

## Obsidian Usage

![](https://d.pr/i/Qy8q2h.jpeg)

If you are worried about the privacy of your notes you should selfhost languagetool, whether it be locally on your pc or on a [server
Docker Image](https://hub.docker.com/r/erikvl87/languagetool)

[https://github.com/vrtmrz/obsidian-livesync](https://github.com/vrtmrz/obsidian-livesync)

[^1]: I explicitly mention this because there is a risk, as with any service that does this sort of service, that private key may be transmitted to their endpoint. However I have not looked into their codebase because, I run it locally or only using Obsidian for which they have an integration for specifically. 
