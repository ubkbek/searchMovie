// variables
var elList = document.querySelector("#movie_list");
var elSearchNum = document.querySelector("#search-result-number");
var elForm = document.querySelector("#form");
var elInputValue = document.querySelector("#input");
var elWarning = document.querySelector("#warning");


var newMoviesList = [];
elSearchNum.textContent = newMoviesList.length; //search nimber



// do filter movies
elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    newMoviesList = null

    newMoviesList = movies.filter(function(item){
        return item.Title == elInputValue.value.trim()
    })

    elSearchNum.textContent = newMoviesList.length;

    renderMovies(newMoviesList, elList);

})



// render function
function renderMovies(array, place) {
    place.innerHTML = null;

    for (var item of array) {

        // Creating <li> element
        var newLi = document.createElement("LI");
        newLi.classList.add("width-45", "mb-4", "p-0");

        // creating <div> element
        var newDiv = document.createElement("DIV");
        newDiv.setAttribute("class", "card")

        // creating <img> element
        var newImg = document.createElement("img")
        newImg.setAttribute("src", `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`)
        newImg.setAttribute("class","card-img-top");
        newImg.setAttribute("alt","Card image");

        //<innerDiv>
        var newInnerDiv = document.createElement("DIV");
        newInnerDiv.classList.add("card-body");

        //heading
        var newHeading = document.createElement("H4");
        newHeading.textContent = item.Title;
        newHeading.classList.add("card-title");

        // p
        var newP1 = document.createElement("P");
        newP1.classList.add("card-text");
        newP1.setAttribute("class", "card-text d-flex align-items-center fs-5 mb-2");
        newP1.textContent = item.movie_year;


        var newP2 = document.createElement("P");
        newP2.classList.add("card-text")
        newP2.setAttribute("class", "card-text d-flex align-items-center fs-5 mb-2")
        newP2.textContent = item.imdb_rating;


        var newInnerImg = document.createElement("IMG")
        newInnerImg.classList.add("me-1");
        newInnerImg.setAttribute("src","./images/star.png");
        newInnerImg.setAttribute("width","20");
        newInnerImg.setAttribute("height","20");


        var newSpan = document.createElement("SPAN");
        newSpan.classList.add("movie-rating");
        newSpan.textContent = "12.2"



        var newSmallDiv = document.createElement("div");
        newSmallDiv.setAttribute("class", "d-flex, justify-content-center, gap-2");


        var newButton1 = document.createElement("a");
        newButton1.setAttribute("class", "btn btn-outline-primary border-2 py-1 px-3 fs-6 ms-1")
        newButton1.textContent = "Watch trailer";
        newButton1.setAttribute("href", `https://www.youtube.com/watch?v=${item.ytid}`);
        newButton1.setAttribute("target", "_blank");
        var newButton2 = document.createElement("button");
        newButton2.setAttribute("class", "btn btn-outline-success border-2 py-1 px-3 fs-6 ms-1");
        newButton2.textContent = "More info";

        var newButton3 = document.createElement("button");
        newButton3.setAttribute("class", "btn btn-outline-info border-2 py-1 px-3 fs-6 ms-1");
        newButton3.textContent = "Bookmark";

        place.appendChild(newLi)
        newLi.appendChild(newDiv);
        newDiv.appendChild(newImg);
        newDiv.appendChild(newInnerDiv);
        newInnerDiv.appendChild(newHeading);
        newInnerDiv.appendChild(newP1);
        newInnerDiv.appendChild(newP2);
        newInnerDiv.appendChild(newSmallDiv);
        newSmallDiv.appendChild(newButton1);
        newSmallDiv.appendChild(newButton2);
        newSmallDiv.appendChild(newButton3);
    }
}

// renderMovies(newMoviesList, elList);
