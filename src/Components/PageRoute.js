import React, { Component } from "react"
import Frontpage from "./Frontpage"
class PageRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: this.props.value,
      showPage: ""
    }
  }

  componentDidMount() {
    let page = this.state.page
    let showPage
    switch (page) {
      case "FrontPage":
        showPage = <Frontpage />
        break

      default:
        showPage = <Frontpage />
        break
    }
    this.setState({
      showPage: showPage
    })
  }

  render() {
    return <div>{this.state.showPage}</div>
  }
}
export default PageRoute
