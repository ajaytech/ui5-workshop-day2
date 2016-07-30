sap.ui.jsview("router.view.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf router.first
	*/ 
	getControllerName : function() {
		return "router.view.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf router.first
	*/ 
	createContent : function(oController) {
 		var oPage =  new sap.m.Page({
			title: "First",
			content: [
			
			]
		});
 		var oFooter = new sap.m.Bar({
 	        contentRight: [
 	          new sap.m.Button({
 	            text: "go to next page",
 	            press: [oController.next, oController]
 	          })
 	        ]
 	      });
 		oPage.setFooter(oFooter);
 		return oPage;
 		
	}

});