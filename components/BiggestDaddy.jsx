'use client'
function countWords(boxes) {
    const counts = {};
    boxes.forEach((box, boxIndex) => {
        box.forEach(word => {
            if (!counts[word]) {
                counts[word] = { count: 0, boxes: new Set() };
            }
            counts[word].count++;
            counts[word].boxes.add(boxIndex);
        });
    });
    return counts;
}

function findBestCrate(boxes, targetWordCount) {
    const wordCounts = countWords(boxes);
    // Filter words that appear in at least two different boxes
    const eligibleWords = Object.keys(wordCounts).filter(word => wordCounts[word].boxes.size >= 2);
    const sortedWords = eligibleWords.sort((a, b) => wordCounts[b].count - wordCounts[a].count);

    for (let i = 1; i <= sortedWords.length; i++) {
        const combinations = getCombinations(sortedWords, i);
        for (let combo of combinations) {
            const newBoxes = boxes.map(box => new Set([...box].filter(word => !combo.has(word))));
            const totalWords = newBoxes.reduce((acc, box) => acc + box.size, 0);
            const emptyBoxes = newBoxes.filter(box => box.size === 0).length;
            if (totalWords <= targetWordCount && emptyBoxes === 0) {
                return [combo, newBoxes];
            }
        }
    }

    return [new Set(), boxes];
}

// Helper function to get combinations of elements
function getCombinations(arr, comboLength) {
    function* doCombo(offset, combo) {
        if (combo.length == comboLength) {
            yield new Set(combo);
            return;
        }
        for (let i = offset; i < arr.length; i++) {
            yield* doCombo(i + 1, [...combo, arr[i]]);
        }
    }

    return doCombo(0, []);
}

export default function BiggestDaddy() {

    const boxes = [
        new Set(["hello", "sir", "what"]), 
        new Set(["hello", "fuck", "what"]), 
        new Set(["well", "its", "nice"]), 
        new Set(["what", "weird", "hello"])
    ];
    const targetWordCount = 4;

    const doSearch = () => {
        const [bestCrate, newBoxes] = findBestCrate(boxes, targetWordCount);
        console.log("Best Crate:", [...bestCrate]);
        newBoxes.forEach((box, index) => {
            console.log(`Box ${index + 1} has words:`, [...box]);
        });
    }

    return (
        <button onClick={doSearch} className="px-5 bg-red-500 text-white font-semibold active:scale-95">DOsearch</button>
    )
}