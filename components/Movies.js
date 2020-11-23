import React from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const Container = styled.View`
	padding: 20px 0;
`

const Label = styled.Text`
	color: #ffffff;
	font-size: 16px;
	margin: 0 0 5px 10px;
`

const MovieScroll = styled.ScrollView`
	padding-left: 10px;
`

const MovieCard = styled.TouchableHighlight`
	padding-right: 9px;
`

const MoviePoster = styled.Image`
	width: ${Dimensions.get('window').width * 28 / 100}px;
	height: 150px;
`

const Movies = ({ label, movies, navigation }) => {
	const BASE_URL = 'https://image.tmdb.org/t/p/w500'
	return (
		<Container>
			<Label>{label}</Label>
			<MovieScroll horizontal>
				{
					movies.map(movie => {
						// console.log(movie);
						return (
							<MovieCard
								key={movie.id}
								onPress={() => navigation.navigate('MovieDetails', { movie: movie.id })}
							>
								<MoviePoster
									resizeMode='cover'
									source={{ uri: `${BASE_URL}${movie.poster_path}` }}
								></MoviePoster>
							</MovieCard>
						)
					})
				}

			</MovieScroll>
		</Container >
	)
}

export default Movies