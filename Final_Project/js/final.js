var stationMap = {
	"1":[],
	"2":[],
	"3":[],
	"4":[],
	"5":[],
	"6":[],
	"7":[],
	"A":[],
	"B":[],
	"C":[],
	"D":[],
	"E":[],
	"F":[],
	"G":[],
	"J":[],
	"L":[],
	"M":[],
	"N":[],
	"Q":[],
	"R":[],
	"S":[],
	"W":[],
	"Z":[]
}

var stations = [];

$.ajax({
	type: "GET",
	url: "nyct_ene.json",
	success: function(response) {
	data = response;
	stations = response.NYCOutages.outage;
	var isupcomingoutage = response.NYCOutages.outage.isupcomingoutage;

	var userInput = ["R", "A", "B", "C", "D", "E", "F", "G", "L", "M", "N", "Q", "R", "S", "W", "Z", "1", "2", "3", "4", "5", "6", "7"];

    stations.forEach(function(station) {
    	userInput.forEach(function(line){
    		if (station.trainno.includes(line)) 
    		{ console.log(station.station, line) }

    	})

    	$('#trains').change(function () {
    		var trains = $('#trains').val();
    		console.log(trains)
    		$("#list").append("<li>" + station.station + ": " + station.isupcomingoutage + "</li>")

});

    })
    }

});







