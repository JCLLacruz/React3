import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Reserve from '../Reserve/Reserve';
import './Header.css';

const Header = () => {
	return (
		<div id='header'>
			<span>MyRestaurant</span>
			<nav>
				<span>
					<Link to='/'>Home</Link>
				</span>
				<span>
					<Link to='/menu'>Menu</Link>
				</span>
				<span>
					<Link to='/reserve'>Reserve</Link>
				</span>
			</nav>
		</div>
	);
};

export default Header;
