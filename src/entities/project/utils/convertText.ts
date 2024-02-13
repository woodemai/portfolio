export const convertText = (text: string): string => {
  return text.toLowerCase().charAt(0).toUpperCase() + text.slice(1);
};
