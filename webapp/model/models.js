sap.ui.define([
	"sap/ui/model/json/JSONModel",
	
], function(JSONModel) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel("assignmentroutingassignmentrouting/model/data.json");
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});