sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History",
	"sap/ui/model/Filter",
	"sap/ushell/services/Container"
], function(Controller, JSONModel, MessageToast, History, Filter, Container) {
	"use strict";

	return Controller.extend("SchoolMSchoolM.controller.admin", {
		 onInit: function()
     {
   
     },
		
	onClick: function(oEvent) {

			var oModel;
			var usertype = this.byId("select");
			this.oModel = new sap.ui.model.json.JSONModel();
			var username = this.byId("uid").getValue();
			var password = this.byId("pasw").getValue();
			var usrtype = usertype.mProperties.selectedKey;
			if (usrtype == "item1") {

				var items = this.getView().byId("table0").getItems();
				var oTable = this.getView().byId("table0");

				for (var k = 0; k < items.length; k++) {

					//	var oTable = this.getView().byId("idServiceTable");
					var nvalue = oTable.getItems()[k].getCells()[0].getText();
					if (nvalue == username && oTable.getItems()[k].getCells()[1].getText() == password) {
						var oCust1 = this.getView().byId("uid").getValue();
						var rout = sap.ui.core.UIComponent.getRouterFor(this);
						rout.navTo("employee", {
						
						});
						//	alert("Allowed !");

					} else {


                       this.byId("uid").setValueState(sap.ui.core.ValueState.Error);
                        this.byId("pasw").setValueState(sap.ui.core.ValueState.Error);
                     
							//	alert("Wrong User name or Password!");
					}
				}

			};
			if (usrtype == "item2") {
				var items = this.getView().byId("table1").getItems();
				var oTable = this.getView().byId("table1");

				for (var k = 0; k < items.length; k++) {
					//	var oTable = this.getView().byId("idServiceTable");
					var nvalue = oTable.getItems()[k].getCells()[0].getText();
					if (nvalue == username && oTable.getItems()[k].getCells()[1].getText() == password) {
						var oCust1 = this.getView().byId("uid").getValue();
						var oCust2 = this.getView().byId("pasw").getValue();
						var rout = sap.ui.core.UIComponent.getRouterFor(this);
						rout.navTo("login", {
						
						});
					//	alert("Allowed !");

					} else {
                           this.byId("uid").setValueState(sap.ui.core.ValueState.Error);
                           this.byId("pasw").setValueState(sap.ui.core.ValueState.Error);
						//	alert("Wrong User name or Password!");

					}
				}
			} //	sap.ui.base.ManagedObject
			//var usertype = this.byId("usertype");
			//This code was generated by the layout editor.
		}
	});
});