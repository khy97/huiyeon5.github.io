import React from 'react';

import * as S from '../styles/content.styles';

const Navbar = ({ active, onClick }) => {
    return (
        <S.Navbar>
            <S.NavbarContent>
                <S.NavUl>
                    <S.Navli onClick={onClick} active={active === 0}>ABOUT</S.Navli>
                    <S.Navli onClick={onClick} active={active === 1}>WORK</S.Navli>
                    <S.Navli onClick={onClick} active={active === 2}>SKILLS</S.Navli>
                    <S.Navli onClick={onClick} active={active === 3}>EDUCATION</S.Navli>
                    <S.Navli onClick={onClick} active={active === 4}>OTHERS</S.Navli>
                </S.NavUl>
            </S.NavbarContent>
        </S.Navbar>
    )
};

export default Navbar;
