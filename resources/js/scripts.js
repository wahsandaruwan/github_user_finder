// Run when page loads
window.onload = function(){
    // Catch letters while typing
    document.getElementById("searchUser").addEventListener("keyup", function(event){
        let userName = event.target.value;
        let cl_id  = '98dbd3a6356198af532a';
        let cl_sec = 'e35acdb1bedef92fb2dfe09b04930555dc061d83';

        // Ajax for send requests (https://api.github.com/users/username?client_id&client_secret)
        let xhr = new XMLHttpRequest();
        xhr.open("GET","https://api.github.com/users/"+userName+"?client_id="+cl_id+"&client_secret="+cl_sec, true);
        xhr.onload = function(){
            if(this.status == 200){
                let user = JSON.parse(this.responseText);
                // Set Name
                document.getElementById("name").innerHTML = user.name;
                // Set Image
                document.getElementById("primg").src = user.avatar_url;
                // Set Company
                document.getElementById("company").innerHTML = user.company;
                // Set Blog
                document.getElementById("blog").innerHTML = user.blog;
                // Set Location
                document.getElementById("location").innerHTML = user.location;
                // Set Email
                document.getElementById("email").innerHTML = user.email;
                // Set Hireable
                if(user.hireable == true){
                    document.getElementById("hire").style.backgroundColor = "#27ae60"
                    document.getElementById("hire").innerHTML = "Hireable";
                }
                else{
                    document.getElementById("hire").style.backgroundColor = "#e74c3c"
                    document.getElementById("hire").innerHTML = "Not Hireable";
                }
            }
        };
        xhr.send();
    });
}