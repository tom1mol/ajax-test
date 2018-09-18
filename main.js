// json.parse section
var xhr = new XMLHttpRequest();         //xml = extensible markup language
var data;

xhr.open("GET", "https://swapi.co/api/");

xhr.send();


xhr.onreadystatechange = function() {           //xhr object maintains an internal state as it completes various parts of the request operation
    
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        //data = this.responseText;
        //console.log(JSON.parse(this.responseText));
        //console.log(typeof(JSON.parse(this.responseText)));
        //console.log(typeof(this.responseText)); in inspect element this code showed a string in console
        
        
    }
};


setTimeout(function() {
    console.log(data);
}, 500);



/*
var xhr = new XMLHttpRequest();         //xml = extensible markup language

xhr.open("GET", "https://swapi.co/api/");

xhr.send();

xhr.onreadystatechange = function() {           //xhr object maintains an internal state as it completes various parts of the request operation
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

*/

/*
var xhr = new XMLHttpRequest();         //xml = extensible markup language

xhr.open("GET", "https://swapi.co/api/");

xhr.send();

xhr.onreadystatechange = function() {           //xhr object maintains an internal state as it completes various parts of the request operation
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

*/