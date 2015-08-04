sap.ui.controller("sapui5_xml.main", {


ButtonEdit: function(){
	alert("this was pressed");
},	
	/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5_xml.main
*/


	onInit: function() {
var mock = true;
	    
		if(mock == true){
			var Uri ="proxy/http/mymockserver/";
			var oMock = new sap.ui.core.util.MockServer({
				rootUri: Uri
			});
			var metadataUrl = "sapui5_xml/model/metadata.xml";
			var mockdatabase = "sapui5_xml/model/";
			oMock.simulate(metadataUrl,	{
					'sMockdataBaseUrl': mockdatabase,
					'bGenerateMissingMockData': false
				});
			oMock.start();
			
		}
		else{
			Uri = "proxy/http/services.odata.org/V2/Northwind/Northwind.svc/";
		}
		
	     var oModel = new sap.ui.model.odata.v2.ODataModel(Uri, {
	    	 json: true,
	    	 });
		sap.ui.getCore().setModel(oModel, 'data1');
		
		
		
		 var oBus = sap.ui.getCore().getEventBus();
	        oBus.subscribe("nav", "toD", this.navToD, this);
	        oBus.subscribe("nav", "toM", this.navToM, this);
	        oBus.subscribe("nav", "backD", this.navBackD, this);
	
	    },
	    
	    navToD : function(channelId, eventId, data) {
	    
	        var oView = sap.ui.getCore().byId(data.id);	    
	        var oApp = sap.ui.getCore().byId("app");
	        oApp.toDetail(oView, "slide", data.context);
	    },
	    navToM : function(channelId, eventId, data) {
	    	var oView = sap.ui.getCore().byId(data.id);	    
	        var oApp = sap.ui.getCore().byId("app");
	        oApp.toMaster(oView, "slide", data.context);
	    },

	    navBackD : function(channelId, eventId, data) {
	    	var oApp = sap.ui.getCore().byId("app");
	        oApp.backDetail();
	        
	    }
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5_xml.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5_xml.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5_xml.main
*/
//	onExit: function() {
//
//	}

});