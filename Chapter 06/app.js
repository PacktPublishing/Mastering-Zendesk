(function() {

  return {
    events: {
      'app.activated':'doSomething', 
    },

	doSomething: function() {
		
		//Use Data API to obtain email address of requester
		var email = this.ticket().requester().email();
		
		//Generate the link
		var link ='https://backend.examplecomp.com/admin/users/' + email;
		
		//Manipulate link in layout
		this.$("#backend_href_element").attr("href", link);
	}
  };

}());
