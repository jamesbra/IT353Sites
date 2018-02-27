function helloUser() {
  var firstName = prompt("What is your first name?");
  var lastName = prompt("What is your last name?");
  alert("Hello " + lastName + ", " + firstName + "! Welcome to ITK353");
}
//-----------------------------------------------------------------
// Source: http://www.mattkruse.com/javascript/validations/source.html
// isDigit(value)
//   Returns true if value is a 1-character digit
//-------------------------------------------------------------------
function isNum(zipNum) {
  if (zipNum.length > 1) {
    return false;
  }
  var string = "1234567890";
  if (string.indexOf(zipNum) != -1) {
    return true;
  }
  return false;
}

function validateEmail(emailString) {
  var errorInternal = document.getElementById("emailErrorDescription");
  errorInternal.style = "color:red";
  if (emailString == "") {
    errorInternal.innerHTML = "";
    return false;
  }
  //VALIDATE @ SYMBOL
  var atLocation = emailString.indexOf("@");

  //Check location of @ symbol
  if (atLocation == 0 || atLocation == emailString.length - 1) {
    errorInternal.innerHTML = "Invalid email - @ symbol is incorrect position";
    return false;
  } else if (atLocation == -1) {
    errorInternal.innerHTML = "Invalid email - no @ found";
    return false;
  } else if (atLocation != emailString.lastIndexOf("@")) {
    //Multiple @ symbols
    errorInternal.innerHTML = "Invalid email - multiple @ symbols";
    return false;
  }
  //VALIDATE PERIOD
  // Only one period

  //No period found
  if (emailString.indexOf(".") == -1) {
    errorInternal.innerHTML = "Invalid email - no period found";
    return false;
  } else if (emailString.indexOf(".") == emailString.lastIndexOf(".")) {
    var dotLocation = emailString.indexOf(".");
    //Period occurs directly after @ symbol
    if (atLocation + 1 == dotLocation) {
      errorInternal.innerHTML = "Invalid email - please fix email domain";
      return false;
    } else if (atLocation > dotLocation) {
      //Period occurs before @ symbol
      errorInternal.innerHTML = "Invalid email - period occurs before @ symbol";
      return false;
    } else if (dotLocation == emailString.length - 1) {
      errorInternal.innerHTML =
        "Invalid email - period occurs at the end of the email";
      return false;
    }
  } else {
    //Multiple periods found
    //Check for double period
    if (emailString.indexOf("..") != -1) {
      errorInternal.innerHTML =
        "Invalid email - there cannot be two periods in a row";
      return false;
    } else if (emailString.indexOf(".") == 0) {
      //Check for period at beginning
      errorInternal.innerHTML =
        "Invalid email - you cannot place a period at the beginning of your address";
      return false;
    } else if (emailString.lastIndexOf(".") == emailString.length - 1) {
      //Check for period at very end
      errorInternal.innerHTML =
        "Invalid email - you cannot place a period at the end of your address";
      return false;
    } else if (emailString.charAt(atLocation + 1) == ".") {
      //Check for period after @
      errorInternal.innerHTML =
        "Invalid email - you cannot place a period after the @ symbol";
      return false;
    }
  }
  //FIND IMPROPER CHARACTERS
  errorInternal.innerHTML = "All good!";
  errorInternal.style = "color:green";
  return true;
}
function validateZipCode(zip) {
  var errorInternal = document.getElementById("zipErrorDescription");
  errorInternal.style = "color: red;";
  var result = true;
  if (zip == "") {
    errorInternal.innerHTML = "";
    return false;
  }
  if (zip.length != 5 && zip.length != 10) {
    //alert("Please provide a valid zip code (check length)");
    errorInternal.innerHTML = "Please provide a valid zip code";
    return false;
  } else {
    for (var i in zip) {
      if (i == 5) {
        if (zip.charAt(i) == "-") {
          continue;
        } else {
          errorInternal.innerHTML = "Please provide a valid zip code";
          return false;
        }
      }
      if (isNum(zip[i])) {
        continue;
      } else {
        // alert("Please provide a valid zip code (check for invalid characters)");
        errorInternal.innerHTML =
          "Please provide a valid zip code (check for invalid characters)";
        return false;
      }
    }
  }
  errorInternal.style = "color: green";
  errorInternal.innerHTML = "All good!";
  return true;
}
function validateAll(formData) {
  document.getElementById("ageErrorDescription").innerHTML = "";
  document.getElementById("genderErrorDescription").innerHTML = "";
  document.getElementById("emailErrorDescription").innerHTML = "";
  document.getElementById("zipErrorDescription").innerHTML = "";
  document.getElementById("nameErrorDescription").innerHTML = "";
  var email = formData.email.value;
  var zip = formData.zipCode.value;
  var genderMale = formData.gender_male.checked;
  var genderFemale = formData.gender_female.checked;
  var age = formData.age.selectedIndex;
  var name = formData.name.value;
  var result = true;
  if (!validateEmail(email) || !validateZipCode(zip)) {
    result = false;
  }
  if (name == "") {
    document.getElementById("nameErrorDescription").innerHTML =
      "Please enter a name";
    result = false;
  }
  if (age == 0) {
    //alert("Please select an age");
    document.getElementById("ageErrorDescription").innerHTML =
      "Please select an age";
    result = false;
  }
  if (!genderMale && !genderFemale) {
    //alert("Please provide your gender")
    document.getElementById("genderErrorDescription").innerHTML =
      "Please select a gender";
    result = false;
  }

  if (email == "") {
    document.getElementById("emailErrorDescription").innerHTML =
      "Please provide an email address";
  }
  if (zip == "") {
    document.getElementById("zipErrorDescription").innerHTML =
      "Please provide a zipcode";
  }
  return result;
}

function calculateTotalPay() {
  var employeeName = prompt("What is your full name?");
  var SSN = prompt("What is your SSN?");
  var rateOfPay = parseInt(prompt("What is your rate of pay?"));
  var hoursWorked = parseInt(
    prompt("How many hours have you worked this pay period?")
  );

  if (hoursWorked > 40) {
    var extraTime = hoursWorked - 40;
    var totalPay = 40 * rateOfPay + extraTime * rateOfPay * 1.5;
  } else {
    var totalPay = hoursWorked * rateOfPay;
  }
  var output =
    "Full Name: " +
    employeeName +
    "\nSSN: " +
    SSN +
    "\nRate of pay: $" +
    rateOfPay +
    "\nHours worked: " +
    hoursWorked +
    "\nTotal Pay: $" +
    totalPay;
  alert(output);
}

function calculateTestScore() {
  var numTestScores = parseInt(prompt("Enter the # of scores:"));
  var testArray = new Array(numTestScores);
  var highestScore = Number.NEGATIVE_INFINITY;
  var lowestScore = Number.POSITIVE_INFINITY;
  var scoreTotal = 0;
  for (var i = 0; i < numTestScores; i++) {
    var currentScore = parseInt(prompt("Please enter the next score: "));
    if (currentScore < lowestScore) {
      lowestScore = currentScore;
    } else if (currentScore > highestScore) {
      highestScore = currentScore;
    }
    scoreTotal += currentScore;
    testArray[i] = currentScore;
  }
  var scoresLargerThanAverage = "";
  var averageScore = scoreTotal / numTestScores;
  for (var i = 0; i < testArray.length; i++) {
    if (testArray[i] > averageScore) {
      scoresLargerThanAverage += testArray[i] + " ";
    }
  }
  alert(
    "Billy's Q3 Output\nLowest = " +
      lowestScore +
      "\nHighest = " +
      highestScore +
      "\nAverage = " +
      averageScore +
      "\nScores > Average:\n" +
      scoresLargerThanAverage
  );
}

function gradeQuiz(formData) {
  var secretWord = formData.passwordGuess.value;
  var hiddenResultsValue = formData.hiddenResults.value;
  var languageAnswer = formData.languageAnswer.value;
  var legitDate = new Date();
  var currentDate = formData.form_date.value;
  if (secretWord == "reggie") {
    hiddenResultsValue += "1. The secret word was reggie! You got it!\n--- ";
  } else {
    hiddenResultsValue +=
      "1. You did not get the secret word. It was reggie!\n--- ";
  }
  if (formData.bb8.checked) {
    hiddenResultsValue += "2. R2D2 is objectively better.\n--- ";
  } else if (formData.r2.checked) {
    hiddenResultsValue +=
      "2. You are absolutely correct. R2D2 is definitely the best droid.\n--- ";
  }
  else{
    hiddenResultsValue += "2. You didn't select a droid :(\n--- ";
  }
  if (languageAnswer == "c++" || languageAnswer == "C++") {
    hiddenResultsValue +=
      "3. You must like pain and suffering if you like C++\n--- ";
  } else if (languageAnswer == "java" || languageAnswer == "Java") {
    hiddenResultsValue +=
      "3. I certainly agree with you. Java is the best.\n--- ";
  } else {
    hiddenResultsValue +=
      "3. Unfortunately I am not a skilled enough programmer to bake in cases for every language but I'm sure yours is great, unless it is C++\n--- ";
  }
  if (
    legitDate.getDate() == parseInt(currentDate.charAt(9)) &&
    legitDate.getMonth() + 1 == parseInt(currentDate.charAt(6)) &&
    legitDate.getFullYear() == parseInt(currentDate.substr(0, 4))
  ) {
    hiddenResultsValue += "4. Your date was right. That was a tough one!\n--- ";
  } else {
    hiddenResultsValue +=
      "4. All you had to do was look down to the bottom right of your screen!\n--- ";
  }

  formData.hiddenResults.value = hiddenResultsValue;
}
