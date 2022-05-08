import PraimaryButton from "./components/atoms/button/PraimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/ouganisms/user/UserCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PraimaryButton>テスト</PraimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}
