// Run when page loads
window.onload = function(){
    // Catch letters while typing
    document.getElementById("searchUser").addEventListener("keyup", function(event){
        // If Not empty
        if(document.getElementById("searchUser").value != ""){
            // Get keyword
            let userName = event.target.value;
            // Get client id and client secret from github
            let cl_id  = '98dbd3a6356198af532a';
            let cl_sec = 'e35acdb1bedef92fb2dfe09b04930555dc061d83';

            // Ajax for send requests (https://api.github.com/users/username?client_id&client_secret)
            // Get Github Users Informations
            let xhr = new XMLHttpRequest();
            xhr.open("GET","https://api.github.com/users/"+userName+"?client_id="+cl_id+"&client_secret="+cl_sec, true);
            xhr.onload = function(){
                if(this.status == 200){
                    let user = JSON.parse(this.responseText);

                    // Fill cnt element with cutom elements with data
                    document.getElementById("cnt").innerHTML = 
                    `<div class="row1">
                        <div class="img">
                            <img id="primg" src="${user.avatar_url}" alt="">
                            <div class="hire" id="hire">${(user.hireable == true) ? 'Hireable' : 'Not Hireable'}</div>
                            <a href="${user.html_url}" class="visit" id="vp" target="_blank">Visit Profile</a>
                        </div>
                        <div class="info">
                            <div>Name : <span id="name">${user.name}</span></div>
                            <div>Company : <span id="company">${user.company}</span></div>
                            <div>Blog : <span id="blog">${user.blog}</span></div>
                            <div>Location : <span id="location">${user.location}</span></div>
                            <div>Email : <span id="email">${user.email}</span></div>
            
                            <div class="short">
                                <div class="pr">Public Repos : <span id="pr">${user.public_repos}</span></div>
                                <div class="pr">Public Gists : <span id="pg">${user.public_gists}</span></div>
                                <div class="pr">Followers : <span id="fol">${user.followers}</span></div>
                                <div class="pr">Following : <span id="fo">${user.following}</span></div>
                            </div>
                        </div>
                    </div>
        
                    <div class="row2">
                        <div class="bio">
                            <h3>Bio</h3>
                            <p id="bio">${user.bio}</p>
                        </div>
            
                        <div class="meminfo">
                            <p>Member Since : <span id="msince">${user.created_at}</span></p>
                            <p>Latest Update : <span  id="lastup">${user.updated_at}</span></p>
                        </div>

                        <div class="repos" id="rp">
                            <h3>Latest Repos</h3>
                        </div>
                    </div>`;

                    // Set Hire Color
                    if(user.hireable == true){
                        document.getElementById("hire").style.backgroundColor = '#44bd32';
                    }
                    else{
                        document.getElementById("hire").style.backgroundColor = '#e84118';
                    }

                    // Create new Ajax request for get Repos
                    let xhrnew = new XMLHttpRequest();
                    xhrnew.open("GET", "https://api.github.com/users/"+userName+"/repos?client_id="+cl_id+"&client_secret="+cl_sec, true);
                    xhrnew.onload = function(){
                        if(this.status == 200){
                            let repos = JSON.parse(this.responseText);
                            console.log(repos.name);
                            for(let i = 0; i < repos.length; i++){
                                console.log(repos[i].name);
                                document.getElementById("rp").innerHTML += 
                                `<div class="rep">
                                    <h4>${repos[i].name}</h4>
                                    <p>${repos[i].description}</p>
                                    <a href="${repos[i].html_url}" target="_blank">View Repo</a>
                                </div>`;
                            }
                        }
                    };
                    xhrnew.send();

                }
            };
            xhr.send();
        }
        // If empty
        else{
            // Set cnt element empty
            document.getElementById("cnt").innerHTML = ``;
        }
    });
}