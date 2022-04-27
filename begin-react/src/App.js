import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    emial: '',
  });
  
  const {username, email}= inputs;
  
  const onChange = e => {
    const{name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  
  const [users,setUsers] =useState([
    {
        id: 1,
        username: 'Dohyun',
        email: 'public.dohyun@gmail.com',
        active: true,
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false,
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@exmaple.com',
        active: false,
    }
  ]);
  
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // making new array not changing original one
    setUsers([...users,user]);
    // reset values after registering
    setInputs({
      username: '',
      email: ''
    })

    console.log(nextId.current); // 4
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
      ? {...user, active: !user.active} 
      : user
    ))
  };

  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  
  )
}

export default App;
