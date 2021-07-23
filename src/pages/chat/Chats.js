import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import initialMessages from './messages';
import { renderInputToolbar, renderActions, renderComposer, renderSend } from './InputToolbar';
import {
  renderBubble,
  renderMessageText,
} from './MessageContainer';
var  re11 = /^1\d{10}$/
var  re8 = /^1\d{7}$/
let register=[{"_id": "6", "createdAt": new Date, "text": "首先请发送您的手机号", "user": {"_id": 2, "avatar": "https://placeimg.com/150/150/any", "name": "Aaron"}},
{"_id": "5", "createdAt": new Date, "text": "好的请按如下步骤进行注册", "user": {"_id": 2, "avatar": "https://placeimg.com/150/150/any", "name": "Aaron"}},]
let login=[{"_id": "10", "createdAt": new Date, "text": "首先请发送您的手机号", "user": {"_id": 2, "avatar": "https://placeimg.com/150/150/any", "name": "Aaron"}},
{"_id": "5", "createdAt": new Date, "text": "好的请按如下步骤进行登录", "user": {"_id": 2, "avatar": "https://placeimg.com/150/150/any", "name": "Aaron"}},]
let success=[{"_id": "12", "createdAt": new Date, "text": "点击此条消息进入App啦！", "user": {"_id": 2, "avatar": "https://placeimg.com/150/150/any", "name": "Aaron"},}
    ,{"_id": "13", "createdAt": new Date, "text": "恭喜你注册成功", "user": {"_id": 2, "avatar": "https://placeimg.com/150/150/any", "name": "Aaron"}}]
    let fail=[{"_id": "11", "createdAt": new Date, "text": "出错了，请重试", "user": {"_id": 2, "avatar": "https://placeimg.com/150/150/any", "name": "Aaron"}}]

const Chats = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  let phone=[{
    "_id":"8","createdAt": new Date, "text": `接下来请设置一个8位密码`, "user": {"_id": 2, "avatar": "https://placeimg.com/150/150/any", "name": "Aaron"}},
  {"_id":"7","createdAt": new Date, "text": `您的手机号为${text}`, "user": {"_id": 2, "avatar": "https://placeimg.com/150/150/any", "name": "Aaron"}}]

  useEffect(() => {
    setMessages(initialMessages.reverse());
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    if(text=='注册'){
           
            setMessages((prevMessages) => GiftedChat.append(prevMessages, register));    
        }else if(text=='登录'){
            
            setMessages((prevMessages) => GiftedChat.append(prevMessages, login));  
        }
        else if(text=='登陆'){
            
            setMessages((prevMessages) => GiftedChat.append(prevMessages, login));  
        }
        
        else if(re11.test(text)){
      
        setMessages((prevMessages) => GiftedChat.append(prevMessages, phone));
    }else if(re8.test(text)){
        setMessages((prevMessages) => GiftedChat.append(prevMessages, success));
    }
    else{
        setMessages((prevMessages) => GiftedChat.append(prevMessages, fail));
    }

  };

  return (
    <GiftedChat
      messages={messages}
      text={text}
      onInputTextChanged={setText}
      onSend={onSend}
      user={{
        _id: 1,
        name: 'Aaron',
        avatar: 'https://placeimg.com/150/150/any',
      }}
      

      alignTop
      alwaysShowSend

      // showUserAvatar
      renderAvatarOnTop
      renderUsernameOnMessage
      bottomOffset={26}
      onPressAvatar={console.log}
      renderInputToolbar={renderInputToolbar}
      renderActions={renderActions}
      renderComposer={renderComposer}
      renderSend={renderSend}
      renderBubble={renderBubble}
      renderMessageText={renderMessageText}
        renderMessageImage

      isCustomViewBottom
      messagesContainerStyle={{ backgroundColor: '#eee' }}
      parsePatterns={(linkStyle) => [
        {
          pattern: /#(\w+)/,
          style: linkStyle,
          onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
        },
      ]}
    />
  );
};

export default Chats;