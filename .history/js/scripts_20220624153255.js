function conRoomToggle()
                        {
                          var t = document.getElementById("menu-toggle");
                          if(t.value=="-->"){
                              t.value="<--";}
                          else if(t.value=="<--"){
                              t.value="-->";}
                        }

function intToggle()
                        {
                          var t = document.getElementById("internationalToggle");
                          if(t.value=="(-) International"){
                            document.getElementById('intDiv').style.display = 'none'
                              t.value="(+) International";}
                          else if(t.value=="(+) International"){
                            document.getElementById('intDiv').style.display = 'block'
                              t.value="(-) International";}
                        }

function mexToggle()
                        {
                          var t = document.getElementById("mexicoToggle");
                          if(t.value=="(-) Mexico"){
                            document.getElementById('mexDiv').style.display = 'none'
                              t.value="(+) Mexico";}
                          else if(t.value=="(+) Mexico"){
                            document.getElementById('mexDiv').style.display = 'block'
                              t.value="(-) Mexico";}
                        }
function japToggle()
                        {
                          var t = document.getElementById("japanToggle");
                          if(t.value=="(-) Japan"){
                            document.getElementById('japDiv').style.display = 'none'
                              t.value="(+) Japan";}
                          else if(t.value=="(+) Japan"){
                            document.getElementById('japDiv').style.display = 'block'
                              t.value="(-) Japan";}
                        }
function usaToggle()
                        {
                          var t = document.getElementById("gringoToggle");
                          if(t.value=="(-) USA"){
                            document.getElementById('usaDiv').style.display = 'none'
                              t.value="(+) USA";}
                          else if(t.value=="(+) USA"){
                            document.getElementById('usaDiv').style.display = 'block'
                              t.value="(-) USA";}
                        }
                        

                        
$("#menu-toggle").click(function(e){
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

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