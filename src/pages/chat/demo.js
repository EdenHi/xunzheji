import { GiftedChat } from 'react-native-gifted-chat';
import React, { Component } from 'react';
import { View, AsyncStorage,Text,TouchableOpacity } from 'react-native';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign'
import uuid from 'react-native-uuid'
let Arr = new Array();
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
                this.setState({ index: json.length })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    /* 更新消息 */
    freshAll() {

            fetch('http://8.142.11.85:3000/users/gethistory', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then((response) => response.json())
                .then((json) => {
                    Arr = [];
                    for (let i = 0; i < 1; i++) {
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
                            user: obj,
                            username: json[i].username
                        }
                        Arr = (obj1)
                    }

                    let Message = this.state.messages;
                    if (json.length > this.state.index && Arr.username != this.state.username) {
                        Message.unshift(Arr)
                        // console.log('2',this.state.messages);
                    } else console.log('没有消息');

                    this.setState({ index: json.length })
                })

                .catch((error) => {
                    console.log(error);
                })

    }
    /* 发送消息 */
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
    stopFresh(){
        window.clearInterval(freshAll)
    }
    componentDidMount() {
        // this.messageGet();
        this.get_shuju();
        this.init();
        this.backInterval = setInterval(()=>{
            this.freshAll()
        },3000)

    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{borderWidth:1,width:'100%',height:'7%',backgroundColor:'#7cc0c0',flexDirection:'row'}}>
                <TouchableOpacity activeOpacity={1} style={{ marginLeft: '2%' }}>
                            <AntDesign onPress={() => { this.props.navigation.goBack(),clearInterval(this.backInterval)}} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={25} color="#000000" />
                        </TouchableOpacity>
                    <Text style={{height:'100%',width: '20%',marginLeft:'30%',textAlignVertical:'center',textAlign:'center',fontSize:20,fontWeight:'bold',color:'#fff',}}>syt</Text>
                </View>
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
            </View>

        );
    }
}