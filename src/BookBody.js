import useFetch from "./useFetch";

const BookBody = ({  }) => {
  const [body] = useFetch('http://localhost:8000/books')

  return ( 
    <div className="book-body">
      {body && body.map((book) => (
        <div className="body" key={book.id}>
          <p>{book.body}</p>
        </div>
      ))}
    </div>
   );
}
 
export default BookBody;