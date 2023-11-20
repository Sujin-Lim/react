import React, { Component } from "react";

class Header extends Component {
    render() {
        return <div> {this.props.headerMessage} </div>;
    }
}

export default Header;