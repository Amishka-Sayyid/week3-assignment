console.log("This is connected correctly");

// We have to store some global values!
let cookieCount = 0;
let cookiesPerSecond = 0;
let gameData = {
  cookieCount: 0,
  cookiesPerSecond: 0,
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
  console.log(shopUpgradesArray);
  return shopUpgradesArray;
  //Remember that the upgrades that we fetched will be known by a variable name that you have set on line 30/31 ^
}

async function renderShopUpgrades() {
  const getShopItems = await getShopUpgrades();
  console.log(getShopItems);
  // Now that we have our upgrade items inside an array we can perform array method on them! Just like we did for images in the WK2 gallery submission!
  getShopItems.forEach(function (shopItemData) {
    // Create elements dynamically
    //This is where you should go back to your WK2 gallery loop and apply the same logic to this loop!
    const upgradeName = document.createElement("p");
    upgradeName.textContent = shopItemData.name;
    const upgradeCost = document.createElement("p");
    upgradeCost.textContent = `$  ${shopItemData.cost}`;
    const upgradeCPSIncrease = document.createElement("p");
    upgradeCPSIncrease.textContent = `+ ${shopItemData.increase}`;

    // Append these elements into the relevant container in the same way as you appended your imgs into the thumbnail container in WK2...
    const Shop = document.createElement("div");

    Shop.appendChild(upgradeName);
    Shop.appendChild(upgradeCost);
    Shop.appendChild(upgradeCPSIncrease);

    Shop.className = "shopStyle";
    //This is a decent place to also create a button element and attach an event listener to it! You will then need to create a handler function for the button that you create!
    const ShopUpgradeButton = document.createElement("button");
    ShopUpgradeButton.textContent = `BUY`;
    ShopUpgradeButton.addEventListener("click", handleUpgradeClick);

    Shop.appendChild(ShopUpgradeButton);

    upgradesContainer.appendChild(Shop);
  });
}
renderShopUpgrades();

// We want our upgrades to actually do something! We need to give each upgrade a button and attach an event listener to those buttons!

function handleUpgradeClick() {
  //The logic for the upgrade button event handler to only deal with the vaules of the specific upgrade it was create for is the same logic as the event handler for the creation of the large image element in the week 2 submission.
  // Here is a great place to include some logic that checks a CONDITIONAL to see if you have enough cookies in cookieCount to be able to afford the price of the upgrade. If you cant afford and upgrade, how can you give this feedback to your user?
}

setInterval(function () {
  // We want our timer to increase the value of cookieCount by the value of cookiesPerSecond every second.
  // We want to update the cookieCount value on our page as it changes
  // I want to store this value in local storage so that my user can resume the game with their game data intact.
}, 1000);

// It is perfectly fine to perform all of the actions that we want our setInterval function to do with external functions, then you can callback those functions inside the setInterval function.
