/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('LoginApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'LoginApp',

    stores: [
        // TODO: add global / shared stores here
    ],

    // The first function to execute as soon as the application starts running
    launch: function () {
        // This variable is used to store the status of user whether Logged In or yet to Login
        var userAuthenticationStatus;

        // Local Storage of the browser is scanned to check the flag and know if user is logged in or yet to be
        userAuthenticationStatus = localStorage.getItem('UserIsLoggedIn');

        // The viewport of application is set with xtype of View Component based on the flag in the Local Storage of the browser if the user is logged in
        // If user is logged in, it will see the 'Main' View Component else it will see the 'Login' View Component to login the application
        Ext.create({
            xtype: userAuthenticationStatus? 'app-main' : 'login_window'
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
