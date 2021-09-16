import React from 'react'


function Display(props) {
    return (
        <>
          {props.userData.map((user, index) => {
    return (
        <div className="mx-5">
        <div className="box p-0 d-flex justify-content-start"style={{ width: '60vw', height: '12vw' }}>
          <img src={user.avatar} style={{ height: '12vw', width: '12vw'}} />
          <div className="text-center red " style={{ width: 500 }}>
            <h2>First Name : {user.first_name}</h2>
            <h2>Second Name : {user.last_name}</h2>
            <h2>Email id : {user.email}</h2>
          </div>
        </div>
      </div>
    );
          })}
          </>
          );
}

export default Display;
