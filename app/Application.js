/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('zhouyao.Application', {
    extend: 'Ext.app.Application',
    
    name: 'zhouyao',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    //启动的时候创建
    launch: function () {
        // TODO - Launch the application
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("TutorialLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'Extappviewbordermain': 'login'
        });
        // Ext.create( {
        //     xtype:'Extappviewbordermain'
        // });
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
