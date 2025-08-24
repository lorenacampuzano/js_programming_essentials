/*
Summary

1. HTML structure: Defines an HTML structure for a restaurant menu, categorizing items into Breakfast, Main Course, and Dessert sections using appropriate <h2> headings and <div> elements with unique IDs for content display.

2. JavaScript dynamic content: Utilizes JavaScript to dynamically populate menu items within their respective sections.

    * Breakfast menu: Uses the map method to generate HTML strings for breakfast items and inserts them into the designated <div> element.
    * Main course menu: Utilizes forEach to construct HTML strings for main course items, updating the related <div> with the generated content.
    * Dessert menu: Utilizes a for loop to create HTML strings for dessert items and inserts them into the designated <div> element for dessert items.

3. Data handling: Stores menu item data in separate JavaScript arrays (breakfastMenu, mainCourseMenu, dessertMenu) to facilitate dynamic content creation without hardcoding within the HTML structure.

4. Dynamic rendering: Illustrates how JavaScript interacts with HTML, dynamically generating and updating content within the webpage, demonstrating different iteration methods to present menu items under specific categories.
*/

// Defining variables and map array method

const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// The provided code converts breakfast menu array items into HTML strings using map() and an arrow function to structure each item's HTML format
// Subsequently, a string concatenation method has been used to join the generated HTML strings into one cohesive string using join ('') to prepare for insertion.
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Defining forEach array method and for loop iteration

// The variable mainCourseItem is initialized as an empty string (''). This variable will be used to accumulate HTML strings generated for each main course menu item.
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;