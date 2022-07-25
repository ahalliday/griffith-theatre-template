$(document).ready(function(){
    var cookie_modal = custom_readCookie('welcomeModal');
    if(cookie_modal) {
        custom_createCookie('welcomeModal', 1, 365);
        $('#welcomeModal').hide();
    } else {
        $('#welcomeModal').modal('show');
    }

    $('#close').on('click', function (e) {
        e.preventDefault();
        custom_createCookie('welcomeModal', 1, 365);
    })
    $('#welcomeModal').on('hidden.bs.modal', function (e) {
        custom_createCookie('welcomeModal', 1, 365);
    })
    
    
});
  
  function custom_createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else expires = "";
    document.cookie = name+"="+value+expires+"; path=/;SameSite=Lax; Secure" ;
  }
  
  function custom_readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }