const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  return tutorials.map(function(up){
    // up = up.toLowerCase() 
    let divideString = up.split(" ")  
    let firstLetterUp = divideString.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    return firstLetterUp.join(" ")
  })
}