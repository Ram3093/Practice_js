// string topics
let name="Ram kumar";
// Non destructive methods
console.log(name.toUpperCase());
console.log(name.toLowerCase());
let lastName=name.slice(1,5);
console.log(lastName);
console.log(name.substr(2,4));
console.log(name.replace("a","-"));
console.log(name.includes("r"));

//destructive methods 
let names=["ram","vishal","ashu"];
//return last element of array
console.log(names.pop());
//return last index of array
console.log(names.push("sahil"))
//last index of array without push 
console.log(names.push())
console.log(names)


console.log(names.join([1]));
console.log(names.concat([1,2,4]))