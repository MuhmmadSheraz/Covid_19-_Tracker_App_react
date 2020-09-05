export const getAPI = async () => {
  const response = await fetch(
    "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats"
  );
  const data = await response.json();
  return data.data;
};
export const globalChart = async () => {
  const response = await fetch("https://covid19.mathdro.id/api/daily");
  const data = await response.json();
  const sortedData=data.map((x)=>({
    confirmed: x.confirmed.total,
    deaths: x.deaths.total,
    report:x.reportDate
  }))
  return sortedData;
};
