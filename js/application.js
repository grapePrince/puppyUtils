
function button_login_enter(id, pass) {
    
    var id = $("#userid_input").val();
    var pass = $("#userpass_input").val();    
   
    $.post(
        "server/server_login.php" , 
        { 
          userid : id ,
          userpass : pass
        },
        _callback_login(data) 
    );
    
}

function _callback_login(data) {
    
   if(data.isLogin) {
   	
    userInfo.id = id;
    userInfo.pass = pass;
    
   $.post(
        "server/server_roomlist.php" , 
        { userid : context.user.id },
        _callback_login(data)  );
   }
    
}
