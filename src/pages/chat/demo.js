import { GiftedChat } from 'react-native-gifted-chat';
import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import axios from 'axios';
import uuid from 'react-native-uuid'
let Arr= new Array();
export default class chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            username: '',
            nickname: '',
            avatar: '',
            index: 0,
        };

        this.onSend = this.onSend.bind(this);

    }

    //获取Token
    get_shuju() {
        AsyncStorage.getItem('username', (error, result) => {
            if (!error) {
                this.setState({
                    username: result,
                });
                // console.log('username', this.state.username);
                axios.post('http://8.142.11.85:3000/index/selectPerson', {
                    username: this.state.username,
                }).then((json) => {
                    this.setState({
                        nickname: json.data[0].nickname
                    });
                    this.setState({
                        avatar: json.data[0].portrait
                    });

                });
            } else {
                console.log('获取数据失败', error);
            }
        });
    }
    /* 初始化信息 */
    init() {
        fetch('http://8.142.11.85:3000/users/gethistory', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
            .then((json) => {
                for (let i = 0; i < json.length; i++) {
                    let AA = new Array()
                    var str1 = json[i].message.user
                    let pos = str1.indexOf(':')
                    while (pos > -1) {
                        pos = str1.indexOf(':', pos + 1);
                        AA.push(pos)
                    }
                    // var str2=str1.substring(0,1)+str1.substring(2,5)+str1.substring(6,AA[0]-8)+str1.substring(AA[0]-7,AA[0]-1)+str1.substring(AA[0],AA[3]-10)+str1.substring(AA[3]-9,AA[3]-1)+str1.substring(AA[3],str1.length-1)+str1.substring(str1.length-1,str1.length)
                    // console.log(':位置',AA);
                    // console.log('str1',str1);
                    // console.log('_id',str1.substring(0,1));
                    // console.log('_id',str1.substring(2,5));
                    // console.log('id',str1.substring(6,AA[0]-8));
                    // console.log('avatar',str1.substring(AA[0]-7,AA[0]-1));
                    // console.log('avatar',str1.substring(AA[0],AA[3]-10));
                    // console.log('nickname',str1.substring(AA[3]-9,AA[3]-1));
                    // console.log('nickname',str1.substring(AA[3],str1.length-1));
                    // console.log('nickname',str1.substring(str1.length-1,str1.length));
                    // console.log('str2',str2);
                    // json[i].message.user=str2
                    // console.log(json[0].message.user);
                    let obj = {
                        _id: str1.substring(9, AA[0] - 11),
                        avatar: str1.substring(AA[0] + 3, AA[3] - 13),
                        nickname: str1.substring(AA[3] + 3, str1.length - 2)
                    }
                    let obj1 = {
                        _id: json[i].message._id,
                        createdAt: json[i].message.createdAt,
                        text: json[i].message.text,
                        user: obj
                    }

                    let Message = this.state.messages;
                    // Message.splice(0,Message.length);
                    Message.push(obj1)
                    // console.log(Message);
                    
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    freshAll(){
        setInterval(() => {
            fetch('http://8.142.11.85:3000/users/gethistory', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then((response) => response.json())
                .then((json) => {
                    Arr.splice(0,Arr.length)
                    for (let i = 0; i < json.length; i++) {
                        let AA = new Array()
                        var str1 = json[i].message.user
                        let pos = str1.indexOf(':')
                        while (pos > -1) {
                            pos = str1.indexOf(':', pos + 1);
                            AA.push(pos)
                        }
                        let obj = {
                            _id: str1.substring(9, AA[0] - 11),
                            avatar: str1.substring(AA[0] + 3, AA[3] - 13),
                            nickname: str1.substring(AA[3] + 3, str1.length - 2)
                        }
                        let obj1 = {
                            _id: json[i].message._id,
                            createdAt: json[i].message.createdAt,
                            text: json[i].message.text,
                            user: obj
                        }
                        Arr.push(obj1)
                    }
                    console.log('Arr',Arr);
                    this.setState({messages:[]});
                    console.log('1',this.state.messages);
                    let Message = this.state.messages;
                    for(let i = 0;i<Arr.length;i++){
                        Message.push(Arr[i])
                    }

                    console.log('2',this.state.messages);

                })
                .catch((error) => {
                    console.log(error);
                })
        }, 3000);
    }

    onSend(messages = []) {
        // console.log('onsend',this.state.messages);
        fetch('http://8.142.11.85:3000/users/chatinsert', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: uuid.v4(),
                text: messages[0].text,
                createdAt: new Date,
                username: this.state.username,
            })
        })
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });




    }
    getppx() {
        fetch('http://8.142.11.85:3000/users/getppx', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
            .then((json) => {
                for (let i = 0; i < json.length; i++) {
                    this.setState({index:i})
                }
                console.log(this.state.index);
            })
    }


    componentDidMount() {
        // this.messageGet();
        this.get_shuju();
        this.init();
        this.freshAll();

    }


    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                user={{
                    _id: this.state.username,
                    name: this.state.nickname,
                    avatar: this.state.avatar
                }}

                showUserAvatar={true}
                showAvatarForEveryMessage={true}
                renderUsernameOnMessage={true}

            />
        );
    }
}