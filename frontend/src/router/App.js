import React from 'react';
import { Switch, Route } from 'react-router-dom';

// antd
import { Layout } from 'antd';

// pages
import Main from 'pages/Main/index';
import SignUp from 'pages/SignUp/index';
import PlaceDetail from 'pages/PlaceDetail';
import MyPage from 'pages/MyPage';
import FindPassword from 'pages/FindPassword';
import PlaceRent from 'pages/PlaceRent';
import PlaceRentWrite from 'pages/PlaceRentWrite';
import PlaceRentDetail from 'pages/PlaceRentDetail';
import PlaceRentEdit from 'pages/PlaceRentEdit';
import Schedule from 'pages/Schedule';
import Manager from 'pages/Manager';
import PlaceAdd from 'pages/PlaceAdd';
import PlaceEdit from 'pages/PlaceEdit';

// components
import Navbar from 'components/Navbar';
import Footer from 'components/Footer/index';

function App() {
  let Navigation =
    window.location.pathname === '/user/signup' ? (
      ''
    ) : window.location.pathname === '/user/password' ? (
      ''
    ) : (
      <Navbar />
    );
  let FooterContainer =
    window.location.pathname === '/user/signup' ? (
      ''
    ) : window.location.pathname === '/user/password' ? (
      ''
    ) : (
      <Footer />
    );

  return (
    <Layout style={{ width: '100vw', minWidth: '1400px' }}>
      {Navigation}
      <Switch>
        <Route path="/" exact component={Main} />

        <Route path="/user/signup" exact component={SignUp} />
        <Route path="/user/password" exact component={FindPassword} />
        <Route path="/user/mypage/:id" exact component={MyPage} />

        <Route path="/place/:id" exact component={PlaceDetail} />
        <Route path="/rent/place" exact component={PlaceRent} />
        <Route path="/rent/place/write" exact component={PlaceRentWrite} />
        <Route path="/rent/place/edit/:id" exact component={PlaceRentEdit} />
        <Route
          path="/rent/place/detail/:id"
          exact
          component={PlaceRentDetail}
        />

        <Route path="/schedule" exact component={Schedule} />
        <Route path="/manager" exact component={Manager} />
        <Route path="/manager/place/add" exact component={PlaceAdd} />
        <Route path="/manager/place/edit/:id" exact component={PlaceEdit} />
      </Switch>
      {FooterContainer}
    </Layout>
  );
}

export default App;
