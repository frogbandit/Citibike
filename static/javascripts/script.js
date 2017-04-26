function create_table(people, months) {
    
    for (person_index in people) {
        
        person = people[person_index]
        $('#container').append('<table class="table table-striped" id=' + person_index + '> \
        <caption>' + person + '</caption><thead><tr><th>Month</th><th>Project</th><th>Skill</th><th>FTE</th></tr></thead> \
        <tbody></tbody></table>');
            
        if (!(Object.keys(overall_dict[person]).length === 0 && overall_dict[person].constructor === Object)) {
            projects = overall_dict[person]
            console.log(projects);
            for (var i in projects) {

                project = projects[i];
                project_name = i

                for (var k in project){
                    skill = project[k][0]
                    FTE_list = project[k][1]
                    for (var l in FTE_list){
                        month = months_list[l]
                        if (containsObject(month, months)){
                            $('#' + person_index + ' tr:last').after('<tr><td>' + month + '</td><td>' + project_name + '</td><td>' + skill + '</td><td>' + FTE_list[l] + '</td></tr>')
                        }
                    }
                }
            }
        } else {
            $('#' + person_index + ' tr:last').after('<tr><td>' + '' + '</td><td>' + ' ' + '</td><td>' + ' ' + '</td><td>' + ' ' + '</td></tr>')
        }
    }
};


function get_most_frequented_places() {
    months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']


    $.getJSON('/static/data/most_frequented_places.json', function(jsonData) {
        console.log(jsonData);

        $('#container').append('<h4> Most Frequented Places by Month </h4>')

        for (month_index in months) {
            month = months[month_index]
            $('#container').append('<table class="table table-striped" id=' + month_index + '> \
                <caption>' + month + '</caption><thead><tr><th>Place</th></tr></thead> \
                <tbody></tbody></table>');

            
            places = jsonData[month]
            console.log(month)
            for (var i in places){
                place = places[i]
                $('#' + month_index + ' tr:last').after('<tr><td>' + place + '</td></tr>')
            }
        }
    });
  
}


function get_average_duration() {

    var div = document.createElement("div");
    div.id = "average_duration"
    document.getElementById("container").appendChild(div);

    $.getJSON('/static/data/average_duration.json', function(jsonData) {
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

function get_number_trips() {

    var div = document.createElement("div");
    div.id = "number_trips"
    document.getElementById("container").appendChild(div);

    $.getJSON('/static/data/number_trips.json', function(jsonData) {
        console.log(jsonData);

        var chart;

        var chartOptions = {
            chart: {
                type: 'column',
                renderTo: 'number_trips'
            },
            title: {
                text: 'Number of Trips Per Month'
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
                    '<td style="padding:0"><b>{point.y:.0f} trips</b></td></tr>',
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
                name: 'Number of Trips',
                data: jsonData['Trips per Month']
            }]

        };

        chart = new Highcharts.Chart(chartOptions);
    });
}

function get_gender() {

    var div = document.createElement("div");
    div.id = "gender"
    document.getElementById("container").appendChild(div);

    $.getJSON('/static/data/gender.json', function(jsonData) {
        console.log(jsonData);

        var chart;

        var chartOptions = {
            chart: {
                type: 'column',
                renderTo: 'gender'
            },
            title: {
                text: 'Gender Breakdown Per Month'
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
                    '<td style="padding:0"><b>{point.y:.0f} trips</b></td></tr>',
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
                name: 'Unknown',
                data: jsonData['Unknown']
            }]

        };

        chart = new Highcharts.Chart(chartOptions);
    });
}

get_most_frequented_places()
get_average_duration()
get_number_trips()
get_gender()