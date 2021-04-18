import React from 'react';

const Context = React.createContext({ context: [], setContext: ({ type }: { type: any }) => {} });

export default Context;
