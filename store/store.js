import { configureStore } from '@reduxjs/toolkit';
import webViewReducer from './webViewSlice';
import newsReducer from './newsSlice';

export default configureStore({
    reducer: {
        webView: webViewReducer,
        news: newsReducer
    }
})