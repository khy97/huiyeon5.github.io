import React from 'react'
import Skeleton from 'react-loading-skeleton';
import * as S from "../styles/content.styles";

import { faCodeBranch, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tag from './tag'
import { library } from "@fortawesome/fontawesome-svg-core"
import './project.css'
library.add(faCodeBranch)
library.add(faGithub)
library.add(faGlobe)

const Project = ({ loading, title, subtitle, link, website, languages }) => {
    return (
        <S.Project>
            <S.ProjectTitle>
                <FontAwesomeIcon icon="code-branch" style={{ fontSize: 20, color: '#2a2f7e' }} />
                <S.ProjectTitleContent>{!loading ? title : <Skeleton />}</S.ProjectTitleContent>
            </S.ProjectTitle>
            <S.PP>{!loading ? subtitle : <Skeleton />}</S.PP>
            <div>
                {!loading ? <FontAwesomeIcon onClick={() => window.open(link, "_blank")} icon={faGithub} style={{ cursor: `pointer`, margin: "16px 16px 16px 0", fontSize: 25, color: '#2a2f7e', display: `inline-block` }} /> : <Skeleton />}
                {!loading && website !== "" ? <FontAwesomeIcon onClick={() => window.open(website, "_blank")} icon={faGlobe} style={{ cursor: `pointer`, margin: "16px 16px 16px 0", fontSize: 25, color: '#2a2f7e', display: `inline-block` }} /> : null}
            </div>
            {!loading ? languages.map((item, i) => <Tag lang={item} key={i} />) : <Skeleton />}
        </S.Project>
    )
}

export default Project