const hanburger = document.getElementById("hanburger");
const navlinks = document.getElementById("nevbar");

hanburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});
const text = "Hi, I'm Mr.SAJAN KUMAR SHRESTHA";
const typedText = document.getElementById('typed-text');
let index = 0;

function type(){
    if(index < text.length){
        typedText.textContain += text.charAt(index);
        index++;
        setTimeout(type, 150);

    }
}
type();