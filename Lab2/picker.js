$(document).ready(function() {
  var finished = false;
  var presList = [
    "George Washington",
    "John Adams",
    "Thomas Jefferson",
    "James Madison",
    "James Monroe",
    "John Quincy Adams",
    "Andrew Jackson",
    "Martin Van Buren",
    "William H Harrison",
    "John Tyler",
    "James K Polk",
    "Zachary Taylor",
    "Millard Fillmore",
    "Franklin Pierce",
    "James Buchanan",
    "Abraham Lincoln",
    "Andrew Johnson",
    "Ulysses S Grant",
    "Rutherford B Hayes",
    "James A Garfield",
    "Chester A Arthur",
    "Grover Cleveland",
    "Benjamin Harrison",
    "William McKinley",
    "Theodore Roosevelt",
    "William H Taft",
    "Woodrow Wilson",
    "Warren G Harding",
    "Calvin Coolidge",
    "Herbert Hoover",
    "Franklin D Roosevelt",
    "Harry S Truman",
    "Dwight D Eisenhower",
    "John F Kennedy",
    "Lyndon B Johnson",
    "Richard M Nixon",
    "Gerald R Ford",
    "Jimmy Carter",
    "Ronald Reagan",
    "George H W Bush",
    "Bill Clinton",
    "George W Bush",
    "Barack Hussein Obama",
    "Donald J Trump"
  ];
  var tableText = '<table cellpadding=8><tr style="font-size:24px;">';

  for (var i in presList) {
    if (i % 5 == 0 && i != 0) {
      tableText += "</tr>";
      tableText += '<tr style="font-size:24px;">';
    }
    tableText += "<td id='" + i + "'>" + presList[i] + "</td>";
  }
  $("#masterTable").append(tableText);
  var pickedList = new Array(presList.length);

  for (var i = 0; i < presList.length; i++) {
    pickedList[i] = false;
  }
  $("#startRandomize").click(function() {
    if (finished) {
    } else {
      finished = true;
      var i = 0;
      function toggleID() {
        setTimeout(function() {
          var pickedIndex = Math.floor(Math.random() * presList.length);
          while (pickedList[pickedIndex]) {
            var pickedIndex = Math.floor(Math.random() * presList.length);
          }
          pickedList[pickedIndex] = true;
          $("#" + pickedIndex).animate({ opacity: 0 }, 400);
          i++;
          if (i < presList.length - 1) {
            toggleID();
          }
        }, 500);
      }

      toggleID();
    }
  });
});
