function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const diff1 = [...set1].filter(num => !set2.has(num));
    const diff2 = [...set2].filter(num => !set1.has(num));

    return [diff1, diff2];
}
