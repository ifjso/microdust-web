export const getColor = value => {
  const num = Math.min(255 - Number(value), 255);
  const hex = num.toString(16);

  return `#${hex}${hex}${hex}`;
};

export const getOpacity = value => {
  return Number(value) / 255 + 0.1;
};
