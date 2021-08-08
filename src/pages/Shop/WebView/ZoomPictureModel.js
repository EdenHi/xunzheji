
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Modal,
    ActivityIndicator,
    Dimensions
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const { width, height } = Dimensions.get('window');
const Width = () => { return width };
const Height = () => { return height };

/** 放大图片弹窗组件 */
class ZoomPictureModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowImage: this.props.isShowImage,
            loadingAnimating: true,
            zoomImages: this.props.zoomImages,
            currShowImgIndex: this.props.currShowImgIndex
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.isShowImage != nextProps.isShowImage) {
            this.setState({
                isShowImage: nextProps.isShowImage
            })
        }
        if (this.state.zoomImages != nextProps.zoomImages) {
            this.setState({
                zoomImages: nextProps.zoomImages
            })
        }
        if (this.state.currShowImgIndex != nextProps.currShowImgIndex) {
            this.setState({
                currShowImgIndex: nextProps.currShowImgIndex
            })
        }
    }

    handleZoomPicture(flag) {
        this.setState({
            isShowImage: flag
        })
        this.props.callBack(flag)
    }

    // 保存图片  
    savePhoto() {
        // let index = this.props.curentImage;
        // let url = this.props.imaeDataUrl[index];
        // let promise = CameraRoll.saveToCameraRoll(url);
        // promise.then(function (result) {
        //    alert("已保存到系统相册")
        // }).catch(function (error) {
        //     alert('保存失败！\n' + error);
        // });
    }

    // 图片加载
    renderImageLoad() {
        let { loadingAnimating } = this.state
        return (
            <View style={styles.img_load}>
                <ActivityIndicator animating={loadingAnimating} size={"large"} />
            </View>
        )
    }

    render() {
        let { isShowImage, zoomImages, currShowImgIndex } = this.state
        return (
            <View style={styles.container}>
                <Modal
                    visible={isShowImage}
                    animationType={"slide"}
                    transparent={true}
                    >
                    <ImageViewer style={styles.zoom_pic_img}
                        enableImageZoom={true}
                        saveToLocalByLongPress={false}
                        // menuContext={{ "saveToLocal": "保存图片", "cancel": "取消" }}
                        // onSave={(url) => { this.savePhoto(url) }}
                        // failImageSource={{ 
                        //     url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460', // 不能加载本地图片
                        //     width: Width(),
                        //     height: 300
                        // }}
                        loadingRender={() => this.renderImageLoad()}
                        enableSwipeDown={true}
                        imageUrls={zoomImages}
                        index={currShowImgIndex}
                        onClick={() => this.handleZoomPicture(false)}
                        />
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    zoom_pic_img: {
        maxWidth: Width()
    },
    img_load: {
        marginBottom: (Height() / 2) - 40
    }
})

export default ZoomPictureModel;

