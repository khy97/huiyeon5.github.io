import React from 'react'
import * as moment from 'moment'
import Skeleton from 'react-loading-skeleton';


import * as S from "../styles/content.styles";

const Publication = ({ loading, title, subtitle, date, image, link }) => {
    return (
        <S.Publication onClick={() => window.open(link, "_blank")}>
            {!loading ? <S.PubImage fluid={image} /> : <Skeleton height={170} />}
            <S.PubTitle>{!loading ? title : <Skeleton />}</S.PubTitle>
            <S.PubDate>{!loading ? moment(`${date.year}-${date.month}-${date.day}`).format('MMM Do, YYYY') : <Skeleton />}</S.PubDate>
            <S.PubSubtitle>{!loading ? subtitle : <Skeleton />}</S.PubSubtitle>
        </S.Publication>
    )
}

export default Publication

