import React, { Component } from 'react';
import { View } from 'react-native';
import TimedSlideshow from './src';

export default class App extends Component {
	render() {
            const items = [
                {
                    uri: "https://img0.baidu.com/it/u=240292406,1910151667&fm=26&fmt=auto&gp=0.jpg",
                    title: "Michael Malik",
                    text: "Minnesota, USA",
                },
                {
                    uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
                    title: "Victor Fallon",
                    text: "Val di Sole, Italy",
                    duration: 3000
                },
                {
                    uri: "https://img0.baidu.com/it/u=4220364500,3010021441&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889",
                    title: "Mary Gomes",
                    text: "Alps",
                    fullWidth: true
                }
            ]
		return (
			<TimedSlideshow items={items}></TimedSlideshow>
		);
	}
}