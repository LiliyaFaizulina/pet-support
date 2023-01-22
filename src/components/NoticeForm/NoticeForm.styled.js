import styled from 'styled-components';

export const Modal = styled.div`
    position: relative;
    background: #FFFFFF;
    border-radius: 40px;
    max-width: 380px;
    padding: 40px 20px;
    margin: 0 20px;

    @media screen and (min-width: 768px) {
        padding: 40px 80px;
        max-width: 608px;
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
    position: relative;
    font-size: 18px;
    @media screen and (min-width: 768px){
        font-size: 24px;
    }

    display: ${p => p.sexField && 'flex'};
    flex-direction: ${p => p.sexField && 'column'};;
    align-items: ${p => p.sexField && 'center'};
    gap: ${p => p.sexField && '20px'};
    font-size: ${p => p.sexField && '20px'};
    line-height: ${p => p.sexField && '1.3'};
    cursor: ${p => p.sexField && 'pointer'};
    transition: ${p => p.sexField && 'transform 250ms ease-in-out, color 100ms ease-in-out'};
    &:hover, 
    &:focus {
        transform: ${p => p.sexField && 'scale(1.1)'};
    }
    color: ${p => p.checkedSex && '#F59256'};
`;

export const Textarea = styled.textarea`
    resize: none;
    outline: none;
    width: 100%;
    height: 113px;
    padding: 11px 20px 12px 14px;
    background-color: #FDF7F2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 20px;
    margin-top: 8px;
    
    &[type="text"] {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.35;
        color: rgba(27, 27, 27, 0.6);
        @media screen and (min-width: 768px){
            font-size: 16px;
            line-height: 1.625;
        }
    }
    
    @media screen and (min-width: 768px){
        margin-top: 12px;
    }
    transition: transform 250ms ease-in-out;
    &:focus {
        transform: scale(1.03);
    }
`;

export const TextInput = styled.input`
    width: 100%;
    padding: 11px 20px 12px 14px;
    background-color: #FDF7F2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    outline: none;
    margin-top: 8px;
    margin-bottom: 16px;
    @media screen and (min-width: 768px){
        margin-top: 12px;
        margin-bottom: 28px;
    }

    &[type="text"], 
    &[type="date"] {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.35;
        color: rgba(27, 27, 27, 0.6);
        @media screen and (min-width: 768px){
            font-size: 16px;
            line-height: 1.625;
        }
    }
    transition: transform 250ms ease-in-out;
    &:focus {
        transform: scale(1.03);
    }
`;

export const CategoryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 32px;

    @media screen and (min-width: 768px){
        margin-bottom: 28px;
    }
`;

export const CategoryInput = styled.input`

`;
export const CategoryLabel = styled.label`
    font-size: 14px;
    line-height: 1.35;
    letter-spacing: 0.04em;

    padding: 8px 28px;
    border: 2px solid #F59256;
    border-radius: 40px;

    @media screen and (min-width: 768px){
        font-size: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    cursor: pointer;
    background-color: ${p => p.checkedCategory ? '#F59256' : '#FFFFFF'};
    color: ${p => p.checkedCategory ? '#FFFFFF' : '#111111'};
    transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  overflow: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${p=> p.checkedCategory ? `linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent)` : `linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    )` };
    transition: all 650ms;
  }
`;

export const SexInput = styled.input`
`;

export const FileWrapper = styled.div`
position: relative;
display: flex;
margin-top: 8px;
margin-bottom: 28px;
@media screen and (min-width: 768px){
    margin-top: 12px;
}
`;

export const FileInput = styled.input`

`;

export const FileButton = styled.button`
    width: 116px;
    height: 116px;
    background-color: #FDF7F2;
    border-radius: 20px;
    overflow: hidden;
    padding: 0;

    svg{
        width: 47px;
        height: 47px;
        fill: rgba(17, 17, 17, 0.6);
    }

    @media screen and (min-width: 768px){
        width: 140px;
        height: 140px;
    }
`;

export const FileImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 12px;
    margin-top: 40px;
    @media screen and (min-width: 768px) {
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

@media screen and (min-width: 768px) {
    width: 180px;
    height: 44px;
}

  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  overflow: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${p=> !p.NotFillBtn ? `linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent)` : `linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    )` };
    transition: all 650ms;
  }
`;

export const SexWrapper = styled.div`
display: flex;
gap: 80px;
margin-top: 28px;
margin-bottom: 32px;

@media screen and (min-width: 768px){
    margin-bottom: 40px;
}
`;

export const Icon = styled.img`
    width: 40px;
    height: 40px;
@media screen and (min-width: 768px){
    width: 60px;
    height: 60px;
}
`;

export const ErrorMessage = styled.p`
    position: absolute;
    bottom: -27px;
    left: 14px;

    font-size: 12px;
    line-height: 1.2;
    font-weight: 400;
    color: #ff0000;

    @media screen and (min-width: 768px){
        font-size: 14px;
        bottom: -30px;
    }
`;

export const Required = styled.span`
color: #F59256;
`;

export const FormLabel = styled.h2`
font-size: 24px;
line-height: 1.375;
text-align: center;
margin-bottom: 20px;

@media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 36px;
    line-height: 1.36;
    margin-bottom: 40px;
} 
`;

export const FormText = styled.p`
    text-align: center;
    font-size: 16px;
    line-height: 1.375;
    letter-spacing: -0.01em;
    margin-bottom: 20px;
@media screen and (min-width: 768px) {
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

svg {
    fill: currentColor;
}

transition: color 250ms ease-in-out;

&:hover, 
&:focus {
    color: #F59256;
}

`;
