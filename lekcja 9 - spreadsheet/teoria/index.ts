// TYPOWANIE 
// //let n : string = prompt("wpisz wiek") as string; //20   string | null
// //let n : string = prompt("wpisz wiek") ?? "";
// //let n : string = <string>prompt("wpisz wiek");
// let n: string = prompt("wpisz wiekfgff")!;

// let w = 5;
// let suma: number;
// suma = w + parseInt(n); // 205 / 25 ?!!!

// let image = document.getElementById("obr") as HTMLImageElement;
// image.src = "ffgfg.jpg";

// let arr: number[][] = [[1]];

// interface Test {
//     name: string;
//     width?: number
// }

// class Klasa implements Test {
//     name: string; // # private public procted static readonly
//     constructor(private test: string) {
//         this.name = "Nazwa";
//         this.test = test;
//     }

//     jazda(param: Test) {
//         // param.width
//         let s = "AAAAAAA";
//     }
// }


//INTERFEJSY
interface Dane {
    x: number,
    y: number,
    z?: number
    pole(x: number, y: number, z?: number): void
}
 
interface Points { // to moze dziedziczyc
    x: number,
    y: number,
    z: number
}
 
type Test = { // to nie ma dziedziczenia
    x: number,
    y: number,
    z: number
}
 
class Matematyka implements Dane {
    x: number;
    y: number;
    constructor(i: number) {
 
    }
 
    pole(x: number, y: number, z?: number) {
    
    }
    
    v(ob: Test) {
    
    }
}

