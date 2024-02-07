// import './App.css';
// import React, { Component } from 'react';
// import NavBar from './components/NavBar';
// import News from './components/News';
// import ReactDOM from "react-dom";
// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           {/* <NavBar /> */}
//           <Routes>
//             <Route path='/' element={<News key='general' pageSize={5} country='us' category='general' />}></Route>
//             <Route path='/business' element={<News key='business' pageSize={5} country='us' category='business' />}></Route>
//             <Route path='/entertainment' element={<News key='entertainment' pageSize={5} country='us' category='entertainment' />}></Route>
//             <Route path='/health' element={<News key='health' pageSize={5} country='us' category='health' />}></Route>
//             <Route path='/science' element={<News key='science' pageSize={5} country='us' category='science' />}></Route>
//             <Route path='/sports' element={<News key='sports' pageSize={5} country='us' category='sports' />}></Route>
//             <Route path='/technology' element={<News key='technology' pageSize={5} country='us' category='technology' />}></Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }

// import './App.css';

// import React, { useState } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         <NavBar/> 
      
//         <Switch>
//           <Route exact path="/"><News  key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News  key="business" pageSize={pageSize} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News  key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News  key="health" pageSize={pageSize} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News  key="science" pageSize={pageSize} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News  key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News  key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
//         </Switch>
//         </Router>
//       </div>
//     )
 

//   }
// }


import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter, Route,Routes} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<News  pageSize={5} country='us' category='general' />}/>
            <Route path='/business' element={<News  pageSize={5} country='us' category='business' />}/>
            <Route path='/entertainment' element={<News  pageSize={5} country='us' category='entertainment' />}/>
            <Route path='/health' element={<News pageSize={5} country='us' category='health' />}/>
            <Route path='/science' element={<News  pageSize={5} country='us' category='science' />}/>
            <Route path='/sports' element={<News  pageSize={5} country='us' category='sports' />}/>
            <Route path='/technology' element={<News  pageSize={5} country='us' category='technology' />}/>
          </Routes></BrowserRouter>
      </div>
    )
  }
}


