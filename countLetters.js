//input: Str
//Str: no spaces, loweercase
//define object: Letters
//for char in Str:
//if !Letters[letter] true
//Letters[letter] = 1;
//else Letters[letter] += 1;
//return


var countLetters = function(str){
  var strs = str.toLowerCase().split('');
  var letters = {};
  for (let char of strs){
    if (!letters[char]) {
      letters[char] = 1;
    } else {
      letters[char] += 1;
    }
  }
  return letters;
};

console.log(countLetters('lighthouse in the house'));