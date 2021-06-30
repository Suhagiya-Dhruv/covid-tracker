const Fetch = async () => {

  const filterResponse = async (data) => {

    let covidData ={};
       data?.map((item)=>{
        covidData[item.country] = {
          country : item.country,
          total : item.cases,
          active : item.active,
          deaths : item.deaths,
          recovered : item.recovered,
          countryInfo : item.countryInfo
        }
      });
      return covidData;
  }

  try {
    const data = await(await fetch(
      "https://corona.lmao.ninja/v2/countries?yesterday&sort"
    )).json();
    const filterData = filterResponse(data);
    return filterData;
  } catch (err) {
    console.log(err);
  }
};
export default Fetch;
