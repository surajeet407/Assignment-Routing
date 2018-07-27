sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("assignmentroutingassignmentrouting.controller.master", {

		
			onInit: function() {
				var model=this.getOwnerComponent().getModel();
				this.getView().setModel(model);
			},

		onBeforeRendering: function() {
			},

		onAfterRendering: function() {
		 
		},
		onExit: function() {
			},
			itempress:function(oevent){
				this.contextpath=oevent.getSource().getBindingContext().getProperty("productdetails");
				var model=new sap.ui.model.json.JSONModel(this.contextpath);
					this.getOwnerComponent().getRouter().navTo("details");
				var detailview=this.getOwnerComponent().getRouter().getView("assignmentroutingassignmentrouting.view.detail");
					detailview.setModel(model);
				var detail=detailview.byId("detail");
				var path=oevent.getSource().getBindingContext().getObject().id;
					detail.setTitle("Product Id : " + path);
			}

	});

});