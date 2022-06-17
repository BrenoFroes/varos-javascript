$(document).scroll(function () {
	var y = $(this).scrollTop();

	if (y > 300) {
		$(".back-to-the-top-button").addClass("back-to-the-top-button-scrolled");
	} else {
		$(".back-to-the-top-button").removeClass("back-to-the-top-button-scrolled");
	}
});

$(".back-to-the-top-button").click(function () {
	window.scrollTo({ top: 0, behavior: "smooth" });
});
