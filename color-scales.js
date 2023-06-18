// Define custom D3.js categorical color palettes

// viridis color scale
let viridis = [
  "#fde725",
  "#dde318",
  "#bade28",
  "#95d840",
  "#75d054",
  "#56c667",
  "#3dbc74",
  "#29af7f",
  "#20a386",
  "#1f968b",
  "#238a8d",
  "#287d8e",
  "#2d718e",
  "#33638d",
  "#39558c",
  "#404688",
  "#453781",
  "#482576",
  "#481467",
  "#440154",
];
d3.scale.viridis = function () {
  return d3.scale.ordinal().range(viridis);
};
d3.scale.viridisReversed = function () {
  return d3.scale.ordinal().range(viridis.slice().reverse());
};

// Okabe-Ito color scale
let okabeIto = [
  "#E69F00",
  "#56B4E9",
  "#009E73",
  "#F0E442",
  "#0072B2",
  "#D55E00",
  "#CC79A7",
];
d3.scale.okabeIto = function () {
  return d3.scale.ordinal().range(okabeIto);
};
d3.scale.okabeItoReversed = function () {
  return d3.scale.ordinal().range(okabeIto.slice().reverse());
};

// Gephi color scale
let gephi = [
  "#F1087B",
  "#5FA5FD",
  "#06BB1B",
  "#E72094",
  "#D3A207",
  "#9183E2",
  "#E7663B",
  "#67A030",
  "#E558B2",
  "#F05252",
  "#62A131",
  "#8985E1",
  "#E25BBD",
  "#D87823",
  "#C9821C",
  "#7D77CE",
  "#69C73F",
  "#D44443",
  "#CE51A9",
  "#5D8D2B",
  "#D06D20",
  "#C364D7",
  "#59BF42",
  "#D4404A",
  "#6E7ACA",
  "#CA4B93",
  "#7E9321",
  "#6E7ACA",
  "#5BC344",
  "#D64E2B",
  "#C94992",
  "#C78A1C",
  "#C465D6",
  "#D14058",
  "#699025",
];
d3.scale.gephi = function () {
  return d3.scale.ordinal().range(gephi);
};
d3.scale.gephiReversed = function () {
  return d3.scale.ordinal().range(gephi.slice().reverse());
};
