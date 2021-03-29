import { createSlice } from '@reduxjs/toolkit';

// store webview related state
export const webViewSlice = createSlice({
    name: "webView",
    initialState: {
        isOpen: false,
        uri: ''
    },
    reducers: {
        close: state => {
            // this will open the webview modal
            state.isOpen = false;
        },
        open: state => {
            // this will close the webview modal
            state.isOpen = true;
        },
        setUri: (state, action) => {
            // this will set and reload the webview to display the given url
            state.uri = action.payload;
        }
    }
})

export const { close, open, setUri } = webViewSlice.actions;

export default webViewSlice.reducer;