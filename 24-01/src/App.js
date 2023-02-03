// import React from "react";
// import AllUserList from "./Components/AllUserList";
// import Name from "./Components/Name";
// const App = () => {
//   return (
//     <div>
//        <AllUserList/>
//        <Name/>
//     </div>
//   )
// }
// export default App;

// import React from "react";
// import SignUpform from "./Components/SignUpform";
// const App =() => {
//   return (
//     <div>
//       <h1>This is App component</h1>
//       <SignUpform/>
//     </div>
//   )
// }
// export default App;

import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import SignUpform from "./Components/SignUpform";
import SumNumbers from "./Components/SumNumbers";
import Header from "./Components/Header";
import TaskScreen from "./Components/TaskScreen";
import CounterComponent from "./Components/CounterComponent";
import Photos from "./Components/Photos";
import higherOrderComponent from "./Components/Hoc";
import SampleRenderProps from "./Components/SampleRenderProps";
const App = () => {
  const TestApp = higherOrderComponent(() => {
    return <div>Test App</div>
  })
  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Header/>
      <Route path={"/"} element= {<h1>This is on Home Page</h1>}/>
      <Route path={"/contact"} element= {<h1>This is on Contact Page</h1>}/>
      <Route path={"/about"} element= {<h1>This is on About Page</h1>}/>
      <Route path={"/signup"} element= {<SignUpform/>}>
      <Route path={"sum"} element={<SumNumbers/>}/>
      </Route>
      <Route path={"/tasks"} element={<TaskScreen/>}/>
      <Route path={"/counter"} element={<CounterComponent/>}/>
      <Route path={"/photos"} element={<Photos/>}/>
      <Route path={"/test"} element={<TestApp/>}/>
      <Route path={"/sample"} element={<SampleRenderProps/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;