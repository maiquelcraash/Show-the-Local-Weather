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
		"created": "2016-08-13T12:07:27Z",
		"lang": "en-US",
		"results": {
			"channel": {
				"units": {"distance": "km", "pressure": "mb", "speed": "km/h", "temperature": "C"},
				"title": "Yahoo! Weather - Lajeado, RS, BR",
				"link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-457466/",
				"description": "Yahoo! Weather for Lajeado, RS, BR",
				"language": "en-us",
				"lastBuildDate": "Sat, 13 Aug 2016 09:07 AM BRT",
				"ttl": "60",
				"location": {"city": "Lajeado", "country": "Brazil", "region": " RS"},
				"wind": {"chill": "50", "direction": "0", "speed": "22.53"},
				"atmosphere": {"humidity": "84", "pressure": "34100.95", "rising": "0", "visibility": "25.91"},
				"astronomy": {"sunrise": "7:2 am", "sunset": "6:3 pm"},
				"image": {
					"title": "Yahoo! Weather",
					"width": "142",
					"height": "18",
					"link": "http://weather.yahoo.com",
					"url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
				},
				"item": {
					"title": "Conditions for Lajeado, RS, BR at 08:00 AM BRT",
					"lat": "-29.46813",
					"long": "-51.96442",
					"link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-457466/",
					"pubDate": "Sat, 13 Aug 2016 08:00 AM BRT",
					"condition": {"code": "32", "date": "Sat, 13 Aug 2016 08:00 AM BRT", "temp": "11", "text": "Sunny"},
					"forecast": [{
						"code": "32",
						"date": "13 Aug 2016",
						"day": "Sat",
						"high": "23",
						"low": "8",
						"text": "Sunny"
					}, {
						"code": "34",
						"date": "14 Aug 2016",
						"day": "Sun",
						"high": "23",
						"low": "9",
						"text": "Mostly Sunny"
					}, {
						"code": "4",
						"date": "15 Aug 2016",
						"day": "Mon",
						"high": "24",
						"low": "12",
						"text": "Thunderstorms"
					}, {
						"code": "32",
						"date": "16 Aug 2016",
						"day": "Tue",
						"high": "24",
						"low": "13",
						"text": "Sunny"
					}, {
						"code": "47",
						"date": "17 Aug 2016",
						"day": "Wed",
						"high": "23",
						"low": "11",
						"text": "Scattered Thunderstorms"
					}, {
						"code": "32",
						"date": "18 Aug 2016",
						"day": "Thu",
						"high": "16",
						"low": "7",
						"text": "Sunny"
					}, {
						"code": "32",
						"date": "19 Aug 2016",
						"day": "Fri",
						"high": "16",
						"low": "6",
						"text": "Sunny"
					}, {
						"code": "34",
						"date": "20 Aug 2016",
						"day": "Sat",
						"high": "23",
						"low": "6",
						"text": "Mostly Sunny"
					}, {
						"code": "34",
						"date": "21 Aug 2016",
						"day": "Sun",
						"high": "15",
						"low": "8",
						"text": "Mostly Sunny"
					}, {"code": "32", "date": "22 Aug 2016", "day": "Mon", "high": "14", "low": "6", "text": "Sunny"}],
					"description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/32.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Sunny\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Sat - Sunny. High: 23Low: 8\n<BR /> Sun - Mostly Sunny. High: 23Low: 9\n<BR /> Mon - Thunderstorms. High: 24Low: 12\n<BR /> Tue - Sunny. High: 24Low: 13\n<BR /> Wed - Scattered Thunderstorms. High: 23Low: 11\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-457466/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>",
					"guid": {"isPermaLink": "false"}
				}
			}
		}
	}
}