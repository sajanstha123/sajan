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
// const services = [
//     {
//         image: "gouse.jpg",
//         title: "Service",
//         description: "service",

//     },
// ];
// const saru= doucument.getElementById("classservice");
// services.forEach(service => {
//     const lay = document.createElement("div")
//     lay.className = "card";
//     lay.innerHTML = `
//         <img src=${service.image} "alt"=${service.title}"/>
//         <h3>${service.title}</h3>
//         <p>${service.description}</p>
//         `;
//     saru.appendChild(lay);

// });


