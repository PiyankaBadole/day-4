let req = new XMLHttpRequest();

req.onreadystatechange = function(){
    if(req.status == 200){
        res = JSON.parse(this.responseText)
        res.forEach(element => {
            console.log(element.flag, element.name,element.region,element.subregion,element.population)
        });
        }
        
}


req.open('GET','https://restcountries.com/v3.1/all')


req.send();
