sap.ui.jsview("sapui5.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5.main
	*/ 
	getControllerName : function() {
		return "sapui5.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5.main
	*/ 
	createContent : function(oController) {
		oTable = new sap.m.Table({
			id: "table1",
			headerText:"Categories",
			mode: sap.m.ListMode.SingleSelect,
			select: oController.handleRowPress,
			columns: [
			          new sap.m.Column({header: new sap.m.Label({text: "ID"})}),
			          new sap.m.Column({header: new sap.m.Label({text: "Name"})}),
			          new sap.m.Column({header: new sap.m.Label({text: "Description"})})
 
			        ]
		});
		var otemplate = new sap.m.ColumnListItem({
			cells: [
			        	new sap.m.Text({text: "{data1>CategoryID}"}),
			        	new sap.m.Text({text: "{data1>CategoryName}"}),
			        	new sap.m.Text({text: "{data1>Description}"})

			        ]
		});
		oTable.bindItems({
			path: "data1>/Categories",
			template: otemplate,
		});
		
		var aButton = new sap.m.Button();
		aButton.setText("click this button");
		aButton.attachPress(oController.aButtonClicked);	
	
	var page1 = new sap.m.Page({
			title: "Categories",
			enableScrolling: true,
			content: [
			          aButton,
			          oTable
			]
		});
 		return page1;
	}




});