sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("assignmentroutingassignmentrouting.controller.detail", {

	
		onInit: function() {
		
		},
			details:function(evt){
					if (this.frag) {
			        			this.frag.destroy(true);
									}
					var pressitem=evt.mParameters.id;
					this.detail=this.getView().byId("SplitAppDemo");
				
						this.frag=sap.ui.xmlfragment("assignmentroutingassignmentrouting.fragment.vendor",this);
							this.contextpath=evt.getSource().getBindingContext().getProperty("vendordetails");
						var model=new sap.ui.model.json.JSONModel(context);
						this.frag.setModel(model);
						this.detail.addDetailPage(this.frag);
						this.detail.to(this.detail.getDetailPages()[1]);
				
},
	
		onBeforeRendering: function() {
			},

		onAfterRendering: function() {
			},

		onExit: function() {
			}

	});

});