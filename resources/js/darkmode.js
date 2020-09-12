// For Dark Mode
document.getElementById("dark").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelectorAll(".darkm").forEach((result) =>{
        result.classList.toggle("dark-mode");
    });

    // Fix positioning issue in footer
    document.querySelectorAll(".foo").forEach((result) =>{
        result.classList.toggle("invert");
    });
});

