import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
 
function Article() {
    return (
      <div>
        {/* please pass this test */}
      </div>
    );
  }  
  function Header(props) {
    return (
      <h1>
        {/* uncomment the line below to pass the test */}
        {/* hello from the Header! */}
      </h1>
    )
}
function App(){
    return (
          <div className="App">
            <Header />
            <Article />
          </div>
        );
      
}
ReactDOM.render(<App />, document.getElementById("root"));
