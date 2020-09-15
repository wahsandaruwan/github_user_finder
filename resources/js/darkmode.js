// For Dark Mode
var i = 0;
document.getElementById("dark").addEventListener("click", function(event){
    event.preventDefault();
    // Activate and Deactivate Dark Mode Class
    document.querySelectorAll(".darkm").forEach((result) =>{
        result.classList.toggle("dark-mode");
    });
    
    // Fix positioning issue in footer by activating and deactivating invert class
    document.querySelectorAll(".foo").forEach((result) =>{
        result.classList.toggle("invert");
    });

    // For identify if dark button is pressed or not
    // First set i  to 1 when setting dark theme
    if(i == 0){
        i = 1;
        console.log(i);
    }
    // Set i to 0 when unsetting dark theme
    else{
        i = 0;
    }
});

// Function to set Dark Mode to SVG Logo
function svg(){
    if(i == 1){
        document.querySelectorAll(".ro").forEach((result) =>{
            result.classList.toggle("dark-mode");
        });
    }
}

