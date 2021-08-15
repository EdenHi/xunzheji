import { GiftedChat, Send, Bubble ,InputToolbar,Actions,Time} from 'react-native-gifted-chat';
import React, { Component } from 'react';
import { View, AsyncStorage, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from "react-native-vector-icons/Octicons"
import ImagePicker from 'react-native-image-crop-picker';
let Arr = new Array();

export default class chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            username: '',
            username2:'',
            nickname: '',
            avatar: '',
            index: 0,
            room: this.props.route.params.room,
            images: '',
            image:''
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
            body: JSON.stringify({
                room: this.state.room
            })
        }).then((response) => response.json())
            .then((json) => {
                console.log(json[0]);
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
                        image:json[i].image,
                        user: obj,
                        

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
            body: JSON.stringify({
                room: this.state.room
            })
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
                        username: json[i].username,
                        image:json[i].image
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
        console.log('onsend', this.state.messages);
        console.log(messages);
        const msg = {
            ...messages[0],
            image: this.state.images,
        };
        this.setState({images:""})
        console.log('msg', msg);
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, msg),
            };
        });
        fetch('http://8.142.11.85:3000/users/chatinsert', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: msg._id,
                text: msg.text,
                createdAt: new Date,
                username: this.state.username,
                room: this.state.room,
            })
        })
        if(this.state.image!==''){
            let head = { uri: this.state.image.path, type: this.state.image.mime, name: this.state.image.path.split('/').pop() };
            let formData = new FormData();
            formData.append('files', head); // 这里的 file 要与后台名字对应。
            formData.append('_id', msg._id);
            //   formData.append('title',this.state.fayan);
            fetch('http://8.142.11.85:3000/users/updateChatImage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            })
                .then((response) => response.json())
                .then((josn) => {
                    //      let  source = ret.data.images[0].oUrl;
                    console.log('josn', josn);
                });
        }

            this.setState({image:''})
    }

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                textStyle={{
                    right: {
                        color: 'black',
                    },
                }}
                wrapperStyle={{
                    left: {
                        
                        backgroundColor: '#fff',
                    },
                    right: {
                        backgroundColor: '#7cc0c0',
                    },
                }}
            />
        );
    };
    //打开本地图册
    _openPicker() {

        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            multiple: true,
            maxFiles: 9,
        }).then(image => {
            this.setState({ images: image[0].path })
            this.setState({image:image[0]})
            console.log('add', this.state.images);
        });
    }
    renderSend(props) {
        return (
            <Send
                {...props}
                alwaysShowSend={true}
            >
                <View style={styles.sendBtn}>
                    <Text style={{ color: '#ffffff', fontSize: 17 }}>发送</Text>
                </View>
            </Send>
        );
    };
    jump(){
        fetch('http://8.142.11.85:3000/users/chatinsert', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: msg._id,
                text: msg.text,
                createdAt: new Date,
                username: this.state.username,
                room: this.state.room,
            })
        })
        this.props.navigation.navigate('people',this.state.username);
    }
    renderInputToolbar(props){
        return(
            <InputToolbar
            
            {...props}
            containerStyle={{
              backgroundColor: '#fff',
              paddingTop: 6,
            }}
            primaryStyle={{ alignItems: 'center' }}

          >
            </InputToolbar>
        )
    }
    renderTime(props){
        <Time
        
        />
    }
    renderActions = (props) => (
        <Actions
          {...props}
          containerStyle={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: -10,
            marginRight: 0,
            marginBottom: 0,
          }}
          icon={() => (
            <Octicons style={{ marginTop: 0, marginLeft: 20 }}
            name="diff-added"
            size={30}
            color="#7cc0c0"
        />
          )}
          options={{
            '从相册中选取': () => {
              this._openPicker()
            },
            '取消': () => {
              console.log('Cancel');
            },
          }}
          optionTintColor="#222B45"
        />
      );
    componentDidMount() {
        // this.messageGet();
        this.get_shuju();
        this.init();
        this.backInterval = setInterval(() => {
            this.freshAll()
        }, 3000)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ borderWidth: 0, width: '100%', height: '7%', backgroundColor: '#7cc0c0', flexDirection: 'row' }}>
                    <TouchableOpacity activeOpacity={1} style={{ marginLeft: '2%' }}>
                        <AntDesign onPress={() => { this.props.navigation.goBack(), clearInterval(this.backInterval) }} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={25} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{ height: '100%', width: '20%', marginLeft: '30%', textAlignVertical: 'center', textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff', }}>{this.state.room}</Text>
                </View>
                <GiftedChat
                placeholder="请 输 入 消 息  .  .  . "
                    messages={this.state.messages}
                    onSend={this.onSend}
                    user={{
                        _id: this.state.username,
                        name: this.state.nickname,
                        avatar: this.state.avatar
                    }}
                    renderSend={this.renderSend}
                    renderBubble={this.renderBubble}
                    showUserAvatar={true}
                    showAvatarForEveryMessage={true}
                    renderUsernameOnMessage={false}
                    renderAvatarOnTop={true}
                    onPressAvatar={()=>this.jump()}
                    renderInputToolbar={this.renderInputToolbar}
                    renderActions={this.renderActions}
                

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: '#ededed',
    },
    sendBtn: {
        width: 63,
        height: 32,
        borderRadius: 3,
        backgroundColor: '#7cc0c0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginRight: 5,
    }
})
