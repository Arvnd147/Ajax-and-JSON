var currentIndex = 0;

function loadJSON() {
  var data_file = "./data.json";
  var xhr = new XMLHttpRequest();

  // Define the AJAX request
  xhr.open("GET", data_file, true);

  // Set the callback function to handle the response
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      // Javascript function JSON.parse to parse JSON data
      var courses = JSON.parse(xhr.responseText);

      // player variable now contains the data structure and can
      // be accessed as player.name and player.country.

      // Get the tbody element to append the rows
      var tbody = document.getElementById("courseDetails");

      // Loop through the players and dynamically generate rows
      if (currentIndex < courses.length) {
        var player = courses[currentIndex];

        var row = tbody.insertRow();
        var cellCode = row.insertCell(0);
        var cellTitle = row.insertCell(1);

        cellCode.textContent = player.code;
        cellTitle.textContent = player.title;

        currentIndex++;
      }else{
        tbody.innerHTML = "";
        currentIndex = 0;
      }
    }
  };
  //send the request
  xhr.send();
}
