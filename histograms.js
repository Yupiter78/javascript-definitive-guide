class DefaultMap extends Map {
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue;
    }

    get(key) {
        return this.has(key) ? super.get(key) : this.defaultValue;
    }
}

class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0);
        this.totalLetters = 0;
    }

    add(text) {
        text = text.replace(/\s/g, "").toUpperCase();

        for (let character of text) {
            let count = this.letterCounts.get(character);
            this.letterCounts.set(character, count + 1);
            this.totalLetters++;
        }
    }
}