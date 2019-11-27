const CITIES = {
  '11': 'seoul',
  '26': 'busan',
  '27': 'daegu',
  '28': 'incheon',
  '29': 'gwangju',
  '30': 'daejeon',
  '31': 'ulsan',
  '36': 'sejong',
  '41': 'gyeonggi',
  '42': 'gangwon',
  '43': 'chungbuk',
  '44': 'chungnam',
  '45': 'jeonbuk',
  '46': 'jeonnam',
  '47': 'gyeongbuk',
  '48': 'gyeongnam',
  '50': 'jeju'
};

export const getCity = code => CITIES[code];
