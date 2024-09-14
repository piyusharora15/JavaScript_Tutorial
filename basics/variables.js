const accountId= 153274
let accountEmail = "piyush@google.com"
var accountPassword = "12345"
accountCity = "Amritsar"
let accountState;  // no value assigned to variable, so it prints "undefined" in the console

 //accountId = 2  //assignment to constant variable not allowed

accountEmail = "pa@google.com"
accountPassword = "41790"
accountCity = "Mumbai"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])