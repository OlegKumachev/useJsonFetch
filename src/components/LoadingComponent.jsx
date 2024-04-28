import React from 'react';
import useJsonFetch from '../useJsonFetch';

export const  LoadingComponent = () => {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/loading')

    return (
        <>
            <div>Loading</div>
            {data && <div>Data: {JSON.stringify(data)}</div>}
            {loading && <div>Загрузка данных...</div>}
            {error && <div>Error: {JSON.stringify(error.message)}</div>}
        </>
    );
};
