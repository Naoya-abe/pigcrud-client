import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    const API_KEY = process.env.REACT_APP_OAUTH_KEY;
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: API_KEY,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // index.htmlに<script></script>を書くと、gapiが使える。そこから、"load"を使って必要なAPIをダウンロードする。
  // gapi.load("client:auth2")と書くことで、clientモジュールとauth2モジュールを同時に取得できる。
  //　callback関数を呼び出すと、promiseオブジェクトが返ってくる。
  //scopeはアクセストークンに付与するアクセス権の範囲を制限する手段
  // listenはloginの状態が変更したらその中のcallback関数を呼び出す。

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui primary google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
