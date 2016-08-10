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
		console.log(JSON.stringify(data));
		console.log(data);

		var weatherItem = data.query.results.channel.item;
		var location = data.query.results.channel.location;
		weather.location = location.city + " - " + location.region;
		weather.temperature = weatherItem.condition.temp;
		weather.status = weatherItem.condition.text;
		weather.humidity = data.query.results.channel.atmosphere.humidity;

		initComponents();
	}

	function initComponents() {
		$('#location').html(weather.location);
		$('#temperature').html(weather.temperature + " ºC");
		$('#status').html(weather.status);
		$('#humidity').html(weather.humidity + "%");
	}

}());