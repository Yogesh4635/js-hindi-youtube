const accountId = 144553
let accountEmail = "yogesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  not allowed

accountEmail = "hc@gmzil.com"
accountPassword = "212121"
accountCity = "bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
Prefer not to use var 
because of issue in block scope and functional scope
*/