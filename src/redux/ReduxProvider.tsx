"use client";
import React, { FC, ReactNode } from "react";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";

interface IReduxProvider {
  children: ReactNode;
}

const ReduxProvider: FC<IReduxProvider> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) storeRef.current = makeStore();

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
