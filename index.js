var btn = document.getElementById("btn");
btn.onclick = function()
{
    var user_data = []
    user_data[0] = document.getElementById("user").value;
    user_data[1] = document.getElementById("pwd").value;
    if(user_data[0] == "manan" && user_data[1] == "manan@123")
        {
            window.location.href="https://github.com/indmanan";
            return false;
        }
    else
        {
            window.alert("Login Failed");
        }
}
