export const upperFirstLetter = (str: string) => {
  if (!str) return "";
  return str
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
