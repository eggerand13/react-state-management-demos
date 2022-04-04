import React from 'react';
import './Name.css';
import useTheme from './hooks/useTheme';

function Name(props) {
  const [theme] = useTheme();
  const { name } = props;

  return <b className={`text_name_${theme}`}>{name ? name : 'John Doe'}</b>;
}

export default Name;
