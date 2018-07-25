// let health = 000;
let firstPlayerHealthElem = document.getElementById("health");
let computerHealthElem = document.getElementById("healthComputer")
let computerNameElem = document.getElementById("nameComputer")
let hitElem = document.getElementById("hit");
let nameElem = document.getElementById("name");
let itemsElem = document.getElementById("items");
console.log(document.getElementsByClassName("items"));
// let name = "";
let hit = 0;


function playerAttack(atkType) {
    var mods = addMods()
    computer.health -= firstPlayer[atkType] * mods
    hit++
    update()
}
function computerSlap() {
    firstPlayer.health -= computer.slap

    update()
}
function endGame(){
    if (player.health <= 0){
        alert("You Lost")
    }else if(computer.health <= 0){
        alert("You Won")
    }
}


function update() {
    firstPlayerHealthElem.innerText = firstPlayer.health;
    computerHealthElem.innerText = computer.health;
    computerNameElem.innerText = computer.name;
    nameElem.innerText = firstPlayer.name;
    hitElem.innerText = hit;
    endGame()
}

var firstPlayer = new Player("player", 100, 1, 5, 10);
var computer = new Player("computer", 100, 1, 5, 10);
// hit is broken
function Player(name, health, slap, punch, combo) {
    this.name = name;
    this.health = health;
    this.slap = slap;
    this.punch = punch;
    this.combo = combo;
    this.items = [];
}

function giveItem(itemName) {
    firstPlayer.items.push(items[itemName])
    console.log(firstPlayer)
}


function addMods() {
    var totalMod = 1;
    for (var i = 0; i < firstPlayer.items.length; i++) {
        var item = firstPlayer.items[i]
        totalMod += item.modifier
    }
    return totalMod
}

let Object = function (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description
}
var items = {
    shield: new Object("Shield", -0.3, "protects fighter from attacks"),
    sword: new Object("Sword", 1, "doubles power of 1 attack"),
    special: new Object("Special", 10, "adds 10 damage to attack")
}

update()
