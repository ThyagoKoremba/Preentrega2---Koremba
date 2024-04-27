var dineroCofla = parseFloat(prompt("Cuanto dinero tienes?"));
var dineroRoberto= parseFloat(prompt("Cuanto dinero tienes?"));
var dineroPedro= parseFloat(prompt("Cuanto dinero tienes?"));

if (dineroCofla>=0.6 && dineroCofla< 1){
    let vuelto=dineroCofla-0.6;
    alert ("Te alcanza para el helado de palito de agua, y tu vuelto es: "+vuelto);
} else if (dineroCofla>=1 && dineroCofla < 1.6){
    vuelto=dineroCofla-1;
    alert ("Te alcanza para el helado de palito te crema, y tu vuelto es: "+vuelto);
}else if (dineroCofla>=1.6 && dineroCofla < 1.7){
    vuelto=dineroCofla-1.6;
    alert ("Te alcanza para el heladix, y tu vuelto es: "+vuelto);
} else if (dineroCofla>=1.7 && dineroCofla < 1.8){
    vuelto=dineroCofla-1.7;
    alert ("Te alcanza para el heladovich y tu vuelto es: "+vuelto);
}  else if (dineroCofla>=1.8 && dineroCofla < 2.9){
    vuelto=dineroCofla-1.8;
    alert ("Te alcanza para el helardo, y tu vuelto es: "+vuelto);
}  else if (dineroCofla>=1.7 && dineroCofla < 1.8){
    vuelto=dineroCofla-2.9;
    alert ("Te alcanza para el helado de conf o el pote de 1/4, y tu vuelto es: "+vuelto);
} else {
    alert("No hay plata");
}