import React from 'react';

function Hello({color, name}) {
    return <div style={{
        color
    }}>HI There! {name}</div>
}

// setting default 
Hello.defaultProps = {
    name: "noName"
};

export default Hello;