import React from 'react'
import '../styles/index.css';
import * as S from "../styles/layout.styles";

const Layout = ({ children }) => {
  return (
    <S.LayoutBody>
      {children}
      <S.GlobalStyle/>
    </S.LayoutBody>
  )
}

export default Layout
