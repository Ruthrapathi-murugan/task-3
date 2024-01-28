var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
var res = JSON.parse(request.response);
console.log(res);
//question 2,3 
for ( var i=0;i<=res.length; i++){
    if(res[i].capital)
    {
        console.log(res[i].capital[0]+" "+res[i].area+ " "+res[i].flags+" "+res[i].region+" "+res[i].population+" "+res[i].subregion);
    }
    else{
        console.log("invalid capital")
    }
}
}

