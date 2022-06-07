sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("SchoolMSchoolM.controller.login", {
		ondel: function(oEvent) {
			
			
			// var myModel = sap.ui.getCore().getModel("myModel");
			// myModel.setHeaders({
			// 	"X-Requested-With": "X"
			// });
			var oSelectedItem = oEvent.getParameter("listItem");
			var empid = oSelectedItem.mAggregations.cells[0].mProperties.text;
			var emnam = oSelectedItem.mAggregations.cells[1].mProperties.text;
			var id = oSelectedItem.mAggregations.cells[2].mProperties.text;
			var fnam = oSelectedItem.mAggregations.cells[3].mProperties.text;
			var lnam = oSelectedItem.mAggregations.cells[4].mProperties.text;
			var fun = oSelectedItem.mAggregations.cells[5].mProperties.text;
			var ph = oSelectedItem.mAggregations.cells[6].mProperties.text;
		//	var adr = oSelectedItem.mAggregations.cells[7].mProperties.text;
			var that = this;
			var dialog = new sap.m.Dialog({
				title: "Edit Data",
				type: "Message",
				content: [
						new sap.m.Label({
						text: "Employee Id."
					}),
					new sap.m.Input("EmId", {
						editable: false,
						value: empid
					}),
						new sap.m.Label({
						text: "Employee Name"
					}),
					new sap.m.Input("EmName", {
						editable: false,
						value: emnam
					}),
					new sap.m.Label({
						text: "Expense No."
					}),
					new sap.m.Input("Expno", {
						editable: false,
						value: id
					}),
					new sap.m.Label({
						text: "Category"
					}),
					new sap.m.Input("Category", {
						editable: true,
						value: fnam
					}),
					new sap.m.Label({
						text: "Title"
					}),
					new sap.m.Input("title", {
						value: lnam
					}),
					new sap.m.Label({
						text: "Descr"
					}),
					new sap.m.Input("Descr", {
						value: fun
					}),
					new sap.m.Label({
						text: "Amount"
					}),
					new sap.m.Input("Amount", {
						value: ph
					})
				],
				beginButton: new sap.m.Button({
					text: "Delete",
					press: function() {
	 MessageToast.show("In JSON File You Can Not perform Delete");
	
						dialog.close();

					}
				}),
				endButton: new sap.m.Button({
					text: "Cancel",
					press: function() {


						dialog.close();

					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			dialog.open();
		}
	});
});