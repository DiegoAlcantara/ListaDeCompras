var PortalMobile;
(function (PortalMobile) {
    "use strict";

    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;

        function onDeviceReady() {
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
        }

        function onPause() {
        }

        function onResume() {
        }
    })(PortalMobile.Application || (PortalMobile.Application = {}));
    var Application = PortalMobile.Application;

    function onBatteryStatus(info) {
        alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged);
    }

    function onBatteryLow(info) {
        alert("BATTERY STATUS:  Baterry is low Level: " + info.level);
    }

    window.onload = function () {
        Application.initialize();
    };
})(PortalMobile || (PortalMobile = {}));
