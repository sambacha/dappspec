function balance(uint256 from) public override view returns (uint256)  {
    return balanceOf[from];
}

function shutdown() onlyOwner public {
    selfdestruct(owner);
}