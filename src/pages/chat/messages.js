const messages = [

    {
        _id: 1,
        text: '你好呀，欢迎使用本App',
        
        createdAt: new Date,
        user: {
            _id: 2,
            name: '小助手',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 2,
        text: '这位客官是要登录还是注册呢',
        createdAt: new Date,
        user: {
            _id: 2,
            name: '小助手',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
];

export default messages;