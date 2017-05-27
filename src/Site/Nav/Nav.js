import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class Nav extends Component {
state = { activeItem: 'Administration-promos' }


 handleItemClick = (e, { name }) => this.setState({ activeItem: name })

 render() {
   const { activeItem } = this.state

   return (
     <Menu tabular>

       <Link to="/home">
       <Menu.Item name='Administration-promos' active={activeItem === 'Administration-promos'} onClick={this.handleItemClick} />
       </Link>
       
      <Link to="/gallery">
       <Menu.Item name='Destination' active={activeItem === 'Destination'} onClick={this.handleItemClick} />
         </Link>
       
        <Link to="/Help">
       <Menu.Item name='Help' active={activeItem === 'Help'} onClick={this.handleItemClick} />
       </Link>
       
       <Link to="/user">
       <Menu.Item name='User' active={activeItem === 'User'} onClick={this.handleItemClick} />
       </Link>
       
     </Menu>
   )
 }
}
export default Nav;