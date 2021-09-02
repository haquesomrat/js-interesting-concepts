/*
falsy;
false
0
empty string
undefined
null
NaN

------------------------------------------------------------------------------------------

truthy:
true
any number(positive or negative)
any string including single white space , '0', 'false'
empty array like []
empty object like {}
anything else that is not falsy will be truthy
*/
const x = false;
if (x) {
    console.log('variable is truth');
}
else {
    console.log('variable is false');
}