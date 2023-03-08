export default function formatOrdinal(rank) {
  const suffixes = {
    1: "st",
    2: "nd",
    3: "rd"
  };
  const remainder = rank % 100;

  return rank + (suffixes[remainder] || suffixes[rank] || "th");
}
