// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #




var board = "";
var even = " # # # #";
var odd = "# # # #";
var i = 1;
while (i <= 8) {

  if (i % 2 == 0) {
    console.log(even);

  } else {
    console.log(odd);

  }
  var i = i + 1;
}