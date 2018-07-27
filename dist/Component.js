sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"assignmentroutingassignmentrouting/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("assignmentroutingassignmentrouting.Component", {

		metadata: {
			manifest: "json"
		},
		init: function() {
		
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
				var model=new sap.ui.model.json.JSONModel();
				model.loadData("model/data.json");
				this.setModel(model);
				
		}
	});
});