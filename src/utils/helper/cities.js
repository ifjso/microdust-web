const CITIES = {
  seoul: { CTPRVN_CD: '11', CTP_ENG_NM: 'Seoul' },
  busan: { CTPRVN_CD: '26', CTP_ENG_NM: 'Busan' },
  daegu: { CTPRVN_CD: '27', CTP_ENG_NM: 'Daegu' },
  incheon: { CTPRVN_CD: '28', CTP_ENG_NM: 'Incheon' },
  gwangju: { CTPRVN_CD: '29', CTP_ENG_NM: 'Gwangju' },
  daejeon: { CTPRVN_CD: '30', CTP_ENG_NM: 'Daejeon' },
  ulsan: { CTPRVN_CD: '31', CTP_ENG_NM: 'Ulsan' },
  sejong: { CTPRVN_CD: '36', CTP_ENG_NM: 'Sejong-si' },
  gyeonggi: { CTPRVN_CD: '41', CTP_ENG_NM: 'Gyeonggi-do' },
  gangwon: { CTPRVN_CD: '42', CTP_ENG_NM: 'Gangwon-do' },
  chungbuk: { CTPRVN_CD: '43', CTP_ENG_NM: 'Chungcheongbuk-do' },
  chungnam: { CTPRVN_CD: '44', CTP_ENG_NM: 'Chungcheongnam-do' },
  jeonbuk: { CTPRVN_CD: '45', CTP_ENG_NM: 'Jeollabuk-do' },
  jeonnam: { CTPRVN_CD: '46', CTP_ENG_NM: 'Jellanam-do' },
  gyeongbuk: { CTPRVN_CD: '47', CTP_ENG_NM: 'Gyeongsangbuk-do' },
  gyeongnam: { CTPRVN_CD: '48', CTP_ENG_NM: 'Gyeongsangnam-do' },
  jeju: { CTPRVN_CD: '50', CTP_ENG_NM: 'Jeju-do' }
};

export const getCtprvn = cityName => CITIES[cityName].CTPRVN_CD;
