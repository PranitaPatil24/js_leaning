const accountID = 1444
let accountEmail = "hitesh@gmail.com"
var accountPasswoerd = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 2
//we cant change const variables
console.log(accountID);

accountEmail = "pnpn@.com"
accountPasswoerd = "3434"
accountCity = "Pune"

/* Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountID, accountEmail, accountPasswoerd, accountCity])

console.log(accountState)

