function grado_estudios (edad){
    if (3<=edad & edad<6) {
        console.log("Su edad es:", edad, "años y está cursando el kinder." );
    } else if (6 <= edad & edad< 12) {
        console.log("Su edad es:", edad, "años y está cursando la primaria.");
    } else if (12 <= edad & edad < 17) {
        console.log("Su edad es:", edad, "años y está cursando secundaria.");
    } else if (17 <= edad & edad < 22){
        console.log("Su edad es:", edad, "años y está cursando la universidad.");
    } else {
      console.log("Su edad es:", edad, "y de momento no está cursando nada.")
    } 
}

grado_estudios(30);

// en la misma función se coloca la edad