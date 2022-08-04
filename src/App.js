import './App.css';
import axios from 'axios'; // 설치해둔 axios 땡겨오기

function App() {
  const option = {
    url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
    method: 'GET',
    params: {
      key: '%REACT_APP_API_KEY%',
      targetDt: '20220801'
    },
    responseType: 'json'
  };

  const callAjax = () => {
    axios(option)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function () {
        console.log('뭔가 이상해요!');
      })
      .finally(function () {
        console.log('무조건 출력돼요!');
      });
  };

  return (
    <div>
      <button onClick={callAjax}>서버 호출</button>
    </div>
  );
}

export default App;
