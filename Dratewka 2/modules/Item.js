export class Item {
    id;
    nameO;
    flag;
    name;
    constructor(id, nameO, flag, name) {
        this.id = id
        this.nameO = nameO
        this.flag = flag
        this.name = name
    }
}

export const items = {
    items: [
        new Item(10, "a KEY", "1", "KEY",),
        new Item(11, "an AXE", "1", "AXE"),
        new Item(12, "STICKS", "1", "STICKS"),
        new Item(13, "sheeplegs", "0", "sheeplegs"),
        new Item(14, "MUSHROOMS", "1", "MUSHROOMS"),
        new Item(15, "MONEY", "1", "MONEY"),
        new Item(16, "a BARREL", "1", "BARREL"),
        new Item(17, "a sheeptrunk", "0", "sheeptrunk"),
        new Item(18, "BERRIES", "1", "BERRIES"),
        new Item(19, "WOOL", "1", "WOOL"),
        new Item(20, "a sheepskin", "0", "sheepskin"),
        new Item(21, "a BAG", "1", "BAG"),
        new Item(22, "a RAG", "1", "RAG"),
        new Item(23, "a sheephead", "0", "sheephead"),
        new Item(24, "a SPADE", "1", "SPADE"),
        new Item(25, "SULPHUR", "1", "SULPHUR"),
        new Item(26, "a solid poison", "0", "solid poison"),
        new Item(27, "a BUCKET", "1", "BUCKET"),
        new Item(28, "TAR", "1", "TAR"),
        new Item(29, "a liquid poison", "0", "liquid poison"),
        new Item(30, "a dead dragon", "0", "dead dragon",),
        new Item(31, "a STONE", "1", "STONE"),
        new Item(32, "a FISH", "1", "FISH"),
        new Item(33, "a KNIFE", "1", "KNIFE"),
        new Item(34, "a DRAGONSKIN", "1", "DRAGONSKIN"),
        new Item(35, "a dragonskin SHOES", "1", "SHOES"),
        new Item(36, "a PRIZE", "1", "PRIZE"),
        new Item(37, "a SHEEP", "1", "SHEEP"),
    ]
}