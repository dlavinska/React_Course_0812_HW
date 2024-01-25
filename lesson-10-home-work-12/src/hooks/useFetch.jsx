import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const getData = async () => {
            try {
                setError(null);
                setIsLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const dataResp = await response.json();
                setData(dataResp);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        getData();

    }, [url])

    return { data, error, isLoading };

}

export default useFetch;