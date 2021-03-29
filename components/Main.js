import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { open, setUri } from '../store/webViewSlice';
import { fetchNews } from '../store/newsSlice';

import { FlatList, StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Appbar, ProgressBar } from 'react-native-paper';

import WebViewModal from './WebViewModal';
import NewsItem from './NewsItem';

// main page
const Main = (props) => {
    let newsData = useSelector(state => state.news.newsList)
    let isLoading = useSelector(state => state.news.loading)
    const dispatch = useDispatch();
    const newsItemClickHandler = (item) => {
        dispatch(setUri(item.url));
        dispatch(open());
    };
    useEffect(() => {
        dispatch(fetchNews())
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Spacenews Reader" subtitle="Bringing you the latest space news" />
            </Appbar.Header>
            <WebViewModal />
            <FlatList
                data={newsData}
                renderItem={({ item }) => (
                    <NewsItem item={item} onItemClickHandler={newsItemClickHandler} />
                )}
                keyExtractor={item => item.id}
                onRefresh={() => dispatch(fetchNews())}
                refreshing={isLoading}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    loadingContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Main;