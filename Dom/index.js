//===============
// Change background color on button click
//===============

document.getElementById("change-color").addEventListener("click", function () {
  const colors = ["#f4f4f4", "#ffa07a", "#98fb98", "#add8e6", "#ffb6c1"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

//===============
// Add a new item to the list
//===============

document.getElementById("add-item").addEventListener("click", function () {
  const itemList = document.getElementById("item-list");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemList.children.length + 1}`;
  //   console.log(itemList.children.length);
  itemList.appendChild(newItem);
});
// console.log(document.getElementById("item-list").children.length);

//===============
// Toggle list visibility
//===============

document.getElementById("toggle-list").addEventListener("click", function () {
  const itemList = document.getElementById("item-list");
  if (itemList.classList.contains("hidden")) {
    itemList.classList.remove("hidden");
  } else {
    itemList.classList.add("hidden");
  }
});

//===============
// Switch player status
//===============

document.getElementById("switch-player").addEventListener("click", function () {
  const playerStatus = document.getElementById("player-status");
  if (playerStatus.textContent.includes("Player 1")) {
    playerStatus.textContent = "Player 2's Turn";
    playerStatus.classList.remove("player1-turn");
    playerStatus.classList.add("player2-turn");
  } else {
    playerStatus.textContent = "Player 1's Turn";
    playerStatus.classList.remove("player2-turn");
    playerStatus.classList.add("player1-turn");
  }
});
