// below we are mapping array

var data = [1, 2, 3]

var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);
  return acc
},[])

// console.log("doubled", doubled)

//  Javascript has a native function that does this

var doubledMapped = data.map(function(item){
  return item * 2;
})

// console.log("doubledMapped", doubledMapped)


// So want to reduce array to array that has some of the value of the first array

var data2 = [1, 2, 3, 4, 5, 6];

var evens = data2.reduce(function(acc, value){
    if(value % 2 === 0){
      acc.push(value)
    }
    return acc
}, []);
// so whats going on above - we are filtering evens - name of function is filter

// console.log("evens", evens);


// So like Mapping above javascript has a native way of filtering 

var evenFiltered = data2.filter(function(item){
  return(item % 2 === 0)
})


// filter and map together the short way 

var filterMapped = data2.filter(function(value){
  return value % 2 === 0
}).map(function(value){
  return value * 2;
});


console.log(filterMapped)


// However although the above is is good way of reducing arrays - you will evidentually come across issue when the dataset is larger.


var bigData = []

for(var i = 0; i < 1000000; i++){
  bigData[i] = i;
}
console.time("bigData") 
var filterMappedBigData = bigData.filter(function(value){
  return value % 2 === 0
}).map(function(value){
  return value * 2;
});

// this is some cool shit - lets see how long it takes us to 
console.timeEnd("bigData") 

// but if you just reduced and have and if statement instaed of the 
console.time("bigDataReduced");
var reducedBigData = bigData.reduce(function(acc, value){
  if(value % 2 === 0){
    acc.push(value * 2);
  }
  return acc
}, [])

console.timeEnd("bigDataReduced") 

