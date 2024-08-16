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
        return [...this.letterCounts]
            .sort(([aChar, aCount], [bChar, bCount]) =>
                aCount === bCount ? aChar.localeCompare(bChar) : bCount - aCount
            )
            .reduce((acc, [char, count]) => {
                count = (count / this.totalLetters) * 100;
                if (count >= 1) {
                    acc.push(
                        `${char}: ${"#".repeat(Math.round(count))} ${count.toFixed(2)}%`
                    );
                }
                return acc;
            }, [])
            .join("\n");
    }
}

async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8");
    let histogram = new Histogram();
    console.log("Enter text.");
    console.log('To complete input and output the result, enter "end".');
    for await (let chunk of process.stdin) {
        if (chunk.trim().toLowerCase() === "end") {
            break;
        }
        histogram.add(chunk);
    }
    return histogram;
}

histogramFromStdin().then((histogram) => {
    console.log(histogram.toString());
});

//******************************************************************************

/*
class DefaultMap extends Map {
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue;
    }

    get(key) {
        if (this.has(key)) {
            return super.get(key);
        } else {
            return this.defaultValue;
        }
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

    toString() {
        let entries = [...this.letterCounts];
        entries.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1;
            } else {
                return b[1] - a[1];
            }
        });

        for (let entry of entries) {
            entry[1] = (entry[1] / this.totalLetters) * 100;
        }

        entries = entries.filter((entry) => entry[1] >= 1);
        let lines = entries.map(
            ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
        );
        return lines.join("\n");
    }
}

async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8");
    let histogram = new Histogram();
    for await (let chunk of process.stdin) {
        if (chunk.trim() === "end") {
            break;
        }
        histogram.add(chunk);
    }
    return histogram;
}

histogramFromStdin().then((histogram) => {
    console.log(histogram.toString());
});*/

//******************************************************************

/*const readline = require("readline");

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
        return [...this.letterCounts]
            .sort(([aChar, aCount], [bChar, bCount]) =>
                aCount === bCount ? aChar.localeCompare(bChar) : bCount - aCount
            )
            .reduce((acc, [char, count]) => {
                count = (count / this.totalLetters) * 100;
                if (count >= 1) {
                    acc.push(
                        `${char}: ${"#".repeat(Math.round(count))} ${count.toFixed(2)}%`
                    );
                }
                return acc;
            }, [])
            .join("\n");
    }
}

async function histogramFromStdin() {
    let histogram = new Histogram();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('Введите текст. Для завершения ввода введите "end".');

    for await (const line of rl) {
        if (line.trim().toLowerCase() === "end") {
            rl.close();
            break;
        }
        histogram.add(line);
    }

    return histogram;
}

histogramFromStdin().then((histogram) => {
    console.log(histogram.toString());
});*/
