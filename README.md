# week3-assignment

Week 3 Assignment: Build a Cookie Clicker using JavaScript.

---

**User Stories**

🐿️ As a developer, I want to retrieve upgrade information from an API so that all the developers working on the game can access a single, consistent source of up-to-date information.

🐿️As a user, I want to be able to purchase upgrades from the shop so that I can enhance my gameplay experience.

🐿️ As a developer, I want to use functions effectively to keep my code organised and reusable.

🐿️ As a user, I’d like the website to respond dynamically so that my interactions with the website are responsive and smooth.

🐿️ As a user, I want my cookie count and relevant game information to be stored in local storage so that my progress is saved and I can continue playing from where I left off later.

🐿️ As a user, I want the cookie count to increment automatically and the game state to update each second so that the game progresses even when I’m not actively clicking.

🐿️ As a user, I want the game state to be managed every second using setInterval to ensure my progress is saved and the game remains updated.

_Requirements_

    🎯 Fetch upgrade data from the provided API and at least one upgrade from the API update the cookie count.

    🎯 Ensure that functions are used effectively to keep code organised and reusable.

    🎯 Implement event listeners to handle user interactions.

    🎯 Use local storage to save and restore the cookie count and relevant game information.

    🎯 Use setInterval to increment the cookie count and manage the game state each second.
        Managing the game state includes saving progress and updating the DOM.

**Stretch Goals**

_Stretch User Stories_
🐿️ As a developer, I want to use a single function to handle all upgrades, so that the code is more organized and easier to maintain.

🐿️ As a user, I want the game to include animations, sound effects, or other visual effects, so that my experience is more engaging and enjoyable.

🐿️ As a developer, I want the README to provide a clear project description, deployment instructions, and other relevant information, so that it’s easy to understand and use the project.

🐿️ As a user, I want the game to handle errors well, so that I have a smooth experience even when something goes wrong.

🐿️ As a user, I want a menu to adjust game options like sound effects and display preferences, so that I can customize the game to my liking.

_Stretch Requirements_

    🏹 Consolidate upgrade management by managing all upgrades in a single function.

    🏹 Improve UX with animations, sound effects, or other visual effects.

    🏹 Fantastic use of README to provide important information such as a description of the project, how to deploy and other app information.

    🏹 Implement error handling using try/catch.

    🏹 Create a menu for users to adjust game options like sound effects or display preferences.

---

**REFLECTION**

_Required_

    🎯 What requirements did you achieve?
    -Fetching upgrade data from the provided API
    -Ensure that functions are used effectively to keep code organised and reusable.
    -Implementing event listeners to handle user interactions.
    -Use local storage to save and restore the cookie count and relevant game information.(managed this had to go through class worshop to double check).
    -Use setInterval to increment the cookie count and manage the game state each second.

    stretch requirements achieved are:
    -Implement error handling using try/catch
    -Consolidate upgrade management by managing all upgrades in a single function.

    🎯 Were there any requirements or goals that you were unable to achieve?
    -the rest of stretch goals

    🎯 If so, what was it that you found difficult about these tasks?
    -i didn't fully managed yet to make the game fully functional as the upgradecount isn't working and the by button as well.
    -apologies i took way longer time with this assignment.

_Optional_

    🎯Requesting feedback about a specific part of your submission.
    - how to make the upgradecount work well please.

    🎯What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
    -https://youtu.be/g1hlKlovok8?si=I0NqhetY00faZqsg
    -https://youtu.be/FD7fnqkBV9w?si=IVo_CqpkdR6eFSXT
    -https://youtu.be/EcHKynQwJIQ?si=dEotlaIQMnjIbQm8
    -the working skeleton provided in class as always was super extremely helpful.
    -rewatched some lesson from class
    -doing the class workshops
    <!-- to add table in dom -->
    https://www.tutorialspoint.com/How-to-add-rows-to-a-table-using-JavaScript-DOM#:~:text=the%20new%20Element-,Using%20the%20insertRow()%20Method,the%20position%20of%20the%20table.


    I redid the assignment to make it more functional now the upgrade button works well and the upgrage for each shop is saved in localhost along with its id in game data.
    what is did differently from before is i displayed the api data  in a table format.
    this time round i did the reset button and the page reloads after reset alert.
