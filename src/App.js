import RouteLinks from "./components/RouteLinks";
import Sidebar from "./components/Sidebar";

function App() {
// const { element } = RouteLinks;
  return (
    <div className="App"> 
    <Sidebar />
    <div className="contentWrapper"> 
    {/* {console.log('element', element)} */}
      <RouteLinks />
      </div>   
    </div>
  );
}

export default App;
