sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		getAppModel: function() {
			var oDataset = {"demos" : [
				   { "title" : "ABAP Cloud", "subtitle" : "", "statusSchema" : "Success", "score" : 91 },
				   { "title" : "HANA XSA", "subtitle" : "", "statusSchema" : "Success", "score" : 88 },
				   { "title" : "bad demo ", "subtitle" : "", "statusSchema" : "Success", "score" : 56 }
				]
			};
			
			var oModel = new JSONModel(oDataset);
			oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		}
		

	};
});