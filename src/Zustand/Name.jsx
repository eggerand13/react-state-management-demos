import React from 'react';
import './Name.css';
import useStore from './hooks/useStore';

function Name(props) {
  const [theme] = useStore((state) => state.theme);
  const { name } = props;

  return <b className={`text_name_${theme}`}>{name ? name : 'John Doe'}</b>;
}

export default Name;
