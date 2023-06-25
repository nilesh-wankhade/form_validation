$(document).ready(function(){

$("#usercheck").hide();
$("#passcheck").hide();
$("#conpasscheck").hide();

var user_err = true;
var pass_err = true;
var conpass_err = true;

$("#usernames").keyup(function(){
    username_check();
});

function username_check() {
    var user_val = $("#usernames").val();
    
    if(user_val.length == ""){
        $("#usercheck").show();
        $("#usercheck").html('**please fill the username');
        $("#usercheck").focus();
        $("#usercheck").css("color", "red");
        user_err = false;
        return false
    }else{
        $("#usercheck").hide();
    }
}











});