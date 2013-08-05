(function () {
	var data = $(".trackData a"); 
	var url = "http://vk.com/audio?q=" + data.get(0).innerText + " " + data.get(1).innerText;
	return url;
})()