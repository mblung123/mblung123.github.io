// Get the elements from the document
const prompt = document.getElementById("prompt");
const generate = document.getElementById("generate");
const result = document.getElementById("result");

// Add an event listener to the generate button
generate.addEventListener("click", function() {
  // Get the value of the prompt input
  const promptValue = prompt.value;

  // Check if the prompt is not empty
  if (promptValue) {
    // Clear the result div
    result.innerHTML = "";

    // Create an image element
    const image = document.createElement("img");

    // Set the source of the image to the API endpoint with the prompt as a parameter
    image.src = "https://api.pageflow.ai/image?prompt=" + promptValue;

    // Append the image to the result div
    result.appendChild(image);
  } else {
    // Alert the user to enter a prompt
    alert("Masukkan prompt terlebih dahulu");
  }
});
