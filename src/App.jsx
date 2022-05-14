import React from "react";
import { UserProviders } from "./components/providers/UserProviders";
import Router from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <UserProviders>
      <Router />
    </UserProviders>
  );
}
