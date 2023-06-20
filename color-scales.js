// Define reversed versions of D3.js categorical color scales
let category10 = [
  "#1F77B4",
  "#FF7F0E",
  "#2CA02C",
  "#D62728",
  "#9467BD",
  "#8C564B",
  "#E377C2",
  "#7F7F7F",
  "#BCBD22",
  "#17BECF",
];
d3.scale.category10Reversed = function () {
  return d3.scale.ordinal().range(category10.slice().reverse());
};

let category20 = [
  "#1F77B4",
  "#FF7F0E",
  "#2CA02C",
  "#D62728",
  "#9467BD",
  "#8C564B",
  "#E377C2",
  "#7F7F7F",
  "#BCBD22",
  "#17BECF",
  "#AEC7E8",
  "#FFBB78",
  "#98DF8A",
  "#FF9896",
  "#C5B0D5",
  "#C49C94",
  "#F7B6D2",
  "#C7C7C7",
  "#DBDB8D",
  "#9EDAE5",
];
d3.scale.category20Reversed = function () {
  return d3.scale.ordinal().range(category20.slice().reverse());
};

let category20b = [
  "#393B79",
  "#637939",
  "#8C6D31",
  "#843C39",
  "#7B4173",
  "#5254A3",
  "#8CA252",
  "#BD9E39",
  "#AD494A",
  "#A55194",
  "#6B6ECF",
  "#B5CF6B",
  "#E7BA52",
  "#D6616B",
  "#CE6DBD",
  "#9C9EDE",
  "#CEDB9C",
  "#E7CB94",
  "#E7969C",
  "#DE9ED6",
];
d3.scale.category20bReversed = function () {
  return d3.scale.ordinal().range(category20b.slice().reverse());
};

let category20c = [
  "#3182BD",
  "#E6550D",
  "#31A354",
  "#756BB1",
  "#636363",
  "#6BAED6",
  "#FD8D3C",
  "#74C476",
  "#9E9AC8",
  "#969696",
  "#9ECAE1",
  "#FDAE6B",
  "#A1D99B",
  "#BCBDDC",
  "#BDBDBD",
  "#C6DBEF",
  "#FDD0A2",
  "#C7E9C0",
  "#DADAEB",
  "#D9D9D9",
];
d3.scale.category20cReversed = function () {
  return d3.scale.ordinal().range(category20c.slice().reverse());
};

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

// ColorBrewer dark2 color scale
let dark2 = [
  "#1b9e77",
  "#d95f02",
  "#7570b3",
  "#e7298a",
  "#66a61e",
  "#e6ab02",
  "#a6761d",
];
d3.scale.dark2 = function () {
  return d3.scale.ordinal().range(dark2);
};
d3.scale.dark2Reversed = function () {
  return d3.scale.ordinal().range(dark2.slice().reverse());
};

// ColorBrewer set2 color scale
let set2 = [
  "#66c2a5",
  "#fc8d62",
  "#8da0cb",
  "#e78ac3",
  "#a6d854",
  "#ffd92f",
  "#e5c494",
];
d3.scale.set2 = function () {
  return d3.scale.ordinal().range(set2);
};
d3.scale.set2Reversed = function () {
  return d3.scale.ordinal().range(set2.slice().reverse());
};

// ggplot2 hue color scale
let ggplot2 = [
  "#F8766D",
  "#EA8331",
  "#D89000",
  "#C09B00",
  "#A3A500",
  "#7CAE00",
  "#39B600",
  "#00BB4E",
  "#00BF7D",
  "#00C1A3",
  "#00BFC4",
  "#00BAE0",
  "#00B0F6",
  "#35A2FF",
  "#9590FF",
  "#C77CFF",
  "#E76BF3",
  "#FA62DB",
  "#FF62BC",
  "#FF6A98",
];
d3.scale.ggplot2 = function () {
  return d3.scale.ordinal().range(ggplot2);
};
d3.scale.ggplot2Reversed = function () {
  return d3.scale.ordinal().range(ggplot2.slice().reverse());
};

// Tableau 10 color scale
let tableau10 = [
  "#4e79a7",
  "#f28e2c",
  "#e15759",
  "#76b7b2",
  "#59a14f",
  "#edc949",
  "#af7aa1",
  "#ff9da7",
  "#9c755f",
  "#bab0ab",
];
d3.scale.tableau10 = function () {
  return d3.scale.ordinal().range(tableau10);
};
d3.scale.tableau10Reversed = function () {
  return d3.scale.ordinal().range(tableau10.slice().reverse());
};

// FlatUI color scale
let flatUI = [
  "#c0392b",
  "#d35400",
  "#f39c12",
  "#27ae60",
  "#16a085",
  "#2980b9",
  "#8e44ad",
];
d3.scale.flatUI = function () {
  return d3.scale.ordinal().range(flatUI);
};
d3.scale.flatUIReversed = function () {
  return d3.scale.ordinal().range(flatUI.slice().reverse());
};
