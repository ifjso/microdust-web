import axios from 'axios';

const AIRKOREA_MICRODUST_URI = '/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst';

const AIRKOREA_MICRODUST_SIDO_URI =
  '/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst';

const AIRKOREA_API_KEY = 'apikey';

export const getMicrodustsByCity = async () => {
  const data = await axios.get(
    `${AIRKOREA_MICRODUST_URI}?itemCode=PM10&dataGubun=HOUR&pageNo=1&numOfRows=50&_returnType=json&ServiceKey=${AIRKOREA_API_KEY}`
  );

  return data.data.list;
};

export const getMircordustsBySido = async () => {
  const data = await axios.get(
    `${AIRKOREA_MICRODUST_SIDO_URI}?sidoName=서울&searchCondition=HOUR&pageNo=1&numOfRows=50&_returnType=json&ServiceKey=${AIRKOREA_API_KEY}`
  );

  return data.data.list;
};
