function balance(uint256 from) public view override returns (uint256)  {
    return balanceOf[from];
}

function shutdown() public onlyOwner {
    selfdestruct(owner);
}