import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-5">
        <Link to="/"><p className="mb-3">HOME</p></Link>
        <div className="flex flex-col">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>            
        </div>        
    </div>    
  );
}

export default Home;
