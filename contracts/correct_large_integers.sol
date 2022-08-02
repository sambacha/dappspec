function _getSwapAmount(uint256 userIn, uint256 reserveIn) internal pure returns (uint256) {
        return
            (Babylonian.sqrt(reserveIn * (userIn * 3_988_000 + reserveIn * 3_988_009)) -
                reserveIn *
                1_997) / 1_994;
    }