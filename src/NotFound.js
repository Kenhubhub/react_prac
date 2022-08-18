import {Link} from 'react-router-dom'
const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page does not exist</p>
            <Link To="/">Back Home</Link>
        </div>
    );
}
 
export default NotFound;