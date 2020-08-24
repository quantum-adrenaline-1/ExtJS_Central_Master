/**
 * - This is the View Controller of the Login component which is imported in Login
 *   component by adding it in the 'requires' config and set as the View Controller
 *   by adding it to 'controller' config in Login View Component Login.js
 */
Ext.define('LoginApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login_controller',

    // Event handler function for 'Login' button click in Login Form Panel inside Login View Component Login.js
    onLoginClick: function () {
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup

        // Set the localStorage value to true
        // This is the LocalStorage of the browser which will store the flag that user has logged in successfully for the current browser session
        localStorage.setItem('UserIsLoggedIn', true);

        // Remove Login Window
        // Destroying the current view (Window) respective or irrespective of Window being a component which can or should be destroyed
        this.getView().destroy();

        // Add the main view to the viewport
        // As the user is not logged in, it is valid to see the main view
        // So, the current view of viewport is mutated/replaced to be 'Main' view of the application which was priorly commented
        // 'app-main' is nothing but the Main View Component 'Main.js' of the application
        // Thus, the View Component 'Main.js' would be instantiated and the application view would be updated accordingly
        Ext.create({
            xtype: 'app-main'
        });
    }

});
