import React, { Component } from "react"
import logo from "./logo.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import "./Components/custom.css"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import PageRoute from "./Components/PageRoute"

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
        <PageRoute value={this.state.page} />
        <Footer />
      </div>
    )
  }
}

export default App
