import ThemeChangerClass, { ThemeChangerFunc } from "../hooks/useContext";
import UserList, {
  WindowSizeListClass,
  WindowSizeListFunc,
} from "../hooks/useEffect";
import CounterReducerHook from "../hooks/useReducers";
import UseRefComponent from "../hooks/useRef";
import { CounterClass, CounterFunctional } from "../hooks/useState";

export function Home() {
  return (
    <>
      <div
        style={{ background: "#eee", padding: "20px", marginBottom: "10px" }}
      >
        <h1 style={{ marginBottom: "20px" }}>useState</h1>
        <div style={{ marginBottom: "10px" }}>
          {" "}
          <CounterClass />{" "}
        </div>
        <br />
        <CounterFunctional />
      </div>
      <div
        style={{ background: "#eee", padding: "20px", marginBottom: "10px" }}
      >
        <h1 style={{ marginBottom: "20px" }}>useEffect</h1>
        <div style={{ display: "flex" }}>
          <div style={{ marginBottom: "10px", width: "30%" }}>
            {" "}
            <WindowSizeListClass />
          </div>
          <div style={{ marginBottom: "10px", width: "30%" }}>
            <WindowSizeListFunc />
          </div>
          <div style={{ marginBottom: "10px", width: "30%" }}>
            <UserList />
          </div>
        </div>
      </div>

      <div
        style={{ background: "#eee", padding: "20px", marginBottom: "10px" }}
      >
        <h1 style={{ marginBottom: "20px" }}>useContext</h1>
        <div style={{ display: "flex" }}>
          <div style={{ marginBottom: "10px", width: "30%" }}>
            <ThemeChangerClass />
          </div>
          <div style={{ marginBottom: "10px", width: "30%" }}>
             <ThemeChangerFunc />
          </div>           
        </div>
      </div>
      <div
        style={{ background: "#eee", padding: "20px", marginBottom: "10px" }}
      >
        <h1 style={{ marginBottom: "20px" }}>useRefe</h1>
         <UseRefComponent />
      </div>
      <div
        style={{ background: "#eee", padding: "20px", marginBottom: "10px" }}
      >
        <h1 style={{ marginBottom: "20px" }}>useReducer</h1>
        <CounterReducerHook />
      </div>
    </>
  );
}
