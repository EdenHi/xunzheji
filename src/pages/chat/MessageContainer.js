import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';
export const renderMessageText = (props) => (
    <MessageText
        {...props}
        containerStyle={{
            left: { backgroundColor: '#7cc0c0',borderRadius:10 },//客服回复气泡颜色
            right: { backgroundColor: '#7cc0c0',borderRadius:10 },
        }}
        customTextStyle={{ fontSize: 20, lineHeight: 20 ,color:'white'}}//发送字的颜色
    />
);

