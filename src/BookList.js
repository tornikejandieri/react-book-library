

import { Link, useHistory } from "react-router-dom";
import BookBody from "./BookBody";
import useFetch from "./useFetch";


const BookList = () => {

  const [books] = useFetch('http://localhost:8000/books')


  const history = useHistory()
  const linkStyles = {
   color: 'teal',
   textDecoration: 'none',
   paddingLeft: '20px',
   paddingRight: '20px'
 }

  return ( 
   <div className="book-list">
   {books && books.map((item) => (
     <div key={item.id}>
       <h2>{item.title}</h2>
       <p>{item.author}</p>
       <Link to={`/books/${item.id}`} style={linkStyles}>Read Online</Link>
     </div>
   ))}
   
 </div>
   );
}
 
export default BookList;