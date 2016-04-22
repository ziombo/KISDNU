//site.js
if ($(window).width() < 768) {
	$("#newCard").css("width", "100%");
	$("#questionLabel").css("color", "white");
}
else {
	$("#newCard").css("width", "625px");
}
$(window).resize(function () {
	if ($(window).width() < 768) {
		$("#newCard").css("width", "100%");
		$("#questionLabel").css("color", "white");
	}
	else {
		$("#newCard").css("width", "625px");
		$("#questionLabel").css("color", "#2c3e50");
	}
});