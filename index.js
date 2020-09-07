function saturdayFun(activity="roller-skate") {
  return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity="go to the office") {
  return(`This Monday, I will ${activity}.`)
}

function wrapAdjective(flair="*") {
  return function(para="special") {
    return(`You are ${flair}${para}${flair}!`)
  }
}

const Calculator = {
  add: function(a,b){
    a + b
  },
  subtract: function(a,b){
    a - b
  },
  multiply: function(a,b){
    a * b
  },
  divide: function(a,b){
    a / b
  }
}