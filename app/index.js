
const pbutton = document.querySelectorAll('.p-button');
const dis = document.querySelectorAll('.display')[0];
console.log(pbutton);
console.log(dis);

const bhelp = document.querySelectorAll('.bhelp');
const help = document.querySelectorAll('.helpoverlay')[0];
console.log(bhelp);
console.log(help);

pbutton.forEach(button => {
    button.addEventListener('click', () => {
        dis.hidden = !dis.hidden;
    })
})

bhelp.forEach(button => {
  button.addEventListener('click', () => {
    help.hidden = !help.hidden;
  })
})

var job = [
    {
        sign: "Paladin",
        date: "#",
        text: "blah",
        image: "images/pixel_paladin.png"
    },
    {
        sign: "Warrior",
        date: "#",
        text: "blah",
        image: "images/pixel_warrior.png"
    },
    {
        sign: "Darknight",
        date: '#',
        text: "blah",
        image: "images/pixel_darknight.png"
    },
    {
        sign: "Dragoon",
        date: '#',
        text: "blah",
        image: "images/pixel_dragoon.png"
    },
    {
        sign: "Monk",
        date: '#',
        text: "blah",
        image: "images/pixel_monk.png"
    },
    {
        sign: "Ninja",
        date: '#',
        text: "blah",
        image: "images/pixel_ninja.png"
    },
    {
        sign: "Bard",
        date: '#',
        text: "blah",
        image: "images/pixel_bard.png"
    },
    {
        sign: "Machinist",
        date: '#',
        text: "blah",
        image: "images/pixel_machinist.png"
    },
    {
        sign: "Black Mage",
        date: '#',
        text: "blah",
        image: "images/pixel_black-mage.png"
    },
    {
        sign: "Summoner",
        date: '#',
        text: "blah",
        image: "images/pixel_summoner.png"
    },
    {
        sign: "White Mage",
        date: '#',
        text: "blah",
        image: "images/pixel_white-mage.png"
    },
    {
        sign: "Astrologian",
        date: "#",
        text: "blah",
        image: "images/pixel_astrologian.png"
    }
]

if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }
