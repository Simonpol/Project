$(document).ready(function(){
	// Меню сверху становится черным при скроллинге
	$(window).scroll(function(){
		$(".header").css({
			"background-color":"black",
			"transition":"1s",
		});
	})
	// Заливка при наведении курсора на кнопку
	$("#btn").hover(function(){
		$("#btn").css({
			"background-color": "white",
			"color": "black",
			"border-color": "orange",
		});
	},
	function(){
		$("#btn").css({
			"background-color": "transparent",
			"color":"white",
			"border-color": "white",
		});
	});
	// Прокрутка до блока "Какие задачи я выполняю"
	var butn = document.getElementById("btn");
	var dp = document.getElementById("skills");

	function scrollInSkills(){
		dp.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}
	butn.addEventListener("click", scrollInSkills)
	// Конец прокрутки

	



})