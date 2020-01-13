$(document).ready(function () {

    console.log("javascript loaded")

    // for searching:

    // fitbit API

    $("#workouts-btn").on("click", function () {

        let exersize = $("#search-exersizes")[0].elements[0].value;

        console.log(exersize);

        $.get("api/exersizes", function (data) {
            let results = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].name.includes(exersize)) {
                    results.push(data[i]);
                }
            }
            console.log(results);

            for (let i = 0; i < results.length; i++) {

                let options = $("<button id=" + results[i].id + ">");
                options.html(results[i].name);
                options.attr("class", "exersize")
                options.appendTo($("#data"));

            }

        });

    })


    // edemam API

    let foodOptions = [];

    $("#nutrition-btn").on("click", function () {

        let food = "apple";

        let app_id = "319d5cf3";

        let app_key = "a6b7b2b30443063fa2630ff0dbc8f735"

        let queryURL = "https://api.edamam.com/api/food-database/parser?limit=5&app_id=" + app_id + "&app_key=" + app_key + "&ingr=" + food;

        $.ajax({
                url: queryURL,
                method: "GET"
            })

            // Function is .then() called with the response object:

            .then(function (response) {

                // Console logs the response to see what the object looks like, how to retrieve information:

                console.log(response);

                for (let i = 0; i < response.hints.length; i++) {
                    foodOptions.push(response.hints[i]);
                    let options = $("<button id=" + response.hints[i].food.label + ">");
                    options.html(response.hints[i].food.label);
                    options.attr("class", "nutrition");
                    options.attr("id", response.hints[i].food.foodId)
                    options.appendTo($("#data"));

                }

            });

    });

    // for adding items to submit to server:

    let exersizePostArray = [];

    $(document).on("click", ".exersize", function () {

        $("#exersizes-topost").html("");

        console.log("add exersize to post form");

        let thisID = this.id;

        $.get("api/exersizes", function (data) {

            for (let i = 0; i < data.length; i++) {

                if (data[i].id === thisID) {
                    exersizePostArray.push(data[i]);
                }
            }

            for (let i = 0; i < exersizePostArray.length; i++) {
                let postExersize = $("<p>");
                $(postExersize).html(exersizePostArray[i].name);
                $("#exersizes-topost").append(postExersize);
            }

        });


    })

    let nutritionPostArray = [];

    $(document).on("click", ".nutrition", function () {

        $("#nutrition-topost").html("");

        console.log("add nutrition to post form");

        let thisID = this.id;

        for (let i = 0; i < foodOptions.length; i++) {

            if (foodOptions[i].food.foodId === thisID) {
                nutritionPostArray.push(foodOptions[i]);
            }
        }

        

        for (let i = 0; i < nutritionPostArray.length; i++) {     
            let postNutrition = $("<p>");
            $(postNutrition).html(foodOptions[i].food.label);
            $("#nutrition-topost").append(postNutrition);
        }

    })


    // for posting to server:

    $("#post-exersizes").on("click", function () {

        let postData = {};

        for (let i = 0; i < exersizePostArray.length; i++) {

            console.log(exersizePostArray[i]);
            postData[i] = exersizePostArray[i];

        }

        console.log(postData)

        $.post("api/workouts", postData).then(function (data) {
            console.log(data);
        })

    })

    $("#post-nutrition").on("click", function () {

        let postData = {};

        for (let i = 0; i < nutritionPostArray.length; i++) {

            console.log(nutritionPostArray[i]);
            postData[i] = nutritionPostArray[i];

        }

        console.log(postData);

        $.post("api/nutrition", postData).then(function (data) {
            console.log(data);
        });

    })



    // for viewing saved user data:


    $("#view-btn").on("click", function (event) {

        event.preventDefault();

        console.log("view");

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

    // for posting:

    // $("#nutrition-btn").on("click", function (event) {

    //     event.preventDefault();

    //     console.log("nutrition");

    //     let data = $("#post");

    //     console.log(data);

    //     // post data to nutrition

    // });

    // $("#workouts-btn").on("click", function (event) {

    //     event.preventDefault();

    //     console.log("workouts");

    //     let data = $("#post");

    //     console.log(data);

    //     // post data to workouts

    // });

});