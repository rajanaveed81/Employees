sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("SchoolMSchoolM.controller.employee", {
	ondel: function(oEvent) {
			
			
			// var myModel = sap.ui.getCore().getModel("myModel");
			// myModel.setHeaders({
			// 	"X-Requested-With": "X"
			// });
			var oSelectedItem = oEvent.getParameter("listItem");
			var empid = oSelectedItem.mAggregations.cells[0].mProperties.text;
			var emfnam = oSelectedItem.mAggregations.cells[1].mProperties.text;
			var emlnam = oSelectedItem.mAggregations.cells[2].mProperties.text;
			var fun = oSelectedItem.mAggregations.cells[3].mProperties.text;
			var adr = oSelectedItem.mAggregations.cells[4].mProperties.text;
			var ph = oSelectedItem.mAggregations.cells[5].mProperties.text;
			var us = oSelectedItem.mAggregations.cells[6].mProperties.text;
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
						text: "Employee First Name"
					}),
					new sap.m.Input("EmName", {
						editable: false,
						value: emfnam
					}),
					new sap.m.Label({
						text: "Employee last Name"
					}),
					new sap.m.Input("Expno", {
						editable: false,
						value: emlnam
					}),
					new sap.m.Label({
						text: "Function"
					}),
					new sap.m.Input("Category", {
						editable: false,
						value: fun
					}),
					new sap.m.Label({
						text: "Address"
					}),
					new sap.m.Input("title", {
						editable: false,
						value: adr
					}),
					new sap.m.Label({
						text: "Phone"
					}),
					new sap.m.Input("Descr", {
						editable: false,
						value: ph
					}),
					new sap.m.Label({
						text: "User"
					}),
					new sap.m.Input("Amount", {
						editable: false,
						value: us
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