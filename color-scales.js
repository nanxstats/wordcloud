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
