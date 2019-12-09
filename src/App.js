import React from 'react';
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render(){
    return (
      <Header/>
          );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
