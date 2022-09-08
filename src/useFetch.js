import { useEffect, useState } from "react"


export const useFetch = (url) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setBooks(data))
   
    
  }, [url])

  return (
    <>
      {books && books.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.author}</p>
        </div>
      ))}
    </>
  ) 
}

export default useFetch;