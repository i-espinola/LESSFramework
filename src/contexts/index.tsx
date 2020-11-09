// import React, { Component, createContext } from 'react';

// export interface MutateProps {
//   [key: string]: any;
// }

// const Context = createContext({
//   loading: false,
//   theme: 'light',
// });

// class ContextProvider extends Component {
//   state = Context;

//   mutateContext = (object: MutateProps) => {
//     this.setState((prevState) => ({
//       ...prevState,
//       ...object,
//     }));
//   };

//   render() {
//     const { mutateContext, state } = this;

//     return (
//       <Context.Provider
//         value={{
//           ...state,
//           mutateContext,
//         }}
//       >
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }

// export default Context;
// export { ContextProvider, Context };

// ================
// ================

import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initState = {
  loading: false,
  dispatch: (e) => e,
};

const state = createContext(initState);

const ContextProvider = ({ children }) => {
  const [context, dispatchCallBack] = useReducer(reducer, initState);
  const dispatch = (action: {}) => dispatchCallBack(action);

  return (
    <state.Provider
      value={{
        ...context,
        dispatch,
      }}
    >
      {children}
    </state.Provider>
  );
};

export default state;
export { ContextProvider, state };
