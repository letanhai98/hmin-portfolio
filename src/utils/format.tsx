export const formatAddress = (str: string) => {
  return `${str.substring(0, 6)}...${str.substring(
    str.length - 6,
    str.length
  )}`;
};

export const formatDescription = (str: string, index: number) => {
  const length = str.length;
  return length > index ? `${str.substring(0, index)}...` : str;
};
