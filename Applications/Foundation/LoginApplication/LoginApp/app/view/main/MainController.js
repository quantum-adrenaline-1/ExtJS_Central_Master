/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    // Function to handle the user logging out of the application
    // This is done by removing the user from the browser session memory, i.e the Local Storage of the browser
    onLogoutButtonClick: function () {
        // Removing the flag from the browser memory which states that the user is logged in
        // This created the situation that the user is logged in no-more
        localStorage.removeItem('UserIsLoggedIn');

        // Destroying the current view and it's components for the new/next View to load and display via the Viewport
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login_window'
        });
    }
});
