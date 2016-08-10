Tarefa executada a partir do Free Code Camp, pelo endereço:
https://www.freecodecamp.com/challenges/show-the-local-weather

Exemplo:
http://codepen.io/FreeCodeCamp/full/bELRjV

APIs Extras utilizadas:
- Skyicons
https://darkskyapp.github.io/skycons/

- Mashape
https://market.mashape.com
{
    curl --get --include 'https://simple-weather.p.mashape.com/weatherdata?lat=-29.4499571&lng=-52.065542' \
      -H 'X-Mashape-Key: v6smGAcoR0mshPveE1qi4uIBWkuTp1op0FGjsnJdeANLydzAkt' \
      -H 'Accept: application/json'
}

Example JSON:

var a = {
	"query": {
		"count": 1,
		"created": "2016-08-10T23:08:07Z",
		"lang": "en-US",
		"results": {
			"channel": {
				"units": {"distance": "km", "pressure": "mb", "speed": "km/h", "temperature": "C"},
				"title": "Yahoo! Weather - Lajeado, RS, BR",
				"link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-457466/",
				"description": "Yahoo! Weather for Lajeado, RS, BR",
				"language": "en-us",
				"lastBuildDate": "Wed, 10 Aug 2016 08:08 PM BRT",
				"ttl": "60",
				"location": {"city": "Lajeado", "country": "Brazil", "region": " RS"},
				"wind": {"chill": "54", "direction": "113", "speed": "11.27"},
				"atmosphere": {"humidity": "80", "pressure": "34405.72", "rising": "0", "visibility": "25.91"},
				"astronomy": {"sunrise": "7:5 am", "sunset": "6:2 pm"},
				"image": {
					"title": "Yahoo! Weather",
					"width": "142",
					"height": "18",
					"link": "http://weather.yahoo.com",
					"url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
				},
				"item": {
					"title": "Conditions for Lajeado, RS, BR at 07:00 PM BRT",
					"lat": "-29.46813",
					"long": "-51.96442",
					"link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-457466/",
					"pubDate": "Wed, 10 Aug 2016 07:00 PM BRT",
					"condition": {
						"code": "33",
						"date": "Wed, 10 Aug 2016 07:00 PM BRT",
						"temp": "12",
						"text": "Mostly Clear"
					},
					"forecast": [{
						"code": "28",
						"date": "10 Aug 2016",
						"day": "Wed",
						"high": "15",
						"low": "9",
						"text": "Mostly Cloudy"
					}, {
						"code": "30",
						"date": "11 Aug 2016",
						"day": "Thu",
						"high": "16",
						"low": "9",
						"text": "Partly Cloudy"
					}, {
						"code": "30",
						"date": "12 Aug 2016",
						"day": "Fri",
						"high": "20",
						"low": "6",
						"text": "Partly Cloudy"
					}, {
						"code": "32",
						"date": "13 Aug 2016",
						"day": "Sat",
						"high": "23",
						"low": "8",
						"text": "Sunny"
					}, {
						"code": "30",
						"date": "14 Aug 2016",
						"day": "Sun",
						"high": "22",
						"low": "10",
						"text": "Partly Cloudy"
					}, {
						"code": "30",
						"date": "15 Aug 2016",
						"day": "Mon",
						"high": "22",
						"low": "10",
						"text": "Partly Cloudy"
					}, {
						"code": "34",
						"date": "16 Aug 2016",
						"day": "Tue",
						"high": "20",
						"low": "11",
						"text": "Mostly Sunny"
					}, {
						"code": "32",
						"date": "17 Aug 2016",
						"day": "Wed",
						"high": "27",
						"low": "8",
						"text": "Sunny"
					}, {
						"code": "47",
						"date": "18 Aug 2016",
						"day": "Thu",
						"high": "22",
						"low": "17",
						"text": "Scattered Thunderstorms"
					}, {
						"code": "47",
						"date": "19 Aug 2016",
						"day": "Fri",
						"high": "20",
						"low": "11",
						"text": "Scattered Thunderstorms"
					}],
					"description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/33.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Mostly Clear\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Wed - Mostly Cloudy. High: 15Low: 9\n<BR /> Thu - Partly Cloudy. High: 16Low: 9\n<BR /> Fri - Partly Cloudy. High: 20Low: 6\n<BR /> Sat - Sunny. High: 23Low: 8\n<BR /> Sun - Partly Cloudy. High: 22Low: 10\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-457466/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>",
					"guid": {"isPermaLink": "false"}
				}
			}
		}
	}
}