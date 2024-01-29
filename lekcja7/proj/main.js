import * as location from "./modules/Location.js";
new location.Location()

// Uwaga JSON -> Chrome TAK a FF nie :(
//import data from './modules/data.json' assert { type: 'json' };
//console.log(data);

// JSON - uzyj ajax
fetch('./modules/data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

// default
/*
import funkcja from "./modules/functions.js";
funkcja();
*/

/*
import { Location } from "./modules/Location.js";
import { test, nazwa as name } from "./modules/functions.js";
new Location();
test();
console.log(name);
*/