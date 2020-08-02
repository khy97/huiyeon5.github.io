import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

import * as S from "../styles/content.styles";

const Experience = ({ loading, title, subTitle, startDate, endDate, location, details, dExist, dCount, noMargin }) => {
    const [full, setFull] = useState([])
    const [partial, setPartial] = useState("")
    const [open, setOpen] = useState(false)
    const [need, setNeed] = useState(false)

    useEffect(() => {
        if (dExist && !loading) {
            let deets = formatDetail(details)
            if (deets.length >= 3) {
                setFull(deets)
                setPartial(deets.slice(0, 2))
                setOpen(false)
                setNeed(true)
            } else {
                setFull(deets)
                setNeed(false)
            }
        }
    }, [loading])

    const formatDetail = (summary) => {
        const lines = summary.split("\n");
        let result = [];
        for (let i = 0; i < lines.length; i++) {
            result.push((
                <span key={i} style={{ color: `black` }}>
                    {lines[i]}
                    {i === lines.length - 1 ? "" : (
                        <>
                            <br /><br />
                        </>
                    )}
                </span>
            ))
        }
        return result;
    }


    const formatDate = (start, end = undefined) => {
        let s = "";
        s += getMonthName(start.month)
        s += " "
        s += start.year

        if (end === undefined) {
            return s
        }

        if (Object.keys(end).length === 0 && end.constructor === Object) {
            s += " - Present"
            return s
        }

        s += " - "
        s += getMonthName(end.month)
        s += " "
        s += end.year
        return s
    }

    const getMonthName = (num) => {
        switch (num) {
            case 1:
                return "Jan"
            case 2:
                return "Feb"
            case 3:
                return "Mar"
            case 4:
                return "Apr"
            case 5:
                return "May"
            case 6:
                return "Jun"
            case 7:
                return "Jul"
            case 8:
                return "Aug"
            case 9:
                return "Sep"
            case 10:
                return "Oct"
            case 11:
                return "Nov"
            case 12:
                return "Dec"
            default:
                break;
        }
    }

    return (
        <S.Experience noMargin={noMargin}>
            <S.JobTitle>{!loading ? title : <Skeleton />}</S.JobTitle>
            <S.CompanyName>{!loading ? subTitle : <Skeleton />}</S.CompanyName>
            <S.ExpLocation>
                {!loading ? formatDate(startDate, endDate) : <Skeleton />}
                {!loading ? <>&nbsp;&#8226;&nbsp;</> : <Skeleton />}
                {!loading ? location : <Skeleton />}
            </S.ExpLocation>
            <S.Detail>
                {loading ? <Skeleton count={dCount} /> : !need ? full : open ? full : partial}
                {loading ? <Skeleton count={1} /> : !need ? null : !open ? <S.ReadMore onClick={() => setOpen(!open)}>Read More</S.ReadMore> : <S.ReadMore onClick={() => setOpen(!open)}>Read Less</S.ReadMore>}
            </S.Detail>
        </S.Experience>
    )
}

export default Experience;