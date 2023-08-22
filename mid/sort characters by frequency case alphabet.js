function frequencySort(str) {
    const frequencyMap = {};
    
    // Create frequency map
    for (const char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
    
    // Convert to array of pairs
    const charFrequencyPairs = Object.entries(frequencyMap);
    
    // Sort by frequency
    charFrequencyPairs.sort((a, b) => b[1] - a[1]);
    
    // Create the sorted string
    let sortedStr = '';
    for (const [char, frequency] of charFrequencyPairs) {
        sortedStr += char.repeat(frequency);
    }
    
    return sortedStr;
}

const inputString = "tree";
const sortedString = frequencySort(inputString);
console.log(sortedString); // Outputs: "eert" or "eetr" (same frequency characters can have different order)
