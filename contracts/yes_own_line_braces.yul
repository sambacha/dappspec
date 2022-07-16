object "test" {
    code {
        
        // This assumes each limb is 256-bit and the half of the second limb is not dirty.
        function add_with_carry_384_orig(x1, x2, y1, y2) - > out1, out2, carry {
            // limb 1
            out1: = add(x1, y1)
            carry: = lt(out1, x1)
            
            // limb 2
            x2: = add(x2, carry)
            carry: = lt(x2, carry)
            out2: = add(x2, y2)
            carry: = or(carry, lt(out2, x2))
        }
        
        // This assumes each limb is 256-bit and the half of the second limb is not dirty.
        function add_with_carry_384(x1, x2, y1, y2) - > out1, out2, carry {
            // limb 1
            out1: = add(x1, y1)
            let carry1: = lt(out1, x1)
            
            // limb 2
            let t: = add(x2, y2)
            let carry2: = lt(t, x2)
            
            out2: = add(t, carry1)
            carry: = lt(out2, t)
            
            carry: = or(carry2, carry)
        }
        
        let x1: = calldataload(0)
        let x2: = calldataload(32)
        let y1: = calldataload(64)
        let y2: = calldataload(96)
        
        let a: = 0
        let b: = 0
        let c: = 0
        a, b, c: = add_with_carry_384_orig(x1, x2, y1, y2)
        
        mstore(0, a)
        mstore(32, b)
        mstore(64, c)
        
        // orig: 600035604035810181811080602035019250606035830182600052806020528381108285101760405250505050
        // new:  6000356020356040358201606035820183821081018260005280602052818110848310176040525050505050
        
    }
}
