     var url = "https://jooble.org/api/";



     var key = "036febe6-4d48-47ed-8820-67f0caa11b79";
     var params = "{keywords : 'service', }";
 
     var http = new XMLHttpRequest();
     http.open("POST", url + key, true);
     http.setRequestHeader("Content-type", "application/json");
     
     http.onreadystatechange = function() {
         if(http.readyState == 4 && http.status == 200) {
             var responseData = JSON.parse(http.responseText);
             var jobs = responseData.jobs;
             var htmlContent = "<div class='jobs-container'>";
             var result = "<h2><center> Résultats de vos recherches... "+ jobs.length + " résultat(s) </center></h2>";
             for (var i = 0; i < jobs.length; i++) { 
                 htmlContent += "<div class='job-box'><h3>" + jobs[i].title + "</h3>";
                 htmlContent += "<div class='info-container'>";
                 htmlContent += "<p><span class='material-symbols-outlined'>location_on</span> " + jobs[i].location + "</p>";
                 htmlContent += "<p><span class='material-symbols-outlined'>calendar_month</span></p>";
                 htmlContent += "<p><span class='material-symbols-outlined'>description</span>";
                 htmlContent += "</div>"; // Ferme le conteneur info-container
                 htmlContent += "<a href='" + jobs[i].link + "' target='_blank' id =>Voir l'offre</a></div>";
                 
                 
          
             }
 
             htmlContent += "</div>"; // Ferme le conteneur de jobs
             document.getElementById('get_result').innerHTML = htmlContent;
             document.getElementById('result').innerHTML = result;
         }
     };
 
     http.send(params);
 
 
 
     const like = document.querySelector('.like');

     let countLike = 0;
     like.addEventListener('click', () => {
     
         if(countLike === 0) {
             like.classList.toggle('anim-like');
             countLike = 1;
             like.style.backgroundPosition = 'right';
         } else {
             countLike = 0;
             like.style.backgroundPosition = 'left';
         }
     
     });
     
     like.addEventListener('animationend', () => {
         like.classList.toggle('anim-like');
     })
     
     
     // Notifs 
     
     const notif = document.querySelector('.notifications');
     let countNotif = 0;
     
     notif.addEventListener('click', () => {
         notif.classList.toggle('anim-notif')
         countNotif++;
         if(countNotif > 0){
             notif.style.backgroundPosition = 'right';
         }
     })
     
     notif.addEventListener('animationend', () => {
         notif.classList.toggle('anim-notif')
     })