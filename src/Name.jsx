import React from 'react';
import { useAtom } from 'jotai'
import themeAtom from "./atoms/themeAtom";
import "./Name.css";
// import useTheme from './hooks/useTheme'

function Name(props) {
  
  // const [theme] = useTheme()
  const [theme] = useAtom(themeAtom);
  const {name} = props

  return (
    <b className={`text_name_${theme}`}>
    {name ? name : "John Doe"}
    </b>
  );
}

export default Name