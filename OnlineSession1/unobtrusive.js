$(document).ready(function() {
  $("#one").submit(function(event) {
    return submitMe(this);
  });
  $("#two").submit(function(event) {
    submitMe(this);
  });
  $("#zipText").keyup(function() {
    testValid(this);
  });
  $("#passwordText").keyup(function() {
      testStrength(this);
  });
});

function submitMe(form) {
  if (parseInt(form.box.value) % 2 == 0) {
    return true;
  } else {
    alert("Not an even numner");
    return false;
  }
}

//----------------------------------
// testStrength displays that the input password is strong if (a) it has at least
// 8-char long, (2) it has at least a digit. Otherwise, display password is weak.
//----------------------------------
function testStrength(passwordElement) {
  var containsDigit = false;
  var passTxt = passwordElement.value;
  var mdiv = document.getElementById("passwordMessage");
  for (i = 0; i < passTxt.length; i++)
    if (isDigit(passTxt.charAt(i))) containsDigit = true;
  if (
    passTxt.length >= 8 && //
    containsDigit
  ) {
    //
    mdiv.innerHTML = '<div style="color:green">Password is strong</div>';
  } else {
    mdiv.innerHTML = '<div style="color:red">Password is weak</div>';
  }
}
//----------------------------------
// source: http://www.javascriptkit.com/javatutors/re.shtml
// testValid displays that the input zipcode is valid if it has exactly
// 5 digits. Otherwise, display "invalid"
//----------------------------------
function testValid(zipElement) {
  var zipText = zipElement.value;
  var re5digit = /^\d{5}$/; //regular expression defining a 5 digit number
  var zdiv = document.getElementById("zipMessage");
  if (zipText.search(re5digit) != -1) {
    //if match passed
    zdiv.innerHTML = '<div style="color:green">Valid Zipcode</div>';
  } else {
    zdiv.innerHTML = '<div style="color:red">Invalid Zipcode</div>';
  }
}
//-------------------------------------------------------------------
// Source: http://www.mattkruse.com/javascript/validations/source.html
// isDigit(value)
//   Returns true if value is a 1-character digit
//-------------------------------------------------------------------
function isDigit(num) {
  if (num.length > 1) {
    return false;
  }
  var string = "1234567890";
  if (string.indexOf(num) != -1) {
    return true;
  }
  return false;
}
