import styled from "styled-components"

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #e8edf3 100%);
`

const TwoColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    label {
        color: rgb(130, 139, 162);
    }
`

interface WrapperSectionProps {
    marginTop?: string
}

const WrapperSection = styled.section<WrapperSectionProps>`
    margin-top: ${(props) => props.marginTop || "40px"};
    display: flex;
    flex-direction: column;
    

    .title__section {
        margin-bottom: 10px;
        color: #1e2532;
    }

    p {
        color: rgb(130, 139, 162);
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 10px;
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

    .personal_info__section {
        gap: 10px;
    }
`

const List = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

const Item = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid rgb(239, 242, 249);
    border-radius: 4px;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        h4 {
            margin-right: 5px;
        }

        p {
            margin-bottom: 0;
        }

        button {
            background-color: transparent;
            border: 0;
            cursor: pointer;
        }
    }
`

const Input = styled.input`
    border-radius: 3px;
    padding: 12px 16px;
    width: 100%;
    display: block;
    caret-color: rgb(26, 145, 240);
    background-color: rgb(239, 242, 249);
    outline: none;
    border: 0px;
    color: rgb(30, 37, 50);
    transition: color 0.1s ease 0s;
    margin-top: 5px;
`;

const Select = styled.select`
    border-radius: 3px;
    padding: 12px 16px;
    width: 100%;
    display: block;
    caret-color: rgb(26, 145, 240);
    background-color: rgb(239, 242, 249);
    outline: none;
    border: 0px;
    color: rgb(30, 37, 50);
    transition: color 0.1s ease 0s;
    margin-top: 5px;
`;

const TextArea = styled.textarea.attrs({
    rows: 7,

})`
    border-radius: 3px;
    padding: 12px 16px;
    width: 100%;
    display: block;
    caret-color: rgb(26, 145, 240);
    background-color: rgb(239, 242, 249);
    outline: none;
    border: 0px;
    color: rgb(30, 37, 50);
    transition: color 0.1s ease 0s;
    margin-top: 5px;
    resize: vertical;
`;

const Button = styled.button`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: rgb(26, 145, 240);
    cursor: pointer;
    background-color: transparent;
    border: 0;
`;

const ButtonGenerate = styled.button`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    background-color: rgb(26, 145, 240);
    cursor: pointer;
    color: #fff;
    padding: 14px 24px;
    border: 0;
    width: 100%;
    margin-top: 2em;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
        background-color: rgb(20, 120, 200);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(26, 145, 240, 0.3);
    }

    &:disabled {
        background-color: rgb(130, 139, 162);
        cursor: not-allowed;
        transform: none;
    }
`;

const NavigationButtons = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 2em;

    button {
        flex: 1;
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        cursor: pointer;
        padding: 14px 24px;
        border: 0;
        border-radius: 8px;
        transition: all 0.2s ease;

        &.prev {
            background-color: white;
            color: rgb(26, 145, 240);
            border: 2px solid rgb(26, 145, 240);

            &:hover {
                background-color: rgb(239, 242, 249);
            }
        }

        &.next {
            background-color: rgb(26, 145, 240);
            color: #fff;

            &:hover {
                background-color: rgb(20, 120, 200);
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(26, 145, 240, 0.3);
            }
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
`;

const Header = styled.div`
    padding: 32px 0;
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
`;

export {
    Layout,
    TwoColumn,
    WrapperSection,
    Form,
    List,
    Item,
    Input,
    Select,
    TextArea,
    Button,
    ButtonGenerate,
    NavigationButtons,
    Header,
}