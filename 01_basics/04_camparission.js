console.log(nul > 0 );
console.log(null == 0);
console.log(null >= 0 );

//the reason is that equality check == and comparisons > < > = <= work differntly.
// comparission convert null to a number , trending treating it as 0.
// that's why (3) n>=0 is false.