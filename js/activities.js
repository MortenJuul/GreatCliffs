$(document).ready(function(){
    $(document).bind("click", function(e){
        if(e.target.innerText != "Not Available"){
            $(e.target).closest("td").toggleClass("cell-highlight");
        }
      });
})