import React from "react"
import Header from "./components/Header"
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import CreateNote from "./pages/CreateNote"
import ListOfNotes from "./pages/ListOfNotes"
import './App.css';
import CreateMajor from "./pages/CreateMajor"
import NotePage from "./pages/NotePage"
import RequireAuth from "./components/RequireAuth"
import NotFound from "./components/NotFound"
import EditNote from "./pages/EditNote"

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/majors/:majorId" component={ListOfNotes} />
            <Route path="/notes/:noteId" component={NotePage} />
            <Route path="/login" component={Login} />
            {/* <ProtectedRoute path="/createNote" isAuthenticated={authenticated} component={CreateNote}/> */}
            <Route path="/createNote"  component={CreateNote} />
            <Route path="/createNewMajor" component={RequireAuth(CreateMajor)} />
            <Route path="/editNote/:noteId" component={EditNote} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
