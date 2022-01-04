import React from "react";

const About = () => {
    return(
        <section className="container">
        <div className="profile-grid my-1">
         
        <div className="profile-top bg-primary p-2">
          <img
            className="round-img my-1"
            src="./img/iamdev.png"
            alt=""
          />
          <h1 classNamename="large">Abel Simon</h1>
          <p className="lead">Systems Engineer at Infosys</p>
          
        </div>

        <div className="profile-about bg-light p-2">
          <h2 className="text-primary">Skills</h2>
          <div className="skills">
            <div className="p-1"><i className="fa fa-check"></i> HTML</div>
            <div className="p-1"><i className="fa fa-check"></i> CSS</div>
            <div className="p-1"><i className="fa fa-check"></i> JavaScript</div>
            <div className="p-1"><i className="fa fa-check"></i> React</div>
          </div>
        </div>

        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          <div>
            <h3 className="text-dark">Infosys</h3>
            <p>July 2021 - Current</p>
            <p><strong>Position: </strong>System Engineer</p>
            <p>
              <strong>Description: </strong>React Developer
            </p>
          </div>
        </div>


        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          <div>
            <h3>Amal Jyothi College of Engineering</h3>
            <p>2015 - 2019</p>
            <p><strong>Degree: </strong>B.Tech</p>
            <p><strong>Field Of Study: </strong>Electronics and Communication Engineering</p>
          </div>
        </div>


      </div>
    </section>
   )
}
  
  export default About;