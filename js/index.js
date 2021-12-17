alert("So'rovnomaga xush kelibsiz!!!!")
var username = prompt("Ismingiz ?")
var surname = prompt("Familyangiz ?")
var age = prompt("Yoshingiz ?")
var your_jobs = prompt("Kasbingiz ?")
var tutorials = prompt("Qaysi dasturlash tillari bilasiz ?")
var laptops = prompt("Kompyuteringizning rusumi ?")
var likes = prompt("Kasbingiz sizga yoqadimi ?")
var qualifying = prompt("Necha yildan beri shu kasb bilan shug'ullanasiz ?")
var money_jobs = prompt("Maoshingiz ?")
var travel_jobs = prompt("Kasbingiz bo'yicha biror davlatda sayohat qilganmisiz ?")


console.log(
    `firstname:${username},
 lastname:${surname},
  age:${age +""+"yosh"}, 
  who:${your_jobs},
  info:${tutorials},
  model:${laptops},
  like_jobs:${likes},
  years_jobs:${qualifying +""+"yil"},
  salary:${money_jobs +"$"},
  travels:${travel_jobs}

   `);