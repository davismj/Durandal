﻿define(function(require) {
    var router = require('durandal/plugins/router');

    return {
        displayName: 'Navigation',
        router: router,
        activate: function() {
            router.mapAuto('samples/navigation/viewmodels');
            return router.activate('first');
        }
    };
});