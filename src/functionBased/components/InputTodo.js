import React, { useState } from "react";
import {IconContext} from "react-icons";
import {FaPlusCircle} from "react-icons/fa"


const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: "",
  })

  const onChange = ({target}) => {
    setInputText({
      ...inputText,
      [target.name]: target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title)
      setInputText({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />

      <IconContext.Provider
        value={{
          color: "darkcyan",
          style: { fontSize: "20px", color: "darkcyan" },
          className: "submit-iconn",
        }}
      >
        <button className="input-submit">
          <FaPlusCircle />          
        </button>
      </IconContext.Provider>
    </form>
  )

 /* const [inputText, setInputText] = useState({
    fName: "",
    lastName: ""
  });

  const onChange = ({target}) => {
    setInputText(prevState => {
      return{
        ...prevState,
        [target.name]: target.value
      }
      
    });
  }

  const handleSumbit = e => {
    e.preventDefault();
    console.log("submitted");
  }

  return(
    <>
      <form onSubmit={handleSumbit} className="form-container">
        <input 
          type="text"
          className="input-text"
          placeholder="Add first name"
          value={inputText.fName}
          name="fName"
          onChange={onChange}
        />
          <input
            type="text"
            className="input-text"
            placeholder="Add last name"
            value={inputText.lastName}
            name="lastName"
            onChange={onChange}
          />
        <button className="input-submit">Submit</button>
      </form>
      <h2>{inputText.fName}</h2>
      <h2>{inputText.lastName}</h2>
    </>
  )*/
}

export default InputTodo