import React from 'react';
export const navigationRef: React.Ref<any> = React.createRef();

export const navigate = <T,>(name: string, params?: T) => {
  navigationRef.current.navigate(name, params);
};
