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
	// Сообщение при надатии на "Проекты"
	var projectMes = function(){
		let project = document.getElementById("project");
		project.addEventListener("click", function(){
			alert("Блок в разработке");
		});
	};
	projectMes();
	
	// Появление элементов при скролле

	var appearScroll = function(){
		let fline = document.getElementById("skills__listone");
		let sline = document.getElementById("skills__listtwo");
		let skills = document.getElementById("skills");
		let baselocation = 0;
		fline.style.opacity = 0;
		fline.style.marginLeft = 100 + "px";
		sline.style.opacity = 0;
		sline.style.marginRight = 100 + "px";
		
		window.addEventListener("scroll", function(){
			let distance = window.pageYOffset;
			if ( distance >= 500 ){
				fline.style.opacity = 1;
				fline.style.transition = "3s";
				fline.style.marginLeft = 0 + "px";
				sline.style.opacity = 1;
				sline.style.transition = "3s";
				sline.style.marginRight = 0;
			}
		})
	};
	appearScroll();

	$(".header__burger").click(function(event){
		$(".header__burger, .header__navigation, .header__navigation__items, .header__list, .header__link").toggleClass("active");
	})



})