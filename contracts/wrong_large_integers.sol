    function _getSwapAmount(uint256 userIn, uint256 reserveIn) internal pure returns (uint256) {
        return
            (Babylonian.sqrt(reserveIn * (userIn * 3988000 + reserveIn * 3988009)) -
                reserveIn *
                1997) / 1994;
}