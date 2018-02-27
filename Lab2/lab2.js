$(document).ready(function() {
  $("[id|=state]").hover(
    function() {
      $(this).toggleClass("hoverOn", true);
    },
    function() {
      $(this).toggleClass("hoverOn", false);
    }
  );

  $("#scoreQuizButton").click(function() {
    var score = 0;
    if ($("#radio-1").prop("checked")) {
      score++;
      $("#q1Message").html(
        '<p style="color:green;font-size:18px;">Correct!</p>'
      );
      $("#q1").toggleClass("correct", true);
    } else {
      $("#q1Message").html(
        '<p style="color:red;font-size:18px;">I\'m sorry, that is not correct. Additional information can be found on Page 251 of the Fundamentals of Web Development textbook</p>'
      );
      $("#q1").toggleClass("incorrect", true);
    }

    if ($("#radio-7").prop("checked")) {
      score++;
      $("#q2Message").html(
        '<p style="color:green;font-size:18px;">Correct!</p>'
      );
      $("#q2").toggleClass("correct", true);
    } else {
      $("#q2Message").html(
        '<p style="color:red;font-size:18px;">That is incorrect. The correct answer is RGB color codes. Additional information can be found on Page 244 of the Fundamentals of Web Development textbook</p>'
      );
      $("#q2").toggleClass("incorrect", true);
    }

    if ($("#radio-10").prop("checked")) {
      score++;
      $("#q3Message").html(
        '<p style="color:green;font-size:18px;">Correct!</p>'
      );
      $("#q3").toggleClass("correct", true);
    } else {
      $("#q3Message").html(
        "<p style=\"color:red;font-size:18px;\">That is incorrect. 'em' is used as a proportionate font-size to the parent's font size. Additional information can be found on Page 100 of the Fundamentals of Web Development textbook</p>"
      );
      $("#q3").toggleClass("incorrect", true);
    }

    if ($("#q4DropDown").prop("selectedIndex") == 1) {
      score++;
      $("#q4Message").html(
        '<p style="color:green;font-size:18px;">Correct!</p>'
      );
      $("#q4").toggleClass("correct", true);
    } else {
      $("#q4Message").html(
        '<p style="color:red;font-size:18px;">That is incorrect. \'&nbsp\' stands for non breaking space, which prevents a line break from occurring. It can also be used as a placeholder for table data. Additional information can be found <a href="http://jkorpela.fi/HTML/emptycells.html">here</a></p>'
      );
      $("#q4").toggleClass("incorrect", true);
    }

    if ($("#q5DropDown").prop("selectedIndex") == 1) {
      score++;
      $("#q5Message").html(
        '<p style="color:green;font-size:18px;">Correct!</p>'
      );
      $("#q5").toggleClass("correct", true);
    } else {
      $("#q5Message").html(
        '<p style="color:red;font-size:18px;">That is incorrect. It is not necessary to close a br tag. Additional information can be found on Page 78 of the Fundamentals of Web Development textbook</p>'
      );
      $("#q5").toggleClass("incorrect", true);
    }

    if ($("#q6DropDown").prop("selectedIndex") == 2) {
      score++;
      $("#q6Message").html(
        '<p style="color:green;font-size:18px;">Correct!</p>'
      );
      $("#q6").toggleClass("correct", true);
    } else {
      $("#q6Message").html(
        '<p style="color:red;font-size:18px;">That is incorrect. JavaScript is known as a "dynamically" typed language. Additional information can be found on Page 252 of the Fundamentals of Web Development textbook</p>'
      );
      $("#q6").toggleClass("incorrect", true);
    }

    switch ($("#fill-1")
      .prop("value")
      .toLowerCase()) {
      case "get":
      case "post":
        score++;
        $("#q7Message").html(
          '<p style="color:green;font-size:18px;">Correct!</p>'
        );
        $("#q7").toggleClass("correct", true);
        break;
      default:
        $("#q7Message").html(
          '<p style="color:red;font-size:18px;">That is incorrect. The two major types of HTTP requests are \'GET\' and \'POST\' Additional information can be found on Page 167 of the Fundamentals of Web Development textbook</p>'
        );
        $("#q7").toggleClass("incorrect", true);
        break;
    }

    switch ($("#fill-2")
      .prop("value")
      .toLowerCase()) {
      case "text":
      case "email":
      case "password":
      case "tel":
      case "url":
        score++;
        $("#q8Message").html(
          '<p style="color:green;font-size:18px;">Correct!</p>'
        );
        $("#q8").toggleClass("correct", true);
        break;
      default:
        $("#q8Message").html(
          '<p style="color:red;font-size:18px;">That is incorrect. There are many different types of input types that allow the user to provide text. Additional information can be found on Page 165 of the Fundamentals of Web Development textbook</p>'
        );
        $("#q8").toggleClass("incorrect", true);
        break;
    }

    switch ($("#fill-3")
      .prop("value")
      .toLowerCase()) {
      case "responsive":
      case "responsiveness":
        score++;
        $("#q9Message").html(
          '<p style="color:green;font-size:18px;">Correct!</p>'
        );
        $("#q9").toggleClass("correct", true);
        break;
      default:
        $("#q9Message").html(
          '<p style="color:red;font-size:18px;">That is incorrect. There is a huge push for sites to become\'responsive\' to any device that navigates to your site. Having a responsive site provides a better user experience because you are never worried about what device the user accesses your site from. Additional information can be found <a href="https://www.w3schools.com/html/html_responsive.asp">here</a></p>'
        );
        $("#q9").toggleClass("incorrect", true);
        break;
    }
      var percent = Math.floor((score/9)*100);
      $("#scoreResults").html('<b>Results: </b>'+score+'/9'+' --- '+percent + '%');
    
    

  });

  $("#specificAirline").change(function() {
    if ($("#specificAirline").prop("checked", true)) {
      $("input[name='air1']").focus();
    }
  });

  $("#userNameText").keyup(function() {
    var exists = false;
    var currentUsers = ["aaa111", "bbb222", "ccc333"];
    for (var i in currentUsers) {
      if (this.value === currentUsers[i]) {
        $("#userMessage").html(
          '<div style="color:red">Username is already taken!</div>'
        );
        exists = true;
      }
    }
    if (!exists) {
      $("#userMessage").html("<div></div>");
    }
  });

  $("input[name*='air'").focus(function() {
    $("#specificAirline").prop("checked", true);
  });

  $(function() {
    var x = navigator.userAgent.toLowerCase();
    if (x.includes("chrome")) {
      document.getElementById("browserPrompt").innerHTML =
        '<br><br><h3>Chrome users, you may want to check out the latest Firefox browser. See <a href="http://www.firefox.com">www.firefox.com</a><h3><br>';
    } else if (x.includes("firefox")) {
      document.getElementById("browserPrompt").innerHTML =
        '<br><br><h3>Firefox users, you may want to check out the latest Internet Explorer browser. See <a href="https://support.microsoft.com/en-us/help/17621/internet-explorer-downloads">https://support.microsoft.com/en-us/help/17621/internet-explorer-downloads</a><h3><br>';
    } else if (x.includes("trident")) {
      document.getElementById("browserPrompt").innerHTML =
        '<br><br><h3>IE users, you may want to check out the latest Google Chrome browser. See <a href="http://www.google.com/chrome">www.google.com/chrome</a><h3><br>';
    }
    var quizForm = document.getElementById("quiz");
    $("[id|=radio]").checkboxradio();
    $("[id$=DropDown]").selectmenu();
  });

  $("#depSelect").change(function() {
    var selectedDep = this.selectedIndex;

    switch (selectedDep) {
      case 1:
        window.location.href = "./depA.htm";
        break;
      case 2:
        window.location.href = "./depB.htm";
        break;
      case 3:
        window.location.href = "./depC.htm";
        break;
      default:
        break;
    }
  });
});

function validateForm(formData) {
  if (formData.allAirline.checked) {
    alert("All airline - submission proceeding");
    return true;
  } else if (formData.specificAirline.checked) {
    var textBoxList = formData.getElementsByTagName("text");
    var success = false;
    for (var i in textBoxList) {
      if (textBoxList[i].value != undefined) {
        success = true;
      }
    }
    if (!success) {
      alert("Please provide a valid airline choice in one of the fields");
      $("input[name='air1']").focus();
    }
    return success;
  } else {
    return false;
  }
}

function pizzaSummary(formData) {
  var pizzaToppings = formData.getElementsByTagName("option");
  var output = "";
  for (var i in pizzaToppings) {
    if (pizzaToppings[i].selected) {
      output += pizzaToppings[i].text + ", ";
    }
  }
  output = output.substring(0, output.length - 2);

  confirm("You've selected: " + output);
}
