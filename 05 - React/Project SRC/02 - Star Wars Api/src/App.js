import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            character: {},
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true,
        });

        fetch('https://swapi.dev/api/people/1')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    isLoading: false,
                    character: data,
                });
            });
    }

    render() {
        const text = this.state.isLoading ? 'Loading...' : this.state.character.name;
        return <div>{text}</div>;
    }
}

export default App;
