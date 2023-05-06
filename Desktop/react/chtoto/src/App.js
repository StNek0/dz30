import React from 'react';
import users from './users/users';
import './App.css';
import List from './components/list';

const App = (props) => {
 
  const [text1, setText1] = React.useState(props.text1)

  return (
    // className, onClick являются свойствами
  <div className="app">
    <div className='block'>
      <ul>
      {
        users.map((element) => {
          return (
            <List
              img={element.image}
              id={element.id}
              firstName={element.firstName}
              secondName={element.secondName}
              gender={element.gender}
              email={element.email}
            />)
        })
      }
      </ul>
    </div>
  </div >
  )
}

export default App;
