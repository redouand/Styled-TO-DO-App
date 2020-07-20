var ul = document.querySelector("ul"),
    li = ul.querySelectorAll("li"),
    typist = document.querySelector("#big-parent-grid .big-parent-child-1 h2")
    name = prompt("What can We Call You?")

// calling you by your name ------------------------//

typist.textContent+= name;

// -------------------Delete Element -------------------//
ul.addEventListener("click", trash);
function trash(e) {
  if (e.target.className == "trash original" || e.target.className == "trash trans" || e.target.className == "trash") {
    ul.removeChild(e.target.parentNode)
  }
}

//------------------------ADD Element----------------------//

var addElemBtn = document.forms["only-form"].querySelector("button"),
    input = document.forms["only-form"].querySelector("input[type='text']"),
    form = document.forms["only-form"];

var transBtnAdd = document.getElementById("trans-btn-add");
var origiBtnAdd = document.getElementById("original-btn-add");
transBtnAdd.style.display = "none";
origiBtnAdd.style.display = "block";

form.addEventListener("submit", adder)
function adder(e) {
  e.preventDefault();
  var newElem = document.createElement("li"),
      newElemBtn = document.createElement("span");


  newElem.textContent = input.value;
  // taking care of the delete button ==> text and class
  newElemBtn.textContent = "Delete";
  newElem.setAttribute("draggable", "true")
  newElemBtn.className = "trash"
  //appending children from span => li => ul
  if (input.value.length < 5) {
    warningElem = document.createElement("li")
    ul.appendChild(warningElem)
    warningElem.className = "warning"
    warningElem.innerText= "You have To write At least 5 letters!";
    // warning Styles CSS
    warningElem.style.border = "none"
    warningElem.style.margin = "90px 0"
    warningElem.style.paddingLeft = "65px"
    warningElem.style.text = "nowrap"
// ------------when the typo gets deleted
    input.addEventListener("keydown", function() {
      if (input.value.length === 1) {
        warningElem.style.display = "none"}})
  }
  else {
    newElem.appendChild(newElemBtn);
    ul.appendChild(newElem)
    input.value = "";
  }

}

// working on the search enginge bar

var inputSearch = document.querySelector(".input-flex input");
inputSearch.addEventListener("keyup", searchEngine)
function searchEngine(e) {
  term = inputSearch.value;
  li = document.querySelectorAll(".grey-space ul li")
  for (var i = 0; i < li.length; i++) {
    const title = li[i].textContent.toLowerCase()
    if (title.indexOf(term) != -1) {
      li[i].style.display = "block"
    }
    else {
      li[i].style.display = "none"
    }
  }
}
var day = document.querySelector(".big-parent-child-1 .day"),
    date = document.querySelector(".big-parent-child-1 p .date"),
    month = document.querySelector(".big-parent-child-1 p .month"),
    year = document.querySelector(".big-parent-child-1 p .year");


        var monthsArray = ['January', 'February', 'March', 'April',
                  'May', 'June', 'July', 'August', 'September',
                  'October', 'November', 'December'],
            weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],



        MONTH =  monthsArray[new Date().getMonth()],
        DAY = weekDays[new Date().getDay()],
        DATE = new Date().getDate(),
        YEAR = " 2020";

        if (DATE === 1 || DATE === 21 || DATE === 31) {
          DATE+= "st"
        }
        if (DATE === 2 || DATE === 22) {
          DATE+= "nd"
        }
        if (DATE === 3 || DATE === 23) {
          DATE+= "rd"
        }


    day.textContent = DAY
    date.textContent = DATE;
    month.textContent = MONTH;
    year.textContent = YEAR;

var lang = document.querySelector(".before"),
    both = document.querySelectorAll(".drops"),
    engLang = document.querySelector(".english"),
    dardjaLang = document.querySelector(".dardja"),
    dropStatus = false;

lang.addEventListener("click", dropDown);

function dropDown() {
  if (dropStatus == false) {

    for (var i = 0; i < both.length; i++) {
      both[i].style.display = "block";
      dropStatus = true;
    }

  }
  else{
    for (var i = 0; i < both.length; i++) {
      both[i].style.display = "none";
      dropStatus = false;
    }
  }
}
//============translate funcion-----------------------------------

var transItems = document.querySelectorAll(".trans"),
    originalItems = document.querySelectorAll(".original");
dardjaLang.addEventListener("click", transFunc);
function transFunc(e) {

  for (var i = 0; i < originalItems.length; i++) {
    originalItems[i].style.display = "none";
  }
  for (var i = 0; i < transItems.length; i++) {
    transItems[i].style.display = "block"
    transItems[0].innerHTML += name;
  }
  for (var i = 0; i < both.length; i++) {
    both[i].style.display = "none";
    dropStatus = false;
  }
  input.setAttribute("placeholder", "Ekteb Wesh rak 7ab Edir elyoum");
  inputSearch.setAttribute("placeholder", "Dir Kesh Recherche :0 ...");

  var  monthsArrayTrans = ['janvi', 'fivri', 'mars', 'avril',
          'May', 'jwan', 'Jwiyi', 'out', 'sibtombre',
          'Octobre', 'Novembre', 'Dicembre'],
       weekDaysTrans = ["El7ad", "Letnin", "Tlata", "Lareb3a", "Elkhmiss", "El Dgem3a", "Esebt"];

MONTHtrans =  monthsArrayTrans[new Date().getMonth()],
DAYtrans = weekDaysTrans[new Date().getDay()],
DATEtrans = new Date().getDate(),
YEARtrans = " 2020";

day.textContent = DAYtrans;
month.textContent = MONTHtrans;
date.textContent = DATEtrans;
year.textContent = YEARtrans;

var origiBtnAdd = document.getElementById("original-btn-add");
var transBtnAdd = document.getElementById("trans-btn-add");
origiBtnAdd.style.display = "none"
transBtnAdd.style.display = "block";

// -------------------Delete Element trans -------------------//
ul.addEventListener("click", trash);
function trash(e) {
  if (e.target.className == "trash") {
    ul.removeChild(e.target.parentNode)
    }
  }
  var jsTrashPadding = document.querySelectorAll(".trash.trans");
  for (var i = 0; i < jsTrashPadding.length; i++) {
    jsTrashPadding[i].addEventListener("mouseover", function(e) {
      e.target.style.transform = "translateY(-40px)";
    })
  }
  for (var i = 0; i < jsTrashPadding.length; i++) {
    jsTrashPadding[i].addEventListener("mouseout", function(e) {
      e.target.style.transform = "translateY(-37px)";
    })
  }

}

//============original funcion-------------

engLang.addEventListener("click", originalFunc);
function originalFunc(e) {
  for (var i = 0; i < transItems.length; i++) {
    transItems[i].style.display = "none";
  }
  for (var i = 0; i < originalItems.length; i++) {
    originalItems[i].style.display = "block"
  }
  for (var i = 0; i < both.length; i++) {
    both[i].style.display = "none";
    dropStatus = false;
  }

  var transBtnAdd = document.getElementById("trans-btn-add");
  var origiBtnAdd = document.getElementById("original-btn-add");
  transBtnAdd.style.display = "none";
  origiBtnAdd.style.display = "block"


  input.setAttribute("placeholder", "What will you do today?");
  inputSearch.setAttribute("placeholder", "Quick Search ...");
  var monthsArray = ['January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'],
      weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],



  MONTH =  monthsArray[new Date().getMonth()],
  DAY = weekDays[new Date().getDay()],
  DATE = new Date().getDate(),
  YEAR = " 2020";

  if (DATE === 1 || DATE === 21 || DATE === 31) {
    DATE+= "st"
  }
  if (DATE === 2 || DATE === 22) {
    DATE+= "nd"
  }
  if (DATE === 3 || DATE === 23) {
    DATE+= "rd"
  }


day.textContent = DAY
date.textContent = DATE;
month.textContent = MONTH;
year.textContent = YEAR;

var jsOrigiPadding = document.querySelectorAll(".trash.Original");



  for (var i = 0; i < jsOrigiPadding.length; i++) {
    jsOrigiPadding[i].style.transform = "translateY(-35px)";
  }


  for (var i = 0; i < jsOrigiPadding.length; i++) {
    jsOrigiPadding[i].addEventListener("mouseover", function(e) {
      e.target.style.transform = "translateY(-40px)";
    })
  }


  for (var i = 0; i < jsOrigiPadding.length; i++) {
    jsOrigiPadding[i].addEventListener("mouseout", function(e) {
      e.target.style.transform = "translateY(-37px)";
    })
  }


}
