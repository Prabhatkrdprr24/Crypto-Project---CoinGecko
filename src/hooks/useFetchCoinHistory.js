import { fetchCoinHistoricData } from "../services/fetchCoinHistoricData";
import currencyStore from '../state/store';
import { useState } from "react";
import { useQuery } from "react-query";

function useFetchCoinHistory(coinId){
    const { currency } = currencyStore();
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('');

    const {data : historicData, isLoading, isError} = useQuery(['coinHistoricData', coinId, currency, interval, days], () => fetchCoinHistoricData(coinId, interval, days, currency), {
        cacheTime : 1000 * 60 * 2,
        staleTime : 1000 * 60 * 2,
    })

    return {
        historicData,
        isLoading,
        isError,
        currency, 
        setDays,
        setCoinInterval,
        days,
    }
}

export default useFetchCoinHistory;