import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	width: 100%;
	padding: 20px 25px 0 15px;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
`;

const Logo = styled.Image`
	width: 40px;
	height: 40px;
`;

const Menu = styled.Text`
	font-size: 18px;
	color: #fff;
	letter-spacing: 0.1px;
`;

const Header = () => {
	return (
		<Container>
			<Logo
				resizeMode="contain"
				source={require('../assets/TMDB-logo.svg')}
			/>
			<Menu>Trending</Menu>
			<Menu>Movies</Menu>
			<Menu>T.V</Menu>
		</Container>
	);
}

export default Header;