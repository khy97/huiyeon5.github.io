import React, {forwardRef} from 'react';

import * as S from "../styles/content.styles";

const Skill = forwardRef((props, reff) => (
        <S.Skill ref={reff}>
            {props.data}
        </S.Skill>
));

export default Skill;