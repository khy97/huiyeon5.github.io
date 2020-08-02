import React from 'react'
import Skeleton from 'react-loading-skeleton';
import * as S from "../styles/content.styles";

import { GrGithub } from 'react-icons/gr'
import { IoIosGitPullRequest, IoIosGlobe } from 'react-icons/io'
import { IconContext } from "react-icons";
import Tag from './tag'

const Project = ({ loading, title, subtitle, link, website, languages }) => {
    return (
        <S.Project>
            <S.ProjectTitle>
                <IconContext.Provider value={{ color: '#2a2f7e', size: 28, style: { marginBottom: 16 } }}>
                    <IoIosGitPullRequest />
                </IconContext.Provider>
                <S.ProjectTitleContent>{!loading ? title : <Skeleton />}</S.ProjectTitleContent>
            </S.ProjectTitle>
            <S.PP>{!loading ? subtitle : <Skeleton />}</S.PP>
            <div>
                {!loading ?
                    <IconContext.Provider value={{ color: '#2a2f7e', size: 28, style: { margin: "16px 16px 16px 0", cursor: `pointer`, display: `inline-block` } }}>
                        <GrGithub onClick={() => window.open(link, "_blank")} />
                    </IconContext.Provider> : <Skeleton />}
                {!loading && website !== "" ?
                    <IconContext.Provider value={{ color: '#2a2f7e', size: 28, style: { margin: "16px 16px 16px 0", cursor: `pointer`, display: `inline-block` } }}>
                        <IoIosGlobe onClick={() => window.open(link, "_blank")} />
                    </IconContext.Provider> : null}
            </div>
            {!loading ? languages.map((item, i) => <Tag lang={item} key={i} />) : <Skeleton />}
        </S.Project>
    )
}

export default Project