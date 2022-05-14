import styled from "styled-components";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../ouganisms/user/UserCard";

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
  return (
    <SContainer>
      <SUserArea>
        <h2>ユーザー一覧</h2>
        <SearchInput />
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
