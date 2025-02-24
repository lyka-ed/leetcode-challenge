function uniqueOccurrences(arr: number[]): boolean {
    const countMap = new Map<number, number>();
    

    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const occurrences = new Set(countMap.values());

    return occurrences.size === countMap.size;
}
