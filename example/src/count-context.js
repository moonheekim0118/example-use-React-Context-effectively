import React from "react";

const CountContext = React.createContext();

function countReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
// useState 를 써도 되면 useState 를 쓰기! 굳이 useReducer 쓸 필요는 없다.

function CountProvider({ children }) {
  const [state, dispatch] = React.useReducer(countReducer, { count: 0 });

  const value = { state, dispatch };
  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

// 컨텍스트를 사용하는 컴포넌트에서, 직접 컨텍스트를 가져오는게 아니라 커스텀 훅을 사용하기

function useCount() {
  const context = React.useContext(CountContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { CountProvider, useCount };
