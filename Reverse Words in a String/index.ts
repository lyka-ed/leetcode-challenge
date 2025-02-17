function reverseWords(s: string): string {
    const words = s.match(/\S+/g);
    return words ? words.reverse().join(' ') : '';
}