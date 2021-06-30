import './Flag.css';
const Flag = ({countryInfo}) => {

    return(
        <>
        <img src={countryInfo?.flag} alt="logo"/>
        </>
    )
}

export default Flag;