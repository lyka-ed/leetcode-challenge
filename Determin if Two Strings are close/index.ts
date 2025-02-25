function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    const freq1 = new Map<string, number>();
    const freq2 = new Map<string, number>();

    for (let ch of word1) freq1.set(ch, (freq1.get(ch) || 0) + 1);
    for (let ch of word2) freq2.set(ch, (freq2.get(ch) || 0) + 1);

    if (new Set(word1).size !== new Set(word2).size) return false;

    return (
        [...freq1.keys()].sort().join('') === [...freq2.keys()].sort().join('') &&
        [...freq1.values()].sort().join('') === [...freq2.values()].sort().join('')
    );
}