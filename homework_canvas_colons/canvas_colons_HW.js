window.onload = function () {

     let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "график роста/спада курса валюты"
        },	
        axisY: {
            title: "USD in befor mounht's",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "USD in this  mounht's",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },	
        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer",
            itemclick: toggleDataSeries
        },
        
        data: [{
            type: "column",
            name: "Start of monht",
            legendText: "Start of monht",
            showInLegend: true, 
            dataPoints:[
                { label: "Jan", y: 62.9372 },
                { label: "Feb", y: 60.9103 },
                { label: "Marts", y: 50.33 },
                { label: "April", y: 61.7749 },
                { label: "May", y: 61.1479 },
                { label: "Juni", y: 59.2009 }
            ]
        },
        {
            type: "column",	
            name: "Corrent monht",
            legendText: "Corrent monht",
            axisYType: "secondary",
            showInLegend: true,
            dataPoints:[
                { label: "Jan", y: 62.9103 },
                { label: "Feb", y: 50.330 },
                { label: "Marts", y: 61.7749 },
                { label: "April", y: 61.1479 },
                { label: "May", y: 59.2009 },
                { label: "Juni", y: 10 }
            ]
           
        }]
    });
    
    chart.render();
function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
    
}

}
/*
window.onload = function change() {

    let chart = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Change"
        },
        data: [{        
            type: "line",
              indexLabelFontSize: 16,
            dataPoints: [
                { y: +0.0269},
                { y: +0.7254, indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
                { y: -40.3455,indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross"  },
                { y: +0.6270 },
                { y: +0.6270 },
                { y: +0.2676 },
                { y: -1.666 },
              
            ]
        }]
    });
    chart.render();
}



   
    JSON:


[
 {
   month: 1,
   course: 62.9372,
   change: "+0.0269",
   currency: "USD"
 },
 {
   month: 2,
   course: 62.9103,
   change: "+0.7254",
   currency: "USD"
 },
 {
   month: 3,
   course: 30.33,
   change: "-40.3455",
   currency: "USD"
 },
 {
   month: 4,
   course: 61.7749,
   change: "+0.6270",
   currency: "USD"
 },
 {
   month: 5,
   course: 61.1479,
   change: "+0.2676",
   currency: "USD"
 },
 {
   month: 6,
   course: 59.2009,
   change: "-1.666",
   currency: "USD"
 }
]   
*/