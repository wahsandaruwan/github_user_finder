// For About
// Open About modal when clicks about link
document.getElementById("ab").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("ma").classList.add("show-modal");
    document.getElementById("mc").classList.remove("show-modal");
});

// Close Modal when click close button
document.getElementById("closea").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("ma").classList.remove("show-modal");
});

// For Contact
// Open Contact modal when clicks contact link
document.getElementById("con").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("mc").classList.add("show-modal");
    document.getElementById("ma").classList.remove("show-modal");
});

// Close Modal when click close button
document.getElementById("closec").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("mc").classList.remove("show-modal");
});