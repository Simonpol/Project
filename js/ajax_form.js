$(document).ready(function(){
	var name = $("#name").val();
	var email = $("email").val();
	var message = $("message").val();
$("#mail_form").submit(function(e){
	e.preventDefault();
	$.ajax({
		url: "../send.php",
		tpye: "POST",
		cache: false,
		data: { 'name': name, 'email': email, 'message': message },
		dataType: 'html',
		beforeSend: function(){
			$("#push").prop("disabled",true);
		},
		succsess: function(data){
			if(!data){
				alert("ошибка при отправке данных");
			}
			else{
				$("#mail_form").trigger("reset");
				alert(data);	
			}
			
			$("push").prop("disabled", false);
		},
	})
	
})
})