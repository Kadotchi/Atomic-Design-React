import React from "react";
import Router from "./router/Router";
import { UserProviders } from "./components/providers/UserProviders";
import "./styles.css";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProviders>
        <Router />
      </UserProviders>
    </RecoilRoot>
  );
}
