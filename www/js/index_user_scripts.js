/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
    /*Criando função para seta valor no hitorico*/
    //variavel para a soma anterior;
    function getMediaURL(s) {
    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}

function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}
    var res_ant="";
    var som_bo = true;
    var lim_tecla=false;
    
function PlaySom(){
    var myMedia = new Media(getMediaURL("audio/beep_som.mp3"),null,MediaError);
     myMedia.play();
    myMedia.release();
}
     
    
    function setHistorico(valor){
       var vl = $("#histo").text();
        $("#histo").text(vl+""+valor);
    }
    
    // função para retorna os dados no display
  
    
    function getDisplay(){
         return $("#display-tela").val();
     }
    
      function verifica_operacao(num){
          
       if(num != num.split("+")){
           return true;
       } 
        if(num != num.split("-")){
           return true;
       } 
        if(num != num.split("*")){
           return true;
       } 
        if(num != num.split("/")){
           return true;
       }
        return false;
    }
     //função responsavel para adicionar conteudo no Display
     function setDisplay(valor){
         var vl = $("#display-tela").val();
         $("#display-tela").val(vl+""+valor);
     }
    //Função responsavel para limpa o display do app
    function limpaDisplay(){
  $("#display-tela").val("");
    }
    function limp_historico(){
        $("#histo").text(" ");
    }
    
    function calcular(num,op){
        
        var vl = op+""+num;
       if(vl != vl.split("+")){
           var valor  = vl.split("+");
           limpaDisplay();
           setHistorico("+"+valor[1]);
           setDisplay(Number(valor[0])+Number(valor[1]));
           res_ant = Number(valor[0])+Number(valor[1]);
           
       }
        if(vl != vl.split("-")){
            var valor = vl.split("-");
            limpaDisplay();
            setHistorico("-"+valor[1]);
           setDisplay(Number(valor[0])-Number(valor[1]));
            res_ant = Number(valor[0])-Number(valor[1]);
       }
        if(vl != vl.split("*")){
            var valor  = vl.split("*");
            setHistorico("*"+valor[1]);
            limpaDisplay();
           setDisplay(Number(valor[0])*Number(valor[1]));
            res_ant = Number(valor[0])*Number(valor[1]);
       }
        if(vl != vl.split("/")){
            var valor  = vl.split("/");
            setHistorico("/"+valor[1]);
            limpaDisplay();
            if(valor[1] != "0"){
           setDisplay(Number(valor[0])/Number(valor[1]));
           res_ant = Number(valor[0])/Number(valor[1]);
            }else{
              setDisplay("divisão invalida");  
            }
            }
    
    }
 function register_event_handlers()
 {

     /* button  CE */
    $(document).on("click", ".uib_w_4", function(evt)
    {   limpaDisplay();
        $("#histo").text("");
        num_ant = "";
        l
         return false;
    });
    
        /* button  C */
    $(document).on("click", ".uib_w_5", function(evt)
    {
        limpaDisplay();
         return false;
    });
    
        /* button  < */
    $(document).on("click", ".uib_w_6", function(evt)
    {
        var strin = getDisplay();
        if(strin.length>0){
      $("#display-tela").val(strin.substr(0,strin.length-1));
            }
    
         return false;
    });
    
        /* button  / */
    $(document).on("click", ".uib_w_7", function(evt)
    {if(res_ant ==""){
      setHistorico(getDisplay());      
        }
        
        
     if(!verifica_operacao(String(res_ant)))
     {
       res_ant = getDisplay()+"/";
        //alert(res_ant);
         limpaDisplay();
     }else{
         calcular(getDisplay(),res_ant);
     }
         return false;
    });
    
        /* button  1 */
    $(document).on("click", ".uib_w_8", function(evt)
    { 
        if(som_bo){
            PlaySom();
           // alert("som")
        }
       if(lim_tecla){
         limpaDisplay();
           lim_tecla = false;
     }
      
        
        setDisplay("1");
        
    
         return false;
    });
    
        /* button  2 */
    $(document).on("click", ".uib_w_9", function(evt)
    {if(som_bo){
            PlaySom();
           // alert("som")
        }
     
        if(lim_tecla){
         limpaDisplay();
           lim_tecla = false;
     }
      
        
        setDisplay("2");
     return false;
    });
    
        /* button  3 */
    $(document).on("click", ".uib_w_10", function(evt)
    {if(som_bo){
            PlaySom();
          //  alert("som")
        }
     
       if(lim_tecla){
         limpaDisplay();
           lim_tecla = false;
     }
      setDisplay("3");
         return false;
    });
    
        /* button  4 */
    $(document).on("click", ".uib_w_11", function(evt)
    {if(som_bo){
            PlaySom();
          //  alert("som")
        }
     
        if(lim_tecla){
         limpaDisplay();
           lim_tecla = false;
     }
        
        setDisplay("4");
         return false;
    });
    
        /* button  5 */
    $(document).on("click", ".uib_w_12", function(evt)
    {if(som_bo){
            PlaySom();
          //  alert("som")
        }
     
       if(lim_tecla){
         limpaDisplay();
           lim_tecla = false;
     }
        
        setDisplay("5");
         return false;
    });
    
        /* button  6 */
    $(document).on("click", ".uib_w_13", function(evt)
    {if(som_bo){
            PlaySom();
          //  alert("som")
        }
     
       if(lim_tecla){
         limpaDisplay();
           lim_tecla = false;
     }
        
        setDisplay("6");
         return false;
    });
    
        /* button  7 */
    $(document).on("click", ".uib_w_14", function(evt)
    {if(som_bo){
            PlaySom();
          //  alert("som")
        }
     
        if(lim_tecla){
         limpaDisplay();
           lim_tecla = false;
     }
        
        setDisplay("7");
         return false;
    });
    
        /* button  8 */
    $(document).on("click", ".uib_w_15", function(evt)
    {if(som_bo){
            PlaySom();
           // alert("som")
        }
     
       if(lim_tecla){
         limpaDisplay();
           lim_tecla = false;
     }
        
        setDisplay("8");
         return false;
    });
    
        /* button  9 */
    $(document).on("click", ".uib_w_17", function(evt)
    {if(som_bo){
            PlaySom();
          //  alert("som")
        }
     
      if(verifica_operacao(res_ant)){
         limpaDisplay();
     }
      
        
        setDisplay("9");
         return false;
    });
    
        /* button  0 */
    $(document).on("click", ".uib_w_18", function(evt)
    {if(som_bo){
            PlaySom();
          //  alert("som")
        }
     
       if(verifica_operacao(res_ant)){
         limpaDisplay();
     }
        
        setDisplay("0");
         return false;
    });
    
        /* button  + */
    $(document).on("click", ".uib_w_19", function(evt)
    {
    if(res_ant ==""){
      setHistorico(getDisplay());      
        }
        
        
     if(!verifica_operacao(String(res_ant)))
     {
       res_ant = getDisplay()+"+";
       // alert(res_ant);
         limpaDisplay();
     }else{
         calcular(getDisplay(),res_ant);
          res_ant = res_ant+"+"; 
          lim_tecla = true;
     }
        
     
    
         return false;
});
    
        /* button  - */
    $(document).on("click", ".uib_w_20", function(evt)
    {if(res_ant ==""){
      setHistorico(getDisplay());      
        }
        
        
     if(!verifica_operacao(String(res_ant)))
     {
       res_ant = getDisplay()+"-";
       // alert(res_ant);
         limpaDisplay();
     }else{
         calcular(getDisplay(),res_ant);
         return false;
    }});
    
        /* button  * */
    $(document).on("click", ".uib_w_21", function(evt)
    {if(res_ant ==""){
      setHistorico(getDisplay());      
        }
        
        
     if(!verifica_operacao(String(res_ant)))
     {
       res_ant = getDisplay()+"*";
       // alert(res_ant);
         limpaDisplay();
     }else{
         calcular(getDisplay(),res_ant);
         return false;
    }});
    
        /* button  % */
    $(document).on("click", ".uib_w_22", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  . */
    $(document).on("click", ".uib_w_23", function(evt)
    {
        setDisplay(".");
         return false;
    });
    
        /* button  + */
    $(document).on("click", ".uib_w_24", function(evt)
    {   //alert("igual");
    // alert(res_ant);
        if(verifica_operacao(String(res_ant))){
       // alert("calcular");
        calcular(getDisplay(),res_ant);
        $("#histo").text("");
        res_ant="";
    }
        
         return false;
    });
    
        /* button  #btn-troca */
    $(document).on("click", "#btn-troca", function(evt)
    {
        if(!String(getDisplay()) == ""){
            var num = Number(getDisplay()*(-1));
            $("#display-tela").val(num);
        }
        
         return false;
    });
    
        /* button  #btn-som */
    $(document).on("click", "#btn-som", function(evt)
    { 
    if(som_bo){
       som_bo = false;
        $("#btn-som").toggleClass("glyphicon glyphicon-volume-off");
        $("#btn-som").addClass("glyphicon glyphicon-volume-up");
    }else{
      som_bo = true; 
        $("#btn-som").removeClass("glyphicon glyphicon-volume-up");
        $("#btn-som").addClass("glyphicon glyphicon-volume-off");
    }
        
    
        
         return false;
    });
    
        /* button  #btn-raiz */
    $(document).on("click", "#btn-raiz", function(evt)
    {
        if(String(getDisplay()).length >0){
        var num = Number(getDisplay());
        var resul = Math.sqrt(num);
        limpaDisplay();
            setDisplay(resul);
        }
         return false;
    });
    
        /* button  .uib_w_28 */
    $(document).on("click", ".uib_w_28", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
