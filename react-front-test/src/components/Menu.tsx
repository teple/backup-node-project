import * as React from "react";
import { NavLink } from "react-router-dom";

interface Props {}

const Menu: React.SFC<Props> = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem'
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink exact={true} to="/" activeStyle={activeStyle}>Home</NavLink>
        </li>
        <li>
          <NavLink exact={true} to="/about" activeStyle={activeStyle}>About</NavLink>
        </li>
        <li>
          <NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink>
        </li>
        <li>
          <NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
