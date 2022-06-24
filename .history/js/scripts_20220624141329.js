function conRoomToggle()
{
  var t = document.getElementById("menu-toggle");
  if(t.value=="HIDE"){
      t.value="+";}
  else if(t.value=="+"){
      t.value="HIDE";}
}

$("#menu-toggle").click(function(e){
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

function internationalToggle()
{
  var t = document.getElementById("internationalToggle");
  if(t.value=="+"){
    t.value="-";}
  else if(t.value=="-"){
      t.value="+";}
}
/*
                <script>
                    function expand(){
                        var element = document.getElementById("intDiv");
                        element.style.display = "none";
                    }
                </script>
*/

activos = 0
$(".canal").click(function(e){
    e.preventDefault();
    $(this).toggleClass("activo");
    id = $(this).attr("activa");
    $("[id='"+id+"']").toggleClass("d-none");
    if($(this).hasClass("activo")){
        activos++;
    }
    else{
        activos--;
    }
    if(activos < 2){
        $("iframe").css("height","760px").css("width","100%");
    }
    else if(activos < 3){
        $("iframe").css("height","760px").css("width","49%");
    }
    else if(activos < 5){
        $("iframe").css("height","410px").css("width","49%");
    }
    else if(activos < 7){
        $("iframe").css("height","410px").css("width","33%");
    }
    else if(activos < 10){
        $("iframe").css("height","270px").css("width","33%");
    }
    else if(activos < 13){
        $("iframe").css("height","270px").css("width","24%");
    }
    else{
        $("iframe").css("height","200px").css("width","24%");
    }
});

$(window).resize(function(){
    ajustarvideos();
    console.log('cambios');
});

//function ajustarvideos(){
//    if($(window).width() < 1000){   
//        $("iframe").addClass("paramovil");
//    }
//    else{
//        $("iframe").removeClass("paramovil");
//    }
//}