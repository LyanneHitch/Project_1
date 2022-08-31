$(document).ready(function(){
    $("#hamburger_btn").click(function(){
      $("#panel").toggle(1000, function(){
       
      });
    });
  });
  



/*$(document).ready(function(){ 
    $('#hamburger_btn').click(function(){ 
    $('#panel').showClass('.menu');
     }); 
    });
    


$(document).ready(function(){
    $('#hamburger_btn').click(function(){
        $('#hamburger_menu').toggleClass('menu');
    });
});

 let hamburger_btn = document.getElementById("hamburger_btn");
$(document).ready(function(){
  $("#hamburger_btn").click(function(){ 
    if(root.value === "on"){
      root.value="off";
      console.log="off";
    }
    else{
      root.value="on";
      console.log="on"
    }
  });
 }); */