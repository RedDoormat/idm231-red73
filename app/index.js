const pbutton = document.querySelectorAll('.p-button');

console.log(pbutton);

pbutton.forEach(button => {
    button.addEventListener('click', () => {
        des.hidden = !des.hidden;
    })
})

var job = [
    {
        sign: "Paladin",
        text: "blah",
        image: "images/pixel_paladin.png"
    },
    {
        sign: "Warrior",
        text: "blah",
        image: "images/pixel_warrior.png"
    },
    {
        sign: "Darknight",
        text: "blah",
        image: "images/pixel_darknight.png"
    },
    {
        sign: "Dragoon",
        text: "blah",
        image: "images/pixel_dragoon.png"
    },
    {
        sign: "Monk",
        text: "blah",
        image: "images/pixel_monk.png"
    },
    {
        sign: "Ninja",
        text: "blah",
        image: "images/pixel_ninja.png"
    },
    {
        sign: "Bard",
        text: "blah",
        image: "images/pixel_bard.png"
    },
    {
        sign: "Machinist",
        text: "blah",
        image: "images/pixel_machinist.png"
    },
    {
        sign: "Black Mage",
        text: "blah",
        image: "images/pixel_black-mage.png"
    },
    {
        sign: "Summoner",
        text: "blah",
        image: "images/pixel_summoner.png"
    },
    {
        sign: "White Mage",
        text: "blah",
        image: "images/pixel_white-mage.png"
    },
    {
        sign: "Astrologian",
        text: "blah",
        image: "images/pixel_astrologian.png"
    }
]