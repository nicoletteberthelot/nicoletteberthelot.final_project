var trainlineOutages = {
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

$("#trains").change(function() { 
	var selectedTrainline = $(this).val();
	var selectedOutages = trainlineOutages[selectedTrainline];
	console.log("Outages for the", selectedTrainline, "line:", selectedOutages); 
		$( "#list" ).empty();
		selectedOutages.forEach(function(outage){
		$("#list").append("<li>" + outage.station + ": " + outage.serving + "</li>");

	});	
});

$.ajax({
	type: "GET",
	url: "nyct_ene.json",
	success: function(response) {
		data = response;

		outages = response.NYCOutages.outage;

		outages.forEach(function(outage){
			var trainno = outage.trainno; // "L/N/Q/R/W"
			var trainnos = trainno.split("/"); // ["L", "N", "Q", "R", "W"]
			trainnos.forEach(function(trainline){
				//var trainLineOutageArray = trainlineOutages["L"] // gives me all the outages listed for the L train
				//trainLineOutageArray.push(outage)
				// trainline = trainline.trim().toUpperCase();
				var outages = trainlineOutages[trainline];
				if (outages != undefined) {
					outages.push(outage);
				}
			});
		});
	}
});







