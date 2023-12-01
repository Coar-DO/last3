function sendData() {
  var numberInput = document.getElementById("numberInput").value;

  // Use Fetch API or XMLHttpRequest to send the data to your Node.js server
  // Example using Fetch API:
  fetch("http://nodejs-service:3000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ number: numberInput }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
