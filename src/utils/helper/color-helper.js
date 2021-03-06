export const getColor = value => {
  let num = 255;
  const numVal = Number(value);

  if (numVal >= 0 && numVal < 20) {
    num = 255;
  } else if (numVal >= 20 && numVal < 30) {
    num = 237;
  } else if (numVal >= 30 && numVal < 40) {
    num = 232;
  } else if (numVal >= 40 && numVal < 50) {
    num = 209;
  } else if (numVal >= 50 && numVal < 60) {
    num = 186;
  } else if (numVal >= 60 && numVal < 70) {
    num = 163;
  } else if (numVal >= 70 && numVal < 80) {
    num = 140;
  } else if (numVal >= 80 && numVal < 100) {
    num = 93;
  } else if (numVal >= 100 && numVal < 120) {
    num = 70;
  } else if (numVal >= 121 && numVal < 150) {
    num = 47;
  } else {
    num = 0;
  }

  const hex = num.toString(16);

  return `#${hex}${hex}${hex}`;
};

export const getOpacity = value => {
  let num = 0.1;
  const numVal = Number(value);

  if (numVal >= 0 && numVal < 20) {
    num = 0.05;
  } else if (numVal >= 20 && numVal < 30) {
    num = 0.12;
  } else if (numVal >= 30 && numVal < 40) {
    num = 0.19;
  } else if (numVal >= 40 && numVal < 50) {
    num = 0.26;
  } else if (numVal >= 50 && numVal < 60) {
    num = 0.33;
  } else if (numVal >= 60 && numVal < 70) {
    num = 0.4;
  } else if (numVal >= 70 && numVal < 80) {
    num = 0.47;
  } else if (numVal >= 80 && numVal < 100) {
    num = 0.54;
  } else if (numVal >= 100 && numVal < 120) {
    num = 0.61;
  } else if (numVal >= 121 && numVal < 150) {
    num = 0.71;
  } else {
    num = 0.8;
  }

  // TODO 구시 실제 데이터 반영
  // TODO 각 마커 터치했을 때 확대 (이동 x)
  // TODO 지역이 터치되도록 구현
  return num;
};
