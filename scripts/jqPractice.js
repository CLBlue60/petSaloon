// JS vs jQuery
//getting an element
document.getElementById("results");
$("#results");

document.getElementsByTagName("p");
$("p");

document.getElementsByClassName("with-border");
$(".with-border");

let redParagraph = $("#red").css("background", "red").css("color", "white");
console.log("my red paragraph", redParagraph);

let blueParagraph = $("#blue").css("background","blue").css("color","white");
console.log("my blue paragraph", blueParagraph);


let myParagraphWithBorder = $(".with-border");

myParagraphWithBorder.css("border","5px dashed yellow");

myParagraphWithBorder.click(function(){
    console.log("Clicked");
    $(this).addClass("bg-gray");
});

let paragraphs = $("p");
paragraphs.css("cursor","pointer");

function register(){
    let testEntry = $("#testInput").val();
    $("#results").append(`<li>${testEntry}</li>`);

}

$("#registerBtn").on("click",register);


function clickMe(){
    $("p:first").hide();
    $("p:last").css("border","3px solid black");
}

$("#newBtn").on("click",clickMe);


function showName() {
  $("#user-name").show();
}

$("#show").on("click", showName);


function hideName(){
    $("#user-name").hide();
}

$("#hide").on("click",hideName);
