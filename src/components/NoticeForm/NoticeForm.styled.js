import styled from 'styled-components';

export const Modal = styled.div`
    position: relative;
    background: #FFFFFF;
    border-radius: 40px;
    max-width: 608px;
    padding: 40px 20px;
    margin: 0 20px;

    @media screen and (min-width: 648px) {
        padding: 40px 80px;
    }
`;

export const Form = styled.form`
    font-family: 'Manrope';
    font-weight: 500;
    color: #111111;
`;

export const FormWrapper = styled.div`
`;

export const Label = styled.label`
`;

export const Textarea = styled.textarea`
`;

export const TextInput = styled.input`
`;

export const DateInput = styled.input`
`;

export const CategoryInput = styled.input`
`;

export const SexInput = styled.input`
`;

export const FileInput = styled.input`
`;

export const FileButton = styled.button`
`;

export const FileImg = styled.img`
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 12px;
    margin-top: 40px;
    @media screen and (min-width: 648px) {
        flex-direction: row;
        justify-content: center;
        gap: 20px;
    }
`;

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 9px 0;
border: 2px solid #F59256;
border-radius: 40px;
background-color: ${p => p.NotFillBtn ? "#FFFFFF" : "#F59256"};
color: ${p => p.NotFillBtn ? "#111111" : "#FFFFFF"};


font-size: 20px;
line-height: 1.35;
letter-spacing: 0.04em;

@media screen and (min-width: 648px) {
    width: 180px;
    height: 44px;
}
`;

export const SexLabel = styled.p`
`;

export const ErrorMessage = styled.p`
`;

export const Required = styled.span`
color: #F59256;
`;

export const FormLabel = styled.h2`
font-size: 24px;
line-height: 1.375;
text-align: center;

@media screen and (min-width: 648px) {
    font-weight: 600;
    font-size: 36px;
    line-height: 1.36;
} 
`;

export const FormText = styled.p`
    text-align: center;
    font-size: 16px;
    line-height: 1.375;
    letter-spacing: -0.01em;
    margin-top: 20px;
    margin-bottom: 20px;
@media screen and (min-width: 648px) {
    font-size: 20px;
    line-height: 1.35;
    margin-bottom: 28px;
} 
`;

export const FormCloseBtn = styled.button`
position: absolute;
top: 20px;
right: 20px;

display: flex;
align-items: center;
justify-content: center;

width: 34px;
height: 34px;
border-radius: 50%;
background-color: #FDF7F2;
backdrop-filter: blur(2px);
`;
