function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies);
  const result: boolean[] = [];
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= maxCandies);
  }
  return result;
}
