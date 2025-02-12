function mergeAlternately(word1: string, word2: string): string {
  if (!word1) return word2;
  if (!word2) return word1;

  return word1[0] + word2[0] + mergeAlternately(word1.slice(1), word2.slice(1));
}
