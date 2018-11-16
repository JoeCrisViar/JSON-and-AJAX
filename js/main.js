
var pageCounter = 1;
//getting id="animal-info" in index.html and assigning it to var animalContainer
var animalContainer = document.getElementById("animal-info");
//getting id="btn" in index.html and assigning it to var btn
var btn = document.getElementById("btn");

//when the button was clicked that when this function works
btn.addEventListener('click', function(){
    //creating new request instance in a variable ourRequest
    var ourRequest = new XMLHttpRequest();
    //putting requested json link to the variable
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    //function that specify what will happen to the request when loaded
    ourRequest.onload = function(){
        // parsing/converting txtdata to json data and assigning to variable ourData
        var ourData = JSON.parse(ourRequest.responseText);
        //Passing ourData variable to function renderHTML()
        renderHTML(ourData);    
    };
    ourRequest.send();
    pageCounter++;
    if(pageCounter > 3){
        //css class hide-me
        btn.classList.add("hide-me");
    }
});

//This function adds HTML to the page 
function renderHTML(data){
var htmlString = "";

    for(i = 0; i < data.length; i++)
    {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for(ii = 0; ii < data[i].foods.likes.length; ii++){
            if(ii == 0){
                htmlString += data[i].foods.likes[ii];
            }else{
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += " and dislikes ";

        for(ii = 0; ii < data[i].foods.dislikes.length; ii++){
            if(ii == 0){
                htmlString += data[i].foods.dislikes[ii];
            }else{
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += ".</p>";
    }
 animalContainer.insertAdjacentHTML('beforeend', htmlString);
}