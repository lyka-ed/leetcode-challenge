function removeStars(s: string): string {
    let result: string[] = [];
    for (const char of s) {
        if (char === '*') {
            result.pop(); 
        } else {
            result.push(char); 
        }
    }
    return result.join(''); 
}
