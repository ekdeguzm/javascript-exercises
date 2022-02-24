const ftoc = function(far) {
  // (f-32) * 5/9
  far = (far-32) * 5/9
  Math.round(far * 10) / 10
  return Math.round(far * 10) / 10
};

const ctof = function(cel) {
  // (c/ (9/5))+32
  cel = (cel * (9/5)) + 32
  Math.round(cel * 10) / 10
  return Math.round(cel * 10) / 10
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
