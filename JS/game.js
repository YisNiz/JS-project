const Button = document.querySelector("#l button");
const Input = document.querySelector("#l input");
const oldLetters = document.querySelector("#old-letters");
const Button2 = document.querySelector("#hashlem button");
const Input2 = document.querySelector("#hashlem input");
const body = document.querySelector("#body");
let pictures = document.querySelector("#pictures");
let user = document.querySelector("#user");
let count = 0;
let countWin = 0;
let countWin2 = 0;
let countUniq = 0;
let Strings = "";
let mone = 0;
let found = false;
let audio = new Audio();
a = JSON.parse(localStorage.getItem("currentUser"))
arr = JSON.parse(localStorage.getItem("Registers"));
const button4 = document.querySelector(".button-newGme")


const arrWords = [//מערך של מילים
    "יהודית המהממת", "סופר סופר", "אלגוריתמים", "הגיבן מנוטהרדם", "מטריצה",
    "גברת אלקריף", "פרכיית אורז", "לאה ובתשבע", "החתונה של נועה", "מלפפון חמוץ",
    "בננה ספליט", "עם ישראל חי", "אסתר ויסכה החננות", "אתה גאון", "אל יאוש בעולם",
    "פטרוזליה"
];

let randomWord = arrWords[Math.round(Math.random() * (arrWords.length - 1))];//הגרלת מילה
let arrMila = randomWord.split("");
console.log(arrMila);

// יצירת דיבים לכל אות במילה
for (let i = 0; i < arrMila.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    newDiv.textContent = arrMila[i];

    let newDivI = "newDiv" + i;
    newDivI = document.createElement("div");
    if (arrMila[i] === " ") {
        newDivI.classList.add("newDivIrek");
    } else {
        newDivI.classList.add("newDivI");
    }
    newDivI.append(newDiv);
    computer.append(newDivI);
}

let divs = document.querySelectorAll(".newDiv");

let arrMila2 = arrMila.slice(0, arrMila.length);
for (let j = 0; j < arrMila2.length; j++) {
    if (arrMila2.indexOf(arrMila2[j]) !== arrMila2.lastIndexOf(arrMila2[j])) {
        arrMila2[j] = " ";
    }
    if (arrMila2[j] !== " ") {
        countUniq++;
    }
}
console.log(countUniq);

let success = document.createElement("div");
success.classList.add("succses");
success.textContent = `הצלחות:${count - mone} כישלונות:${mone}`;
user.append(success);



// מאירוע של לחיצה על כפתור
Button.addEventListener("click", () => {
    // בדיקת אות תקינה
    if (Input.value >= "א" && Input.value <= "ת") {
        Strings += Input.value + " ";

        if (Strings.indexOf(Input.value) !== Strings.lastIndexOf(Input.value)) {
            alert("כבר השתמשת באות זו");
            Input.value = "";
        } else {
            let Letter = Input.value;
            Input.value = "";
            console.log(count++);

            if (mone < 14) {//כל עוד עוד לא היו 14 כשלונות
                let oldLeter = document.createElement("div");
                oldLeter.classList.add("oldLeter");
                oldLeter.textContent = Letter;
                oldLetters.append(oldLeter);
            } else {
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "block";
                }
                a.failurs++;
                localStorage.setItem("currentUser", JSON.stringify(a));

                let loser = document.createElement("div");
                loser.classList.add("lose");
                body.append(loser);
                pictures.style.backgroundImage = `url(../PICTURES/14.jpg)`;//לא רואים את התמונה כי יש לי תמונה של גיימאובר

                // יצירת כפתור משחק חדש 
                const button4 = document.createElement("button");
                button4.classList.add("button-newGme");
                button4.textContent = "new game";
                loser.append(button4);  // הוספת הכפתור להודעת ההפסד

                // הוספת אירוע לכפתור
                button4.addEventListener("click", () => {
                    window.location.replace("../HTML/game.html");
                })

                audio.src = '../PICTURES2/הפסד.mp3'
                audio.play();
            }

            for (let i = 0; i < arrMila.length; i++) {
                if (arrMila[i] === Letter) {
                    divs[i].style.display = "block";
                    countWin++;
                    found = true;
                }
            }

            if (!found) {
                mone++;
                console.log("mone: " + mone);

                if (mone >= 14) {
                    success.textContent = `הצלחות:${count - mone} כישלונות:${mone}`;
                    pictures.style.backgroundImage = `url('../PICTURES/14.jpg')`;//לא רואים את התמונה כי יש לי תמונה של גיימאובר

                    for (let i = 0; i < divs.length; i++) {
                        divs[i].style.display = "block";
                    }
                    a.failurs++;
                    localStorage.setItem("currentUser", JSON.stringify(a));

                    let loser = document.createElement("div");
                    loser.classList.add("lose");
                        body.append(loser);

                    // יצירת כפתור משחק חדש כאן
                    const button4 = document.createElement("button");
                    button4.classList.add("button-newGme");
                    button4.textContent = "new game";
                    loser.append(button4);  // הוספת הכפתור להודעת ההפסד

                    // הוספת אירוע לכפתור
                    button4.addEventListener("click", () => {
                        window.location.replace("../HTML/game.html");
                    });
                    audio.src = '../PICTURES2/הפסד.mp3';
                    audio.play();
                }

                pictures.style.backgroundImage = `url('../PICTURES/${mone}.jpg')`;
            }

            found = false;

            if (countWin >= 1) {
                countWin = 1;
                countWin2 = countWin + countWin2;
                console.log("countWin2:" + countWin2);
            }

            countWin = 0;

            // אם כל האותיות הוזנו
            if (countWin2 === countUniq && mone < 14) {
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "block";
                }
                a.wins++;
                localStorage.setItem("currentUser", JSON.stringify(a));
                let win = document.createElement("div");
                win.classList.add("win");
                body.append(win);

                const button4 = document.createElement("button");
                button4.classList.add("button-newGme");
                button4.textContent = "new game";
                win.append(button4);

                button4.addEventListener("click", () => {
                    window.location.replace("../HTML/game.html");
                });
                let audio = new Audio();
                audio.src = '../PICTURES2/ניצחון.mp3';
                audio.play();
            }
        }
    } else {
        alert("יש להקליד רק אותיות עיבריות");
        Input.value = "";
    }

    success.textContent = `הצלחות:${count - mone} כישלונות:${mone}`;//סטטוס במשחק
    {
        for (let i = 0; i < arr.length; i++) 
        {
            if (arr[i].name1 === a.name1) {
                arr[i].wins = a.wins
                arr[i].failurs = a.failurs
            }
             return
        }
        localStorage.setItem("Registers", JSON.stringify(arr))
    }
});


//  מאירוע של לחיצה על כפתור ההשלמה ניחוש אחד בלבד
Button2.addEventListener("click", () => {
    let str = Input2.value;
    let str2 = arrMila.join("");
    Input2.value = "";

    if (str === str2 && count <= 14) {

        a.wins++;
        localStorage.setItem("currentUser", JSON.stringify(a))

        success.textContent = `הצלחות:${1} כישלונות:${0}`;
        let win = document.createElement("div");
        win.classList.add("win");
        body.append(win);

        const button4 = document.createElement("button")
        button4.classList.add("button-newGme");
        button4.textContent = "new game";
        win.append(button4);
        button4.addEventListener("click", () => {
            window.location.replace("../HTML/game.html");
        })
        audio.src = '../PICTURES2/ניצחון.mp3';
        audio.play();
    }
    else {
        a.failurs++;
        localStorage.setItem("currentUser", JSON.stringify(a))
        success.textContent = `הצלחות:${0} כישלונות:${1}`;
        let loser = document.createElement("div");
        loser.classList.add("lose");
        body.append(loser);

        pictures.style.backgroundImage = `url(../PICTURES/14.jpg)`;//לא רואים את התמונה כי יש לי תמונה של גיימאובר

        const button4 = document.createElement("button")
        button4.classList.add("button-newGme");
        button4.textContent = "new game";
        loser.append(button4);
        button4.addEventListener("click", () => {
            window.location.replace("../HTML/game.html");

        })
        audio.src = '../PICTURES2/הפסד.mp3';
        audio.play();
    }

    for (let i = 0; i < divs.length; i++) {//מגלה את כל האותיות שבמישפט
        divs[i].style.display = "block";
    }


    {
        for (let i = 0; i < arr.length; i++)
        {
            if (arr[i].name1 === a.name1) {
                arr[i].wins = a.wins
                arr[i].failurs = a.failurs
            }
            return
        }
        localStorage.setItem("Registers", JSON.stringify(arr))
    }
})


const button1 = document.querySelector("#back")//לחיצה על כפתור חזור
button1.addEventListener("click", () => {
    window.location.replace("../HTML/games-paper.html");
})






