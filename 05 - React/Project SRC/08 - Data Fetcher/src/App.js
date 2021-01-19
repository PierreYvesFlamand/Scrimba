import React from 'react';
import DataFetcher from './DataFetcher';

function App() {
    return (
        <div>
            <DataFetcher url='https://swapi.dev/api/people/1'>
                {({ data, loading, error }) => {
                    if (!error) {
                        return loading ? <h1>Loading...</h1> : <p>{JSON.stringify(data)}</p>;
                    } else {
                        console.error(error);
                        return <h1>ERRORS WHEN LOADING THE API</h1>;
                    }
                }}
            </DataFetcher>
        </div>
    );
}

export default App;
