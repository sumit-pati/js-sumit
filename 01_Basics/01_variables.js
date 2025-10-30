const accountId = 144553
let accountEmail = "sumit@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;

//accountId = 2 // not allowed

accountEmail = "sp@sp.com"
accountPassword = "12332145"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);