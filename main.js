/**
 * Created by maiquel on 10/08/16.
 */

(function () {
	"use strict";
	var celcius = true;

	var position = {
		latitude: null,
		longitude: null
	};

	var weather = {
		status: null,
		temperature: null,
		location: null,
		humidity: null
	};

	var nextdays = [];

	$(document).ready(function () {
		getWeather();
	});


	function getWeather() {

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (pos) {
				position.latitude = pos.coords.latitude;
				position.longitude = pos.coords.longitude;

				var url = "https://simple-weather.p.mashape.com/weatherdata?lat=";
				url += position.latitude + "&lng=" + position.longitude;

				$.ajax({
					url: url,
					type: 'GET',
					dataType: 'json',
					success: setCurrentWeather,
					error: function () {
						console.log('Failed to get weather from server!');
					},
					beforeSend: setHeader
				});

			});
		}
	}

	function setHeader(xhr) {
		xhr.setRequestHeader('X-Mashape-Key', 'fIC4C3rGVVmshkkJiXMrWAre9v4Jp1zmdJUjsnqUUazYcvHUN8');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.setRequestHeader('Accept', 'application/json');
	}

	function setCurrentWeather(data) {

		var weatherItem = data.query.results.channel.item;
		var location = data.query.results.channel.location;
		weather.location = location.city + " - " + location.region;
		weather.temperature = weatherItem.condition.temp;
		weather.status = weatherItem.condition.code;
		weather.humidity = data.query.results.channel.atmosphere.humidity;

		var days = weatherItem.forecast;

		days.forEach(function (item) {

			var newDay = {
				day: item.day,
				high: item.high,
				low: item.low,
				status: item.code
			};
			nextdays.push(newDay);
		});

		initComponents();

		$("#toggle-temp").click(toggleTemp);


	}

	function initComponents() {
		//locations info
		$('#location').html(weather.location);

		//temperature info
		var temperatureCell = $('#temperature');
		temperatureCell.html(weather.temperature);
		var a = document.createElement("a");
		$(a).html(" ºC");
		$(a).attr("href", "#");
		$(a).attr("id", "toggle-temp");
		temperatureCell.append(a);

		//status graphics
		$('#status').append(getIcon(weather.status));


		//humidity info
		$('#humidity').html(weather.humidity + "%");

		//nextdays populate
		var cells = $('#nextdays');
		var titleCells = cells.find('th');

		for (var i = 0; i < titleCells.length; i++) {
			$(titleCells[i]).html(nextdays[i + 1].day);
		}

		var conditionCells = cells.find('#condition td');

		for (var i = 0; i < titleCells.length; i++) {
			$(conditionCells[i]).append(getIcon(nextdays[i + 1].status));
		}

		var lowCells = cells.find('#low td');

		for (var i = 0; i < titleCells.length; i++) {
			$(lowCells[i]).html(nextdays[i + 1].low);
		}

		var highCells = cells.find('#high td');

		for (var i = 0; i < titleCells.length; i++) {
			$(highCells[i]).html(nextdays[i + 1].high);
		}

		setBackgroundByTemperature(weather.temperature);
	}

	function getIcon(conditionCode) {
		conditionCode = parseInt(conditionCode);

		var sunny = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 17, 23, 31, 32, 33, 34, 36];
		var cloudy = [18, 19, 20, 21, 22, 24, 25, 26, 27, 28];
		var rain = [35, 37, 38, 39, 40, 45];
		var cloudySun = [29, 30, 44, 47];
		var snow = [5, 13, 14, 15, 16, 41, 42, 43];

		var condition;

		if (sunny.includes(conditionCode)) {

			condition = Skycons.CLEAR_DAY;
		}
		else if (rain.includes(conditionCode)) {

			condition = Skycons.RAIN;
		}
		else if (cloudy.includes(conditionCode)) {
			condition = Skycons.CLOUDY;
		}
		else if (snow.includes(conditionCode)) {
			condition = Skycons.SNOW;
		}
		else if (cloudySun.includes(conditionCode)) {
			condition = Skycons.PARTLY_CLOUDY_DAY;
		}

		var skycons = new Skycons({"color": "white"});
		var canvas = document.createElement("canvas");
		$(canvas).addClass("status");

		skycons.add(canvas, condition);
		skycons.play();

		return canvas;
	}

	function setBackgroundByTemperature(temperature) {
		var imageUrl = "";

		if (temperature < 0) {
			imageUrl = "https://wallpaperscraft.com/image/winter_spruce_branches_snow_glare_99412_1920x1080.jpg";
		}
		else if (temperature < 8) {
			imageUrl = "https://wallpaperscraft.com/image/forest_mountains_sky_autumn_trees_108106_1920x1200.jpg";
		}
		else if (temperature < 20) {
			imageUrl = "https://wallpaperscraft.com/image/spring_tree_bush_flower_field_fence_48020_1920x1200.jpg";
		}
		else {
			imageUrl = "https://wallpaperscraft.com/image/summer_trees_beach_river_81887_1920x1080.jpg";
		}

		$('body').css("background-image", "url(" + imageUrl + ")");

	}

	function toggleTemp(e) {
		var a = $(e.currentTarget);

		if (celcius){
			a.html(" ºF");
			celcius = false;
			$('#temperature').html(weather.temperature * 1.8 + 32).append(a);
		}
		else {
			a.html(" ºC");
			celcius = true;
			$('#temperature').html(weather.temperature).append(a);
		}

		$("#toggle-temp").click(toggleTemp);
	}

}());

