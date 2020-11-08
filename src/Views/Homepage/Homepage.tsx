import React from 'react';
import {NavLink} from "react-router-dom";
import MatchController from "../../Controllers/MatchController";
import Match from "../../Models/Match";

const Controller: MatchController = new MatchController();

interface IProps {
}

interface IState {
    loading: boolean
    matches: Match[]
}

class HomePage extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: true,
            matches: []
        }
    }

    componentDidMount() {
        Controller.get()
            .then((matches: Match[]) => {
                console.log(matches)
                this.setState({matches})
            })
            .finally(() => this.setState({loading: false}))
    }

    render(): JSX.Element {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to={"/"}>Feyenoord Poule</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/*<ul className="navbar-nav mr-auto">*/}
                        {/*    <li className="nav-item active">*/}
                        {/*        <NavLink className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></NavLink>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        {/*<form className="form-inline my-2 my-lg-0">*/}
                        {/*    <input className="form-control mr-sm-2" type="search" placeholder="Search"*/}
                        {/*           aria-label="Search"/>*/}
                        {/*    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                        {/*</form>*/}
                    </div>
                </nav>
                <div className="container">
                    <h1>Cover your page.</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage;
