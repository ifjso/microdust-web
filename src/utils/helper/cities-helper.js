const CITIES = {
  Seoul: 'seoul',
  Busan: 'busan',
  Daegu: 'daegu',
  Incheon: 'incheon',
  Gwangju: 'gwangju',
  Daejeon: 'daejeon',
  Ulsan: 'ulsan',
  'Sejong-si': 'sejong',
  'Gyeonggi-do': 'gyeonggi',
  'Gangwon-do': 'gangwon',
  'Chungcheongbuk-do': 'chungbuk',
  'Chungcheongnam-do': 'chungnam',
  'Jeollabuk-do': 'jeonbuk',
  'Jellanam-do': 'jeonnam',
  'Gyeongsangbuk-do': 'gyeongbuk',
  'Gyeongsangnam-do': 'gyeongnam',
  'Jeju-do': 'jeju'
};

const KOR_CITIES = {
  seoul: '서울',
  busan: '부산',
  daegu: '대구',
  incheon: '인천',
  gwangju: '광주',
  daejeon: '대전',
  ulsan: '울산',
  sejong: '세종',
  gyeonggi: '경기',
  gangwon: '강원',
  chungbuk: '충북',
  chungnam: '충남',
  jeonbuk: '전북',
  jeonnam: '전남',
  gyeongbuk: '경북',
  gyeongnam: '경남',
  jeju: '제주'
};

export const getCity = code => CITIES[code];

export const getKorCity = city => KOR_CITIES[city];
