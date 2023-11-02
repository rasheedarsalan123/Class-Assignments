// // let array=["cat","Dog","Tiger"];

// // array.push("Birds")
// // console.log(array);

// // let array=["cat","Dog","Tiger"];
// // array.shift(1)
// // console.log(array);

// // let array=[1,3,5,6,8,9,10,2,4];
// // let newarry=array.sort(function(a,b){
// //     if(a>b){return 1;}
// //     else{return-1}
// // })
// // console.log(newarry);

// // let array=[1,3,5,6,8,9,10,2,4];
// // let newarray=array.filter(function(val){return val %2==0;})
// // console.log(newarray);

// //pdf Array//
// let Array= [ 'orange', 'banana', 'grapes' ];
// Array.push("apple");
// console.log(Array)

// let Array= [ 'lion', 'tiger', 'elephant', 'giraffe' ];
// Array.pop();
// console.log(Array)

// let Array= [ 'apple', 'banana', 'grapes' ];
// Array.unshift("cherry");
// console.log(Array)

// let Array= [ 'red', 'blue', 'green', 'yellow' ];
// Array.shift("");
// console.log(Array)

// let newarray= [ 'apple', 'banana', 'grapes', 'cherry' ]
// newarray.splice(2,1,"peach");
// console.log(newarray)

// let array= [ 'daisy', 'lily' ];
// array.splice(2,0,"rose","tulip")
// console.log(array);

// let array= [ 'Alice', 'Bob', 'Charlie', 'David' ];
// array.splice(1,2)
// console.log(array);

// let array= [ 'apple', 'banana', 'grapes' ];

// array.forEach(array=>{
// console.log("fresh",array)
// });

// let array=[ 'spring', 'autumn' ];
// array.unshift('summer', 'winter');
// console.log(array);

let array= [ 2, 4, 6, 8 ];

let newarray=array.forEach(array=>{
    console.log(array,"befor chang");
})
array.splice(0,4,4,8,12,16)
console.log(newarray)

console.log(array)




