import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios"

const RequireAuth = (ComponentToProtect) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        loading: true,
        redirect: false,
      }
    }
    componentDidMount() {
       axios.get('http://localhost:8000/verify', { withCredentials: true })
        .then(res => {
            console.log(res);
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
              console.log(res.error)
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({ redirect: true , loading: false});
        })
    }
    render() {
      const { loading, redirect } = this.state;
      if(loading) {
        return null
      }
      if (redirect) {
        if(this.props.notRedirect){         
          return null         
        }
        return <Redirect to="*" />         
      }
      return <ComponentToProtect {...this.props} />;   
    }
  }
}
export default RequireAuth
