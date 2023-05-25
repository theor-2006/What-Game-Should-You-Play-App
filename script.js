// Declare your genre arrays here
let Action = ["https://upload.wikimedia.org/wikipedia/en/f/f3/Call_of_Duty_%282003%29_cover.jpg", "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1674441703", "https://sportshub.cbsistatic.com/i/2022/09/19/7c024528-fa12-459a-8b39-6702f9a9cbda/resident-evil-chris-redfield.jpg"];

let Sports = ["https://compass-ssl.xboxlive.com/assets/ef/30/ef303b48-c144-4ace-89b3-00ef213a4fc9.jpg?n=Madden-NFL-logo.jpg", "https://compass-ssl.xboxlive.com/assets/ab/a4/aba4ae4a-a086-4887-b6ce-53341380c373.jpg?n=MSXC-NBATitle-HeroAndImageCard-large-l-794x447-16x9-01.jpg", "https://cdn-www.bluestacks.com/bs-images/76da13b62958d2c3840d53f5cebfeaa8.png"];

let Story = ["https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009", "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg", "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7"];


// Make sure to declare your HTML elements as variables! 
let submitButton = document.querySelector(".submitButton")
let resultsScreen = document.querySelector(".shows");
// Submit Button 
submitButton.onclick = function() {
  let genreInput = document.querySelector(".get-suggestions").value;
  if (genreInput === "Action") {
    for (let show of Action) {
      resultsScreen.insertAdjacentHTML("afterbegin", "<img src='" + show + "'>");
    }
  } else if (genreInput === "Sports") {
    for (let show of Sports) {
      resultsScreen.insertAdjacentHTML("afterbegin", "<img src='" + show + "'>");
    }
  } else if (genreInput === "Story") {
    for (let show of Story) {
      resultsScreen.insertAdjacentHTML("afterbegin", "<img src='" + show + "'>");
    }
  } else {
    console.log("placehold")
  }
};

let suggestButton = document.querySelector(".suggestButton")
suggestButton.onclick = function()  {
  resultsScreen.innerHTML="";
  let suggestInput = document.querySelector(".suggestInput").value;
  Action.push(suggestInput);
  Sports.push(suggestInput);
  Story.push(suggestInput);
  console.log(Action);
  console.log(Sports);
  console.log(Story);
}