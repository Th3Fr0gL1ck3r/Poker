document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addBtn");
  const playerInput = document.getElementById("playerInput");
  const valueInput = document.getElementById("valueInput");
  const playerList = document.getElementById("playerList");

  function addPlayer() {
    const name = playerInput.value.trim();
    let value = parseInt(valueInput.value, 10);

    if (name === "" || isNaN(value)) return;

    const li = document.createElement("li");

    // Name display
    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;

    // Value controls
    const valueContainer = document.createElement("div");
    valueContainer.classList.add("value-controls");

    const minusBtn = document.createElement("button");
    minusBtn.textContent = "–";
    minusBtn.classList.add("value-btn");

    const valueSpan = document.createElement("span");
    valueSpan.textContent = value;

    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    plusBtn.classList.add("value-btn");

    minusBtn.addEventListener("click", () => {
      value -= 0.25;
      valueSpan.textContent = value;
    });

    plusBtn.addEventListener("click", () => {
      value += 0.25;
      valueSpan.textContent = value;
    });

    valueContainer.append(minusBtn, valueSpan, plusBtn);

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      playerList.removeChild(li);
    });

    li.appendChild(nameSpan);
    li.appendChild(valueContainer);
    li.appendChild(removeBtn);
    playerList.appendChild(li);

    playerInput.value = "";
    valueInput.value = 0;
    playerInput.focus();
  }

  addBtn.addEventListener("click", addPlayer);
  playerInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addPlayer();
  });
  valueInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addPlayer();
  });
});
