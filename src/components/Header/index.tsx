import { FileText } from 'lucide-react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    z-index: 50;
    border-bottom: 1px solid rgba(229, 231, 235, 0.5);
`;

const Nav = styled.nav`
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    .logo-text {
        font-weight: bold;
        font-size: 1.25rem;
        background: linear-gradient(to right, #5A67D8, #805AD5);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    }
`;

const NavLink = styled.a`
    color: #4A5568;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: #1A202C;
    }
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`;

const ActionButton = styled.button`
    background: linear-gradient(to right, #5A67D8, #805AD5);
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    transition: opacity 0.3s;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <Nav>
                <Logo>
                    <FileText className="h-6 w-6 text-indigo-600" />
                    <span className="logo-text">ResumeAI</span>
                </Logo>
                <NavLinks>
                    <NavLink href="#features">Features</NavLink>
                    <NavLink href="#templates">Templates</NavLink>
                    <NavLink href="#pricing">Pricing</NavLink>
                    <ActionButton>Create Resume</ActionButton>
                </NavLinks>
            </Nav>
        </HeaderWrapper>
    );
}
