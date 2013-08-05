(function () {
	var data = document.querySelectorAll(".trackData a");
	var url = "http://vk.com/audio?q=" + data[0].innerText + " " + data[1].innerText;
	return url;
})()