import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../App.js';

class Home extends Component{
    render (){
        return(
          <section id="home">
            <header>
              <h1>Welcome to my Portfolio Site</h1>
               <p>
                  "I make "
                    <span>magic</span>
                  " happen!"
               </p>
            </header>
          </section>
        )
    }
}



export default Home;
