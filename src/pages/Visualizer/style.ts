import styled from "styled-components";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #1a1f2e 0%, #2d3748 100%);
    min-height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: calc(100vh - 64px);
    gap: 0;
`;

const Header = styled.header`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0px 32px;
    background: linear-gradient(90deg, rgb(15, 20, 30) 0%, rgb(26, 145, 240) 100%);
    color: rgb(255, 255, 255);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

    a {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 500;
        transition: all 0.2s ease;

        &:hover {
            opacity: 0.8;
            transform: translateX(-2px);
        }

        svg {
            margin-right: 8px;
        }
    }

    button {
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        appearance: none;
        outline: none;
        white-space: nowrap;
        text-align: center;
        color: rgb(255, 255, 255);
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        transition: all 0.2s ease;
        cursor: pointer;
        border-width: 0px;
        user-select: none;
        pointer-events: auto;
        font-size: 16px;
        line-height: 20px;
        padding: 10px 20px;

        &:hover {
            background-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-1px);
        }
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgb(30, 35, 48) 0%, rgb(45, 52, 70) 100%);
    width: 280px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(26, 145, 240, 0.5);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: rgba(26, 145, 240, 0.8);
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background: linear-gradient(135deg, rgb(45, 52, 70) 0%, rgb(55, 65, 85) 100%);
    overflow: auto;
    height: 100%;

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(26, 145, 240, 0.5);
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: rgba(26, 145, 240, 0.8);
    }
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style-type: none;
    gap: 16px;

    li {
        button {
            cursor: pointer;
            border: 2px solid transparent;
            border-radius: 8px;
            overflow: hidden;
            transition: all 0.2s ease;
            padding: 0;
            background: transparent;
            width: 100%;

            &:hover {
                border-color: rgb(26, 145, 240);
                transform: translateY(-2px);
                box-shadow: 0 4px 16px rgba(26, 145, 240, 0.3);
            }

            &:active {
                transform: translateY(0);
            }
        }

        img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 6px;
        }
    }
`;

const TemplateTitle = styled.h3`
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid rgba(26, 145, 240, 0.3);
`;

export { Layout, Left, Right, List, Header, Container, TemplateTitle };