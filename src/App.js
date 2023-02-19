import React from "react"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleGoOut = this.toggleGoOut.bind(this);
    this.state = {
      goOut:"Yes"
    }
  }
  toggleGoOut(){
      this.setState(preState=>{
        return {
          goOut: preState.goOut === "Yes"?"No":"Yes"
        }
      })
    }
    render(){
      return(
        <div className="state">
          <h1>{this.props.data}</h1>
          <h1 className="state--title">Should I go out tonight?</h1>
          <div className="state--value" onClick={this.toggleGoOut}>
              <h1>{this.state.goOut}</h1>
          </div>
         </div>
      )
    }

}
// export default class App extends React.Component {
//   state = {
//     count:0
//   }
//   subtract=()=>{
//     this.setState(preState =>{
//         return {count:preState.count-1}
//     });
//   }
//   add =() =>{
//     this.setState(preState =>{
//       return {count:preState.count+1}
//   });
//   }
//   render(){
//     console.log('render');
//     return (
//       <div className="counter">
//           <button className="counter--minus" onClick={this.subtract}>–</button>
//           <div className="counter--count">
//               <h1>{this.state.count}</h1>
//           </div>
//           <button className="counter--plus" onClick={this.add}>+</button>
//       </div>
//   )
//   }

// }
// export default function App() {
//     const [goOut, setGoOut] = React.useState("Yes")
    
//     function toggleGoOut() {
//         setGoOut(prevState => {
//             return prevState === "Yes" ? "No" : "Yes"
//         })
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Should I go out tonight?</h1>
//             <div className="state--value" onClick={toggleGoOut}>
//                 <h1>{goOut}</h1>
//             </div>
//         </div>
//     )
// }
