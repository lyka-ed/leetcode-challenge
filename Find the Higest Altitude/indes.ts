function largestAltitude(gain: number[]): number {
    let maxAltitude = 0;
    let currentAltitude = 0;

    for (const g of gain) {
        currentAltitude += g;
        maxAltitude = Math.max(maxAltitude, currentAltitude);
    }

    return maxAltitude;
}