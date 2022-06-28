import React from "react"
import Header from './Header'
import Form from './Form'
// import Ages from './Ages'
// import New from './New'
import './styles.css'
// import Sign from "./Sign"



export default function App() {

  return (
    <>
      <Header />
      <Form />
      {/* <Ages /> */}
      {/* <New /> */}
      {/* <Sign /> */}
    </>
  )
}






//!counter 
// export default function App() {

//   const [count, setCount] = useState(0)

//   function incriment() {
//     setCount(prevCount => prevCount + 1)
//   }
//   function decrement() {
//     setCount(prevCount => prevCount - 1)
//   }

//   return (
//     <>
//       <button onClick={decrement} >-</button>
//       <span> {count} </span>
//       <button onClick={incriment}>+</button>
//     </>
//   );
// }

// // ! --- a simple unefficient todo list ---
// export default function App() {
//   const [data, setData] = useState([])

//   function addTask() {
//     setData([...data, 'new task'])
//   }
//   return (
//     <>
//       <button onClick={addTask} >click me</button>
//       <ul>
//         {
//           data.map(item => {
//             return <li>{item}</li>
//           })
//         }
//       </ul>
//     </>
//   )
// }
