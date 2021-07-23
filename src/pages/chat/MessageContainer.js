import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';
export const renderMessageText = (props) => (
    <MessageText
        {...props}
        containerStyle={{
            left: { backgroundColor: 'pink',borderRadius:10 },
            right: { backgroundColor: 'skyblue',borderRadius:10 },
        }}
        customTextStyle={{ fontSize: 20, lineHeight: 20 ,color:'white'}}
    />
);

