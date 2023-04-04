import React, { useReducer } from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { Page } from "./component/Page";
import { routesData } from "./routes";

function reducer(state, action) {
  switch (action.type) {
    case "setTeam": {
      return {
        ...state,
        team: action.value,
      };
    }
    case "setDrink": {
      return {
        ...state,
        drink: action.value,
      };
    }
    case "setSatisfy": {
      return {
        ...state,
        satisfy: action.value,
      };
    }
    case "resetState": {
      return { team: "none", drink: "none", satisfy: null };
    }
    default:
      return state;
  }
}

function App() {
  const initialState = { team: "none", drink: "none", satisfy: null };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Page state={state} />}>
            {routesData.map(({ path, Element, actionType }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Element
                    setState={(value) => {
                      dispatch({ type: actionType, value });
                    }}
                    state={state}
                  />
                }
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
