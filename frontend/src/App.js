import React from "react"
import Header from "./components/Header"
import { Redirect, BrowserRouter, Switch, Route} from "react-router-dom"
import Major from "./pages/Major"
import Home from "./pages/Home"
import Login from "./pages/Login"
import UserProfile from "./pages/UserProfile"
import CreateNote from "./pages/CreateNote"
import ListOfNotes from "./pages/ListOfNotes"
import './App.css';
import CreateMajor from "./pages/CreateMajor"
import NotePage from "./pages/NotePage"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/majors" exact component={Major}/>
            <Route path="/majors/:majorId" component={ListOfNotes} />
            <Route path="/notes/:noteId" component={NotePage} />
            <Route path="/profile" component={UserProfile}/>
            <Route path="/login" component={Login} />
            <Route path="/createNote" component = {CreateNote} />
            <Route path="/createNewMajor" component={CreateMajor} />
            <Route path="/NotFound" component={NotFound} />
            <Redirect to="NotFound" />
          </Switch>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
