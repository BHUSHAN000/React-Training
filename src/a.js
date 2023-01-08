//how to use fetch api call in javascript?
// url (required)
fetch('URL_OF_YOUR_API', {//options => (optional)
    method: 'get' //Get / POST / ...
}).then(function(response) {
    //response
}).catch(function(err) {
// Called if the server returns any errors
  console.log("Error:"+err);
});


 fetch('YOUR_URL')
    .then(function(response){
         // response is a json string
        return response.json();// convert it to a pure JavaScript object
    })
    .then(function(data){
         //Process Your data  
      if (data.is_taken_email)   
           alert(data);
    })
    .catch(function(err) {
        console.log(err);
      });



