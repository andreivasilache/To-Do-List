$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

    //Fading element
$("ul").on("click","span",function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
});
    // Adding elements to list
$("input").on("keypress",function(e){
      if(e.which === 13 ){
            var toDoText=$(this).val();
            $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+toDoText+"</li>");
            $(this).val("");
      }
});
  
$("li").on("hover",function(){
    $("span").toggleClass("far fa-trash-alt");
});
  
$(".fa-plus").on("click",function(){
    $("input").fadeToggle();
});