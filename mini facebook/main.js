var user = [{
    
        username: "mtizukake",
        password: "rockets11"
},
    {
        username: "cutelykamanalo",
        password: "reddragonqwe"
    },
    {
        username: "xalaindimabuyo",
        password: "marjirelcayanan11"
    }
]

database = [user];

newsfeed = [
        {
            username: "Andrei",
            timeline: "So many things to learn"
        },
        {
            username: "Antonia",
            timeline: "Saaaaaaaaaaaaaa"
        },
        {
            username: "aLAIN",
            timeline: "Pooggiiii"
        }

]
//signin


function isUserValid(username, password){

    for (var i=0; i < user.length; i++){
        if (user[i].username === username &&
            user[i].password === password) {
                return true;
            } 
            
         }
         return false;
    }

 function signIn(username, password){
     if(isUserValid(username, password)){
         console.log(newsfeed);
     } else{
        alert("Sorry Wrong credentials");
        }
    

 }

 var userNamePrompt = prompt("What is your username");
 var userPassword = prompt("What is your password");

 signIn(userNamePrompt, userPassword);
 