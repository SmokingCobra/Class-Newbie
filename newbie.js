window.onload = function () {

    var introPage = document.getElementById('intro_page');
    var introButton = document.getElementById('get_started');
    var racePage = document.getElementById('race_page');
    var racePic = document.getElementById('racePic');
    var classPage = document.getElementById('class_page');
    var race2ClassButton = document.getElementById('race2Class')
    var class2RaceButton = document.getElementById('class2Race')

    introButton.addEventListener('click', introChange, false);
    introButton.addEventListener('click', nameSet, false);
    race2ClassButton.addEventListener('click', race2classChange, false);
    race2ClassButton.addEventListener('click', raceSet, false);
    class2RaceButton.addEventListener('click', class2raceChange, false);

    function introChange() {
        introPage.style.display = 'none';
        racePage.style.display = 'block';
        classPage.style.display = 'none';
    };

    function race2classChange() {
        introPage.style.display = 'none';
        racePage.style.display = 'none';
        classPage.style.display = 'block';
    };

    function class2raceChange() {
        introPage.style.display = 'none';
        racePage.style.display = 'block';
        classPage.style.display = 'none';
    }
};

/* */
class character {
    constructor() {
        this.charName = "None";

        this.charRace = "None";
        this.charClass = "None";
        this.charAlign = "None";

        this.charStr = 0;
        this.charDex = 0;
        this.charCon = 0;
        this.charInt = 0;
        this.charWis = 0;
        this.charChr = 0;

        this.HP = 0;

        this.inspiration = 0;
        this.proficiency = 0;

        this.armorClass = 0;
        this.initiative = 0;
        this.speed = 0;

        this.perception = 0;

        this.acrobatics = 0;
        this.animalHandling = 0;
        this.arcana = 0;
        this.athletics = 0;
        this.deception = 0;
        this.history = 0;
        this.insight = 0;
        this.intimidation = 0;
        this.investigation = 0;
        this.medicine = 0;
        this.nature = 0;
        this.perception = 0;
        this.performance = 0;
        this.persuasion = 0;
        this.religion = 0;
        this.sleightOfHand = 0;
        this.stealth = 0;
        this.survival = 0;

        this.weapons = ["none"];
        this.spells = ["none"];

        this.languages = ["none"];
        this.equipment = ["none"];

        this.feats = ["none"];
    }



}

/* Change the picture depending on race selection */
function ChangeRaceImage(image) {
    racePic.src = (image + '.png');
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

/* Takes the user's name input and sets the objects name field */
function nameSet() {
    var nameText = "Name: ";
    var name = document.getElementById('charNameInput').value;
    newChar.charName = name;
    document.getElementById("sideName").innerHTML = nameText.concat(name);
}

function raceSet() {
    var raceText = "Race: ";
    console.log(raceText);
    var race = document.querySelector('input[name = "race"]:checked').value;
    console.log(race);
    newChar.charRace = race;
    console.log(newChar.charRace);
    document.getElementById("sideRace").innerHTML = raceText.concat(race);
}


/* Create the character for the user*/
const newChar = new character;
