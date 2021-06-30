import { useEffect, useState } from "react";
import Fetch from "./api/Fetch";
import Flag from "./componetns/flag/Flag";
import Card from "./componetns/card/Card";
import CircularProgress from '@material-ui/core/CircularProgress'
import Header from './componetns/header/Header';
import './App.css';

const App = () => {
  const [covidData, setCovidData] = useState([]);
  const [countyValue, setValue] = useState("Afghanistan");
  const [isLoading, setIsLoading] = useState(true);

  const getCovidData = async () => {
    const storeData = localStorage.getItem("covidData");
    if (storeData && storeData !== undefined) {
      console.log(storeData);
      const data = JSON.parse(storeData);
      setCovidData(data);
      setIsLoading(false);
    } else {
      const data = await Fetch();
      localStorage.setItem("covidData", JSON.stringify(data));
      setCovidData(data);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  const run = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      {isLoading ? (
        <CircularProgress className="progress" />
      ) : (
        <>
          <Header />
          <div className="main">
            <div className="selectmaptop">
          <select value={countyValue} onChange={run}>
            {Object.keys(covidData).map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
          <Flag countryInfo={covidData[countyValue]?.countryInfo} />
          </div>
          <div className="allcard">
          <Card data={covidData[countyValue]} />
          </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
