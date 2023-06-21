function sendMail(){
	
	var params = {
		
		name:document.getElementById("name").value,
		email:document.getElementById("email").value,
		phone:document.getElementById("phone").value,
		message: document.getElementById("message").value,
	};
	
	const servideID = "service_u8x5fcu";
    const templateID = "template_52bfyqe"
	
	emailjs.send(serviceID,templateID,params)
	.then(
	(res =>{
		document.getElementById("name").value = "";
		document.getElementById("email").value ="";
		document.getElementById("phone").value ="";
		document.getElementById("message").value ="";
		console.log(res);
		alert("Your message was sent successfully");
		
	})
.catch ((err) => console.log(err));
}

