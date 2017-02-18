var votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla"
  ];

  var initialValue = {};


var reducer = function(tally, votes){
  if(!tally[votes]){
    tally[votes] = 1;
  }else{
    tally[votes] =  tally[votes] + 1;
  }
  return tally;
};

var result = votes.reduce(reducer, initialValue)

console.log(result)

