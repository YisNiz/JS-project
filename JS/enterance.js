const name1=document.querySelector(".input-group #username")
const password=document.querySelector(".input-group #password")
const button=document.querySelector("button")
const a=document.querySelector("a")
let arr=[]
let i=0

button.addEventListener("click", () =>{//מאירוע של לחיצה על כפתור שלח
arr = JSON.parse(localStorage.getItem("Registers"))
            if(arr===null )//אם הלוקלסטורג ריק
                {
                     window.location.replace("../HTML/register.html");     
                }
            else
                {
                     for(i=0;i<arr.length;i++)
                         {
                            
                             if(arr[i].name1===name1.value && arr[i].password===password.value)//אם המשתמש קיים במערכת
                             {
                                let currentUser ={name1:name1.value,wins:arr[i].wins,failurs:arr[i].failurs}
                                localStorage.setItem("currentUser",JSON.stringify(currentUser))
                                 window.location.replace("../HTML/games-paper.html"); 
                                                       
                                 return;
                             }
                             else
                             {
                                if(arr[i].name1===name1.value && arr[i].password!=password.value)//אם השם קיים והקוד שגוי
                                    {
                                        alert("your code is wrong")
                                        password.value=""
                                        return;
                                    }
                             }
                         }
                 
                         if(i===arr.length)//אם אין משתמש כזה במערכת
                         {
                           alert("new user? type on the link to register")
                            a.style.color="red"
                            a.style.backgroundColor="yellow"
                         }
                 }
})