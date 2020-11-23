import React, { useEffect, useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import axios from 'axios';

const Container = styled.ScrollView`
	flex: 1;
	background-color: #000;
`;

const Poster = styled.ImageBackground`
	width: 100%;
	height: ${Dimensions.get('window').height * 81 / 100}px;
`;

const Gradient = styled(LinearGradient)`
	height: 100%;
`;

const Home = ({ navigation }) => {
	const API_URL = "https://api.themoviedb.org/3/movie/popular";
	const API_KEY = "90050e7e56ffdaacea3a60c2f6380ad1";

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(`${API_URL}?api_key=${API_KEY}`)
			.then(({ data }) => {
				console.log(data.results);

				setMovies(data.results);
			});
	}, []);

	return (
		<>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="light-content"
			/>
			<Container>
				<Poster source={require('../assets/gambito-de-dama.jpg')}>
					<Gradient
						locations={[0, 0.2, 0.6, 0.93]}
						colors={[
							'rgba(0,0,0,0.5)',
							'rgba(0,0,0,0)',
							'rgba(0,0,0,0)',
							'rgba(0,0,0,1)'
						]}
					>
						<Header></Header>
						<Hero></Hero>
					</Gradient>
				</Poster>
				<Movies label="Latest" movies={movies} navigation={navigation}></Movies>
				<Movies label="Popular" movies={movies} navigation={navigation}></Movies>
			</Container >
		</>
	);
}

export default Home;