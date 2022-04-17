import React from 'react';

function Hello({color, name, isSpecial}) {
    return (
        <div style={{
            color
        }}>
            {isSpecial ? <b>*</b> :null}
            HI There! {name}
        </div>
    )
}

// setting default 
Hello.defaultProps = {
    name: "noName"
};

export default Hello;