function translate(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let input = "";
  let strArray = str.split(" ");
  let pigLatin = [];
 
  for(let word of strArray){
    
 
}
  if (vowels.indexOf(str[0]) > -1) {
    input = str + "way";
    return input.toLowerCase();
  } else {
    let word = str.match(/[aeiou]/g) || 0;
    let vowel = str.indexOf(word[0]);
    input = str.substring(vowel) + str.substring(0, vowel) + "ay";
    return input.toLowerCase();
  }
}

console.log(translate("Gorilla help"));
module.exports = { translate };
