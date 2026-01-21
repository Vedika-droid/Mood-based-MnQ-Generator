document.getElementById("mood").addEventListener("submit",function(e)
{
    e.preventDefault();
    console.log("Redirecting to other page");
    let username=document.getElementById("un").value;
    if(username.trim()!=" ")
    {
    localStorage.setItem("username",username);
    window.location.href="MoodHealer.html";
    }
});