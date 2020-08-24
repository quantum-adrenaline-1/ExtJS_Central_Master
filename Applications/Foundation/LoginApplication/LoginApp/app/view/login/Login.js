/**
 * - This JS module is used to create a base Window class having the Login form.
 * - This view is first shown to the user when the user first loads the application
 *   and is not logged in.
 * - A form panel is created inside this window which is the Login form
 */

Ext.define('LoginApp.view.login.Login', {
    // Extending the base Window component of ExtJS
    extend: 'Ext.window.Window',

    // X type is used to create the instance of this View Component class
    xtype: 'login_window',

    // Additional configuration of the Login Window

    // 'requires' is the necessary imports for this View Component 'Login', required before instantiating this View Component
    requires: [
        // To perform some behaviour for controlling and manipulating the View of Login Component using JavaScript methods custom defined or life-cycle ones
        'LoginApp.view.login.LoginController',
        // To created the Login form inside the Window of this View Component
        'Ext.form.Panel'
    ],

    // Imported View Controller 'LoginController' is set as the View Controller for the View Component Login
    controller: 'login_controller',

    // CSS config
    bodyPadding: 10,

    // Title of the Window component for Login form
    title: 'Login Window',

    /* Secondary JavaScript config for Window component (mostly the flag attributes) */
    // This is set to false as there is no View behind the Window and closing Login Window will result in a blank screen
    closable: false,
    // This property is set to true to automatically show the Window as soon as the Login component is instantiated and loaded for View, as the Window component is hidden by default
    autoShow: true,

    // This config has Form Panel as child of this Window component and Form Panel further having it's own children
    items: {
        // X-Type of the Form Panel Component is set for instantiating it as provided by Ext JS
        xtype: 'form',
        reference: 'form',

        // Children of the Login Form Panel Component - User inputs and Validation display fields
        items: [{
            // Type of the text box provided by ExtJS is 'textfield'
            xtype: 'textfield',
            // This is the key of this attribute set in the object created once the form is submit
            name: 'username',
            // Field name displayed in the form for the user
            fieldLabel: 'Username',
            // Have a non-blank value for the Form to submit (Compulsory Form Field)
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            // This is validation message display field for the user to fill the form correctly as required for successful submit and
            // understand the error from the message when committed one
            xtype: 'displayfield',
            hideEmptyLabel: false,
            // Validation message
            value: 'Enter any non-blank password'
        }],

        // Collection for buttons of the form
        buttons: [{
            // Text of the button
            text: 'Login',
            // Binding the button actions to the Login Form actions
            // Button will not be clickable unless all the compulsory form fields are filled
            formBind: true,
            // Event handler/listener functions for the button, defined in the Login View Controller Component LoginController
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }

});
