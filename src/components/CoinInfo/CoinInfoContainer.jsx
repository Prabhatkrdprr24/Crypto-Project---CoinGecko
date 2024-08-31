import CoinInfo from "./CoinInfo";
import currencyStore from '../../state/store';
import PageLoader from '../PageLoader/PageLoader';
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";

function CoinInfoContainer({coinId}){

    const { historicData, isError, isLoading, currency, days, setDays, setCoinInterval } = useFetchCoinHistory(coinId);

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