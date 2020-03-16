import React from 'react';
import {server} from '../server/firebaseconfig';
export const ServerContext = React.createContext({api: server});
const {Provider} = ServerContext;

interface IServerProviderProps {
  children: React.ReactChildren;
}

export const ServerProvider = (props: IServerProviderProps) => {
  const result = {api: server};
  return <Provider value={result}>{props.children}</Provider>;
};
