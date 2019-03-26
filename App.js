import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
	render() {
		const comments = [
			{
				nickname: 'Joana Elena Silva',
				comment: 'Excelente foto!'
			},
			{
				nickname: 'Priscila Silva',
				comment: 'Uau!'
			},
			{
				nickname: 'Anália Cosme',
				comment: 'Que lindo!'
			}
		]
		return (
			<View>
				<Header />
				<Post image={require('./assets/imgs/fence.jpg')}
					comments={comments} />
			</View>
    	)
	}
}