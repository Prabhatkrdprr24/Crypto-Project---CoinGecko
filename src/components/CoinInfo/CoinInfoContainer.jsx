import CoinInfo from "./CoinInfo";
import currencyStore from '../../state/store';
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
import PageLoader from '../PageLoader/PageLoader';

function CoinInfoContainer({coinId}){

    if(isLoading){
        return(
            <PageLoader />
        );
    }

    if(isError){
        return(
            <Alert message="Error in fetching data " type = "error"/>
        );
    }

    return(
        <>
            <CoinInfo 
                historicData = {historicData} 
                setDays = {setDays} 
                setCoinInterval = {setCoinInterval}
                days = {days}
                currency = {currency}
            />
        </>
    );
}

export default CoinInfoContainer;