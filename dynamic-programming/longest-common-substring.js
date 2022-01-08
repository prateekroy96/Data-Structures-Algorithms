function longestCommonSuffix(str1, end1, str2, end2) {
  if (end1 == -1 || end2 == -1) return "";
  if (map[end1][end2] != null) return map[end1][end2];

  if (str1[end1] == str2[end2]) {
    map[end1][end2] =
      longestCommonSuffix(str1, end1 - 1, str2, end2 - 1) + str1[end1];

    max = map[end1][end2].length > max.length ? map[end1][end2] : max;
    return map[end1][end2];
  }
  map[end1][end2] = "";
  return map[end1][end2];
}

text1 = "apple";
text2 = "pepper";
max = "";
map = new Array(text1.length)
  .fill(0)
  .map((_) => new Array(text2.length).fill(null));

for (let i = 0; i < text1.length; i++) {
  for (let j = 0; j < text2.length; j++) {
    longestCommonSuffix(text1, i, text2, j);
  }
}

console.log(max); // pp
