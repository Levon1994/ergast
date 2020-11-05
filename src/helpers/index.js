import { useEffect } from 'react';

// eslint-disable-next-line
const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const isEmail = (email) => reg.test(String(email).toLowerCase());

const noop = () => {};

const useMount = (onMount = noop) => useEffect(onMount, []);

export {
  noop,
  isEmail,
  useMount,
};