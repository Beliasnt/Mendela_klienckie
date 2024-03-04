import * as location from "./modules/Locations.js";
new location.Location()
import * as items from "./modules/Item.js";
new items.Item()
const game = {
    x: 0,
    y: 0,
    init() {
        document.body.onkeydown = (e) => this.move(e, this);
        this.changePlace();
    },
    move(e, dys) {
        let mov = document.getElementById("movement").value
        let place = this.locations[this.y][this.x]
        tekst = mov.toUpperCase()
        let check = true
        document.getElementById("check").innerText = ''
        function reset() {
            setTimeout(function () {
                document.getElementById("what").style.display = "block"
                document.getElementById("check").innerText = ''
                document.getElementById("movement").value = ''
                document.getElementById("movement").focus()
            }, 1000)
        }

        if (e.keyCode === 13) {
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
            }
            if (tekst == "SOUTH" || tekst == "S") {
                tekst = "S"
                for (let i = 0; i < 4; i++) {
                    if (place.dir[i] == tekst) {
                        dys.y++;
                        check = false
                        document.getElementById("check").innerText = "You are going south..."
                        reset()
                    }
                }
            }
            if (tekst == "WEST" || tekst == "W") {
                tekst = "W"
                for (let i = 0; i < 4; i++) {
                    if (place.dir[i] == tekst) {
                        dys.x--;
                        check = false
                        document.getElementById("check").innerText = "You are going west..."
                        reset()
                    }
                }
            }
            if (tekst == "EAST" || tekst == "E") {
                tekst = "E"
                for (let i = 0; i < 4; i++) {
                    if (place.dir[i] == tekst) {
                        dys.x++;
                        check = false
                        document.getElementById("check").innerText = "You are going east..."
                        reset()
                    }
                }
            }
            if (tekst === "G" || tekst === "GOSSIPS") {
                document.getElementById("check").innerText = `The woodcutter lost his home key...
                    The butcher likes fruit... The cooper
                    is greedy... Dratewka plans to make a
                    poisoned bait for the dragon...  The
                    tavern owner is buying food from the
                    pickers... Making a rag from a bag...
                    Press any key`;

                function resetListener(event) {
                    document.getElementById("what").style.display = "block";
                    document.getElementById("check").innerText = '';
                    document.getElementById("movement").value = '';
                    document.getElementById("movement").focus();
                    window.removeEventListener('keydown', resetListener);
                    window.addEventListener('keydown', game.move);
                }

                window.removeEventListener('keydown', game.move);
                window.addEventListener('keydown', resetListener);
                check = false;
            }
            if (tekst == "V" || tekst == "VOCABULARY") {
                document.getElementById("check").innerText = `NORTH or N, SOUTH or S
		                WEST or W, EAST or E
		                TAKE (object) or T (object)s
		                DROP (object) or D (object)
		                USE (object) or U (object)
		                GOSSIPS or G, VOCABULARY or V
		                Press any key`
                document.getElementById("movement").value = ''
                check = false
            }
            if (check) {
                document.getElementById("check").innerText = "You can't go that way"
                reset()
            }
            dys.changePlace();
            dys.kompas()
        }
    },
    changePlace() {
        let place = this.locations[this.y][this.x]
        const name = document.getElementById("name");
        name.innerText = place.name

        const location = document.getElementById('location')
        location.src = place.src
        location.style.backgroundColor = place.color

        const direction = document.getElementById('direction')
        direction.innerText = place.dir
        if (place == undefined) {
            console.log("undefined")
        }
        let kompas = document.getElementById("images")
        let KE = document.getElementById("KE")
        let KW = document.getElementById("KW")
        let KN = document.getElementById("KN")
        let KS = document.getElementById("KS")
        KE.classList.add("KE")
        KW.classList.add("KW")
        KN.classList.add("KN")
        KS.classList.add("KS")

        for (let i = 0; i < 4; i++) {
            if (place.dir[i] == "W") {
                KW.classList.remove("KW")
            }
            if (place.dir[i] == "E") {
                KE.classList.remove("KE")
            }
            if (place.dir[i] == "N") {
                KN.classList.remove("KN")
            }
            if (place.dir[i] == "S") {
                KS.classList.remove("KS")
            }
        }
    }
}
game.init();