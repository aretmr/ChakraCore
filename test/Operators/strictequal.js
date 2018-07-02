//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(v) { WScript.Echo(v + ""); }

function foo() {}


var all = [ undefined, null, '', '0','1','helo', 'wor ld',
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number(-0), new Number(0), new Number(1),
            new Number(10), new Number(10.0), new Number(10.1), new Number(-1), 
            new Number(-10), new Number(-10.0), new Number(-10.1),
            new Number(Number.MAX_VALUE), new Number(Number.MIN_VALUE), new Number(Number.NaN), 
            new Number(Number.POSITIVE_INFINITY), new Number(Number.NEGATIVE_INFINITY),
             NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,'', '0','1','helo', 'wor ld',
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, NaN, +0, -0, 0, 1, 10, 10.0, 10.1, -1, -10, -10.0, -10.1,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
            
          ];
          
var start = new Date().getTime();
var n=0;
for (var i=0; i<all.length; ++i) {
    for (var j=0; j<all.length; ++j) {
        if(all[i] === all[j])
        {
            ++n;
        }
        else{
            --n;
        }
    }
}

for (var i=all.length; i>=0; --i) {
    for (var j=all.length; j>=0; --j) {
        if(all[i] === all[j])
        {
            ++n;
        }
        else{
            --n;
        }
    }
}

var end = new Date().getTime();
var time = end - start;
print("Time ("+n+") : " + time);