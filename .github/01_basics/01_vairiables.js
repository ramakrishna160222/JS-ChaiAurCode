const accountId = 144553
let accountEmail = "srkvissamsetti@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //not allowed
accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bangalore"
let accountState;

console.log(accountId);

/*
    Prefere not to use var
    because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
