var findReplace = function(aString, unwanted, wanted) {
  var newUnwanted = new RegExp(unwanted, 'g');
  var newString = aString.replace(newUnwanted, wanted);
  return newString;
}

$(document).ready(function() {
  $("form.meddler").submit(function(event) {
    var aString = $("input#string").val();
    var unwanted = $("input#word").val();
    var wanted = $("input#replacement").val();

    $("#result").text(findReplace(aString, unwanted, wanted));

    event.preventDefault();
  });
});
