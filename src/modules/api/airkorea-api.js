import axios from 'axios';

const AIRKOREA_MICRODUST_URI =
  '/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst';

const AIRKOREA_API_KEY = 'apikey';

export const getMicrodustsByCity = async () => {
  const data = await axios.get(
    `${AIRKOREA_MICRODUST_URI}?itemCode=PM10&dataGubun=HOUR&pageNo=1&numOfRows=50&_returnType=json&ServiceKey=${AIRKOREA_API_KEY}`,
    { crossdomain: true }
  );

  return data.data.list;
};
