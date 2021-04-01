import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { AnimatePresence } from "framer-motion";
import ApolloClient from "apollo-boost";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Create from "./pages/Create";

import Header from "./components/Header";

const client = new ApolloClient({
  /* request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }, */
  uri: 'http://localhost:3001/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/home/:id" component={Home} />
                  <Route exact path="/auction" component={Create} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
