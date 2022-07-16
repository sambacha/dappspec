# Yul "Style" {

<table width="700"><thead><tr><th
>Yul Brackets</th><th
>Scoping Rules</th>
</tr></thead><tbody><tr><td valign="middle" width="400">


~~~diff


1️⃣ yes_own_line_braces.yul:1 
────────────────────────────
-   1┊    │object "test"
-   2┊    │{
-   3┊    │    code
-   4┊    │    {
+    ┊   1│object "test" {
+    ┊   2│    code {
    5┊   3│
    6┊   4│

~~~

</td><td valign="top" width="700">

- Variables cannot be referenced in the right hand side of their own variable declaration. 

- Functions can be referenced already before their declaration (if they are visible).[^1]
 [^1]: [Scoping rules, Solidity Documentation](https://docs.soliditylang.org/en/v0.8.15/yul.html#scoping-rules)

</td></tr></tbody></table>





<table width="700"><thead><tr><th
>Yul Brackets</th><th
>Semantic Diff</th>
</tr></thead><tbody><tr><td valign="middle" width="400">

~~~markdown
```diff
-   1┊    │object "test"
-   2┊    │{
-   3┊    │    code
-   4┊    │    {
+    ┊   1│object "test" {
+    ┊   2│    code {
```
~~~

</td><td valign="top" width="700">

<img width="700" src="https://d.pr/i/lfwDs1.jpeg" alt="Figure 1: Brackets on own line" />

</td></tr></tbody></table>



## Yul Object

```ebnf

Object = 'object' StringLiteral '{' Code ( Object | Data )* '}'
Code = 'code' Block
Data = 'data' StringLiteral ( HexLiteral | StringLiteral )
HexLiteral = 'hex' ('"' ([0-9a-fA-F]{2})* '"' | '\'' ([0-9a-fA-F]{2})* '\'')
StringLiteral = '"' ([^"\r\n\\] | '\\' .)* '"'

```

# {
