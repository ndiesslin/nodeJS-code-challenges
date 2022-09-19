const anagramCheck = function(string1, string2) {
  let sortedString1 = [...string1].sort().join('');
  let sortedString2 = [...string2].sort().join('');

  // Return true or false
  return sortedString1 === sortedString2;
}

module.exports = { anagramCheck };