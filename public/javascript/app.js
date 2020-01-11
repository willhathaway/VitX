$('#view-btn').on("click", function (event) {
    event.preventDefault();

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

            // Now add all of our data to the div we just placed on the page

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

            // Now add all of our data to the div we just placed on the page

        }
    });
});