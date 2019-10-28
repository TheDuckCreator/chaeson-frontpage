import React, { Component } from "react"
import logo from "./logo.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "frontpage"
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App
