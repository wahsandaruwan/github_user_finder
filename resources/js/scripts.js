// Run when page loads
window.onload = function(){
    // Catch letters while typing
    document.getElementById("searchUser").addEventListener("keyup", function(event){
        let userName = event.target.value;
        let cl_id  = '98dbd3a6356198af532a';
        let cl_sec = 'e35acdb1bedef92fb2dfe09b04930555dc061d83';

        // Ajax for send requests
        let xhr = new XMLHttpRequest();
        xhr.open("GET","https://api.github.com/users/"+userName+"?client_id="+cl_id+"&client_secret="+cl_sec, true);
        xhr.onload = function(){
            if(this.status == 200){
                console.log(this.responseText);
            }
        };
        xhr.send();
    });
}