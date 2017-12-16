import * as React from "react";
import {addColor} from "./actions";
import "./styles/AddColorForm.scss";

const AddColorForm = ({onNewColor = (f, a) => f}) => {
  let _title; // tslint:disable-line
  let _color; // tslint:disable-line

  const submit = (e) => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
    _title.value = "";
    _color.value = "#000000";
    _title.focus();
  };

  return (
    <form className="add-color" onSubmit = {submit}>
      <input ref={(input) => _title = input} type="text" placeholder="color title..." required />
      <input ref={(input) => _color = input} type="color" required />
      <button className="button">Add</button>
    </form>
  );
};

export {AddColorForm};

// const AddColorForm = ({onNewColor=f=>f}) => {

//       let _title, _color

//       const submit = e => {
//           e.preventDefault()
//           onNewColor(_title.value, _color.value)
//           _title.value = ''
//           _color.value = '#000000'
//           _title.focus()
//       }

//       return (
//           <form className="add-color" onSubmit={submit}>
//               <input ref={input => _title = input}
//                      type="text"
//                      placeholder="color title..." required/>
//               <input ref={input => _color = input}
//                      type="color" required/>
//               <button>ADD</button>
//           </form>
//       )

//   }
