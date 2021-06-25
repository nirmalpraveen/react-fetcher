import React from "react";
import "./style.css";

const userData = () => fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json());

export default function App() {
  const [people, setPeople] = React.useState([]);

  React.useEffect(()=>{
    userData().then((apiPeople)=>{
      console.log(apiPeople);
      setPeople(apiPeople);
    })
  },[])

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {people.map((user)=>{
        console.log(user.name);
        <li key={user.id}> {user.name} </li>
      })}
    </div>
  );
}
