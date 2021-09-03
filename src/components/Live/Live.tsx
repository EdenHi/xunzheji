
import React, { Component } from 'react'
import { Platform, ScrollView, Text, TouchableOpacity, View, Dimensions,Image } from 'react-native'
import RtcEngine, { RtcLocalView, RtcRemoteView, VideoRenderMode } from 'react-native-agora'

import requestCameraAndAudioPermission from './Permission'
import styles from './Style'

/**
 * @property peerIds Array for storing connected peers
 * @property appId
 * @property channelName Channel Name for the current session
 * @property joinSucceed State variable for storing success
 */
interface State {
  appId: string,
  token: string,
  channelName: string,
  joinSucceed: boolean,
  peerIds: number[],
  localvoice:true
}
const { height, width } = Dimensions.get('window');
export default class Live extends Component<Props, State> {
  _engine?: RtcEngine

  constructor(props) {
    super(props)
    this.state = {
      appId: 'afd79a4ac84e49cbb69c28c8eab69f69',
      token: '006afd79a4ac84e49cbb69c28c8eab69f69IADkIyROGzKVQjqHp1qXzVCPj3m+QTSsbEAEQAbz5mdrdAfFc8kAAAAAEAAMCq6ySc0yYQEAAQBIzTJh',
      channelName: 'zhangyi',
      joinSucceed: false,
      peerIds: [],
      localvoice:true
    }

    if (Platform.OS === 'android') {
      // Request required permissions from Android
      requestCameraAndAudioPermission().then(() => {
        console.log('requested!')
      })
    }
  }

  componentDidMount() {

    this.init()
    
  }
  
  /**
   * @name init
   * @description Function to initialize the Rtc Engine, attach event listeners and actions
   */
  init = async () => {
    const { appId } = this.state
    this._engine = await RtcEngine.create(appId)
    await this._engine.enableVideo()

    this._engine.addListener('Warning', (warn) => {
      console.log('Warning', warn)
    })

    this._engine.addListener('Error', (err) => {
      console.log('Error', err)
    })

    this._engine.addListener('UserJoined', (uid, elapsed) => {
      console.log('UserJoined', uid, elapsed)
      // Get current peer IDs
      const { peerIds } = this.state
      // If new user
      if (peerIds.indexOf(uid) === -1) {
        this.setState({
          // Add peer ID to state array
          peerIds: [...peerIds, uid]
        })
      }
    })

    this._engine.addListener('UserOffline', (uid, reason) => {
      console.log('UserOffline', uid, reason)
      const { peerIds } = this.state
      this.setState({
        // Remove peer ID from state array
        peerIds: peerIds.filter(id => id !== uid)
      })
    })

    // If Local user joins RTC channel
    this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.log('JoinChannelSuccess', channel, uid, elapsed)
      // Set state variable to true
      this.setState({
        joinSucceed: true
      })
    })
  }
  /**
   * @name startCall
   * @description Function to start the call
   */
  startCall = async () => {
    // Join Channel using null token and channel name
    await this._engine?.joinChannel(this.state.token, this.state.channelName, null, 0)
  }

  /**
   * @name endCall
   * @description Function to end the call
   */
  endCall = async () => {
    await this._engine?.leaveChannel()
    this.setState({ peerIds: [], joinSucceed: false })
  }

  controlVoice(){
    this._engine.enableLocalAudio(!this.state.localvoice);
    this.setState({localvoice:!this.state.localvoice})
  }
  render() {
    return (
      <View style={{ width, height }}>

        {this.state.joinSucceed ? null : <View >
          <TouchableOpacity style={{  width: width, height: height * 0.2 }} onPress={() => { this.startCall() }}></TouchableOpacity>
        </View>}

        {this._renderVideos()}


      </View>
    )
  }

  _renderVideos = () => {
    const { joinSucceed } = this.state;
    const { peerIds } = this.state
    return joinSucceed ?
      (
        <View
          style={{
            width: width,
            height: height,
          }}
        >
          {peerIds.map((value, index, array) => {
            return (
              <RtcRemoteView.SurfaceView
                style={{
                  width: width,
                  height: height,
                  zIndex: 0,
                  position: 'absolute',

                  borderWidth: 5, borderColor: '#fff'
                }}
                zOrderMediaOverlay
                uid={value}
                channelId={this.state.channelName}
                renderMode={VideoRenderMode.Hidden}
              />
            )
          })}
          {this._renderRemoteVideos()}

          <View style={{ backgroundColor: 'rgba(0,0,0,0.4', width, height: height * 0.15, zIndex: 100, marginTop: height * 0.83, flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity onPress={()=>{this._engine.switchCamera()}} style={{  width: width * 0.2, height: width * 0.2 ,borderRadius:50,backgroundColor:'rgba(255,255,255,0.5)', }}>
            <Image style={{height: '60%',width: '60%',alignSelf:'center',marginTop:height*0.018}}resizeMode={'contain'}  source={require('../../pages/img/ChangeCamera.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.endCall()
            // , this.props.navigation.goBack()
              }} style={{  width: width * 0.2, height: width * 0.2 ,borderRadius:50,backgroundColor:'rgba(255,255,255,0.5)',}}>
 <Image style={{height: '60%',width: '60%',alignSelf:'center',marginTop:height*0.018}}resizeMode={'contain'}  source={require('../../pages/img/endCall.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.controlVoice()}} style={{  width: width * 0.2, height: width * 0.2 ,borderRadius:50,backgroundColor:'rgba(255,255,255,0.5)', }}>
{    this.state.localvoice?<Image style={{height: '50%',width: '50%',alignSelf:'center',marginTop:height*0.02}}resizeMode={'contain'} source={require('../../pages/img/voiceDown.png')}></Image>: <Image style={{height: '50%',width: '50%',alignSelf:'center'}}resizeMode={'contain'}  source={require('../../pages/img/VoiceUp.png')}></Image>}
            </TouchableOpacity>
          </View>
        </View>
      )
      : null
  }

  _renderRemoteVideos = () => {
    
    // const {peerIds} = this.state

    return (

      <View style={{}}>
        <RtcLocalView.SurfaceView
          style={{ width: width * 0.3, height: height * 0.3, zIndex: 100, position: 'absolute', borderWidth: 5, borderColor: '#fff' }}
          channelId={this.state.channelName}
          renderMode={VideoRenderMode.Hidden}
          zOrderOnTop={true}
        />

        {/* <TouchableOpacity style={{width:width,height:height*0.1,backgroundColor:'green',marginTop:height*0.7}} onPress={()=>{this.endCall()}}></TouchableOpacity> */}
      </View>
    )
  }
}
