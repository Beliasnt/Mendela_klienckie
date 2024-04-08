export class Dependency {
    item_id;
    location;
    result;
    message;
    milestone;
    used;

    constructor(item_id, location, result, message, milestone) {
        this.item_id = item_id; //int
        this.location = location; //string
        this.result = result; //int
        this.message = message; //string
        this.milestone = milestone; //bool
        this.used = false
    }



}

export let dependencies = [
    new Dependency(10, '56', 11, "You opened a tool shed and totrue an axe", false),
    new Dependency(11, '67', 12, "You cut sticks for sheeplegs", false),
    new Dependency(12, '43', 13, "You prepared legs for your fake sheep", true),
    new Dependency(14, '34', 15, "The tavern owner paid you money", false),
    new Dependency(15, '37', 16, "The cooper sold you a new barrel", false),
    new Dependency(16, '43', 17, "You made a nice sheeptrunk", true),
    new Dependency(18, '36', 19, "The butcher gave you wool", false),
    new Dependency(19, '43', 20, "You prepared skin for your fake sheep", true),
    new Dependency(21, '57', 22, "You used your tools to make a rag", false),
    new Dependency(22, '43', 23, "You made a fake sheephead", true),
    new Dependency(24, '11', 25, "You are digging... (timeout) and digging... (timeout) That's enough sulphur for you", false),
    new Dependency(25, '43', 26, "You prepared a solid poison", true),
    new Dependency(27, '21', 28, "You got a bucket full of tar", false),
    new Dependency(28, '43', 29, "You prepared a liquid poison", true),
    new Dependency(33, "43", 34, "You cut a piece of dragon's skin", false),
    new Dependency(34, "57", 35, "You used your tools to make shoes", false),
    new Dependency(35, '41', 36, "The King is impressed by your shoes", false),
    new Dependency(37, "43", 30, "The dragon noticed your gift... (timeout) The dragon ate your sheep and died!", true),
    new Dependency(36, '41', 0,''),
]