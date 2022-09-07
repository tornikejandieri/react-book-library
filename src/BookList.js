
import Library from "./Library";
import useFetch from "./useFetch";


const BookList = () => {

  const { data: books} = useFetch()

  return ( 
    <div className="book-list">
       {books.map(book => (
        <div className="book" key={book.id}>
          <h2>{book.title}</h2>
        </div>
       ))}
    </div>
   );
}
 
export default BookList;