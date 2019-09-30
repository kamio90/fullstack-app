import React from 'react';
import './home.style.css';

interface IState {
  email: string,
  password: string
}

interface IProps {}

class Home extends React.Component<IProps, IState> {
  
  constructor(props?: any) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  _handleEmail = (e: any) => {
    this.setState({
      email: e.target.value
    })
  }

  _handlePassword = (e: any) => {
    this.setState({
      password: e.target.value
    })
  }


  _handleSubmit = (e: any) => {
    e.preventDefault()
  }
  
  render() {
    return(
      <div>
        <header>
          <h2>Fullstack application</h2>
          <p>Using ReactJs ExpressJs with Typescript</p>
        </header>
        
        <form onSubmit={this._handleSubmit}>
          <h2>Registration</h2>
          <input
            type="text"
            value={this.state.email}
            onChange={this._handleEmail}
            placeholder="Type your email" 
          />
          <input
            type="password"
            value={this.state.password}
            placeholder="Type your password" 
            onChange={this._handlePassword}
          />
          <button
            className="btn btn-primary"
          >Send data</button>
        </form>

      </div>


    );
  }
}

export default Home;