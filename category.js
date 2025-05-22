const filterButtons = document.querySelectorAll("#filter-buttons button");
const card = document.querySelectorAll("#cards .card");

filterButtons.forEach(button=> {
    button.addEventsListener("click", () =>{
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
         
        // const filter = button.getAttribute("data-filter");

        // Cards.forEach(card =>{
        //     const category = card.getAttribute("data-category");
        //     if(filter == "all" || category ==filter){
        //         card.style.display = "block";
        //     }else{
        //         card.style.dispaly = "none";
        //     }
            
        // });

});
});