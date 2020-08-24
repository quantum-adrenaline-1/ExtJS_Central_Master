/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'LoginApp',

    extend: 'LoginApp.Application',

    requires: [
        'LoginApp.view.main.Main'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //

    /** The Main view of the application is not created yet if the user is not logged in,
      * So commenting the 'mainView' config for now below
      * Commenting this will lead ot a blank screen in app as no view class is instantiated for now
      */
    // mainView: 'LoginApp.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to LoginApp.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
