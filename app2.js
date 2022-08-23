// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getDatabase, ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHoKqfWYqs4E0shKStnFvTRLOyA9tB9hI",
    authDomain: "qapp-a68f7.firebaseapp.com",
    projectId: "qapp-a68f7",
    storageBucket: "qapp-a68f7.appspot.com",
    messagingSenderId: "83135156183",
    appId: "1:83135156183:web:887840eba13f9017018592",
    measurementId: "G-30T7SFBVY8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const databs = getDatabase();



// window.sendValue = function () {

//     var inp = document.getElementById("question");

//     console.log(inp.value);
//     var reference = ref(databs, "questions/");
//     set(reference,{
//         text: inp.value,
//         dt:
//             new Date().getHours() + new Date().getMinutes() + new Date().getSeconds(),
//     });
// };





window.sendValue = function () {
    var inp = document.getElementById('question');
   

console.log(inp.value);
    var id = Math.random().toString().slice(2);
    var obj = {


        text: inp.value,
        id: id,
        dt:
            new Date().getHours() + new Date().getMinutes() + new Date().getSeconds(),

    };

    var reference = ref(databs, "questions/");//categorized to things like form diffrent data bases//
    var newref = push(reference);
    // obj.id = newref.key;
    set(newref, obj);

};



//     var time=new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();
//     var obj = {


//         text: inp.value,
//         time:time,
        

//     };
//     var reference=ref(databs, "questions/");
//     var newref = push(reference);
//     set(newref, obj);

// }
    
    


var questionsData;


function renderQuestions() {

    var parent = document.getElementById("displyquestions");

    parent.innerHTML = "";
    for (var i = 0; i < questionsData.length; i++) {

        parent.innerHTML += `<div class="bg-light my-2 rounded shadow opacity-75 bg-light text-dark">

<p><span>#user ${questionsData[i].dt}</span> ${questionsData[i].text}</p>
</div>`;

    }
}

function getAllQuestions() {


    var reference = ref(databs, "questions/")
    onValue(reference, function (data) {
        questionsData = Object.values(data.val());
        console.log(questionsData);
        renderQuestions();

    });
}
getAllQuestions();



/*-----form-----*/

window.SignUp = function () {

    window.location.href = "pages/form.html";

};

// window.SignIn = function () {

//     window.location.href = "pages/signin.html";

// };


window.signupdt = function () {


    var name = document.getElementById('username');
    var email = document.getElementById('useremail');
    var password = document.getElementById('passwod');
    // var repeatpassword = document.getElementById('repeatpass').value;
    // var check_box = document.getElementById('check-box').value;
    var Register = document.getElementById('register');

    var obj = {

        name,
        email,
        password,
        Register,
    };
    console.log(obj);
};

// window.signin = function () {
//     var email = document.getElementById('useremail');
//     var password = document.getElementById('passwod');
//     var check_box = document.getElementById('check-box');
//     var Register = document.getElementById('register');
//     var obj = {
//         email,
//         password,
//         check_box,
//         Register,
//     };
//     console.log(obj);
// };