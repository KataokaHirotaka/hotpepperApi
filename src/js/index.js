import "./../scss/index.scss";

class GourmandSearch {
  constructor() {
    this.status = document.querySelector(".status");
    this.API_KEY = config.api;
  }

  init() {
    this.getLocationInfo();
  }

  getLocationInfo() {
    // 位置情報を取得
    const geolocation = navigator.geolocation;
    if (geolocation) {
      // this.status.textContent = "位置情報を取得中";
      const localInfo = geolocation.getCurrentPosition(this.success);
      console.log(localInfo);
    } else {
      this.status.textContent = "ブラウザがGeolocationに対応していません。";
    }
  }

  success(position) {
    // getCurrentPositionメソッドにわたす処理
    const status = document.querySelector(".status");
    console.log(position);
    status.textContent = "";
    const latitude = position.coords.latitude; // 緯度
    const longitude = position.coords.longitude;
    const localInfo = {
      latitude: latitude,
      longitude: longitude,
    };
    return localInfo;
    // const searchData = this.fetchSearchData(localInfo);
    // console.log(searchData);
  }

  fetchSearchData(localInfo) {
    return fetch(
      `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${this.API_KEY}&lat=${localInfo.latitude}&lng=${localInfo.longitude}`
    )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const gourmandSearch = new GourmandSearch();
gourmandSearch.init();
