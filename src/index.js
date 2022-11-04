import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";
import './style 2/App.css'
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition((position) => {
            this.setState({lat: position.coords.latitude})
        }, (err) => this.setState({errorMessage: err.message}));
    }

    renderContent () {
        if(this.state.lat && !this.state.errorMessage) return <SeasonDisplay lat={this.state.lat}/>
        if(!this.state.lat && this.state.errorMessage) return <div>Error: {this.state.errorMessage}</div>
        if(!this.state.lat && !this.state.errorMessage) return <Loading message= "Please accept location"/>
    }

    render() {
        return <div className="border red">{this.renderContent()}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));