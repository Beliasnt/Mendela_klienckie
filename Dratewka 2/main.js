import * as location from "./modules/Locations.js";
new location.Location()
import * as items from "./modules/Item.js";
import * as dependencies from "./modules/Dependencies.js"

let itemsList = items.items.items;
let dependenciesList = dependencies.dependencies;
let locationList = location.locations.locations;

let canClick = true
function resetListener(event) {
    //console.log("reset")
    document.getElementById("go").style.display = "block"
    document.getElementById("what").style.display = "block";
    document.getElementById("check").innerText = '';
    document.getElementById("movement").value = '';
    document.getElementById("movement").focus();
    window.removeEventListener('keydown', resetListener);
    window.addEventListener('keydown', game.move);
}

async function reset() {
    document.getElementById("movement").value = ''
    canClick = false
    setTimeout(function () {
        canClick = true
        document.getElementById("what").style.display = "block"
        document.getElementById("check").innerText = ''
        document.getElementById("movement").focus()
    }, 1200)
}
window.addEventListener("keydown", function (objEvent) {
    if (objEvent.keyCode == 9) {  //tab pressed
        objEvent.preventDefault(); // stops its action
    }
})
document.addEventListener('contextmenu', event => event.preventDefault());
const game = {
    x: 6,
    y: 3,
    sheepParts: 0,
    inventory: 0,
    dragonKilled: false,
    init() {
        window.addEventListener('keydown', (e) => this.move(e, this));
        this.changePlace();
    },
    move(e, dys) {
        let mov = document.getElementById("movement").value
        let place = locationList[this.y][this.x]
        let tekst = mov.toUpperCase()
        let check = true
        let youCant = false
        let firstLetter = tekst.slice(0, 1)
        let words = ["N", "NORTH", "E", "EAST", "W", "WEST", "S", "SOUTH", "D", "DROP", "U", "USE", "T", "TAKE", "V", "VOCABULARY", "G", "GOSSIPS"]
        //document.getElementById("check").innerText = ''

        if (e.keyCode === 13 && canClick) {
            tekst = tekst.trim()
            document.getElementById("what").style.display = "none"
            if (tekst == "NORTH" || tekst == "N") {
                tekst = "N"
                for (let i = 0; i < 4; i++) {
                    if (place.dir[i] == tekst) {
                        dys.y--;
                        check = false
                        document.getElementById("check").innerText = "You are going north..."
                        reset()
                    }
                }
                if (check) {
                    youCant = true
                }
            }
            else if (tekst == "SOUTH" || tekst == "S") {
                tekst = "S"
                for (let i = 0; i < 4; i++) {
                    if (place.dir[i] == tekst) {
                        dys.y++;
                        check = false
                        document.getElementById("check").innerText = "You are going south..."
                        reset()
                    }
                }
                if (check) {
                    youCant = true
                }
            }
            else if (tekst == "WEST" || tekst == "W") {
                tekst = "W"
                for (let i = 0; i < 4; i++) {
                    if (place.dir[i] == tekst) {
                        if (this.x == 1 && this.y == 3 && this.sheepParts < 6) {
                            document.getElementById("check").innerText = "You can't go that way..."
                            setTimeout(function () {
                                document.getElementById("check").innerText = "The dragon sleeps in a cave! "
                            }, 1000)
                            setTimeout(function () {
                                reset()
                            }, 2000)
                            check = false
                        }
                        else {
                            dys.x--;
                            check = false
                            document.getElementById("check").innerText = "You are going west..."
                            reset()
                        }
                    }
                }
                if (check) {
                    youCant = true

                }
            }
            else if (tekst == "EAST" || tekst == "E") {
                tekst = "E"
                for (let i = 0; i < 4; i++) {
                    if (place.dir[i] == tekst) {
                        dys.x++;
                        check = false
                        document.getElementById("check").innerText = "You are going east..."
                        reset()
                    }
                }
                if (check) {
                    youCant = true
                }
            }
            else if (tekst === "G" || tekst === "GOSSIPS") {
                document.getElementById("go").style.display = "none"
                let gossipMessage = "The woodcutter lost his home key...\nThe butcher likes fruit... The cooper\nis greedy... Dratewka plans to make a\npoisoned bait for the dragon...  The\ntavern owner is buying food from the\npickers... Making a rag from a bag...\nPress any key";
                document.getElementById("check").innerText = gossipMessage

                window.removeEventListener('keydown', game.move);
                window.addEventListener('keydown', resetListener);
                check = false;
            }
            else if (tekst == "V" || tekst == "VOCABULARY") {
                document.getElementById("go").style.display = "none"
                document.getElementById("check").innerText = `NORTH or N, SOUTH or S
		                WEST or W, EAST or E
		                TAKE (object) or T (object)s
		                DROP (object) or D (object)
		                USE (object) or U (object)
		                GOSSIPS or G, VOCABULARY or V
		                Press any key`
                document.getElementById("movement").value = ''
                window.removeEventListener('keydown', game.move);
                window.addEventListener('keydown', resetListener);
                check = false
            }
            else if (tekst[0] == "T" || tekst.slice(0, 4) == "TAKE") {
                let itemPos = tekst.search(" ")
                if (itemPos != -1) { //jeżeli jest podany item
                    let itemName = tekst.slice(itemPos + 1)
                    let item = itemsList.find((item) => { return item.name == itemName || item.nameO.toUpperCase() == itemName }) //znajdz instancję itemu   
                    if (item != undefined && locationList[this.y][this.x].items.findIndex((i) => { return i == item.id }) == 0) { //czy przedmiot istnieje i jest na lokacji
                        if (item.flag == "0") {
                            document.getElementById("check").innerText = "You can't carry it"
                            reset()
                        }
                        else {
                            if (this.inventory != 0) {
                                document.getElementById("check").innerText = "You are carrying something"
                                reset()
                            }
                            else { //DODAJ ELEMENT DO EQ (i usuń z lokacji)              
                                locationList[this.y][this.x].removeItem(item.id)
                                this.inventory = item.id
                                document.getElementById("inventory").innerText = item.nameO
                                document.getElementById("check").innerText = "You are taking " + item.nameO
                                reset()
                            }
                        }
                    }
                    else {
                        document.getElementById("check").innerText = "There isn't anything like that here"
                        reset()
                    }
                }
                else { //jeżeli nie jest podany item
                    if (this.inventory == 0) {
                        document.getElementById("check").innerText = "You are carrying nothing"
                        reset()
                    }
                }
                check = false
            }
            else if (tekst == "U" || tekst.slice(0, 3) == "USE") {
                let itemPos = tekst.search(" ");
                if (itemPos != 1) {
                    let itemName = tekst.slice(itemPos + 1);
                    let item = itemsList.find((item) => { return item.name == itemName || item.nameO == itemName }); //znajdz instancję itemu            
                    if (item != undefined && this.inventory == item.id) { //czy przedmiot istnieje i czy gracz go ma w ekwipunku           
                        this.useItem(item, function () { reset(); }); // Pass reset inside an anonymous function
                        console.log(this.inventory);
                    } else {
                        document.getElementById("check").innerText = "You aren't carrying anything like that";
                        reset();
                    }
                }
                check = false;
            }
            else if (tekst[0] == "D" || tekst.slice(0, 4) == "DROP") {
                let itemPos = tekst.search(" ")
                if (this.inventory == 0) {
                    document.getElementById("check").innerText = "You are not carrying anything"
                    reset()
                }
                if (itemPos != -1) {
                    let itemName = tekst.slice(itemPos + 1)
                    let item = itemsList.find((item) => { return item.id == this.inventory }) //znajdz instancję itemu
                    if (this.inventory == 0) {
                        document.getElementById("check").innerText = "You are not carrying anything"
                        reset()
                    }
                    else if (item != undefined && (itemName == item.name || itemName == item.nameO.toUpperCase())) {
                        let mess = locationList[this.y][this.x].addItem(item.id)
                        if (mess == 1) {
                            this.inventory = 0
                            document.getElementById("inventory").innerText = "nothing"
                            document.getElementById("check").innerText = "You are about to drop " + item.nameO
                            reset()
                        }
                        else {
                            document.getElementById("check").innerText = "You can't store any more here"
                            reset()
                        }
                    }
                    else {
                        document.getElementById("check").innerText = "You are not carrying it"
                        reset()
                    }
                }
                check = false
            }
            else if (tekst == "69") { // Takie tam easter eggi :3
                document.getElementById("check").innerText = "NICE"
                reset()
            }
            else if (tekst == "9/11") {
                document.getElementById("check").innerText = "YOU'VE ASKED FOR IT"
                document.getElementById("ne").style.display = "block"
                setTimeout(function () {
                    document.getElementById("check").innerText = "SIKE"
                    document.getElementById("ne").style.display = "none"
                    reset()
                }, 1500)
            }
            else if (tekst == "1989") {
                document.getElementById("check").innerText = "NOTHING HAPPENED IN TIANANMEN SQUARE IN 1989 I SWEAR"
                reset()
            }
            else if (tekst == "HELLO THERE") {
                document.getElementById("check").innerText = "GENERAL KENOBI"
                reset()
            }
            else if (tekst == "PIPE") {
                document.getElementById("check").innerText = "PIPE PIPE PIPE PIPE PIPE"
                document.getElementById("pipe").play()
                reset()
            }
            else if (tekst == "UUDDRLRLAB") { //UP UP DOWN DOWN RIGHT LEFT RIGHT LEFT A B
                this.endGame()
            }
            else {
                document.getElementById("check").innerText = "Try another word or V for vocabulary"
                reset()
            }
            if (youCant) {
                document.getElementById("check").innerText = "You can't go that way"
                reset()
            }
            dys.changePlace();
            //dys.kompas()
        }
    },
    changePlace() {
        let place = locationList[this.y][this.x]
        const name = document.getElementById("name");
        name.innerText = place.name

        const locationElem = document.getElementById('location')
        locationElem.src = place.src
        locationElem.style.backgroundColor = place.color

        let itemsSeen = document.getElementById("itemsSeen")
        itemsSeen.innerText = locationList[this.y][this.x].itemsString()

        const direction = document.getElementById('direction')
        let directionFull = ''
        if (place == undefined) {
            console.log("undefined")
            return
        }
        let KE = document.getElementById("KE")
        let KW = document.getElementById("KW")
        let KN = document.getElementById("KN")
        let KS = document.getElementById("KS")
        KE.classList.add("KE")
        KW.classList.add("KW")
        KN.classList.add("KN")
        KS.classList.add("KS")

        for (let i = 0; i < place.dir.length; i++) {
            if (place.dir[i] == "W") {
                directionFull += "West "
                KW.classList.remove("KW")
            }
            if (place.dir[i] == "E") {
                directionFull += "East "
                KE.classList.remove("KE")
            }
            if (place.dir[i] == "N") {
                directionFull += "North "
                KN.classList.remove("KN")
            }
            if (place.dir[i] == "S") {
                directionFull += "South "
                KS.classList.remove("KS")
            }
        }
        direction.innerText = directionFull
    },
    useItem(item) {
        let dependency = dependenciesList.find((dep) => { return dep.item_id == item.id })
        console.log(dependency, item, item.id)
        if (dependency.location[1] == this.x + 1 && dependency.location[0] == this.y + 1) { //check location
            if (this.inventory == 37) {
                this.dragonKilled = true
                locationList[3][2].src = "./img/smok.gif"
                document.getElementById("location").src = "./img/smok.gif"
            }
            if (dependency.item_id == 36) { //KONIEC GRY
                this.endGame()
            }
            if (dependency.milestone) {
                this.inventory = 0
                locationList[this.y][this.x].addItem(dependency.result)
                document.getElementById("itemsSeen").innerText = locationList[this.y][this.x].itemsString()
                document.getElementById("inventory").innerText = "nothing"
                this.sheepParts++
            } else {
                if (this.inventory != 33 || (this.inventory == 33 && this.dragonKilled)) {
                    this.inventory = dependency.result
                    let newItem = itemsList.find((item) => { return item.id == this.inventory })
                    document.getElementById("inventory").innerText = newItem.nameO
                }

            }
            this.showItemUsedMessage(dependency.message, function () { reset(); });
            if (this.sheepParts == 6 && this.x == 2 && this.y == 3) { //wszystkie części owcy
                this.inventory = 37
                locationList[3][2].removeItem("13")
                locationList[3][2].removeItem("17")
                locationList[3][2].removeItem("20")
                locationList[3][2].removeItem("23")
                locationList[3][2].removeItem("26")
                locationList[3][2].removeItem("29")
                locationList[3][2].addItem("33")
                document.getElementById("itemsSeen").innerText = locationList[this.y][this.x].itemsString()
                document.getElementById("inventory").innerText = "a SHEEP"
                this.showItemUsedMessage("Your fake sheep is full of poison and ready to be eaten by the dragon")
                setTimeout(function () {
                    reset()
                }, 1000)
            }
        }
        else {
            document.getElementById("check").innerText = "Nothing happened"
            reset()
        }
    },
    showItemUsedMessage(message, callback) {
        let timeout = message.search("(timeout)");
        let time = message.split("(timeout)");
        if (timeout == -1) {
            document.getElementById("check").innerText = message;
            callback()
        } else {
            let counter = 0;
            for (let i = 0; i < time.length; i++) {
                setTimeout(function () {
                    document.getElementById("check").innerText = time[i];
                    counter++;
                    if (counter === time.length) {
                        callback();
                    }
                }, 1500 * i);
            }
        }
    },
    endGame() {
        document.getElementById("container").style.display = "none"
        document.getElementById("wygrana").style.display = "block"
        document.getElementById("freebird").play()
        setTimeout(function () {
            document.getElementById("wygrana").style.display = "none"
            document.getElementById("rat").style.display = "block"
            document.getElementById("youWon").style.display = "block"
        }, 11500)
    }
}
game.init();