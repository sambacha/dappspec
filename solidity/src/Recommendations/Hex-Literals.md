---
title: Hex Literals
section: Hex Literals
category: recommendations
id: 00001
---

Recommendation: Use hex literals whenever declaring or setting a bytes type, via hex ' 01234dead5678beef ' for most clarity that it is bytes.

```solidity
bytes memory constructorData = abi.encode( target, 
    comptroller, 
    targetParams.irModel, 
    ERC20(target),
    name(), 
    ERC20(target),
    symbol(), 
    cERC20Impl, "
    0x00", // calldata sent to becomeImplementation (currently unused) L185 
    targetParams.reserveFactor, 
    adminFee,
};
```

The developer would appear to expect bytes as $0 \times 00$ to be sent along as calldata, but in fact this would send $0 \times 30783030$ as the calldata, the ASCII encoded bytes equivalent of $0 \times 00$. The prospective contract this would call out to, for now, appears to essentially ignore these bytes. However, future implementations could end up depending on it which would lead to adverse effects and issues.
