// closures

function init(){
    var str ="Arbaz";
    function displayName(){
        console.log(str)
    }
    displayName()
}
init()


// HOF

// map
let arr=[1,2,3,4,5,6];
const double=arr.map((ele)=>{
    return ele*2
})
console.log(double)

// reduce
let arr2=[1,2,3,4,5,6];
const sum=arr.reduce((acc,curr)=>{
    return acc+curr
})
console.log(sum)

// filter


// foreach

let arr4=[1,2,3,4,5,6];
arr4.forEach((ele)=>{
    console.log(ele*3)
})

// call
function test(arg1,arg2){
    console.log(this.num,arg1,arg2)
}
test.call({num:100},10,20)

// apply
function test(...args){
    console.log(this.num,args)
}
test.apply({num:100},[1,2,3])

// bind
function test(arggs){
    console.log(this.number,arggs)
}
let bindedfn=test.bind({number:99},"arggs");
bindedfn()