import { FileText, Github, Twitter } from 'lucide-react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: #1A202C;
    color: white;
    padding: 64px 0;
`;

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const LogoSection = styled.div`
    .logo {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 16px;
    }

    .text {
        color: #A0AEC0;
    }
`;

const FooterTitle = styled.h3`
    font-weight: 600;
    margin-bottom: 16px;
`;

const FooterLink = styled.a`
    color: #A0AEC0;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: white;
    }
`;

const LinkList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        margin-bottom: 8px;
    }
`;

const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    padding-top: 32px;
    border-top: 1px solid #2D3748;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }

    .text {
        color: #A0AEC0;
    }
`;

const IconLink = styled.a`
    color: #A0AEC0;
    transition: color 0.3s;
    
    &:hover {
        color: white;
    }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <Grid>
                    <LogoSection>
                        <div className="logo">
                            <FileText className="h-6 w-6 text-indigo-400" />
                            <span className="font-bold text-xl">ResumeAI</span>
                        </div>
                        <p className="text">Create professional resumes with the power of artificial intelligence.</p>
                    </LogoSection>
                    <div>
                        <FooterTitle>Product</FooterTitle>
                        <LinkList>
                            <li><FooterLink href="#features">Features</FooterLink></li>
                            <li><FooterLink href="#templates">Templates</FooterLink></li>
                            <li><FooterLink href="#pricing">Pricing</FooterLink></li>
                        </LinkList>
                    </div>
                    <div>
                        <FooterTitle>Company</FooterTitle>
                        <LinkList>
                            <li><FooterLink href="#about">About</FooterLink></li>
                            <li><FooterLink href="#careers">Careers</FooterLink></li>
                            <li><FooterLink href="#blog">Blog</FooterLink></li>
                        </LinkList>
                    </div>
                    <div>
                        <FooterTitle>Legal</FooterTitle>
                        <LinkList>
                            <li><FooterLink href="#privacy">Privacy</FooterLink></li>
                            <li><FooterLink href="#terms">Terms</FooterLink></li>
                        </LinkList>
                    </div>
                </Grid>
                <BottomSection>
                    <div className="text">
                        © {new Date().getFullYear()} ResumeAI. All rights reserved.
                    </div>
                    <div className="flex items-center gap-4">
                        <IconLink href="https://github.com">
                            <Github className="h-5 w-5" />
                        </IconLink>
                        <IconLink href="https://twitter.com">
                            <Twitter className="h-5 w-5" />
                        </IconLink>
                    </div>
                </BottomSection>
            </Container>
        </FooterWrapper>
    );
}
