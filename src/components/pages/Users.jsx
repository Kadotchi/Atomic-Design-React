import { useContext } from "react";
import styled from "styled-components";
import SecondaryButton from "../atoms/button/SecondaryButton";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../ouganisms/user/UserCard";
import { UserContext } from "../providers/UserProviders";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `かどっち${val}`,
    image: "https://source.unsplash.com/73pyV0JJOmE",
    mail: "1111aaaaaaaaa@aaa.com",
    phone: "000-9999-8888",
    company: {
      name: "ああああfdagdsagda株式会社"
    },
    website: "httt.com"
  };
});
export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
