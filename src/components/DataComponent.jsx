import React from 'react';
import  useJsonFetch   from '../useJsonFetch';

export const DataComponent = () => {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/data')
    return (
        <>
            <div>DATA</div>
            {data && <div>Data: {JSON.stringify(data)}</div>}
            {loading && <div>Загрузка данных...</div>}
            {error && <div>Error: {error.message}</div>}
        </>
    );
};
