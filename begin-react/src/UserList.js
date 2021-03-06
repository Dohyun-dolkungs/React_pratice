import React from 'react';


function User({user, onRemove, onToggle}) {
    const {username, email, id, active} =user;
    return (
        <div>
                <b 
                    style={{
                        color: active ? 'green' : 'black',
                        cursor: 'pointer'
                    }}
                    onClick={() => onToggle(id)}
                >
                    {username}
                </b>
                &nbsp;
                <span>({email})</span>
                 {/* do not forget to use function() on onClick! */}
                <button onClick={() => onRemove(id)}>Delete</button>
        </div>
    );    
}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {
                users.map(
                    (user) => (
                        <User 
                            user ={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    )
}

export default UserList;