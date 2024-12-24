console.log("This is connected correctly");

let cookieCount = 0;
let cookiesPerSecond = 0;
let upgradeCount = 0;

let gameData = {
  cookieCount: 0,
  cookiesPerSecond: 1,
  upgradeCount: 0,
};

const shopUpgradesArray = [];

const upgradesContainer = document.getElementById("upgrades-shop-container");
// https://cookie-upgrade-api.vercel.app/api/upgrades
async function getShopUpgrades() {
  const result = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(result);
  // We now need to translate the data we recieve from JSON to something we can use!
  const data = await result.json();
  console.log(data);

  //We need to *PUSH* the upgrade times that we got from our fetch, into our empty array!
  shopUpgradesArray.length = 0;
  data.forEach(upgradeArray);
  function upgradeArray(upgradeArrayData) {
    shopUpgradesArray.push(upgradeArrayData);
  }
  shopUpgradesArray.length = 5;
  console.log(shopUpgradesArray);
  return shopUpgradesArray;
}

async function renderShopUpgrades() {
  const getShopItems = await getShopUpgrades();
  console.log(getShopItems);

  getShopItems.forEach(function (shopItemData) {
    let upgrade = document.createElement("p");
    upgrade.textContent += upgradeCount;

    const upgradeName = document.createElement("p");
    upgradeName.textContent = shopItemData.name;

    const upgradeCost = document.createElement("p");
    upgradeCost.textContent = `$  ${shopItemData.cost}`;

    const upgradeCPSIncrease = document.createElement("p");
    upgradeCPSIncrease.textContent = `+ ${shopItemData.increase}`;

    // Append these elements into the relevant container in the same way as you appended your imgs into the thumbnail container in WK2...
    const Shop = document.createElement("div");
    Shop.appendChild(upgrade);
    Shop.appendChild(upgradeName);
    Shop.appendChild(upgradeCost);
    Shop.appendChild(upgradeCPSIncrease);

    Shop.className = "shopStyle";
    //This is a decent place to also create a button element and attach an event listener to it! You will then need to create a handler function for the button that you create!
    const ShopUpgradeButton = document.createElement("button");
    ShopUpgradeButton.textContent = `BUY`;

    ShopUpgradeButton.addEventListener(
      "click",
      handleUpgradeClick(shopItemData.cost, shopItemData.increase)
    );

    Shop.appendChild(ShopUpgradeButton);

    upgradesContainer.appendChild(Shop);
  });
}
renderShopUpgrades();

// We want our upgrades to actually do something! We need to give each upgrade a button and attach an event listener to those buttons!

function handleUpgradeClick(upgradeCost, upgradeCPSIncrease) {
  if (cookieCount >= upgradeCost) {
    //deducting the upgrade cost
    cookieCount -= upgradeCost;
    //increasing the cookies per second
    cookiesPerSecond += upgradeCPSIncrease;
    //upgrading the upgrade count
    upgradeCount++;

    //updating gamedata
    gameData.cookieCount = cookieCount;
    gameData.cookiesPerSecond = cookiesPerSecond;
    gameData.upgradeCount = upgradeCount;

    //saving the data
    localStorage.setItem("gameData", JSON.stringify(gameData));
  }
}

const cookiedisplay = document.getElementById("total-cookies-owned");
cookiedisplay.textContent = gameData.cookieCount;

const cookiesPerSeconddisplay = document.getElementById("current-cps");
cookiesPerSeconddisplay.textContent = gameData.cookiesPerSecond;

setInterval(function () {
  //increasing cookie count by cookiespersecond every second
  gameData.cookieCount += gameData.cookiesPerSecond;
  //updating display
  cookiedisplay.textContent = gameData.cookieCount;
  cookiesPerSeconddisplay.textContent = gameData.cookiesPerSecond;
  //saving the updated data
  localStorage.setItem("gameData", JSON.stringify(gameData));
}, 1000);
//retrieves saved data after refresh from local storage
gameData = JSON.parse(localStorage.getItem("gameData"));

const cookieTimerButton = document.getElementById("cookie-increment-button");
cookieTimerButton.addEventListener("click", function () {
  gameData.cookieCount += gameData.cookiesPerSecond;
  cookiedisplay.textContent = gameData.cookieCount;
  cookieTimerButton.style.backgroundColor = "pink";
  localStorage.setItem("gameData", JSON.stringify(gameData));
});

// It is perfectly fine to perform all of the actions that we want our setInterval function to do with external functions, then you can callback those functions inside the setInterval function.
