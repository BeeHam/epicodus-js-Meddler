var findReplace = function(aString, unwanted, wanted) {
  var newUnwanted = new RegExp(unwanted, 'g');
  var newString = aString.replace(newUnwanted, wanted);
  return newString;
}
