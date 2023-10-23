
let number = 4
let star = "*"
let space = ""
for(let i = 0 ; i < number ; i++){
    for(let j = 0 ; j < number - i ; j++){
       space += star  
    }
    space += "<br />"
}
document.write(space);