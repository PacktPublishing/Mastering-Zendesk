(function() {

  return {
    events: {
      'app.activated':'doSomething',
      'click #button1':'ADDclose_this',
	  'click #button2':'ADDno_feedback'	  
    },

    doSomething: function() {
		
		//This is where we start
		console.log("App started...");
		
		//Hide Button (not working)
		this.$('.object_options_btn').css({
            'display' : 'none'
        });
		
		//Hide Button (working)
		var _new_CSS_rules = '<style type="text/css">.object_options_btn { display: none !important; }</style>';
		this.$( "#append_here" ).append( _new_CSS_rules );
    },
	
	ADDclose_this: function() {
		
		//Log
		console.log("Button1 pressed...");
		
		//if the tag already exists...
		if (this.ticket().tags().indexOf("close_this") != -1) 
		{
			//...we remove it again
			this.ticket().tags().remove("close_this");
		}
		//...otherwise... 
		else 
		{
			//...we will add the tag
			this.ticket().tags().add("close_this");
		}	
    },
	
	ADDno_feedback: function() {
		
		//Add tag
		console.log("Button2 pressed...");
		
		this.ticket().tags().add("no_feedback");
    },
  };

}());
