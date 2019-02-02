import React from 'react';










var names = ["Wilbert",  "Dalton",  "Dudley",  "Lucio",  "Reid",  "Octavio",  "Francesco",  "Willie",  "Amado",  "Tyler",  "Christie",  "Iliana",  "Leia",  "Teofila",  "Alejandrina",  "Shawnee",  "Aja",  "Lai",  "Marianna", "Amanada"];
 var randomIndex = Math.floor(Math.random() * names.length);
 var randomName = names[randomIndex];
var messages = ["You managed to scrounge up enough resources nearby to survive the zombie outbreak. " ,
      "You got everything you could find and hulled up in your home afterwards. ",
      "Wow you survived and there was no competition for supplies.",
      "It was mass hysteria and you trampled some people while looting, trying to get away from the zombie horde, including your neighbor, " + randomName + ". ",
      "You may have survived  but your friend " + randomName + " is a zombie now. " + randomName  + " will live on in spirit as a flesh eating cannibal that moves at 2 miles per hour. ",
      "don't worry. One day when you come out from your shelter with the thousand-yard stare and shotgun in hand, you will be the one to take back society and rebuild it better."]


  var messages2=[ "The zombie horde was too much. You live in a pretty populated place. " ,
      "There were way too many zombies in the area and you were completely surrounded while trying to get away. " ,
      "You were in a market trying to loot whatever you could when you hear the sound of someone screaming. " ,
      "Your friend " + randomName + " managed to lure every zombie in the surrounding areas to your location. ",
      "The zombies break down the doors and windows to get to the people inside. Sadly you were one of them.",
       " In the rush to get away, you were knocked down by someone also trying to escape. ",
      "Don't know if it makes you feel any better, but they also became a zombie an hour later." ]
      var randomIndex = Math.floor(Math.random() * messages.length);
       var randomIndex = Math.floor(Math.random() * messages2.length);
      var randomName2 =  messages[randomIndex];
          var randomName3 =  messages2[randomIndex];
const UserForm = props => (


  <div>
    <div id="location-address">
      <strong>Address: </strong>
      <p> {props.address} </p>
    </div>
<br></br>
    <div id="location-latitude" style={{ display: 'block' }}>
      <strong>Latitude: </strong>
     <p>{props.Latitude}</p>
    </div>
    <br></br>


    <div id="location-longitude" style={{ display: 'block' }}>
      <strong>Longitude: </strong>
      <p>{props.Longitude}</p>
    </div>

    <br></br>

        <div id="location-longitude" style={{ display: 'block' }}>
      <strong>population density: </strong>
     <p> {props.density} </p>
    </div>

    <br></br>
     <div id="location-longitude" style={{ display: 'block' }}>
      <strong>description: </strong>
      <p> The number of inhabitants per square kilometer around this point </p>
    </div>

    <br></br>
     <div id='location-longitude'><strong>Percent survival   : </strong><p> <strong> {props.density /10* 50 }  </strong> % chance of survival </p> </div>
<br></br>

<br></br>

 <div id='location-longitude'>
  {props.density /10* 50 > 62 ? ( <div> <p> You survived the zombie outbreak you lucky son of a gun</p>  <br></br>  <p>  {randomName2} </p>  </div> ) : ( <div>  <p id="s"> I'm sorry but you didn't make it. Please don't eat my brain </p>
  <br></br>  <p> {randomName3} </p>    </div>
       )}
       </div>


</div>

);

export default UserForm;
