function zodiac(){
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
    var result = "unknown because you didn't put a valid date.";

    if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18){
        result = ("Astrologian");
        updateZodInfo("astrologian");
    }
  
    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
        result = ("Bard");
        updateZodInfo("bard");
    }

    if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
        result = ("Black Mage");
        updateZodInfo("black-mage");
    }
    
    if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
        result = ("Darknight");
        updateZodInfo("darknight");
    }
    
    if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20){
        result = ("Dragoon");
        updateZodInfo("dragoon")
    }
    
    if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
        result = ("Machinist");
        updateZodInfo("machinist");
    }

    if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
        result = ("Monk");
        updateZodInfo("monk");
    }

    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
        result = ("Ninja");
        updateZodInfo("ninja");
    }
      
    if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
        result = ("Paladin");
        updateZodInfo("paladin");
    }
      
    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
        result = ("Summoner");
        updateZodInfo("summoner");
    }
      
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
        result = ("Warrior");
        updateZodInfo("warrior");
    }
    
    if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
        result = ("White Mage");
        updateZodInfo("white-mage");
    }
      
    else if (birthmonth>12||birthday>31){
        alert("Please enter an accurate date!");
    }
   
    document.getElementById("output").innerHTML= result;
}

const bhelp = document.querySelectorAll('.bhelp');
const help = document.querySelectorAll('.helpoverlay')[0];
console.log(bhelp);
console.log(help);

const soundButtons = document.querySelectorAll('.p-button');
const speakers = document.getElementById('speakers');

soundButtons.forEach(button => {
    const sound = button.dataset.sound;
    button.addEventListener('click', () => {
        updateZodInfo(sound);
        console.log("sound is "+ sound);
    });
  });

function updateZodInfo(whichOne){
    speakers.src = `sound/${whichOne}.mp3`;
    speakers.play();
    var result = "unknown because you didn't put a valid date.";

    if(whichOne == "ninja"){
        result = ("Ninja");
        document.getElementById("photo").innerHTML="<img src='images/pixel_ninja.png'>";
        document.getElementById("characteristic").innerHTML="Hailing from the war-torn lands of the Far East, the secret arts of the ninja were born of necessity, and have since given rise to a unique breed of highly-trained combatants. Able to manipulate the vital energies of the land, the air, and living beings, they manifest their power through the weaving of signs, unleashing a wide array of attacks against their foes. Master the arts of the ninja and learn to bend the tide of battle to your will."
    }

    else if(whichOne == "bard"){
        result = ("Bard");
        document.getElementById("photo").innerHTML="<img src='images/pixel_bard.png'>";
        document.getElementById("characteristic").innerHTML="The word 'bard' ordinarily puts folk in mind of those itinerant minstrels, fair of voice and nimble of finger, who earn their coin performing in taverns and the halls of great lords. Few know, however, that bards in fact trace their origins back to the bowmen of eld, who sang in the heat of battle to fortify the spirits of their companions. In time, their impassioned songs came to hold sway over the hearts of men, inspiring their comrades to great feats and granting peace unto those who lay upon the precipice of death."
    }

    else if(whichOne == "warrior"){
        result = ("Warrior");
        document.getElementById("photo").innerHTML="<img src='images/pixel_warrior.png'>";
        document.getElementById("characteristic").innerHTML="On the northernmost edge of Abalathia's Spine exists a mountain tribe renowned for producing fearsome mercenaries. Wielding greataxes and known as warriors, these men and women learn to harness their inner-beasts and translate that power to unbridled savagery on the battlefield."
    }

    else if(whichOne == "darknight"){
        result = ("Darknight");
        document.getElementById("photo").innerHTML="<img src='images/pixel_darknight.png'>";
        document.getElementById("characteristic").innerHTML="A valiant few take up arms to defend the downtrodden, and not even the holy priests and knights can escape their judgment. Pariahs in their own land, they are known by many as 'dark knights.' These sentinels bear no shields declaring their allegiance. Instead, their greatswords act as beacons to guide the meek through darkness.";
    }

    else if(whichOne == "white-mage"){
        result = ("White Mage");
        document.getElementById("photo").innerHTML="<img src='images/pixel_white-mage.png'>";
        document.getElementById("characteristic").innerHTML="Those who would walk the path of the white mage are healers without peer, possessed of the power to deliver comrades from the direst of afflictions—even the icy grip of death itself.";
    }

    else if(whichOne == "summoner"){
        result = ("Summoner");
        document.getElementById("photo").innerHTML="<img src='images/pixel_summoner.png'>";
        document.getElementById("characteristic").innerHTML="The beast tribes of Eorzea worship and summon forth beings known as primals, among which are Ifrit, Garuda, and Titan. Yet what is a god to one man is a demon to another, for the city-states of Eorzea see these beings as a grave threat to their collective survival. In times immemorial, there lived mages who had not only the power to summon the primals, but also the means to transmute the primals' essences, thus binding them to their will. Known simply as summoners, the existence of these men and women and their arcane art have been all but lost to the ages.";
    }

    else if(whichOne == "paladin"){
        result = ("Paladin");
        document.getElementById("photo").innerHTML="<img src='images/pixel_paladin.png'>";
        document.getElementById("characteristic").innerHTML="Clad in brilliant silver armor, they charge fearlessly into battle, ever ready to lay down their lives for their liege. To be a paladin is to protect, and those who choose to walk this path will become the iron foundation upon which the party's defense is built.";
    }

    else if(whichOne == "monk"){
        result = ("Monk");
        document.getElementById("photo").innerHTML="<img src='images/pixel_monk.png'>";
        document.getElementById("characteristic").innerHTML="Though now under Garlean rule, the city-state of Ala Mhigo once boasted the greatest military might of all Eorzea. Among its standing armies were the monks—ascetic warriors as dreaded by foes on the field of battle as the city-state's great pikemen. The monks comprised an order known as the Fist of Rhalgr, and it was to this god—the Destroyer—that they devoted their lives of worship. By mastering seats of power within the body known as chakra, they are capable of performing extraordinary physical feats.";
    }

    else if(whichOne == "machinist"){
        result = ("Machinist");
        document.getElementById("photo").innerHTML="<img src='images/pixel_machinist.png'>";
        document.getElementById("characteristic").innerHTML="The war with Dravania rages on, brutal and unrelenting. With no end in sight, the Holy See grows desperate. As her dragoons lay down their lives in defense of their home, Ishgard turns to technology to protect her sons and daughters. Great cannons and ballistas now line the city walls, plucking dragons from the sky. Following the example of Cid Garlond, who has demonstrated the potency of magitek, the Skysteel Manufactory works tirelessly on the development of advanced armaments. As new and devastating weapons are brought to the fray, a new class of champion arises to wield them―the machinist.";
    }

    else if(whichOne == "dragoon"){
        result = ("Dragoon");
        document.getElementById("photo").innerHTML="<img src='images/pixel_dragoon.png'>";
        document.getElementById("characteristic").innerHTML="Of all the things that are symbolic of the nation of Ishgard, few are more recognized than the dragoon. Born amidst the timeless conflict between men and dragons, these lance-wielding knights have developed an aerial style of combat, that they might better pierce the scaled hides of their mortal foes. Taking to the firmament as though it were an extension of the land, they descend upon the enemy with every onze of their bodies behind the blow. It is this penetrative power that characterizes the dragoon.";
    }

    else if(whichOne == "black-mage"){
        result = ("Black Mage");
        document.getElementById("photo").innerHTML="<img src='images/pixel_black-mage.png'>";
        document.getElementById("characteristic").innerHTML="In days long past, there existed an occult and arcane art known as black magic—a potent magic of pure destructive force born forth by a sorceress of unparalleled power. Those who learned to wield this instrument of ruin came to be called black mages, out of both fear and respect for their gift. Yet great power served to corrupt the judgment of mortal man, and so he unknowingly set out upon the path of ruin. Adventurers who take the black will become agents of devastation, capable of annihilating those who oppose them through little more than the force of their will.";
    }

    else if(whichOne == "astrologian"){
        result = ("Astrologian");
        document.getElementById("photo").innerHTML="<img src='images/pixel_astrologian.png'>";
        document.getElementById("characteristic").innerHTML="Ever has man coveted knowledge, and none more so than that of his fate. Thus did he labor to master the skill of foresight—but initial efforts bore little fruit. That is, until he looked to the stars above, which foretell the coming seasons, and learned to read the heavens. Though this gift is known today as astrology, the people of Sharlayan saw fit to not only read the stars, but to write their movements as well. By attuning their aetherial energies to that of constellations, they learned to wield magicks with heretofore unseen properties. Thus was astromancy born—a new form of magick which grants its users power over fate. Employing a star globe and divining deck in their miraculous deeds, fortune always smiles upon these masters of arcana.";
    }
    document.getElementById("output").innerHTML= result;
}

bhelp.forEach(button => {
    button.addEventListener('click', () => {
      help.hidden = !help.hidden;
    })
})
