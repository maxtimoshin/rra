import { useState, useEffect } from 'react'

const useFetch = (url, method = null, headers = null, body = null) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)
            try {
                let result
                if (method === "get" || method === "GET" || method === null) {
                    result = await fetch(url)
                }
                if (method === "post" || method === "POST") {
                    result = await fetch(url, {
                        method: method,
                        headers: headers,
                        body: JSON.stringify(body)
                    })
                }
                const resultData = await result.json()
                setData(resultData)
                setIsLoading(false)
            } catch (err) {
                setError(err)
                setIsLoading(false)
            }
        }

        fetchData()

    }, [url])

    return { data, error, isLoading }

};

export default useFetch;