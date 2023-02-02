import { Component, useContext } from "react";
// import { useParams } from "react-router-dom";
// import {FormControlledContext} from "./context/FormControlledContextProvider";

const userList = [
  { userId: 1, username: "user1", age: "25" },
  { userId: 2, username: "user2", age: "35" },
  { userId: 3, username: "user3", age: "20" },
  { userId: 4, username: "user4", age: "28" },
  { userId: 5, username: "user5", age: "30" },
];

const UserInfo = ({ id, name, age }) => {
/* 
 const [formData] = useContext(FormControlledContext);
 const getFormData = JSON.parse(localStorage.getItem(formData));
 console.log('getFormData', getFormData) */
  return (
    <>
      <div style={{ background: "#eee", textAlign: "center", flexGrow: 1 }}>
        {id}
      </div>
      <div
        style={{
          background: "#eee",
          margin: "0 10px",
          textAlign: "center",
          flexGrow: 1,
        }}
      >
        {name}
      </div>
      <div style={{ background: "#eee", textAlign: "center", flexGrow: 1 }}>
        {age}
      </div>
    </>
  );
};

class RenderList extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px",
            width: "30%",
            margin: "0 auto",
            paddingTop: "30px",
            flexDirection: "column",
          }}
        >
          {userList &&
            userList.map((user, inx) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                  key={inx}
                >
                  <UserInfo
                    key={user.userId}
                    id={user.userId}
                    name={user.username}
                    age={user.age}
                  />
                </div>
              );
            })}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px",
            width: "30%",
            margin: "0 auto",
            paddingTop: "30px",
          }}
        >
          asdas
        </div>
      </div>
    );
  }
}

export default RenderList;
