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

                document.getElementById('cnt').innerHTML = 
                `<div class="row1">
                    <div class="img">
                        <img id="primg" src="${user.avatar_url}" alt="">
                        <div class="hire" id="hire"></div>
                        <a href="" class="visit" id="vp" target="_blank">Visit Profile</a>
                    </div>
                    <div class="info">
                        <div>Name : <span id="name"></span></div>
                        <div>Company : <span id="company"></span></div>
                        <div>Blog : <span id="blog"></span></div>
                        <div>Location : <span id="location"></span></div>
                        <div>Email : <span id="email"></span></div>
        
                        <div class="short">
                            <div class="pr">Public Repos : <span id="pr"></span></div>
                            <div class="pr">Public Gists : <span id="pg"></span></div>
                            <div class="pr">Followers : <span id="fol"></span></div>
                            <div class="pr">Following : <span id="fo"></span></div>
                        </div>
                    </div>
                </div>
    
                <div class="row2">
                    <div class="bio">
                        <h3>Bio</h3>
                        <p id="bio">${user.bio}</p>
                    </div>
        
                    <div class="meminfo">
                        <p>Member Since : <span id="msince"></span></p>
                        <p>Latest Update : <span  id="lastup"></span></p>
                    </div>
                </div>`;

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

                // Set Short Info
                document.getElementById("pr").innerHTML = user.public_repos;
                document.getElementById("pg").innerHTML = user.public_gists;
                document.getElementById("fol").innerHTML = user.followers;
                document.getElementById("fo").innerHTML = user.following;

                // Set view profile button
                document.getElementById("vp").href = user.html_url;

                // Set Bio
                document.getElementById("bio").innerHTML = user.bio;
                
                // Set Member Info
                document.getElementById("msince").innerHTML = user.created_at;
                document.getElementById("lastup").innerHTML = user.updated_at;
            }
        };
        xhr.send();
    });
}