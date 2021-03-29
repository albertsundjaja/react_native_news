import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { IconButton } from 'react-native-paper';

import { close } from '../store/webViewSlice';

// a reusable webview that can be used to open web url inside the app
const WebViewModal = props => {
    const isOpen = useSelector(state => state.webView.isOpen);
    const webUri = useSelector(state => state.webView.uri);
    const dispatch = useDispatch();
    return (
        <Modal
            animationType="slide" 
            visible={isOpen}>
                <View style={styles.modalContent}>
                    <View style={styles.buttonContainer}>
                        <IconButton icon="close" onPress={() => dispatch(close())}/>
                    </View>
                    <View style={styles.webViewContainer}>
                        <WebView source={{uri: webUri}} />
                    </View>
                </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        flexDirection: "column"
    }, 
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignContent: "center"
    },
    webViewContainer: {
        flex: 14
    }
});

export default WebViewModal;