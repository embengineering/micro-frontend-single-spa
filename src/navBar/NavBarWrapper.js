import React from 'react';
import NavBar from './NavBar';

class NavBarWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      title: this.props.title
    }
  }
  render() {
    return <NavBar
        title={this.state.title}
        items={this.state.items}
      />;
  }
}

export default NavBarWrapper;