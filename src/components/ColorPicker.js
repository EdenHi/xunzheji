import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  DeviceEventEmitter
} from 'react-native';
import {
  SlidersColorPicker,
  HueGradient,
  SaturationGradient,
  LightnessGradient,
  HueSlider,
  SaturationSlider,
  LightnessSlider
} from 'react-native-color';
import tinycolor from 'tinycolor2';

export default class App extends React.Component {
  state = {
    modalVisible: false,
    recents: ['#247ba0', '#70c1b3', '#b2dbbf', '#f3ffbd', '#ff1654'],
    color: tinycolor('#70c1b3').toHsl()
  };

  updateHue = h => this.setState({ color: { ...this.state.color, h } });
  updateSaturation = s => this.setState({ color: { ...this.state.color, s } });
  updateLightness = l => this.setState({ color: { ...this.state.color, l } });

  render() {

    const overlayTextColor = tinycolor(this.state.color).isDark()
      ? '#FAFAFA'
      : '#222';
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.header,
            { backgroundColor: tinycolor(this.state.color).toHslString() }
          ]}
        >
            <TouchableOpacity onPress={()=>{DeviceEventEmitter.emit('PickColor',tinycolor(this.state.color).toHexString()),this.props.navigation.goBack()}} activeOpacity={0.5} style={{width:'100%'}}>
            <Text style={[styles.headerText, { color: overlayTextColor }]}>
            确认
          </Text>
            </TouchableOpacity>

        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
          <Text style={styles.sectionText}>自定义颜色</Text>
          <Text style={styles.componentText}>{'<选色滑动条/>'}</Text>
          <TouchableOpacity
            onPress={() => this.setState({ modalVisible: true })}
            style={[
              styles.colorPreview,
              { backgroundColor: tinycolor(this.state.color).toHslString() }
            ]}
          >
            <Text style={[styles.colorString, { color: overlayTextColor }]}>
              {tinycolor(this.state.color).toHexString()}
            </Text>
          </TouchableOpacity>
          <Text style={styles.sectionText}>梯度</Text>
          <Text style={styles.componentText}>{'<色调/>'}</Text>
          <View style={styles.gradient}>
            <HueGradient gradientSteps={16} />
          </View>
          <Text style={styles.componentText}>{'<饱和度/>'}</Text>
          <View style={styles.gradient}>
            <SaturationGradient color={this.state.color} gradientSteps={16} />
          </View>
          <Text style={styles.componentText}>{'<亮度/>'}</Text>
          <View style={styles.gradient}>
            <LightnessGradient color={this.state.color} gradientSteps={16} />
          </View>
          <Text style={styles.sectionText}>滑动条</Text>
          <Text style={styles.componentText}>{'<调整色调/>'}</Text>
          <HueSlider
            style={styles.sliderRow}
            gradientSteps={40}
            value={this.state.color.h}
            onValueChange={this.updateHue}
          />
          <Text style={styles.componentText}>{'<调整饱和度/>'}</Text>
          <SaturationSlider
            style={styles.sliderRow}
            gradientSteps={20}
            value={this.state.color.s}
            color={this.state.color}
            onValueChange={this.updateSaturation}
          />
          <Text style={styles.componentText}>{'<调整亮度/>'}</Text>
          <LightnessSlider
            style={styles.sliderRow}
            gradientSteps={20}
            value={this.state.color.l}
            color={this.state.color}
            onValueChange={this.updateLightness}
          />

          <SlidersColorPicker
            visible={this.state.modalVisible}
            color={this.state.color}
            returnMode={'hex'}
            onCancel={() => this.setState({ modalVisible: false })}
            onOk={colorHex => {
              this.setState({
                modalVisible: false,
                color: tinycolor(colorHex).toHsl()
              });
              this.setState({
                recents: [
                  colorHex,
                  ...this.state.recents.filter(c => c !== colorHex).slice(0, 4)
                ]
              });
            }}
            swatches={this.state.recents}
            swatchesLabel="最近"
            okLabel="完成"
            cancelLabel="取消"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    paddingBottom: 16
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 32,
    paddingBottom: 32
  },
  headerText: {
      width:'100%',
      textAlign:'center',
    marginTop: 24,
    fontSize: 34,
    lineHeight: 41,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-bold'
      },
      ios: {
        fontWeight: '700',
        letterSpacing: 0.41
      }
    })
  },
  sectionText: {
    marginTop: 32,
    color: '#222',
    fontSize: 22,
    lineHeight: 28,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium'
      },
      ios: {
        fontWeight: '600',
        letterSpacing: 0.75
      }
    })
  },
  componentText: {
    marginTop: 16,
    color: '#222',
    fontSize: 16,
    lineHeight: 21,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium'
      },
      ios: {
        fontWeight: '600',
        letterSpacing: -0.408
      }
    })
  },
  colorPreview: {
    marginLeft: 12,
    marginTop: 12,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.25
  },
  gradient: {
    alignSelf: 'stretch',
    marginLeft: 12,
    marginTop: 12,
    marginBottom: 16,
    height: 4
  },
  sliderRow: {
    alignSelf: 'stretch',
    marginLeft: 12,
    marginTop: 12
  },
  colorString: {
    fontSize: 34,
    lineHeight: 41,
    ...Platform.select({
      android: {
        fontFamily: 'monospace'
      },
      ios: {
        fontFamily: 'Courier New',
        fontWeight: '600',
        letterSpacing: 0.75
      }
    })
  }
});