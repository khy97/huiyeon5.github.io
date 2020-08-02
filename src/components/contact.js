import React from 'react';
import * as S from "../styles/content.styles";

const Contact = () => {
    return (
        <S.ContactForm method="post" action="https://getform.io/f/185e16b6-6be2-476e-b55a-c811ce0e5f75">
            <S.Input type="text" name="name" id="name" placeholder="Name" />
            <S.Input type="email" name="email" id="email" placeholder="Email" />
            <S.Input type="text" name="subject" id="subject" placeholder="Subject" />
            <S.TextArea name="message" id="message" rows="5" placeholder="Message" />
            <S.ButtonGroup>
                <S.Button type="submit">Send</S.Button>
                <S.Reset type="reset" value="Clear" />
            </S.ButtonGroup>
        </S.ContactForm>
    )
}

export default Contact