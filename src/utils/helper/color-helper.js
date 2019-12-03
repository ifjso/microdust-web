export const getColor = value => {
  let num = 255;

  if (Number(value) >= 0 && Number(value) < 20) {
    num = 255;
  } else if (Number(value) >= 20 && Number(value) < 30) {
    num = Math.ceil((255 / 11) * 10 + 5);
  } else if (Number(value) >= 30 && Number(value) < 40) {
    num = Math.ceil((255 / 11) * 10);
  } else if (Number(value) >= 40 && Number(value) < 50) {
    num = Math.ceil((255 / 11) * 9);
  } else if (Number(value) >= 50 && Number(value) < 60) {
    num = Math.ceil((255 / 11) * 8);
  } else if (Number(value) >= 60 && Number(value) < 70) {
    num = Math.ceil((255 / 11) * 7);
  } else if (Number(value) >= 70 && Number(value) < 80) {
    num = Math.ceil((255 / 11) * 6);
  } else if (Number(value) >= 80 && Number(value) < 100) {
    num = Math.ceil((255 / 11) * 4);
  } else if (Number(value) >= 100 && Number(value) < 120) {
    num = (255 / 11) * 3;
  } else if (Number(value) >= 121 && Number(value) < 150) {
    num = (255 / 11) * 2;
  } else {
    num = 0;
  }

  // Math.

  // const num = Math.min(255 - Number(value), 255);
  const hex = num.toString(16);

  return `#${hex}${hex}${hex}`;
};

export const getOpacity = value => {
  let num = 0.1;

  if (Number(value) >= 0 && Number(value) < 20) {
    num = 0.05;
  } else if (Number(value) >= 20 && Number(value) < 30) {
    num = 0.1;
  } else if (Number(value) >= 30 && Number(value) < 40) {
    num = 0.4;
  } else if (Number(value) >= 40 && Number(value) < 50) {
    num = 0.65;
  } else if (Number(value) >= 50 && Number(value) < 60) {
    num = 0.8;
  } else if (Number(value) >= 60 && Number(value) < 70) {
    num = 0.9;
  } else {
    num = 1.0;
  }

  // return Number(value) / 255 + 0.6;
  return num;
};
