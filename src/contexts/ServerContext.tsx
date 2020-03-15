import React from 'react';
import {server} from '../server/firebaseconfig';
export const ServerContext = React.createContext({api: {}});
const {Provider} = ServerContext;

export const ServerProvider = props => {
  const result = {api: server};
  return <Provider value={result}>{props.children}</Provider>;
};
