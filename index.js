let Menu_Icon = document.getElementById('menu-icon'),
    P_Menu = document.getElementById('nav_menu'),
    Menu_text = document.getElementById('nav_menu_text');


// Show P_Menu when Menu_Icon is clicked
Menu_Icon.addEventListener('click', () => {
    P_Menu.style.right = '0'; // Show the P_Menu element
});

// Hide P_Menu when any text inside P_Menu is clicked
P_Menu.addEventListener('click', (event) => {
    if (event.target !== P_Menu) {
        P_Menu.style.right = '-100%'; // Hide the P_Menu element
    }
});



/*


First Part: Show the Menu

When someone clicks on the Menu_Icon, the JavaScript listens for that click.
After detecting the click, it changes the menu (P_Menu) style so that it moves into view (by setting its right position to 0).
Don't forget that the right position is set to -100% in CSS before.


Second Part: Hide the Menu

The JavaScript also listens for clicks on the P_Menu itself.
If someone clicks on the text or anything inside the menu, the script checks what was clicked.
If the click is on the text or an inner item, the menu is moved back off the screen by changing its right position back to -100%.

*/



//LOADING DESIGN HERE
//LOADING DESIGN HERE
//LOADING DESIGN HERE
//LOADING DESIGN HERE

// JavaScript to hide the loading screen after 10 seconds
window.onload = function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.querySelector('.loading-text-container');

    // Show the loading text animation
    setTimeout(function() {
        // After 10 seconds, hide the loading screen
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
    }, 3000);  // 3 seconds delay for hiding the loading screen
};






