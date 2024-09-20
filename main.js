 // Function to send allShapes to an API
 function sendShapesToApi(allShapes) {
  // Convert allShapes to JSON
  var allShapesJson = {
      length: allShapes.elements.length,
      id: allShapes.id,
      elements: allShapes.elements.map(elem => elem.toGeoJSON()), // Convert leaflet shapes to GeoJSON format
      cuttedElements: allShapes.cuttedElements.map(elem => elem.toGeoJSON())
  };

  // Send AJAX POST request
  $.ajax({
      url: 'https://your-api-endpoint.com/shapes', // Replace with your API URL
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(allShapesJson), // Send the data as JSON
      success: function(response) {
          console.log('Success:', response);
      },
      error: function(error) {
          console.log('Error:', error);
      }
  });
}

function getShapesFromApi(){
  var allShapesJson;

  $.get("demo_test.asp", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
    allShapesJson = data;
  });

  return allShapesJson;
}


// Call the function when needed
sendShapesToApi();
