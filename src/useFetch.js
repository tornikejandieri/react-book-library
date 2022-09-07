import { useEffect, useState } from "react"
import BookList from "./BookList"

const useFetch = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/books')
    .then(resp => resp.json())
    .then(data => setBooks(data))
   
    // return books
  },[])
}

export default useFetch;