
var edad = 30;
// Aquí se cambia la edad a desear. 


switch (true){
  case (edad<6): 
      console.log("Su edad es:", edad, "años y está cursando el kinder." );
    break;
  case (edad< 12): 
      console.log("Su edad es:", edad, "años y está cursando la primaria.");
    break;
  case (edad < 17): 
      console.log("Su edad es:", edad, "años y está cursando secundaria.");
    break;
  case (edad < 22): 
      console.log("Su edad es:", edad, "años y está cursando la universidad.");
    break;
  default:
    console.log("Su edad es:", edad, "y de momento no está cursando nada.")
}


