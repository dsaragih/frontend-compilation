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
		<NavLink to='/frontend-compilation/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/frontend-compilation/drum' activeStyle>
			Drum
		</NavLink>
		<NavLink to='/frontend-compilation/quote' activeStyle>
			Quote Generator
		</NavLink>
		<NavLink to='/frontend-compilation/calc' activeStyle>
			Calculator
		</NavLink>
		<NavLink to='/frontend-compilation/markdown' activeStyle>
			Markdown to HTML
		</NavLink>
		<NavLink to='/frontend-compilation/timer' activeStyle>
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
