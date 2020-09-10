// Open About Me modal when clicks about me link
document.getElementById("ab").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("mc").classList.add("show-modal");
});

// Close Modal when click close button
document.getElementById("closea").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("mc").classList.remove("show-modal");
})