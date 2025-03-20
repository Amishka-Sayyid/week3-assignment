let gameData = JSON.parse(localStorage.getItem("gameData")) || {
  cookieCount: 0,
  cookiesPerSecond: 1,
  upgrades: {},
};

// Save game data to localStorage only when updated
function saveGameData() {
  localStorage.setItem("gameData", JSON.stringify(gameData));
}

// Display the cookie count
const cookiedisplay = document.getElementById("total-cookies-owned");
cookiedisplay.textContent = gameData.cookieCount;

// Update the cookie count every second
setInterval(function () {
  gameData.cookieCount += gameData.cookiesPerSecond;
  cookiedisplay.textContent = gameData.cookieCount;
  saveGameData(); // Save game data every second
}, 1000);

// Display cookies per second
const cookiesPerSeconddisplay = document.getElementById("current-cps");
cookiesPerSeconddisplay.textContent = `${gameData.cookiesPerSecond} cps`;

// cookie increment button
const cookieTimerButton = document.getElementById("cookie-increment-button");

cookieTimerButton.addEventListener("click", () => {
  gameData.cookieCount += gameData.cookiesPerSecond;
  cookiedisplay.textContent = gameData.cookieCount;
  saveGameData(); // Save the updated gameData
});

// Fetch upgrades from the API
async function getDetails() {
  const result = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await result.json();
  return data;
}

const cookie = document.getElementById("cookie");

function createTable(cookieData) {
  const table = document.createElement("table");

  // Create table header
  let head = document.createElement("thead");
  let h1 = document.createElement("th");
  h1.innerText = "Upgrade";
  let h2 = document.createElement("th");
  h2.innerText = "Name";
  let h3 = document.createElement("th");
  h3.innerText = "Cost";
  let h4 = document.createElement("th");
  h4.innerText = "Increase";
  let h5 = document.createElement("th");
  h5.innerText = "Buy";

  head.appendChild(h1);
  head.appendChild(h2);
  head.appendChild(h3);
  head.appendChild(h4);
  head.appendChild(h5);
  table.appendChild(head);

  // Table body
  let body = document.createElement("tbody");

  cookieData.forEach((single) => {
    const upgradeCount = gameData.upgrades[single.id] || 0; // Default to 0 if upgrade not bought yet

    let row = document.createElement("tr");

    let c1 = document.createElement("td");
    c1.innerText = gameData.upgrades[single.id] || 0;

    let c2 = document.createElement("td");
    c2.innerText = single.name;
    let c3 = document.createElement("td");
    c3.innerText = `$ ${single.cost}`;
    let c4 = document.createElement("td");
    c4.innerText = `+ ${single.increase}`;
    let c5 = document.createElement("td");

    const button = document.createElement("button");
    button.innerText = "Buy Upgrade";

    // Add event listener for the button
    button.addEventListener("click", function () {
      handleUpgradeClick(single.id, single.cost, single.increase);
    });

    c5.appendChild(button);
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);

    body.appendChild(row);
  });

  table.appendChild(body);
  cookie.innerHTML = ""; // Clear previous table content
  cookie.appendChild(table);
}

async function combine() {
  const allTogether = await getDetails();
  createTable(allTogether);
}

combine();

// Reset game
const reset = document.getElementById("reset-button");
reset.addEventListener("click", () => {
  gameData.cookieCount = 0;
  gameData.cookiesPerSecond = 1;
  gameData.upgrades = {}; // Reset upgrades object

  // Update the displayed values
  cookiedisplay.textContent = gameData.cookieCount;
  cookiesPerSeconddisplay.textContent = `${gameData.cookiesPerSecond} cps`;

  // Save the reset game data to localStorage
  saveGameData();
  location.reload();
  alert("Game has been reset! Start fresh and keep collecting cookies!");
});

// Handle upgrade click
function handleUpgradeClick(upgradeId, cost, increase) {
  if (gameData.cookieCount >= cost) {
    gameData.cookieCount -= cost;

    // Increment upgrade count for specific upgrade
    if (!gameData.upgrades[upgradeId]) {
      gameData.upgrades[upgradeId] = 0;
    }
    gameData.upgrades[upgradeId] += 1;

    // Update cookies per second
    gameData.cookiesPerSecond += increase;

    // Update display
    cookiedisplay.textContent = gameData.cookieCount;
    cookiesPerSeconddisplay.textContent = `${gameData.cookiesPerSecond} cps`;

    // Save updated game data
    saveGameData();

    // Update the table directly without reloading the page
    updateTable();
  } else {
    alert("Not enough cookies to buy this upgrade!");
  }
}

// Update the table to reflect the new upgrade count
function updateTable() {
  getDetails().then((cookieData) => createTable(cookieData));
}
