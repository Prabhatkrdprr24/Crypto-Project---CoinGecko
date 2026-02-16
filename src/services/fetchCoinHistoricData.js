import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinHistoricData(id, interval, days = 7, currency = 'usd'){
    try{
        //coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h
        const response = await axiosInstance.get(`coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
        
        console.log(response);
        return response.data;
        
    }
    catch(error){
        console.log(error);
        return null;
        
    }
}