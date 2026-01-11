const button=document.querySelector("#play")
const button1=document.querySelector("#back")
const name=document.querySelector("h4")
const failur=document.querySelector("#f")
const succses=document.querySelector("#s")

button1.addEventListener("click",()=>//לחיצה על כפתור חזור
    {
        window.location.replace("../HTML/enterance.html");    
    })
    
 button.addEventListener("click",()=>//לחיצה על כפתור שחק
{
    window.location.replace("../HTML/game.html");    
})

a= JSON.parse(localStorage.getItem("currentUser"))

name.textContent=name.textContent+""+a.name1//שם המשתמש
//סטטוס
failur.textContent=failur.textContent+""+a.failurs
succses.textContent=succses.textContent+""+a.wins





