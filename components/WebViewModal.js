import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { IconButton } from 'react-native-paper';

const WebViewModal = props => {
    return (
        <Modal
            animationType="slide" 
            visible={props.openWebView}>
                <View style={styles.modalContent}>
                    <View style={styles.buttonContainer}>
                        <IconButton icon="close" onPress={props.onWebViewModalClose}/>
                    </View>
                    <View style={styles.webViewContainer}>
                        <WebView source={{uri: props.uri}} />
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