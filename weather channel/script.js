input = document.querySelector("input");
boton = document.querySelector("button");

ciudad = input.value; 

cargarCiudad = function(data){
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916",function(ciudad){
        console.log(ciudad);
    })
};

boton.addEventListener("click",function(){
    if(input.value==" "){
        alert("Debe ingresar el nombre de la ciudad");
    }else{
    ciudad = input.value; 
    cargarCiudad();

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=230f3d6c3bf8c745810e0411d0127f05&units=metric&lang=es", function(data) {
        document.querySelector(".container").style.visibility = "visible"
        document.querySelector("#ciudad").textContent = data.name
        document.querySelector("#temperatura").innerHTML = data.main.temp+"<sup>°C</sup>"
        document.querySelector("#wicon").setAttribute("src", "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png")
        document.querySelector("#descripcion").textContent = data.weather[0].description
    }).fail(function() {
        alert("Ciudad no encontrada");
        });   
        input.value = "";
    }
});



