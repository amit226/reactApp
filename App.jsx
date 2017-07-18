import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data : "Intial Data....!"
        }

        this.updateState = this.updateState.bind(this);
    };

    updateState(e){
        this.setState({data: "Data updated form child"});
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="{this.state.data}" onChange={this.updateState}/>
                
                <Content mydataProps = {this.state.data}
                        updateStateProps = {this.updateState}></Content>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <input type="button" onClick={this.props.updateStateProps}/>
                <h2>{ this.props.mydataProps }</h2>
            </div>
        );
    }
}

export default App;