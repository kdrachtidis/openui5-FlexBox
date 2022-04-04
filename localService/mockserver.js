sap.ui.define([
    "sap/ui/core/util/MockServer",
], function (MockServer) {
    "use strict";

    return {
		/**
		 * Initializes the mock server.
		 * You can configure the delay with the URL parameter "serverDelay".
		 * The local mock data in this folder is returned instead of the real data for testing.
		 * @public
		 */
        onInit: function () {
            // create
            var oMockServer = new MockServer({
                rootUri: "/"
            });

            oMockServer.simulate("localService/metadata.xml", {
                sMockdataBaseUrl: "localService/mockdata",
                bGenerateMissingMockData: true
            });

            oMockServer.start();

            console.log("Running the app with mock data");
        }

    };

});