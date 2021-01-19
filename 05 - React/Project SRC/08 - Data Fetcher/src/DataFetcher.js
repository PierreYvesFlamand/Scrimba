import React, { useState, useEffect } from 'react';

function DataFetcher(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(props.url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => setError(err));
    }, []);

    return props.children({ data, loading, error });
}

// class DataFetcher extends React.Component {
//     state = {
//         loading: false,
//         data: null,
//         error: false,
//     };

//     componentDidMount() {
//         this.setState({ loading: true });
//         fetch(this.props.url)
//             .then((res) => res.json())
//             .then((data) => this.setState({ data: data, loading: false }))
//             .catch((err) => this.setState({ error: err }));
//     }

//     render() {
//         const { data, loading, error } = this.state;
//         return this.props.children({ data, loading, error });
//     }
// }

export default DataFetcher;
