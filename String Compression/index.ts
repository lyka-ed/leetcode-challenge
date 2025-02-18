function compress(chars: string[]): number {
    let write = 0; // Pointer to write compressed characters
    let read = 0;  // Pointer to read the original characters

    while (read < chars.length) {
        const currentChar = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }

        chars[write] = currentChar;
        write++;

        if (count > 1) {
            const countStr = count.toString();
            for (let i = 0; i < countStr.length; i++) {
                chars[write] = countStr[i];
                write++;
            }
        }
    }
    return write;
}