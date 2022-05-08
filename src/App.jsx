import PraimaryButton from "./components/atoms/button/PraimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/ouganisms/user/UserCard";
import "./styles.css";

export default function App() {
  const user = {
    name: "かどっち",
    image: "https://source.unsplash.com/73pyV0JJOmE",
    mail: "1111@aaa.com",
    phone: "000-9999-8888",
    company: {
      name: "ああああ株式会社"
    },
    website: "httt.com"
  };
  return (
    <div className="App">
      <PraimaryButton>テスト</PraimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
