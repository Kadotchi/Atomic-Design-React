import styled from "styled-components";

import { Input } from "../atoms/input/Input";
import PraimaryButton from "../atoms/button/PraimaryButton";
import { memo } from "react";

export const SearchInput = memo(() => {
  console.log("SearchInput.jsx");
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PraimaryButton>検索</PraimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
