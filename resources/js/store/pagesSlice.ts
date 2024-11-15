import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import ApiService from "../apiService";

import { IContacts } from "../pages/contacts";
import { IServices } from "../pages/services-page";
import IFAQ from "../types/FAQ";

import { ERequestStatus } from "../types/ERequestStatus";

interface IPagesState {
    contacts: IContacts[];
    services: IServices[];
    faq: IFAQ[];
    status: ERequestStatus;
}

const initialState: IPagesState = {
    contacts: [],
    services: [],
    faq: [],
    status: ERequestStatus.IDLE,
};

const pagesSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        setContacts: (state, { payload }: { payload: IContacts[] }) => {
            state.contacts = payload;
        },
        setServices: (state, { payload }: { payload: IServices[] }) => {
            state.services = payload;
        },
        setFAQ: (state, { payload }: { payload: IFAQ[] }) => {
            state.faq = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.status = ERequestStatus.LOADING;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.contacts = payload;
                state.status = ERequestStatus.SUCCEEDED;
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                console.log(state, payload);
            })

            .addCase(fetchServices.pending, (state) => {
                state.status = ERequestStatus.LOADING;
            })
            .addCase(fetchServices.fulfilled, (state, { payload }) => {
                state.services = payload;
                state.status = ERequestStatus.SUCCEEDED;
            })
            .addCase(fetchServices.rejected, (state, { payload }) => {
                console.log(state, payload);
            })

            .addCase(fetchFAQ.pending, (state) => {
                state.status = ERequestStatus.LOADING;
            })
            .addCase(fetchFAQ.fulfilled, (state, { payload }) => {
                state.faq = payload;
                state.status = ERequestStatus.SUCCEEDED;
            })
            .addCase(fetchFAQ.rejected, (state, { payload }) => {
                console.log(state, payload);
            });
    },
});

export const fetchContacts = createAsyncThunk<
    IContacts[],
    void,
    { rejectValue: string }
>("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const apiService = new ApiService();
        const contacts: IContacts[] = await apiService.getContactsFormServer();
        return contacts;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchServices = createAsyncThunk<
    IServices[],
    void,
    { rejectValue: string }
>("services/fetchServices", async (_, thunkAPI) => {
    try {
        const apiService = new ApiService();
        const services: IServices[] = await apiService.getServicesFromServer();
        return services;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchFAQ = createAsyncThunk<IFAQ[], void, { rejectValue: string }>(
    "faq/fetchFAQ",
    async (_, thunkAPI) => {
        try {
            const apiService = new ApiService();
            const faqItems: IFAQ[] = await apiService.getFAQFromServer();
            return faqItems;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const { setContacts, setServices, setFAQ } = pagesSlice.actions;
export default pagesSlice.reducer;
