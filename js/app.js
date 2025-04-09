// Code for menu

let menu_visible = false

function toggleMenu(){
    menu_visible = !menu_visible
    $("#menu").toggle(20)
}

$("body").click(function(e){
    if(e.pageX > 252 && menu_visible == true && e.target.tagName != 'I' ){
        toggleMenu()
    }
})

// Code for quiz.

$("#quizBtn").click(function(){
    $("#correct").hide()
    $("#incorrect").hide()
    if($("#quizAnswer").val() == 1969){
        $("#correct").show() 
    } else {
        $("#incorrect").show() 
    }
})