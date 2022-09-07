import { useHistory } from 'react-router-dom';
import BookPic from '../src/images/books.png'

const Home = () => {
  const history = useHistory()
  return ( 
    <div className="home">
      <div className="button-center">
        <button>Visit Library</button>
        <button>Add A Book</button>
        <button>Return A Book</button>
      </div>
      
      <div>
        <img src={BookPic} alt="book emoji" />
      </div>
      
    </div>
   );
}
 
export default Home;