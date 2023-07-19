function isPalindrome(str) {
  // Remove punctuation, case, and spacing
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");

  // Check if the cleaned string is equal to its reverse
  return cleanStr === cleanStr.split("").reverse().join("");
}

const result = isPalindrome("racecar");
console.log(result);
