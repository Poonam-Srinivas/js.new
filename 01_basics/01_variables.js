const accountId=1233445 
//constant not allowed to change 
let accoundEmail="poonam@google.com"
var accountPassword="12345"
accountCity="Bangalore"

//accoundId=12 not allowed
accoundEmail="jeson@google.com"
accountPassword="212121"
accountCity="jaipur"
let accountState; //output will be undefined


console.log(accountId);
console.table([accoundEmail,accountPassword,accountCity,accountState]) //output will be printed in table format

/*
prefer not to use var 
bcz of issues in block scope and functional scope
*/