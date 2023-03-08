import { useEffect } from "react";
import useCoinsStore from "./stores/coins";
import { formatCurrency, formatOrdinal } from "./util";
import Table from "./components/Table";
import "./styles.css";

const columns = [
  {
    key: "id",
    header: "id"
  },
  {
    key: "name",
    header: "name"
  },
  {
    key: "symbol",
    header: "symbol",
    formatter: (value) => value.toUpperCase()
  },
  {
    key: "market_cap_rank",
    header: "Score",
    formatter: (value) => formatOrdinal(value)
  },
  {
    key: "ath",
    formatter: (value) => formatCurrency(value)
  }
];
export default function App() {
  const { coins, fetchCoins } = useCoinsStore((state) => ({
    coins: state.coins,
    fetchCoins: state.fetch
  }));

  useEffect(() => {
    fetchCoins();
    console.log("coins changed %o", coins);
  }, []);

  return (
    <div className="App">
      <h1 className="title is-4">Coin Tracker</h1>
      <Table data={coins} columns={columns} />
    </div>
  );
}
