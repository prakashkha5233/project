const pannels = document.querySelectorAll('.pannel');

pannels.forEach((pannel) => {
    pannel.addEventListener("click", () => {
        removeActiveClasses();
        pannel.classList.toggle("active");
    });
});

function removeActiveClasses(){
    pannels.forEach((pannel) => {
        pannel.classList.remove("active");
    })
}
