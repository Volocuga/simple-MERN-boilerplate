import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import css from './App.module.scss';
import { exampleAsyncAction } from '../redux/actions/exampleAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exampleAsyncAction());
  }, [dispatch]);

  return <div className={css.App}>App</div>;
};

export default App;
