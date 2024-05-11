import './App.css';
import axios from 'axios';

function App() {
  axios.get("https://jsonplaceholder.typicode.com/todos")
  .then((results)=> {
    console.log(results.data);
  })
  .catch((error) => {
    console.log('失敗');
    console.log(error.status);
  });

  return (
    <>
    <div className='content'>
      <div>
        <h2>APIについて</h2>
        <p>
          API（アプリケーション・プログラミング・インターフェース）の略。<br/>
          ソフトウェアやプログラム、webサービスの間を繋ぐインターフェースのことを指す。<br/>

        </p>
      </div>
      <div>
        <h2>REST APIについて</h2>
        <p>
          RESTとはシンプルなwebシステムの設計思想のこと<br />
          <span className='fontBold'>RE</span>presentational <span className='fontBold'>S</span>tate <span className='fontBold'>T</span>ransfer<br/>
        </p>
        <p>
          RESTの4原則<br/>
          ①統一インターフェース<br/>
          あらかあじめ定義・共有された方法でやり取りされること<br/>
          [GET/POST/PUT/DELETE]メソッドでやり取りすること、や<br/>
          JSON形式で、などの決まりに従う<br/>
        </p>
        <p>
          ②アドレス可能性<br/>
          全ての情報が一意なURI(識別子)を持っていて、提供する情報をURIで表現出来ること。
        </p>
        <p>
          ③接続性<br/>
          やり取りされる情報にはハイパーリンクを含めることができる<br/>
          一つのリンクから別の情報に接続することができて円滑に情報連携することができる
        </p>
        <p>
        ④ステートレス性<br/>
        state(状態)がないこと、やり取りが一回ごとに完結すること<br/>
        前のやりとりの結果に影響を受けないのでシンプルに設計ができる<br/>
        (セッション管理不要など)
        </p>
      </div>
      <div>
        <h2>HTTPメソッド</h2>
        <p>
          クライアントコンピューターのブラウザから送信されるHTTPリクエストに従って<br/>
          サーバーの処理が行われる。クライアントから送信されるHTTPリクエストはどのリソースに対して何をしたいかを指示する必要がある<br/>
          「どの」リソースかはURLで決定されますが「何をしたいか」は別に支持する必要がある<br/>
          そのためにHTMLメソッドを使用する
        </p>
        <p>
          HTTPリクエストを受け取ったサーバーは、HTTPメソッドが支持されることで<br/>
          クライアントから何を求められているかがわかる<br/>
          例えば、データを送って欲しい・データを追加して欲しい、など
        </p>
        <div>
          <ul>
            <li>
              <h3>GET</h3>
              <p>リソース情報を取得する</p>
            </li>
            <li>
              <h3>POST</h3>
              <p>新しいリソース情報を送りこむ</p>
            </li>
            <li>
              <h3>PUT</h3>
              <p>リソース情報を新しい情報で置き換える</p>
            </li>
            <li>
              <h3>DELETE</h3>
              <p>リソース情報を削除する</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
