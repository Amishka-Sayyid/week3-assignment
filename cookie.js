let cookieCount = 0;
let cookiesPerSecond = 1;
let upgradeCount = 0;

// Check if there is saved game data in localStorage
let gameData = JSON.parse(localStorage.getItem("gameData")) || {
  cookieCount: 0,
  cookiesPerSecond: 1,
  upgradeCount: 0,
};

// Save the game data to localStorage initially (if there's no saved data)
if (!localStorage.getItem("gameData")) {
  localStorage.setItem("gameData", JSON.stringify(gameData));
}

// Display the cookie count
const cookiedisplay = document.getElementById("total-cookies-owned");
cookiedisplay.textContent = gameData.cookieCount;

// Update the cookie count every second
setInterval(function () {
  gameData.cookieCount += gameData.cookiesPerSecond;
  cookiedisplay.textContent = gameData.cookieCount;

  // Update the gameData in localStorage every second
  localStorage.setItem("gameData", JSON.stringify(gameData));
}, 1000);

// Display cookies per second
const cookiesPerSeconddisplay = document.getElementById("current-cps");
cookiesPerSeconddisplay.textContent = `${gameData.cookiesPerSecond} cps`;

// cookie increment button
const cookieTimerButton = document.getElementById("cookie-increment-button");

cookieTimerButton.addEventListener("click", () => {
  gameData.cookieCount += gameData.cookiesPerSecond;
  cookiedisplay.textContent = gameData.cookieCount;

  // Save the updated gameData to localStorage
  localStorage.setItem("gameData", JSON.stringify(gameData));
});

// https://cookie-upgrade-api.vercel.app/api/upgrades

// tring to fetch and render the the above in table format.

async function getDetails() {
  const result = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await result.json();
  return data;
}

const cookie = document.getElementById("cookie");

function createTable(cookieData) {
  // creating the table
  const table = document.createElement("table");

  // create head for the table
  let head = document.createElement("thead");

  // create heading cells $ Insert data to cells

  let h1 = document.createElement("th");
  h1.innerText = "id";
  let h2 = document.createElement("th");
  h2.innerText = "name";
  let h3 = document.createElement("th");
  h3.innerText = "cost";
  let h4 = document.createElement("th");
  h4.innerText = "increase";
  let h5 = document.createElement("th");
  h5.innerText = "Buy";

  // append  cells to head
  head.appendChild(h1);
  head.appendChild(h2);
  head.appendChild(h3);
  head.appendChild(h4);
  head.appendChild(h5);

  // append the head to table
  table.appendChild(head);

  //   creating body for table
  let body = document.createElement("tbody");

  cookieData.forEach((single) => {
    // creating the row element
    let row = document.createElement("tr");

    // Create cells & Insert data to cells
    let c1 = document.createElement("td");
    c1.innerText = single.id;
    let c2 = document.createElement("td");
    c2.innerText = single.name;
    let c3 = document.createElement("td");
    c3.innerText = single.cost;
    let c4 = document.createElement("td");
    c4.innerText = single.increase;
    let c5 = document.createElement("td");
    const button = document.createElement("button");
    button.innerText = "Buy Upgrade";

    c5.appendChild(button);

    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);

    // append row to body
    body.appendChild(row);
  });
  // Append the body to the table
  table.appendChild(body);

  // Append the table to the div "cookie"
  cookie.appendChild(table);
}

async function combine() {
  const allTogether = await getDetails();

  createTable(allTogether);
}

combine();
