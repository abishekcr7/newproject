var student={age:20}
function aged(a){
     return this.age
}
var arr=[0]
console.log(aged.call(student))
console.log(aged.apply(student,arr))

var bound = aged.bind(student,arr)

console.log(bound())