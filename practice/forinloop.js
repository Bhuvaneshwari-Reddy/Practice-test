// const arr = ['a', 'b', 'c', 'd'];
// for (const index in arr) {
//   console.log(arr[index])
// } // Result: a, b, c, d
// const person = {fname:"John", lname:"Doe", age:25};
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
//   console.log(person[x])
// }


// let marks = 
// {
//     english : 50,
//     hindi : 57,
//     Marathi : 89
    

// }
// for (const m in marks) {
    
//     console.log(m+" "+ marks[m])

// }

let marks=
{
english:50,
science:80,
maths:70,
grades:{
gradeA:80,
gradeB:60,
gradeC:40
}
}

console.log(marks)
for(const p in marks.grades){

  console.log(marks.grades[p])
}