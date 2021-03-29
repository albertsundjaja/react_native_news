import { configureStore } from '@reduxjs/toolkit';
import webViewReducer from './webViewSlice';

export default configureStore({
    reducer: {
        webView: webViewReducer
    }
})