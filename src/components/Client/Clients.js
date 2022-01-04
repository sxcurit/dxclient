import React from "react";
import { Link } from 'react-router-dom';

const Clients = () => {
    return (
      <body>
        <body>
         <section className="container">
          <h1 className="large text-primary">Clients</h1>
          <div className="dash-buttons">
            <Link to="./amat" className="btn btn-light">
            <i className="fas fa-user-circle text-primary"></i> Add Client</Link>
          </div> 
          <div className="profiles">
            <div className="profile bg-light">
              <img
                className="round-img"
                src="./img/iamdev.png"
                alt=""
              />
              <div>
                <h2>Adam</h2>
                <p>adam@infy.com</p>
                <p>Manager: Elon</p>
                <p>Revenue: 111 Million</p>
                             
              </div>
    
              <div className="dash-buttons">
                <a href="client" className="btn btn-primary">View Client</a> 
                <a href="edit-client" className="btn btn-dark"><i className="fas fa-user-circle text-primary"></i> Edit Client</a>
                <button className="btn btn-danger"><i className="fas fa-user-minus"></i>Delete Client</button>
  
              </div>
  
              
            </div>


            <div className="profile bg-light">
              <img
                className="round-img"
                src="./img/iamdev.png"
                alt=""
              />
              <div>
                <h2>John</h2>
                <p>john@infy.com</p>
                <p>Manager: Musk</p>
                <p>Revenue: 12 Million</p>
                             
              </div>
    
              <div className="dash-buttons">
                <a href="client" className="btn btn-primary">View Client</a> 
                <a href="edit-client" className="btn btn-dark"><i className="fas fa-user-circle text-primary"></i> Edit Client</a>
                <button className="btn btn-danger"><i className="fas fa-user-minus"></i>Delete Client</button>
  
              </div>
  
              
            </div>



            <div className="profile bg-light">
              <img
                className="round-img"
                src="./img/iamdev.png"
                alt=""
              />
              <div>
                <h2>Sam</h2>
                <p>sam@infy.com</p>
                <p>Manager: Simon</p>
                <p>Revenue: 3 Million</p>
                             
              </div>
    
              <div className="dash-buttons">
                <a href="client" className="btn btn-primary">View Client</a> 
                <a href="edit-client" className="btn btn-dark"><i className="fas fa-user-circle text-primary"></i> Edit Client</a>
                <button className="btn btn-danger"><i className="fas fa-user-minus"></i>Delete Client</button>
  
              </div>
  
              
            </div>



            <div className="profile bg-light">
              <img
                className="round-img"
                src="./img/iamdev.png"
                alt=""
              />
              <div>
                <h2>Elza</h2>
                <p>elza@infy.com</p>
                <p>Manager: Simon</p>
                <p>Revenue: 2 Million</p>
                             
              </div>
    
              <div className="dash-buttons">
                <a href="client" className="btn btn-primary">View Client</a> 
                <a href="edit-client" className="btn btn-dark"><i className="fas fa-user-circle text-primary"></i> Edit Client</a>
                <button className="btn btn-danger"><i className="fas fa-user-minus"></i>Delete Client</button>
  
              </div>
  
              
            </div>                  
    
  
  
            </div>
            </section>

        </body>
      </body>


      
    );
  }
  
  export default Clients;