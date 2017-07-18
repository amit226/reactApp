import React from 'react';

class Header extends React.Component {
   render() {
      return (
          <Nav/>
      );
   }
}

class Nav extends React.Component {
   render() {
      return (
        <nav>
            <a href="/Home/">Home</a> |
            <a href="/Booking/">Booking</a> |
            <a href="/About Us/">About Us</a> |
            <a href="/Contact Us/">Contact Us</a>
        </nav>
      );
   }
}

export default Header;