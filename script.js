$(document).ready(function () {
    $('#clear').hide();

    $('#showResults').on('click', function() {
        $.ajax({
            url: "https://swapi.co/api/" + $("#selectArtist").val(),
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function (result) {
                console.log(result);
                console.log(result.resultCount);
                displayResult(result);
            },
            error: function () {
                alert('The function failed :(');
            }
        });
    });
    $('#clear').on('click', function() {
        $("#res").empty();
    });

});


function displayResult(json) {
    $('#clear').show();
    $("#res").empty();
    var html ='';
    json.resultCount = $('#resultCount').val();
    for (var i = 0; i < json.resultCount; i++) {
        html += '<tr class="output"><td>';
        html += json.results[i].name;
        html += '</td><td>';
        html += json.results[i].climate;
        html += '</td><td>';
        html += json.results[i].diameter;
        html += '</td><td>';
        html += json.results[i].gravity;
        html += '</td><td>';
        html += json.results[i].population;
        html += '</td><td>';
        html += json.results[i].terrain;
        html += '</td><td>';
        html += json.results[i].surface_water;
        html += '</td><td>';
        html += json.results[i].rotation_period;
        html += '</td></tr>';
    }
    html += '</table>';
    console.log();
    $("#questions").append(html);
}

