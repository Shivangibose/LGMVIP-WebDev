import React from "react";
import {Navbar, Nav, Container,Button} from "react-bootstrap";
import Display from "./components/Display";
import './edit.css';


function App() {
  const [page, setPage] = React.useState("1");
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);

  const onPageChange2 = () => {
    setPage("2");
    setIsDateLoaded(false);
    handleClick();
  };
  const onPageChange1 = () => {
    setPage("1");
    setIsDateLoaded(false);
    handleClick();
  };
  const handleClick = () => {
    setisButtonClick(true);
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar className='nav'>
       <Container>
       <Navbar.Brand style={{color:'white'}} href="#home">LGMUsers</Navbar.Brand>
       <Nav className="ms-auto">
       <Button onClick={handleClick} style={{color:'white'}} variant="outline-secondary">Get Data</Button>{' '}
      
       </Nav>
       </Container>
       </Navbar>
      
      {isDateLoaded ? (
        <div className="text-center p-1">
          <Button className="m-2 page" onClick={onPageChange2}>1 </Button>
          <Button className="m-2 page" onClick={onPageChange1}>2 </Button>
        </div>
      ) : (
        <div></div>
      )}
      <div className="container  d-flex justify-content-start">
        <div className="container">
          {isButtonClick ? (
            isDateLoaded ? (
              <Display userData={userData} />
            ) : (
              <div class="loader">
                <div class="lines"></div>
               <div class="lines"></div>
               <div class="lines"></div>
                  <div class="lines"></div>
                  <div class="lines"></div>
                 <div class="lines"></div>
                 <div class="lines"></div>
                  <div class="lines"></div>
                     <div class="lines"></div>
              </div>
            )
          ) : (
            <div className="instruction">
              <p style={{textAlign:'center', fontWeight:'bold', fontSize:'1.5rem'}}>To get the users of LGM, click on "Get Users" button</p>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default App;
