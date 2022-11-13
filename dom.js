// var items=document.getElementsByClassName("list-group-item")
// console.log(items)
// items[2].style.backgroundColor='Green'
// for (let i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold" 
// }


var items=document.querySelectorAll(".list-group-item")
console.log(items)
items[1].style.color="Green"

var odds=document.querySelectorAll('.list-group-item:nth-child(odd)')
console.log(odds)
for (var i=0;i<=odds.length ; i++){
    odds[i].style.backgroundColor='Green'
}
