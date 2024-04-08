import * as items from "./Item.js"
let itemsList = items.items.items;

export class Location {
    name;
    src;
    color;
    dir;
    items;

    constructor(name, src, color, dir, item) {
        this.name = name;
        this.src = src;
        this.color = color;
        this.dir = dir;
        this.items = [];
        if (item != undefined) {
            this.items.push(item);
        }
    }

    addItem(item_id) {
        if (this.items.filter(i => !i.milestone).length < 3) {
            this.items.push(item_id)
            return 1
        }
        else return "You can't store any more here"
    }

    removeItem(item_id) {
        // console.log(this.items.indexOf(item_id), item_id)
        this.items.splice(this.items.indexOf(item_id.toString()), 1)
    }

    itemsString() {
        if (this.items.length == 0) {
            return "nothing"
        }
        else {
            let foundItem = []
            for (let i = 0; i < itemsList.length; i++) {
                for (let j = 0; j < this.items.length; j++) {
                    if (this.items[j] == itemsList[i].id) {
                        foundItem.push(itemsList[i].nameO)
                    }
                }
            }
            return foundItem.join(', ')
        }
    }
}

export let locations = {
    locations: [[
        new Location("You are inside a brimstone mine", "./img/11.gif", "rgb(235,211,64)", ["E"],),
        new Location("You are at the entrance to the mine", "./img/12.gif", "rgb(89,93,87)", ["E", "W"]),
        new Location('A hill', './img/13.gif', 'rgb(117,237,243)', ["E", "S", "W"], "31"),
        new Location('Some bushes', './img/14.gif', 'rgb(202,230,51)', ["E", "W"]),
        new Location('An old deserted hut', './img/15.gif', 'rgb(220,204,61)', ["E", "W"], "27"),
        new Location('The edge of a forest', './img/16.gif', 'rgb(167,245,63)', ["E", "W"]),
        new Location('A dark forest', './img/17.gif', 'rgb(140,253,99)', ["S", "W"], "14")
    ],
    [
        new Location('A man nearby making tar', './img/21.gif', 'rgb(255,190,99)', ["S", "E"]),
        new Location('A timber yard', './img/22.gif', 'rgb(255,190,99)', ["E", "S", "W"]),
        new Location('You are by a roadside shrine', './img/23.gif', 'rgb(167,245,63)', ["N", "E", "S", "W"], "10"),
        new Location('You are by a small chapel', './img/24.gif', 'rgb(212,229,36)', ["E", "W"]),
        new Location('You are on a road leading to a wood', './img/25.gif', 'rgb(167,245,63)', ["E", "S", "W"]),
        new Location('You are in a forest', './img/26.gif', 'rgb(167,245,63)', ["E", "W"]),
        new Location('You are in a deep forest', './img/27.gif', 'rgb(140,253,99)', ["N", "W"], "18")
    ],
    [
        new Location('You are by the Vistula River', './img/31.gif', 'rgb(122,232,252)', ["N", "E"]),
        new Location('You are by the Vistula River', './img/32.gif', 'rgb(140,214,255)', ["N", "W"], "32"),
        new Location('You are on a bridge over river', './img/33.gif', 'rgb(108,181,242)', ["N", "S",]),
        new Location('You are by the old tavern', './img/34.gif', 'rgb(255,189,117)', ["E",]),
        new Location("You are at the town's end", './img/35.gif', 'rgb(255,190,99)', ["N", "S", "W"]),
        new Location("You are in a butcher's shop", './img/36.gif', 'rgb(255,188,102)', ["S"]),
        new Location("You are in a cooper's house", './img/37.gif', 'rgb(255,188,102)', ["S"])
    ],
    [
        new Location('You are in the Wawel Castle', './img/41.gif', ' rgb(255,176,141)', ["E"]),
        new Location("You are inside a dragon's cave", './img/42.gif', 'rgb(198,205,193)', ["E", "W"]),
        new Location('A perfect place to set a trap', './img/43.gif', 'rgb(255,176,141)', ["N", "W"]),
        new Location('You are by the water mill', './img/44.gif', 'rgb(255,190,99)', ["E"], "21"),
        new Location('You are at a main crossroad', './img/45.gif', 'rgb(255,190,99)', ["N", "E", "S", "W"]),
        new Location('You are on a town street', './img/46.gif', 'rgb(255,190,99)', ["N", "E", "W"]),
        new Location('You are in a frontyard of your house', './img/47.gif', 'rgb(255,190,99)', ["N", "W", "S"])
    ],
    [
        undefined,
        undefined,
        undefined,
        new Location('You are by a swift stream', './img/54.gif', 'rgb(108,181,242)', ["E"]),
        new Location('You are on a street leading forest', './img/55.gif', 'rgb(255,190,99)', ["N", "S", "W"], "33"),
        new Location("You are in a woodcutter's backyard", './img/56.gif', 'rgb(255,190,99)', ["S"]),
        new Location("You are in a shoemaker's house", './img/57.gif', 'rgb(254,194,97)', ["N"])
    ],
    [
        undefined,
        undefined,
        undefined,
        new Location('You are in a bleak funeral house', './img/64.gif', 'rgb(254,194,97)', ["E"], "24"),
        new Location('You are on a path leading to the wood', './img/26.gif', 'rgb(167,245,63)', ["N", "E", "W"]),
        new Location('You are at the edge of a forest', './img/66.gif', 'rgb(167,245,63)', ["N", "E", "W"]),
        new Location('You are in a deep forest', './img/27.gif', 'rgb(140,253,99)', ["W"])
    ]]
}