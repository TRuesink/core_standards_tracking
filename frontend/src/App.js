import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Protected from './components/Protected';
import { selectIsAuthenticated } from './store/selectors';
import { getUserRequest } from './store/actions/auth.actions';

function App({ getUserRequest, isAuthenticated }) {
  useEffect(() => {
    getUserRequest();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected isAuthenticated={isAuthenticated}>
              <Dashboard />
            </Protected>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: selectIsAuthenticated(state),
});

export default connect(mapStateToProps, { getUserRequest })(App);