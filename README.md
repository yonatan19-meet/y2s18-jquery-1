# Day 4: JQuery

## 0 &ensp; Getting Started

## 1 &ensp; Labs

### 1.1 &ensp; Editing DOM Styles (`./styles`)
0.
1. 

### 1.2 &ensp; Editing DOM Content (`./content`)
0.
1.

### 1.3 &ensp; JQuery Events (`./events`)
0. Make sure you are in the **`~/Desktop/jquery-1`** directory. Open `events/events.html` in Sublime Text (or any other text editor). 
1. Open `events.html` in Sublime Text.
    - Notice that there is a button with an id of `moveButton` on the page.
    - Notice that there is a paragraph with an id of `message` on the page.
2. Open `events.css` in Sublime Text.
    - Notice that `#message` has `position: fixed`. This means that you can move the paragraph in `events.html` around easily.
3. Edit `events.js` in Sublime Text. **Using jQuery**, add code so that when `moveButton` is clicked, the `message` paragraph moves to a random place on the screen. We have provided helper functions `randomX()` and `randomY()`, which return random X and Y positions on the screen.

<img src="images/events.gif">

### 1.4 &ensp; Editing DOM Classes (`./classes`)
0. Make sure you are in the **`~/Desktop/jquery-1`** directory. Open `classes/classes.html` in Sublime Text (or any other text editor). 
1. Using Sublime Text, **add three buttons to `classes.html`**.
    - The first button should have id of `bigButton` and with `BIG Button` written on it.
    - The second button should have id of `hideButton` and with `HIDE Button` written on it.
    - The third button should have id of `rotateButton` and with `ROTATE Button` written on it.
2. Using Sublime Text, edit `classes.css`. **Finish the `.big` CSS rule.** Any element with the class of `big` should have the following style (**use Google** if you don't know how to use any of these styles):
    - Font size of 72pt.
    - All letters uppercase.
    - Bold.
3. Using Sublime Text, edit `classes.css`. **Finish the `.hidden` CSS rule.** Any element with the class of `hidden` should not appear on the screen.
4. Find out how to use CSS to rotate elements with [this W3schools article](https://www.w3schools.com/cssref/css3_pr_transform.asp).
5. Using Sublime Text, edit `classes.css`. **Finish the `.rotated` CSS rule**. If elements have the `rotated` class, they should be rotated 180 degrees.
6. Using Sublime Text, edit `classes.js`.
    - Write code so that when I click `BIG Button`, the `message` paragraph in `classes.html` gets the class `big`.
    - Write code so that when I click `HIDE Button`, the `message` paragraph in `classes.html` gets the class `hidden`.
    - Write code so that when I click `ROTATE Button`, the `message` paragraph in `classes.html` gets the class `rotated`.
7. If you finished, get checked off by a TA or instructor. Nice job!

<img src="images/classes.gif">

## 2 &ensp; Resources