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

        this.letterCounts = Array.from(text).reduce((acc, cur) => {
            let count = acc.get(cur);
            acc.set(cur, count + 1);
            this.totalLetters++;
            return acc;
        }, this.letterCounts);
    }

    toString() {
        let entries = [...this.letterCounts];
        entries.sort(([aChar, aCount], [bChar, bCount]) => {
            if (aCount === bCount) {
                return aChar < bChar ? -1 : 1;
            } else {
                return bCount - aCount;
            }
        });

        for (let entry of entries) {
            entry[1] = (entry[1] / this.totalLetters) * 100;
        }

        entries = entries.filter((entry) => entry[1] >= 1);
        let lines = entries.map(
            ([l, n]) => `${l}: ${"#".repeat(Math.round(n))}${n.toFixed(2)}%`
        );
        return lines.join("\n");
    }
}
