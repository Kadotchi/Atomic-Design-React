import PraimaryButton from "./components/atoms/PraimaryButton";
import SecondaryButton from "./components/atoms/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PraimaryButton>テスト</PraimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}
