
import Navbar from './Navbar'
import Home from './Home'
// Regarding dynamic values in an react app, it can be passed into a
// react component with curly braces as long as that dynamic value is a
// string,number but it cannot be an object or boolean

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>

      </div>
    </div>
      

    
  );
}

export default App;
