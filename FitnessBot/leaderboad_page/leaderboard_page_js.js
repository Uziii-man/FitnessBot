function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        // Request finished and response
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            topPointDetails(this);
        }
    };

    // leaderBoard.xml is the external xml file
    xmlhttp.open("GET", "leaderBoard.xml", true);
    xmlhttp.send();
}

function topPointDetails(xml) {
var i;
var xmlDoc = xml.responseXML;
var table = "<tr><th>Name</th><th>Points</th></tr>";
var x = xmlDoc.getElementsByTagName("people");
var people = [];

// Store data in an array of objects
for (i = 0; i < x.length; i++) {
var person = {
    name: x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue,
    points: parseInt(x[i].getElementsByTagName("points")[0].childNodes[0].nodeValue)
};
people.push(person);
}

// Sort array by points in descending order
people.sort(function(a, b) {
return b.points - a.points;
});

// Generate table rows with sorted data
for (i = 0; i < people.length; i++) {
table += "<tr><td>" + people[i].name + "</td><td>" + people[i].points + "</td></tr>";
}

// Print the xml data in table form
document.getElementById("id").innerHTML = table;
}
function changeBackgroundColor() {
    // Get the selected value from the background color dropdown menu
    var selectedBackgroundColor = document.getElementById("background-color-select").value;
    
    // Set the background color of the page
    document.body.style.backgroundColor = selectedBackgroundColor;
}

function changeTextColor() {
    // Get the selected value from the text color dropdown menu
    var selectedTextColor = document.getElementById("text-color-select").value;
    
    // Set the text color of the page
    document.body.style.color = selectedTextColor;
}