
## Order of Operations


```console
pure internal returns  ⟶ internal pure returns
```

````shell
─────────────────────────────────────┐
Δ correct-order-of-operations.sol:1: │
─────────────────────────────────────┘

    0┊    ╭─[1:1]
-   1┊╰─▶ │function uint256At(bytes memory data, uint256 location) pure internal returns (uint256 result) {
           ──────────────────────────────────────────────────────────┬
                                                                 ·   ╰── ✘                         
+    ┊╰─▶ │function uint256At(bytes memory data, uint256 location) internal pure returns (uint256 result) {
    2┊    │╰───────────────────────────────────────────────────────────┬
                                                                   ·   ╰─ ✔︎   
````                                                                   
```diff                                                                   
- external override view returns (uint _nativeFee, uint _zroFee){
+ external view override returns (uint256 _nativeFee, uint256 _zroFee) {
````

```diff                                                                   
- external override view returns //
+ external view override returns //
````

```diff
  ╭─[issue:1:1]
- │ external override view returns
! │ external view override returns
   ·           ▲
   ·           ╰── Changes start here
   ╰────
```

```diff
-    function uint256At(bytes memory data, uint256 location) pure internal returns (uint256 result) {
+    function uint256At(bytes memory data, uint256 location) internal pure returns (uint256 result) {
```


~~~~diff
-    ) external override view returns (uint _nativeFee, uint _zroFee){
+    ) external view override returns (uint256 _nativeFee, uint256 _zroFee) {
~~~~



![](https://d.pr/i/xcbA77.jpeg)
