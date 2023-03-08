import { create } from "zustand";

const SUPPORTED_COINS = {
  btc: "bitcoin",
  eth: "ethereum",
  ada: "cardano",
  dash: "dash",
  doge: "dogecoin",
  ltc: "litecoin"
};
const ids = Object.values(SUPPORTED_COINS);
const API_URL =
  `https://api.coingecko.com/api/v3/coins/markets` +
  `?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false`;

const useCoinsStore = create((set) => ({
  coins: [],
  fetch: async (supportedOnly = true) => {
    const url = API_URL + (supportedOnly ? `&ids=${ids}` : "");
    let coins = [];
    try {
      const response = await fetch(url);
      coins = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      set({ coins });
    }
  }
}));

export default useCoinsStore;
