function get_most_frequented_places() {
    var div = document.createElement("div");
    div.id = "most_frequented_places"
    document.getElementById("container").appendChild(div);

    $.getJSON('/static/data/dummy_most_frequented_places.json', function(jsonData) {
        var chart;

        var chartOptions = {
            chart: {
                type: 'column',
                renderTo: 'most_frequented_places'
            },
            title: {
                text: 'Most Frequented Places'
            },
            subtitle: {
                text: 'Source: CitiBikeNYC.com'
            },
            xAxis: {
                categories: [
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun'
                ],
                title: {
                    text: "Months"
                }
            },
            yAxis: {
                title: {
                    text: 'Number of Trips'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px"></span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y} trips</b></td></tr>',
                footerFormat: '</table>',
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Place One',
                data: jsonData['Place One']
            }, {
                name: 'Place Two',
                data: jsonData['Place Two']
            }]

        };

        chart = new Highcharts.Chart(chartOptions);
    });
  
}


function get_average_duration() {

    var div = document.createElement("div");
    div.id = "average_duration"
    document.getElementById("container").appendChild(div);

    $.getJSON('/static/data/dummy_average_duration.json', function(jsonData) {
        console.log(jsonData);

        var chart;

        var chartOptions = {
            chart: {
                type: 'column',
                renderTo: 'average_duration'
            },
            title: {
                text: 'Average Duration Per Month'
            },
            subtitle: {
                text: 'Source: CitiBikeNYC.com'
            },
            xAxis: {
                categories: [
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun'
                ],
                title: {
                    text: "Months"
                }
            },
            yAxis: {
                title: {
                    text: 'Number of Minutes'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px"></span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} minutes</b></td></tr>',
                footerFormat: '</table>',
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Average Duration',
                data: jsonData['Average Duration']
            }]

        };

        chart = new Highcharts.Chart(chartOptions);
    });
}

function get_gender() {

    var div = document.createElement("div");
    div.id = "gender"
    document.getElementById("container").appendChild(div);

    $.getJSON('/static/data/dummy_gender.json', function(jsonData) {
        console.log(jsonData);

        var chart;

        var chartOptions = {
            chart: {
                type: 'column',
                renderTo: 'gender'
            },
            title: {
                text: 'Gender Breakdown'
            },
            subtitle: {
                text: 'Source: CitiBikeNYC.com'
            },
            xAxis: {
                categories: [
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun'
                ],
                title: {
                    text: "Months"
                }
            },
            yAxis: {
                title: {
                    text: 'Number of Trips'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px"></span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y} trips</b></td></tr>',
                footerFormat: '</table>',
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Female',
                data: jsonData['Female']
            }, {
                name: 'Male',
                data: jsonData['Male']
            }, {
                name: 'Neutral',
                data: jsonData['Neutral']
            }]

        };

        chart = new Highcharts.Chart(chartOptions);
    });
}



get_most_frequented_places()
get_average_duration()
get_gender()