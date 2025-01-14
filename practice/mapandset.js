//set is a collection of values,all values will be unique,no index value,no repaeated values

//set
let nums=new Set()
nums.add(3)
nums.add(4)
nums.add(3)


nums.forEach(value=>{
    console.log(value)
})


//map=>key and value pairs

let map=new Map()
map.set("bhuvi","java")
map.set("bhuvi1","java1")
map.set("bhuvi2","java3")
map.set("bhuvi2","java3")

console.log(map.values())
console.log(map.keys())
console.log(map.has("bhuvi"))

for(let[k,v]of map){
    console.log(k," :" ,v);
}

map.forEach((v,k)=>{
    console.log(k ," :" ,v)
})



