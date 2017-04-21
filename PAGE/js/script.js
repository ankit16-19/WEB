$(".dropi").click(function(event) {
  /* Act on the event */
  $(".name").addClass('hide');
  $(this).next(".name").toggleClass('hide');
});

$(".normal").click(function(event) {
  /* Act on the event */
  $(".name").addClass('hide');
});

$("#login").click(function(event) {
  /* Act on the event */
    $(".login").css("display","block");
    $("input[name=username]").focus();
});
$(".close ,.cancel").click(function(event){
  /* Act on the event */
    $(".login").css("display","none");
    $(".add_back").css("display","none");
});
//**********************w3school*********************************
//var modal = document.getElementById('id01');
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }getElementByClass
//******************stackOverFlow*******************************
$(window).click(function(event) {
  /* Act on the event */
  if(event.target == $(".login")[0]){
    $(".login").css("display","none");
  }
});
//**********************stackOverFlow*******************************
$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $(".login").css("display","none");
    }
});

$("#add_sidenav").click(function(event) {
  /* Act on the event */
  $(".name").addClass('hide');
  $(".side_navbar a").children().removeClass('active');
  $(this).children('span').addClass('active');
  $(".add_back").css("display","block");
  $("#Category_name").focus();
});
$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $(".add_back").css("display","none");
    }
});
$(window).click(function(event) {
  /* Act on the event */
  if(event.target == $(".add_back")[0]){
    $(".add_back").css("display","none");
  }
});
$("#add_submit").click(function(event) {
  /* Act on the event */
  var name = $("#Category_name").val();
  $("#adda").append('<li><a href="#" onclick="normal_a()"><span class="glyphicon glyphicon-home active"></span> '+ name +'</a></li>');
  $(".add_back").css("display","none");

});
$(".add_sidenav input").keyup(function(event) {
  /* Act on the event */
  if (event.keyCode == 13) {
      $("#add_submit").click();
      $(".add_back").css("display","none");
  }

});

$(".side_navbar a").click(function(event) {
  /* Act on the event */
  $(".side_navbar a").children().removeClass('active');
  $(this).children('span').addClass('active');

});
function normal_a(){
  $(".name").addClass('hide');
  $(".side_navbar a").children().removeClass('active');
  $(this).children('span').addClass('active');
}
