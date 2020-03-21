// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

button.on("click", function() {
var Parent = document.getElementById("ufo-table");
//Cleaning table everytime when new search is performed.
for(var i = Parent.rows.length - 1; i > 0; i--)
{
    Parent.deleteRow(i);
};
// Select the input element for different search
var inputElement_date = d3.select("#datetime");
var inputElement_city = d3.select("#city");
var inputElement_state = d3.select("#state");
var inputElement_country = d3.select("#country");
var inputElement_shape = d3.select("#shape");

// Get the value property of the input element
var inputValue_date = inputElement_date.property("value");
var inputValue_city = inputElement_city.property("value");
var inputValue_state = inputElement_state.property("value");
var inputValue_country = inputElement_country.property("value");
var inputValue_shape = inputElement_shape.property("value");
//Condition for each input search
//Check if city is null and load only date
if (inputValue_city ===''){
var filteredData = tableData.filter(tData => tData.datetime === inputValue_date);
    console.log(filteredData);
}
//Check if state is null and load only date and city
else if (inputValue_state ==='') {
var filteredData_Date = tableData.filter(tData => tData.datetime === inputValue_date);   
var filteredData = filteredData_Date.filter(cData => cData.city ===inputValue_city);
}
//Check if country is null and load only date,city and country
else if (inputValue_country ==='') {
var filteredData_Date = tableData.filter(tData => tData.datetime === inputValue_date);   
var filteredData_city = filteredData_Date.filter(cData => cData.city ===inputValue_city);
var filteredData = filteredData_city.filter(sData => sData.state ===inputValue_state);
    console.log(filteredData);
}
//Check if Shape is null and load only date,city,country and shape
else if (inputValue_shape ==='') {
var filteredData_Date = tableData.filter(tData => tData.datetime === inputValue_date);   
var filteredData_city = filteredData_Date.filter(cData => cData.city ===inputValue_city);
var filteredData_state = filteredData_city.filter(sData => sData.state ===inputValue_state);
var filteredData = filteredData_state.filter(sData => sData.country ===inputValue_country);
}
//when everything is filled
else {
var filteredData_Date = tableData.filter(tData => tData.datetime === inputValue_date);   
var filteredData_city = filteredData_Date.filter(cData => cData.city ===inputValue_city);
var filteredData_state = filteredData_city.filter(sData => sData.state ===inputValue_state);
var filteredData_country = filteredData_state.filter(sData => sData.country ===inputValue_country);
var filteredData = filteredData_country.filter(sData => sData.shape ===inputValue_shape);
}
    

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");
// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");
    
// Iterate through each student/grade pair
filteredData.forEach((tabData) => {
//
//  // Append one table row per input
  var row = tbody.append("tr");

 Object.entries(tabData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

});