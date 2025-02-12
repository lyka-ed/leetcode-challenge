function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const gcds = (a: number, b: number): number => {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    const gcdsLength = gcds(str1.length, str2.length);
    return str1.substring(0, gcdsLength);
}