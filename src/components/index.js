import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/drum' activeStyle>
			Drum
		</NavLink>
		<NavLink to='/quote' activeStyle>
			Quote Generator
		</NavLink>
		<NavLink to='/calc' activeStyle>
			Calculator
		</NavLink>
		<NavLink to='/markdown' activeStyle>
			Markdown to HTML
		</NavLink>
		<NavLink to='/timer' activeStyle>
			Timer
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
