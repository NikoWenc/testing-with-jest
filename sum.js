export function sum(a, b) {
  return a + b;
};

export function capitalized(string) {
    if (!string) return " ";

    return string[0].toUpperCase() + string.slice(1);
};

