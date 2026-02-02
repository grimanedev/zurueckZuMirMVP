const screens =
document.querySelectorAll("section");

function show(id){
    screens.forEach(section =>
        section.classList.remove("active"));

document.getElementById(id).classList.add("active");
}

function enterSafeSpace() {
    document.body.classList.add("hideBar");
    show("transitionScreen");

    setTimeout(()=> {
        document.body.classList.add("safeSpaceUi")
        document.body.classList.remove("hideBar")
        show("safeSpaceScreen");
    }, 5500);
}

function exitSafeSpace() {
    document.body.classList.add("hideBar");
    show("transitionScreenExit");

    setTimeout(()=> {
        document.body.classList.remove("safeSpaceUi")
        document.body.classList.remove("hideBar")
        show("homeScreen");
    }, 5500);
}

//settingsButton.onclick = () => show("settingsScreen");
homeButton.onclick = () => show("homeScreen");
contactButton.onclick = () => show("contactScreen");
statsButton.onclick = () => show("statsScreen");
safeSpaceButton.onclick = () => enterSafeSpace();
exitSafeSpaceButton.onclick = () => exitSafeSpace();
checkinCard.onclick = () => show("checkinScreen");
skillsCard.onclick = () => show("skillsScreen");


/* Notfall Kontakte c1*/
function saveContact1() {
    const c1Name = document.getElementById("c1NameInput").value;
    const c1Phone = document.getElementById("c1PhoneInput").value;
    const c1Code = document.getElementById("c1CodeInput").value;

    localStorage.setItem("contact1", JSON.stringify({ name: c1Name, phone: c1Phone, code: c1Code}));
}

function showContact1() {
    const savedC1 = JSON.parse(localStorage.getItem("contact1"));
    
    if (!savedC1) return;

    document.getElementById("c1NameInput").value = savedC1.name || "";
    document.getElementById("c1PhoneInput").value = savedC1.phone || "";
    document.getElementById("c1CodeInput").value = savedC1.code || "";
}

showContact1();

/* Notfall Kontakte c2*/
function saveContact2() {
    const c2Name = document.getElementById("c2NameInput").value;
    const c2Phone = document.getElementById("c2PhoneInput").value;
    const c2Code = document.getElementById("c2CodeInput").value;

    localStorage.setItem("contact2", JSON.stringify({ name: c2Name, phone: c2Phone, code: c2Code}));
}

function showContact2() {
    const savedC2 = JSON.parse(localStorage.getItem("contact2"));
    
    if (!savedC2) return;

    document.getElementById("c2NameInput").value = savedC2.name || "";
    document.getElementById("c2PhoneInput").value = savedC2.phone || "";
    document.getElementById("c2CodeInput").value = savedC2.code || "";
}

showContact2();

/*const cards =
document.querySelectorAll(".card");*/


