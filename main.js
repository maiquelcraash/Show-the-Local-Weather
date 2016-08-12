/**
 * Created by maiquel on 10/08/16.
 */

(function () {
	"use strict";
	var currentWeather = null;

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
		console.log("in");
		getWeather();
	});


	function getWeather() {

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (pos) {
				position.latitude = pos.coords.latitude;
				position.longitude = pos.coords.longitude;
				console.log(position);

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
		weather.status = weatherItem.condition.text;
		weather.humidity = data.query.results.channel.atmosphere.humidity;

		var days = weatherItem.forecast;

		days.forEach(function (item) {

			var newDay = {
				day: item.day,
				high: item.high,
				low: item.low,
				text: item.text
			};
			nextdays.push(newDay);
		});

		console.log(nextdays);


		initComponents();
	}

	function initComponents() {
		$('#location').html(weather.location);
		$('#temperature').html(weather.temperature + " ºC");
		//$('#status').html(weather.status);
		$('#status').append(getIcon());


		$('#humidity').html(weather.humidity + "%");

		var titleCells = $('#nextdays').find('th');

		for (var i = 0; i < titleCells.length; i++) {
			$(titleCells[i]).html(nextdays[i+1].day);
		}

		var conditionCells = $('#nextdays').find('#condition td');

		for (var i = 0; i < titleCells.length; i++) {
			$(conditionCells[i]).html(nextdays[i+1].text);
		}

		var lowCells = $('#nextdays').find('#low td');

		for (var i = 0; i < titleCells.length; i++) {
			$(lowCells[i]).html(nextdays[i+1].low);
		}

		var highCells = $('#nextdays').find('#high td');

		for (var i = 0; i < titleCells.length; i++) {
			$(highCells[i]).html(nextdays[i+1].high);
		}
	}

	function getIcon(conditionCode) {
		var sunny = [];


		var skycons = new Skycons({"color": "black"});
		var canvas = document.createElement("canvas");
		canvas.addClass("status");

		skycons.add(canvas, Skycons.PARTLY_CLOUDY_DAY);

		return canvas;
	}

}());
