sap.ui.controller("sapui5.ProductList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5.ProductList
*/

		onInit: function() {
			/*var oModel = new sap.ui.model.odata.v2.ODataModel(
					"proxy/http/services.odata.org/V2/Northwind/Northwind.svc/",
					{
						json: true
					}
				);
			sap.ui.getCore().setModel(oModel, 'data2');
*/
		},
CreateEntry: function() {
	var CreateDialog = new sap.m.Dialog('CreateE',{
		title: "Create product Entry",
		type: sap.m.DialogType.Message,
		verticalScrolling: true,
		content: [
			         new sap.m.Label({text: "Product name"}),
			         new sap.m.Input({
			        	 id: "Pname",
			        	 type: sap.m.InputType.Text
			        	 }),
			         new sap.m.Label({text: "Product ID"}),
			         new sap.m.Input({
			        	 id: "Prod_id",
			        	 type: sap.m.InputType.Text
			        	 }),
			         new sap.m.Label({text: "Category ID"}),
			         new sap.m.Input({
			        	 id: "Cat_id",
			        	 type: sap.m.InputType.Text
			        	 }),
			         new sap.m.Label({text: "Supplier ID"}),
			         new sap.m.Input({
			        	 id: "Sup_id",
			        	 type: sap.m.InputType.Text
			        	 }),
			        new sap.m.Label({text: "Quantity per Unit"}),
				    new sap.m.Input({
				        	id: "QpU",
				         type: sap.m.InputType.Text
				         }),
			         new sap.m.Label({text: "Unit price"}),
			         new sap.m.Input({
			        	 id: "Unit_p",
			        	 type: sap.m.InputType.Text
			        	 }),
			         new sap.m.Label({text: "Units in stock"}),
			         new sap.m.Input({
			        	 id: "stock",
			        	 type: sap.m.InputType.Text
			        	 }),
			         new sap.m.Label({text: "Units on order"}),
			         new sap.m.Input({
			        	 id: "order",
			        	 type: sap.m.InputType.Text
			        	 }),
			         new sap.m.Label({text: "Reorder level"}),
			         new sap.m.Input({
			        	 id: "reorder",
			        	 type: sap.m.InputType.Text
			        	 }),
			         new sap.m.Label({text: "Discontinued"}),
			         new sap.m.CheckBox('dis')
			         ],
		buttons:[
		         new sap.m.Button({
		        	 type: sap.m.ButtonType.Back,
		        	 press: function(){
		        		 CreateDialog.close();
		        		 sap.ui.getCore().byId("CreateE").destroy();
		        		 }
		         }),
		         new sap.m.Button({
		        	 text: "save",
		        	 press: function(e){
		        		var newEntry = {};
		        		newEntry.ProductName =sap.ui.getCore().byId("Pname").getValue();
		        		newEntry.ProductID =sap.ui.getCore().byId("Prod_id").getValue();
		        		newEntry.CategoryID =sap.ui.getCore().byId("Cat_id").getValue();
		        		newEntry.SupplierID =sap.ui.getCore().byId("Sup_id").getValue();
		        		newEntry.QuantityPerUnit =sap.ui.getCore().byId("QpU").getValue();
		        		newEntry.UnitPrice =sap.ui.getCore().byId("Unit_p").getValue();
		        		newEntry.UnitsInStock =sap.ui.getCore().byId("stock").getValue();
		        		newEntry.UnitsOnOrder =sap.ui.getCore().byId("order").getValue();
		        		newEntry.ReorderLevel =sap.ui.getCore().byId("reorder").getValue();
		        		newEntry.Discontinued =sap.ui.getCore().byId("dis").getSelected();
		        		sap.ui.getCore().getModel('data1').create('/Products', newEntry);
		        		//sap.ui.getCore().getModel('data1').attachRequestCompleted(function(){
		        		//		CreateDialog.close();
		        		//		sap.ui.getCore().getModel('data1').refresh();
		        		//		console.log("this one");
		        		//	});
		        		//sap.ui.getCore().getModel('data1').attachRequestFailed(function(){
		        		//		CreateDialog.close();
		        		//		console.log("failed");
		        		//	});
		        		sap.ui.getCore().getModel('data1').refresh();       		
		        		
		        		CreateDialog.close();
		        		
			        	sap.ui.getCore().byId("CreateE").destroy();
		        		
		        	 }
		         }),
		         new sap.m.Button({
		        	 text: "clear",
		        	 press: function(){
		        		 sap.ui.getCore().byId("Pname").setValue("");
			        	sap.ui.getCore().byId("Prod_id").setValue("");
			        	sap.ui.getCore().byId("Cat_id").setValue("");
			        	sap.ui.getCore().byId("Sup_id").setValue("");
			        	sap.ui.getCore().byId("QpU").setValue("");
			        	sap.ui.getCore().byId("Unit_p").setValue("");
			        	sap.ui.getCore().byId("stock").setValue("");
			        	sap.ui.getCore().byId("order").setValue("");
			        	sap.ui.getCore().byId("reorder").setValue("");
			        	sap.ui.getCore().byId("dis").setSelected("false");
		        	 }
		         })
		         ]
	});
	


	CreateDialog.open();
	
},
 DeleteEntry: function(){
	 var name = sap.ui.getCore().byId("Productslist").getSelectedItem();
		var path1 = name.oBindingContexts.data1.sPath;
		var item = sap.ui.getCore().getModel('data1').getProperty(path1);
		console.log(path1);
		var Deletedialog = new sap.m.Dialog('deleteDialog',{
			title: "Delete Product",
			contents: [
			           new sap.m.Label({text: "Are you sure to delete this product?"})
			           ],
			buttons: [
			          new sap.m.Button({
			        	  text: "cancel",
				        	 press: function(){
				        		 Deletedialog.close();
				        		 sap.ui.getCore().byId("deleteDialog").destroy();
				        		 }
				         }),
				         new sap.m.Button({
				        	 text: "confirm",
				        	 press: function(){
				        		 sap.ui.getCore().getModel('data1').remove(path1, item);
				        		 sap.ui.getCore().getModel('data1').refresh();
				        		 Deletedialog.close();
				        		 sap.ui.getCore().byId("deleteDialog").destroy();
				        	 }
				         })
			          ]
		});
		Deletedialog.open();
 },
UpdateEntry: function(){
	var name = sap.ui.getCore().byId("Productslist").getSelectedItem();
	var path1 = name.oBindingContexts.data1.sPath;
	var item = sap.ui.getCore().getModel('data1').getProperty(path1);
	console.log(item);

	var updateDialog = new sap.m.Dialog('UpdateE',{
		title: "Edit Product Entry",
		type: sap.m.DialogType.Message,
		verticalScrolling: true,
		content:[
				new sap.m.Label({text: "Product name"}),
				new sap.m.Input({
					 id: "Pname",
					 type: sap.m.InputType.Text,
					 value: item.ProductName
					 }),
				new sap.m.Label({text: "Product ID"}),
				new sap.m.Input({
					 id: "Prod_id",
					 type: sap.m.InputType.Text,
					 value: item.ProductID
					 }),
				new sap.m.Label({text: "Category ID"}),
				new sap.m.Input({
					 id: "Cat_id",
					 type: sap.m.InputType.Text,
					 value: item.CategoryID
					 }),
				new sap.m.Label({text: "Supplier ID"}),
				new sap.m.Input({
					 id: "Sup_id",
					 type: sap.m.InputType.Text,
					 value: item.SupplierID
					 }),
				new sap.m.Label({text: "Quantity per Unit"}),
				new sap.m.Input({
				   	id: "QpU",
				    type: sap.m.InputType.Text,
					 value: item.QuantityPerUnit
				    }),
				new sap.m.Label({text: "Unit price"}),
				new sap.m.Input({
					 id: "Unit_p",
					 type: sap.m.InputType.Text,
					 value: item.UnitPrice
					 }),
				new sap.m.Label({text: "Units in stock"}),
				new sap.m.Input({
					 id: "stock",
					 type: sap.m.InputType.Text,
					 value: item.UnitsInStock
					 }),
				new sap.m.Label({text: "Units on order"}),
				new sap.m.Input({
					 id: "order",
					 type: sap.m.InputType.Text,
					 value: item.UnitsOnOrder
					 }),
				new sap.m.Label({text: "Reorder level"}),
				new sap.m.Input({
					 id: "reorder",
					 type: sap.m.InputType.Text,
					 value: item.ReorderLevel
					 }),
				new sap.m.Label({text: "Discontinued"}),
				new sap.m.CheckBox('dis',{
					selected:item.Discontinued
					})
		         ],
		buttons: [
					new sap.m.Button({
						 type: sap.m.ButtonType.Back,
						 press: function(){
							updateDialog.close();
							 sap.ui.getCore().byId("UpdateE").destroy();
							 }
					}),
					new sap.m.Button({
						text: "save changes",
						press: function(){
							var newEntry = {};
			        		newEntry.ProductName =sap.ui.getCore().byId("Pname").getValue();
			        		newEntry.ProductID =sap.ui.getCore().byId("Prod_id").getValue();
			        		newEntry.CategoryID =sap.ui.getCore().byId("Cat_id").getValue();
			        		newEntry.SupplierID =sap.ui.getCore().byId("Sup_id").getValue();
			        		newEntry.QuantityPerUnit =sap.ui.getCore().byId("QpU").getValue();
			        		newEntry.UnitPrice =sap.ui.getCore().byId("Unit_p").getValue();
			        		newEntry.UnitsInStock =sap.ui.getCore().byId("stock").getValue();
			        		newEntry.UnitsOnOrder =sap.ui.getCore().byId("order").getValue();
			        		newEntry.ReorderLevel =sap.ui.getCore().byId("reorder").getValue();
			        		newEntry.Discontinued =sap.ui.getCore().byId("dis").getSelected();
			        		sap.ui.getCore().getModel('data1').update(path1, newEntry);
			        		
			        		sap.ui.getCore().getModel('data1').refresh();       		
			        		
			        		updateDialog.close();
			        		
				        	sap.ui.getCore().byId("UpdateE").destroy();
						}
					})
		          ]
	});
	updateDialog.open();
}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5.ProductList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5.ProductList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5.ProductList
*/
//	onExit: function() {
//
//	}

});