// differnts variables and types to define a variable . 4 ways below

const accountId = 14440;
let accountEmail = "ss";
var  accountPassword = "12345" ; // numberds can be written in double quote too it will get pretend as string 
accountCity ="solapur" ;   // without any variable declaration direct .

let accountState ;

// which one of this changes on update:

 // accountId = 123 ; error occurs as accountId assigned to const

 /*accountId = 123 ;
          ^

TypeError: Assignment to constant variable.*/

// let can update in scope
// var can update in everywhere globally 


accountEmail = "kv@kv.com"
accountPassword = 1222
accountCity = "pune"


// console table

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

//result :

/*@kv298 ➜ /workspaces/js-hindi-youtube (main) $ node 01_basics/01_variables.js
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'kv@kv.com' │
│ 1       │ 14440       │
│ 2       │ 1222        │
│ 3       │ 'pune'      │
│ 4       │ undefined   │
└─────────┴─────────────┘
@kv298 ➜ /workspaces/js-hindi-youtub  */