$(document).ready(function () {
    console.log('javascript loaded')

    $('#view-btn').on('click', function (event) {
        event.preventDefault();

        console.log('view');

        $.get("api/workouts", function (data) {

            // for each character that our server sends us back
            for (let i = 0; i < data.length; i++) {
                // create a parent div for the oncoming elements
                let workoutData = $("<div>");
                // add a class to this div
                workoutData.addClass("workoutData");
                // add an id to the well to mark 
                workoutData.attr("id", "workoutData" + i);
                // append the div to data div
                $("#data").append(workoutData);

                // get data from workouts data

            }
        });

        $.get("api/nutrition", function (data) {

            // for each food that our server sends us back

            for (let i = 0; i < data.length; i++) {
                // create a parent div for the oncoming elements
                let nutritionData = $("<div>");
                // add a class to this div
                nutritionData.addClass("nutritionData");
                // add an id to the well to mark 
                nutritionData.attr("id", "nutritionData" + i);
                // append the div to data div
                $("#data").append(nutritionData);

                // get data from nutrition table

            }
        });
    });

    $('#nutrition-btn').on('click', function (event) {

        event.preventDefault();

        console.log('nutrition');

        let data = $('#post');

        console.log(data);

        // post data to nutrition

    });

    $('#workouts-btn').on('click', function (event) {

        event.preventDefault();

        console.log('workouts');

        let data = $('#post');

        console.log(data);

        // post data to workouts

    });

});