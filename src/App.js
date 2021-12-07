import React from "react";
import "./App.css";
import ComponentConsumerD from "./Components/CodeEvaluation/ComponentConsumerD";
import CounterOne from "./Components/CodeEvaluation/UseReducer/CounterOne";
import CounterThree from "./Components/CodeEvaluation/UseReducer/CounterThree";
import CounterTwo from "./Components/CodeEvaluation/UseReducer/CounterTwo";

// import ComponentConsumer from "./Components/ComponentConsumerC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"shiva"}>
        <ChannelContext.Provider value={"vishwas"}>
          <ComponentConsumerD />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <CounterOne />
      <CounterTwo/>
      <CounterThree/>
    </div>
  );
}

export default App;
