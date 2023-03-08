export const getUuidV4 = () => {
  if (!window.crypto) {
    throw new Error("Crypto API not supported by this browser.");
  }
  const [a, b, c, d, e, f, g, h] = [
    ...crypto.getRandomValues(new Uint16Array(8))
  ].map((e, i) => e.toString(16));
  return `${a + b}-${c}-${d}-${e}-${f + g + h}`;
};
