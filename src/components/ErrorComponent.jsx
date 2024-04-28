import React from 'react';
import useJsonFetch  from '../useJsonFetch';


export const ErrorComponent = () => {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/error')
    return (
        <>
            <div>ERROR</div>
            {data && <div>Data: {JSON.stringify(data)}</div>}
            {loading && <div>Загрузка данных...</div>}
            {error && <div>Error: {error.message}</div>}
        </>
    );
};


