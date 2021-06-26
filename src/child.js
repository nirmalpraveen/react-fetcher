import React from "react";

export default function Child(){
  const [input, setInput] = React.useState("");

  const onChangeInput = (event) => {
    setInput(event.target.value);
  }

const onSubmitButtonClick = () => {
  console.log(input);
  let node = document.querySelector(".dummyArea");
  var listElement = document.createElement("LI");
  var textNode = document.createTextNode(input);
  listElement.append(textNode);
  node.appendChild(listElement);
}


  return (
    <React.Fragment>
    <input type="text" class="textInput" onChange={onChangeInput}/>
    <button type="submit" text="Submit" onClick={onSubmitButtonClick}>Submit</button>
    <div class="dummyArea"> </div>
    </React.Fragment>
  )
}