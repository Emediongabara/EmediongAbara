
function decToBin(dec) {
  var remainder;
  var bin = "";
  
  while (dec != 0) {
    remainder = dec % 2;
    dec = Math.floor(dec / 2);
    bin += remainder;
  }
  
  return bin.split("").reverse().join("");
}