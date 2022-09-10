// works with the preview page

function Preview(){
  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var myemail = $("#email").val();
  var password = $("#pwd").val();
  var myphone = $("#phone").val();
  var myaddress1 = $("#address1").val();
  var myaddress2 = $("#address2").val();
  var mycomment = $("#comment").val();

  localStorage.setItem("FirstName",fname);
  localStorage.setItem("LastName",lname);
  localStorage.setItem("Email",myemail);
  localStorage.setItem("Password",password);
  localStorage.setItem("Phone",myphone);
  localStorage.setItem("Current_address",myaddress1);
  localStorage.setItem("Permanent_address",myaddress2);
  localStorage.setItem("LeaveComment",mycomment);
}

document.getElementById("firstname").innerHTML = localStorage.getItem("FirstName");
document.getElementById("lastname").innerHTML = localStorage.getItem("LastName");
document.getElementById("inpEmail").innerHTML = localStorage.getItem("Email");
document.getElementById("inpPassword").innerHTML = localStorage.getItem("Password");
document.getElementById("inpPhone").innerHTML = localStorage.getItem("Phone");
document.getElementById("inpAdd1").innerHTML = localStorage.getItem("Current_address");
document.getElementById("inpAdd2").innerHTML = localStorage.getItem("Permanent_address");
document.getElementById("inpComment").innerHTML = localStorage.getItem("LeaveComment");


// WORKS WITH THE dataTable.html page
$("#dataTable").onclick() = function() {demofunction()};

function demofunction(){
  $("#mytable").DataTable();
}
