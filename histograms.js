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

        return entries
            .reduce((acc, [char, count]) => {
                count = (count / this.totalLetters) * 100;
                if (count >= 1) {
                    acc.push(
                        `${char}: ${"#".repeat(Math.round(count))}${count.toFixed(2)}%`
                    );
                }
                return acc;
            }, [])
            .join("\n");
    }
}
