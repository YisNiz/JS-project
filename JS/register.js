const name1=document.querySelector(".name input")
const password=document.querySelector(".password input")
const password2=document.querySelector(".password2 input")
const button=document.querySelector("button")
let arr=[]
let i=0
let j=0


button.addEventListener("click", () => //מאירוע של לחיצה על כפתור שלח
    {   let countNum=0
        let countSmall=0
        let countBIg=0
        const arrStr=password.value.split("")
        console.log(arrStr)
          for(i=0;i<arrStr.length;i++)//בדיקת תקינות של הקוד
            {
                    if(arrStr[i]>='A' && arrStr[i]<='Z' && countBIg<1) 
                       countBIg++
                    else
                    if(arrStr[i]>=0 && arrStr[i]<=9 && countNum<2) 
                     countNum++
                    else
                    if( arrStr[i]>='a' && arrStr[i]<='z' && countSmall<1)
                     countSmall++
                
                if(countBIg===1 && countNum===2 && countSmall===1)
                    break
            }


           if(i<arrStr.length)//אם הקוד תקין
            {
                if(password.value===password2.value)//אם אימות סיסמא יצא תקין
                    {
                                if(name1.value!="" && name1.value.length>=3)//אם השם תקין
                            {
                                let obj={name1:name1.value,password:password.value,wins:0,failurs:0}
                                window.location.replace("../HTML/enterance.html");    
                                arr = JSON.parse(localStorage.getItem("Registers"));
                                if(arr===null)
                                {
                                    arr=[]
                                    arr.push(obj)
                                    localStorage.setItem("Registers",JSON.stringify(arr))
                                }
                                else
                                {
                                    for( j=0;j<arr.length;j++)//בדיקה אם השם קיים במערכת
                                    {
                                        if(arr[j].name1===name1.value)
                                           {
                                            break;
                                           }
                                    }
                                    if(j===arr.length)//אם השם לא קיים במערכת עדיין
                                    {
                                            arr.push(obj)
                                            localStorage.setItem("Registers",JSON.stringify(arr))
                                    }
                                    else//אם כבר קיים שם כזה במערכת
                                    {
                                            alert("choose a different name")
                                            name1.value=""
                                    }
                                }
                                
                                console.log(arr)
                            }
                            
                            else//אם השם לא תקין
                            {
                                alert("your name is too short")
                                name1.value=""
                            
                            }
                    
                    }
                    else//אם אימות הסיסמא לא תקין
                    {
                        alert("your codes dose not same")
                        password.value=""
                        password2.value=""
                    }

            }
       
            else//אם הקוד לא תקין
            {
             alert("you need 2 numbers 1 capital letter and 1 small letter")
             password.value=""
             password2.value=""
            }
          




    }
)