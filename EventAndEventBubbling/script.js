// Event listeners for bubbling and capturing phases

const outerDiv = document.querySelector(".outer");
const middleDiv = document.querySelector(".middle");
const innerDiv = document.querySelector(".inner");

// Event Bubbling (default)
outerDiv.addEventListener("click", () => {
  console.log("Outer Div - Bubbling");
});

middleDiv.addEventListener("click", () => {
  console.log("Middle Div - Bubbling");
});

innerDiv.addEventListener("click", () => {
  console.log("Inner Div - Bubbling");
});

// Event Capturing (using true as the third parameter)
outerDiv.addEventListener(
  "click",
  () => {
    console.log("Outer Div - Capturing");
  },
  true
);

middleDiv.addEventListener(
  "click",
  () => {
    console.log("Middle Div - Capturing");
  },
  true
);

innerDiv.addEventListener(
  "click",
  () => {
    console.log("Inner Div - Capturing");
  },
  true
);

// Stopping event propagation (bubbling and capturing)
innerDiv.addEventListener("click", (event) => {
  console.log("Inner Div - Stopping propagation");
  event.stopPropagation(); // Stops the event from bubbling or capturing further
});
