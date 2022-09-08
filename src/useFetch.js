import { useEffect, useState } from "react"


export const useFetch = (url) => {
  const [books, setBooks] = useState(null)

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setBooks(data))
   
    
  }, [url])

  return [books]; 
}

export default useFetch;