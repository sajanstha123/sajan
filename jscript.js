const hanburger = document.getElementById("hanburger");
const navlinks = document.getElementById("nevbar");

hanburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});
const text = "Hi, I'm Mr.SAJAN KUMAR SHRESTHA";
const typedText = document.getElementById('typed-text');
let index = 0;

function type() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150);

    }
}
type();

// const projects = [
//     {
//         image: "gouse.jpg",
//         title: "Animation Nevbar",
//         description: "A responsive navigation bar with smooth animations and better coading",

//     },
//     {
//         image: "house2.jpeg",
//         title: "HTML CSS",
//         description: "A image is responsible for this coad this project is done by sajan kumar shrestha i love to play with electric device ",
//     },
//     {
//         image: "gouse.jpg",
//         title: "HTML CSS",
//         description: "",
//     }
// ];
// const container = document.getElementById("projectcontain");
// projects.forEach(project => {
//     const card = document.createElement("div");
//     card.className = "projectcontact";
//     card.innerHTML = `
//     <img src=${project.image} "alt"=${project.title}"/>
//     <h3>${project.title}</h3>
//     <p>${project.description}</p>
//        `;
//     container.appendChild(card);



// });
const projects = [
{
    image : "gouse.jpg",
    title : " Animated Navbar",
    description : "A responsive navigation bar with smooth animation and"
},
{
    image : "gouse.jpg",
    title : " Animated Navbar",
    description : "A responsive navigation bar with smooth animation and"
},
{
    image : "gouse.jpg",
    title : " Animated Navbar",
    description : "A responsive navigation bar with smooth animation and"
},
{
    image : "gouse.jpg",
    title : " Animated Navbar",
    description : "A responsive navigation bar with smooth animation and"
},

{
    image : "gouse.jpg",
    title : " Animated Navbar",
    description : "A responsive navigation bar with smooth animation and" 
},
{
image : "gouse.jpg",
title : " Animated Navbar",
description : "A responsive navigation bar with smooth animation and"
},
];
const container = document.getElementById("projectcontain");
projects.forEach(project=> {

    const card = document.createElement("div");
    card.className = "projectcontact";
    card.innerHTML = `
    <img src = "${project.image}" alt = "${project.title}"/>
    <h3> ${project.title}</h3>
    <p>${project.description}</p>
    `;
    container.appendChild(card)
});

document.getElementById("formBMI").addEventListener("submit",
    function(e)
    {
    e.preventDefault();
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if(!height || !weight || height <= 0 || weight <= 0){
        result.textContent ="please enter valid height and weight!";
        return;
    }
    const heightInMeter = height/100;
    const bmi = (weight /(heightInMeter * heightInMeter)).toFixed(2);

    let category = "";
    if (bmi < 18.5){
        category="Underweight";
    }
    else if(bmi < 24.9){
        category="Normal weight";
    }
    else if(bmi < 29.9){
        category="overweight";
    }
    else{
        category="obesity";
    }
    result.textContent=`Your BMI is ${bmi} (${category})`;
    });



