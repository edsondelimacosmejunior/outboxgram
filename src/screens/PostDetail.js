import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image
} from 'react-native'
import Header from './../components/Header'
import Author from './../components/Author'
import Comments from './../components/Comments'
import AddComment from './../components/AddComment'

export default class PostDetail extends Component{
    render () {
        const comments = [
			{nickname: 'Joana Elena Silva', comment: 'Excelente foto asdsd!'},
			{nickname: 'Priscila Silva', comment: 'Uau!'},
			{nickname: 'Anália Cosme',comment: 'Que lindo2!'},
			{nickname: 'Priscila Silva', comment: 'Uau!'},
			{nickname: 'Anália Cosme',comment: 'Que lindo2!'},
			{nickname: 'Priscila Silva', comment: 'Uau!'},
			{nickname: 'Anália Cosme',comment: 'Que lindo2!'}
        ]
        
        return (
            <View style={styles.container}>
                <Header />
                <Image source={require('./../../assets/imgs/fence.jpg')} style={styles.photo} />
                <Author email='edsondelimajunior@gmail.com' nickname='Fulano de tal' />
                <View style={styles.commentsContainer}>
                    <View style={styles.comments}>
                        <Comments comments={comments} />
                    </View>
                    <View style={styles.addComment}>
                        <AddComment  />
                    </View>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'
    },
    photo: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    commentsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    comments: {
        flex: 2
    },
    addComment: {
        height: 80
    }
})