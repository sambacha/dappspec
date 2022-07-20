# Prettier Configurations


### Word Wrap[^1]

```diff
-            ),"Err.minRate" );
-        if (
-            swap.redirectAddress != msg.sender &&
-            swap.redirectAddress != address(0x0)
-        ) {
+            ),
+            "Err.minRate"
+        );
+        if (swap.redirectAddress != msg.sender && swap.redirectAddress != address(0x0)) {
+  
```

[^1]: Prettier: word wrap: 100
