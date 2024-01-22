console.log(document.getElementById("test"));
 
class Czlowiek {
    static kraj = "Polska";
    plec;
    #pesel;
    masa;
    imie;
    element;
 
    constructor(imie, plec, pesel, masa) {
        console.log(Czlowiek.kraj);
        this.plec = plec;
        this.#pesel = pesel;
        this.masa = masa;
        this.imie = imie;
        this.init();
    }
 
    init() {
        Czlowiek.kraj = "Francja";
        const el = document.createElement("button");
        el.innerText = this.imie + `(${this.#pesel})`;
 
        /*
        let dys = this;
        el.onclick = function () {
            console.log(dys, this); // ob / el
        }*/
 
        /*
        el.onclick = function (e) {
            console.log(this, e.target); // ob / el
            this.element.style.backgroundColor = "pink";
        }.bind(this);
        */
 
        el.onclick = (e) => {
            console.log(this, e.target); // ob / el
            this.element.style.backgroundColor = "pink";
        };
 
        this.element = el;
        document.body.append(el);
        console.log(Czlowiek.kraj);
    }
 
    get data() {
        console.log("getter");
        return [this.imie, this.#pesel];
    }
 
    set data(data) {
        console.log("setter");
        this.imie = data[0];
        this.pesel = data[1];
    }
 
    setMasa(masa) {
        this.masa = masa;
    }
 
}
 
let planeta = [new Czlowiek("Maciej", "M", 435456567, 4600), new Czlowiek("Oliwia", "K", 435445667, 3400)];
console.log(planeta[0].data);
planeta[0].data = ["Fredek", 6666666];
console.log(planeta[0].data);
planeta[1].setMasa(1000);