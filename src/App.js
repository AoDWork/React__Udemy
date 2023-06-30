import React, { StrictMode } from react;
import './App.css';

function WhoAmI (props) {
  return(
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surmane="Smith" link="facebook.com"/>
      {/* <WhoAmI name={{firstName: "John"}} surmane="Smith" link="facebook.com"/> */}
      <WhoAmI name="Alex" surmane="Shepard" link="google.com"/>
    </div>
  );
}

// export { Header };
export default App;


// const Header = () => {
//   return <h2>Hello</h2>
// }

// const Field = () => {
//   const holder = "Enter here"
//   const styledField = {
//     width: '300px'
//   }
//   return <input
//     placeholder={holder}
//     type="text"
//     style={styledField} />
// }

// const Field extends React.Component {
//   render() {
//     const holder = "Enter here"
//     const styledField = {
//       width: '300px'
//     }
//     return <input 
//             placeholder={holder} 
//             type="text" 
//             style={styledField}/>
//   }
// }

// function Btn() {
//   const text = "Log In"
//   const logged = true
  // const res = () => {
  //   return "Log In"
  // }
  // const p = <p>Log In</p>

  // return  <button>{ p }</button>
  // return  <button>{ 3+4 }</button>
  // return  <button>{res()}</button>

//   return <button>{logged ? "Enter" : text}</button>
// }

// function App() {
//   return (
//     <div className="App">
//       <StrictMode>
//         <Header />
//       </StrictMode>
//       <Field />
//       <Btn />
//     </div>
//   );
// }
