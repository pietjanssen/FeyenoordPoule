import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import HomePage from "./Views/Homepage/Homepage";

interface IProps {
}

interface IState {
}

class App extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
      return (
          <main className="main" id="main">
            <BrowserRouter>
                <ErrorBoundary>
                    <Switch>
                        <Route path={"/"}>
                            <HomePage/>
                        </Route>
                    </Switch>
                </ErrorBoundary>
            </BrowserRouter>
          </main>
      )
    }

}

export default App;
