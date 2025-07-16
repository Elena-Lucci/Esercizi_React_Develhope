import React from "react";
import Welcome from "./components/Welcome";
import { Counter } from "./Components/Counter";
import GithubUsers from "./components/GithubUserList";
import NotFound from "./components/NotFound";
import { Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./Components/ShowGithubUser";
import GithubUserList from "./components/GithubUserList";


function App() {
  return (
    <>

    {/* Add three Links within the main App component and use them to navigate to all three routes. */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>

    {/* Modify App component that wraps a Routes component and add a single Route to the / path that renders the Welcome component, passing it a name prop.*/}
      <Routes>
        <Route path="/" element={<Welcome name={"Elena"} age={27}/>} />
        <Route path="/counter" element={<Counter />} />

        {/* Add a new Route to the /counter path that renders the Counter component from the first state exercise. */}
        <Route path="/users" element={<GithubUserList />}
        >
          {/* Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders a GithubUser component by passing it the received username. */}
        <Route path=":username" element={<ShowGithubUser />} />
        <Route index element={<p>Add a user and select it</p>}></Route>
        </Route>
        
        {/* Add a Not Found route that renders when a user navigates to a path that does not exist. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
