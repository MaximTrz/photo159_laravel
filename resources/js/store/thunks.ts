import {
    setMaterials,
    setSizes,
    setPrices,
    setMargins,
    setLoaded,
} from "./Reducer";
import ApiService from "../apiService";

const apiService = new ApiService();

export const fetchPriceData = () => async (dispatch) => {
    try {
        const serverPriceData = await apiService.getPricesFormServer();

        dispatch(setMaterials(serverPriceData.materials));
        dispatch(setSizes(serverPriceData.sizes));
        dispatch(setPrices(serverPriceData.prices));
        dispatch(setMargins(serverPriceData.margins));
        dispatch(setLoaded(true));

        dispatch(setLoaded(true));
    } catch (error) {
        console.error("Ошибка при получении данных", error);
    }
};
