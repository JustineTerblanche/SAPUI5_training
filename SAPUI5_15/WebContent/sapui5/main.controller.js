sap.ui.controller("sapui5.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5.main
*/
	onInit: function() {
			//console.log(oMock.getEntitySetData("Categories"));

	    var mock = true;
	    
		if(mock == true){
			var Uri ="proxy/http/mymockserver/";
			var oMock = new sap.ui.core.util.MockServer({
				rootUri: Uri
			});
			var metadataUrl = "sapui5/model/metadata.xml";
			var mockdatabase = "sapui5/model/";
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
	    	// defaultBindingMode: "TwoWay"
	    	 });
		sap.ui.getCore().setModel(oModel, 'data1');

	},
handleRowPress : function(e){
		
		var name = e.getParameter("listItem");
		var path1 = name.oBindingContexts.data1.sPath;
		var item = sap.ui.getCore().getModel('data1').getProperty(path1);
		console.log(item);
		var myModel = new sap.ui.model.json.JSONModel(item);
		sap.ui.getCore().setModel(myModel, 'selected');
		app.addDetailPage(Prod_page);
		app.toDetail('Products', 'slide');
		
	},
aButtonClicked: function(){
		//app.to("Products");
	}

//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5.main
*/
//	onExit: function() {
//
//	}

});