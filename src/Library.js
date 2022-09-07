import { Link } from "react-router-dom";

const Library = ({ books }) => {
  return ( 
    <div className="library">
      {books.map((books) => (
        <div className="book-preview" key={books.id}>
          <Link to={`/books/${books.id}`}></Link>
          <h2>{books.title}</h2>
          <p>{books.author}</p>
          {console.log(books)}
        </div>
      ))}
    </div>
   );
}
 
export default Library;