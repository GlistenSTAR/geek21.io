import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class Landing extends Component {
  constructor(props){
    super();
    this.state ={
      show: true
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    window.addEventListener('scroll', this.handleScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if(window.pageYOffset > 30){
      this.setState({show : false});
    } else {
      this.setState({show : true});
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row mt-5">
                <div className="col-md-12 text-center">
                  <h1 className="display-4 mb-4 p-5">The <span className="text-info">GREAT</span> way to think about your future!</h1>
                  <p className="lead">
                    {' '}
                    Save and Invest and Earn in Crypto with Geek 21 Your time is worth money!
                  </p>
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {this.state.show?(
            <div className="down_botton" align="center">
              <i 
              className="fas fa-angle-double-down text-info" 
              style={{fontSize:'32px', animation: 'bounce 1s ease-in-out infinite'}}
            /></div>
            ):''}
          
          <div className="contact_mobile" align="center">
            <button className="btn btn-outline-light mr-3"><i className="fab fa-apple mr-2 text-info" style={{fontSize:'32px', verticalAlign: 'bottom'}}></i>App Store</button>
            <button className="btn btn-outline-light"><i className="fab fa-google-play mr-2 text-info" style={{fontSize:'32px', verticalAlign: 'bottom'}}></i>App Store</button>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
