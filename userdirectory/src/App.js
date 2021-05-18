import React from 'react';
import RandomUser from './RandomUser';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomUser />
      </header>
    </div>
  );
}

renderTableData(); {
  return this.state.employees.map((employee, index) => {
     const { id, name, age, email } = employee //destructuring
     return (
        <tr key={id}>
           <td>{id}</td>
           <td>{name}</td>
           <td>{age}</td>
           <td>{email}</td>
        </tr>
     )
  })
}

render(); {
  return (
     <div>
        <h1 id='title'>React Dynamic Table</h1>
        <table id='employee'>
           <tbody>
              {this.renderTableData()}
           </tbody>
        </table>
     </div>
  )
}
export default App;