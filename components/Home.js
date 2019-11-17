import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          
          <div><center>
             
                  <h1><span style={{ color: "black", fontSize: "25px" }}>WELCOME TO MY REACT STORE!</span></h1>
         
              <img
                      src="https://cdn.pixabay.com/photo/2016/03/09/09/22/store-1245758_960_720.jpg"
                  alt="shopfront" 
                  />
          <hr/>
          </center>
              <div class="container">
  <div class="row">
    <div class="col-md-6">
                          <h3>This store is created using:</h3>
                          <ul>
                              <li>.NET CORE</li>
                              <li>EF CORE</li>
                              <li>SQL SERVER</li>
                              <li>React, Node.Js , Semantic-ui-React</li>
                              <li>C#</li>
                          </ul>
    </div>
    <div class="col-md-6">
                          <h3>With the help of:</h3>
                          <ul>
                              <li>Approximately 34 cups of coffee</li>
                              <li><a href="https://dzone.com/articles/aspnet-core-crud-with-reactjs-and-entity-framework">CRUD REACT APP Tutorial by Ankit Sharma</a></li>
                              <li><a href="https://www.youtube.com/watch?v=AHqIrJ_PlPY&t=1355s">CODE FIRST EF CORE TUTORIAL BY CODAFFECTION</a></li>
                              <li><a href="https://www.entityframeworktutorial.net/code-first/column-dataannotations-attribute-in-code-first.aspx">Data Annotations EF Code First Tutorial by https://www.entityframeworktutorial.net</a></li>
                              <li><a href="https://www.fullstackreact.com/assets/media/sGEMe/MNzue/30-days-of-react-ebook-fullstackio.pdf">This React Book</a></li>
                              <li>And many more tutorials</li>
                              
                          </ul>
    </div>
    
  </div>
</div>
                
        
      </div>
         
    );
  }
}
