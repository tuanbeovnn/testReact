import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import Validate  from './../libs/validate'; 
import pic01 from './../images/pic_1.jpg'; 
import {actSubmit} from './../actions/index';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 6 }}

handleChange = (event) => {
    this.setState({number: event.target.value});
  }
  handleSubmit = (event) => {
let number = this.state.number; 
if(Validate.checkNum(number)===true){
    this.props.handleSubmit(number);
} else if (Validate.checkNum(number)===false || number < 3 && number > 12){
    alert('Value input must be from 3 to 12 and a Number')
}
 event.preventDefault();
  }

  render() {
let {numberSelected} = this.props;
let number = this.state.number 
    return (
      <div>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </div>
            </nav>
        </div>
          <div className="container">
            <div  className="row">
                 <div className="col-6">
                 <form className="form-group" onSubmit={this.handleSubmit}>
                    <label>Number of Column</label>
                    <input type="number" name="number" value={number} min={2} max={12} onChange={this.handleChange} className="form-control" />
                </form>
              </div>
            </div>

        <div  className="row">
          <div className={`col-${numberSelected}`}>
            <div className="card mb-4">
              <img className="card-img-top" src={pic01} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
           <div className={`col-${numberSelected}`}>
            <div className="card mb-4">
              <img className="card-img-top" src={pic01} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className={`col-${numberSelected}`}>
            <div  className="card mb-4">
              <img className="card-img-top" src={pic01} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className={`col-${numberSelected}`}>
            <div  className="card mb-4">
              <img className="card-img-top" src={pic01}alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className={`col-${numberSelected}`}>
            <div  className="card mb-4">
              <img className="card-img-top" src={pic01} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
              <div className={`col-${numberSelected}`}>
                <div  className="card mb-4">
                  <img className="card-img-top" src={pic01} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className={`col-${numberSelected}`}>
                <div  className="card mb-4">
                  <img className="card-img-top" src={pic01} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className={`col-${numberSelected}`}>
                <div  className="card mb-4">
                  <img className="card-img-top" src={pic01} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className={`col-${numberSelected}`}>
                <div className="card mb-4">
                  <img className="card-img-top" src={pic01} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className={`col-${numberSelected}`}>
                <div  className="card mb-4">
                  <img className="card-img-top" src={pic01} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div> 
        </div>
      </div>

    );
  }
}
const mapStateToProps = state => {
    return {
        numberSelected: state.numberSelected,
     
    }
  }
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        handleSubmit: (number) => {
       dispatch(actSubmit(number))
     }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)
