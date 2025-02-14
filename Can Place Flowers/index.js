var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;
  while (i < flowerbed.length && n > 0) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      n--;
    }
    i++;
  }

  return n === 0;
};

console.log(canPlaceFlowers([0, 0, 1, 1, 1], 1));
