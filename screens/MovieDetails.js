import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'
import axios from 'axios'

const Container = styled.ScrollView`
	flex: 1;
	background-color: #000;
`

const Poster = styled.ImageBackground`
	width: 100%;
	height: ${Dimensions.get('window').height * 81 / 100}px;
`

const Gradient = styled(LinearGradient)`
	height: 100%;
`

const DescriptionContainer = styled.View`
	width: 100%;
	margin-top: ${Dimensions.get('window').height * 55 / 100}px;
	flex-direction: column;
	align-items: center;
`

const MovieTitle = styled.Text`
	width: 100%
	color: #ffffff;
	font-size: 2em;
	text-align: center;
	font-weight: bold;
	letter-spacing: 0.4px;
`

const TagsMenu = styled.View`
	margin-top: 20px;
	justify-content: center;
	flex-direction: row;
`

const TagItem = styled.Text`
	color: #ffffff;
	padding: 0 8px;
	font-size: 0.8em;
`

const Separator = styled.View`
	width: 3px;
	height: 3px;
	background-color: #e8e8e8;
	margin: 6px 0;
	border-radius: 3px;
`;

const DescriptionText = styled.Text`
	margin-top: 20px;
	padding: 0 10px;
	color: #ffffff;
	text-align: center
`

const MovieDatails = ({ route }) => {
	console.log(route.params.movie);
	const API_URL = "https://api.themoviedb.org/3/movie/";
	const API_KEY = "90050e7e56ffdaacea3a60c2f6380ad1";
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

	const [movie, setMovie] = useState([])

	useEffect(() => {
		axios.get(`${API_URL}${route.params.movie}?api_key=${API_KEY}`)
			.then(({ data }) => {
				console.log(data)
				setMovie(data)
			})
	}, [])

	return (
		<Container>
			{/* <Poster source={{ uri: movie.image }}> */}
			<Poster source={{ uri: `${IMG_BASE_URL}${movie.poster_path}` }}>
				<Gradient
					locations={[0, 0.2, 0.6, 0.93]}
					colors={[
						'rgba(0,0,0,0.5)',
						'rgba(0,0,0,0)',
						'rgba(0,0,0,0)',
						'rgba(0,0,0,1)'
					]}
				>
					<DescriptionContainer>
						<MovieTitle>{movie.title}</MovieTitle>
						{/* <TagsMenu>
							{
								movie.genres.map(gender => {
									return (
										<>
											<TagItem>{gender.name}</TagItem>
											<Separator />
										</>
									)
								})
							}
						</TagsMenu> */}
						<DescriptionText>{movie.overview}</DescriptionText>
					</DescriptionContainer>
				</Gradient>
			</Poster>
		</Container>
	)
}

export default MovieDatails