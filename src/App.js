import RouteLinks from "./components/RouteLinks";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from './hooks/useFetch';
import ButtonLink from "./components/button-link/ButtonLink";

function App() {
  // const { element } = RouteLinks;

  const [userList, setUserList] = useState([]);

  const { isLoading, apiData, apiError} = useFetch("GET",  "https://jsonplaceholder.typicode.com/users", {})
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
/*   useEffect(()=>{

    setUserList(apiData)
  }, []) */

  /*  useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/todos")
   .then(res => res.json())
   .then(data => setUserList(data))
   .catch(err => console.log(err))
 }, []) */

  /*   useEffect(()=>{
   axios.get('https://jsonplaceholder.typicode.com/todos')
   .then(res => setUserList(res.data))
 }, []) */

/*   const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setUserList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); */

  return (
    <div className="App">
      <Sidebar />
      <div className="contentWrapper">
        {/* {console.log('element', element)} */}
        <RouteLinks />
        <ButtonLink label="Meet Our Faculty" link="https:google.com"  className={hovered ? 'on' : ''}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover} />
      </div>

      { userList.map(user =>  user.id )}

    
    </div>
    
  );
}

export default App;
