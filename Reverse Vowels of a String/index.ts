function reverseVowels(s: string): string {
    const vowel = s.split('').filter(char => /[aeiouAEIOU]/.test(char));
    const chars = s.split('');
    
    for (let i = 0; i < chars.length; i++) {
        if (/[aeiouAEIOU]/.test(chars[i])) {
            chars[i] = vowel.pop()!;
        }
    }
    
    return chars.join('');
}
