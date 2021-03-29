import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// thunk which fetch the news asynchronously and update the newsList on success
export const fetchNews = createAsyncThunk("news/fetchNews",
    async () => {
        const config = {
            headers: {
                accept: "application/json"
            } 
        }
        let result = [];
        try {
            result = await axios.get(`https://spaceflightnewsapi.net/api/v2/articles?_limit=10`, config)
        } catch(ex) {
            return Promise.reject("Failed to fetch news from the API.")
        }
        
        return result.data;
    }
)

// store webview related state
export const newsSlice = createSlice({
    name: "news",
    initialState: {
        loading: false,
        error: true,
        newsList: []
    },
    reducers: {
        newsLoading: state => {
            state.loading = true;
        },
        newsReceived: (state, action) => {
            state.loading = false;
            state.newsList = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchNews.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.loading = false;
            state.newsList = action.payload;
        })
        .addCase(fetchNews.rejected, (state, actions) => {
            state.loading = false;
            state.error = true;
        })
    }
})

export const { newsLoading, newsReceived } = newsSlice.actions;

export default newsSlice.reducer;