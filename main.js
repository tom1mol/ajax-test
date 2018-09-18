var xhr = new XMLHttpRequest();         //xml = extensible markup language

xhr.open("GET", "https://swapi.co/api/");

xhr.send();

xhr.onreadystatechange = function() {           //xhr object maintains an internal state as it completes various parts of the request operation
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};




/*
var xhr = new XMLHttpRequest(); //inbuilt object that JS provides to allow us to consume the APIs. gives us methods to open/send connections

xhr.onreadystatechange = function() {           //when state OF xhr object changes...
    if (this.readyState == 4 && this.status == 200) {  //run check to see if readyState = 4 and status = 200 THEN run line below. 4 means completed. 200 status means it was ok
        document.getElementById("data").innerHTML = this.responseText;           
        
    }
};

xhr.open("GET", "https://swapi.co/api/");                                             // open up connection..method=GET, then the URL

xhr.send();

*/

