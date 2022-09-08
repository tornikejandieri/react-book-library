
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BookList = () => {
  const { id } = useParams()
  const { data: books} = useFetch('http://localhost:8000/books' + id)

  return ( 
    <div className="book-list">
       {console.log(books)}
    </div>
   );
}
 
export default BookList;