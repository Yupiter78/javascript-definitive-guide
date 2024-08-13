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

        text.split("").reduce(( prev, cur) => {
            let count = this.letterCounts.get(cur);
            this.letterCounts.set(cur, count + 1);
            this.totalLetters++;
            return prev;

        }, this);
    }
}