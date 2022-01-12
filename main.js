function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  cvalue = cvalue+cvalue+cvalue;
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

setCookie("Web Technology b", "Hello", 3); 
