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

const renderPeople = people.map((user, id) =>
  <div class="container">
  <div class="names" key={id}>{user.name}</div>
  </div>
);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {renderPeople}
    </div>
  );
}
