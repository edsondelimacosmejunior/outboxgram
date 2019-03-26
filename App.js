import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
	render() {
		const comments = [
			{nickname: 'Joana Elena Silva', comment: 'Excelente foto asdsd s ddfsd fsd fsdf sd fsd f!'},
			{nickname: 'Priscila Silva', comment: 'Uau!'},
			{nickname: 'Anália Cosme',comment: 'Que lindo2!'}
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