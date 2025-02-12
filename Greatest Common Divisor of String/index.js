function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcds = (a, b) => {
    return b === 0 ? a : gcds(b, a % b);
  };

  const gcdsLength = gcds(str1.length, str2.length);

  return str1.substring(0, gcdsLength);
}
