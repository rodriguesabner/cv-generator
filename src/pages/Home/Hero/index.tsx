import React from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import styled from 'styled-components';

const Section = styled.section`
    padding-top: 128px;
    padding-bottom: 80px;
    padding-left: 24px;
    padding-right: 24px;
`;

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 24px;
    
    span {
        font-weight: bold;
        background: linear-gradient(to right, #5A67D8, #805AD5, #5A67D8);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
    }
`;

const SparklesIcon = styled(Sparkles)`
    height: 20px;
    width: 20px;
    color: #5A67D8;
`;

const Title = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 24px;
    background: linear-gradient(to right, #5A67D8, #805AD5, #5A67D8);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    line-height: 1.1;
`;


const Description = styled.p`
    font-size: 1.25rem;
    color: #4A5568;
    margin-bottom: 32px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
`;

const PrimaryButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 12px;
    background: linear-gradient(to right, #5A67D8, #805AD5);
    color: white;
    transition: opacity 0.3s;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    .icon {
        transition: transform 0.3s;
    }

    &:hover .icon {
        transform: translateX(4px);
    }
`;

const SecondaryButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 12px;
    border: 1px solid #E2E8F0;
    color: #4A5568;
    background: transparent;
    transition: border-color 0.3s;
    cursor: pointer;

    &:hover {
        border-color: #CBD5E0;
    }
`;

const Features = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 48px;
`;

const FeatureItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    border: 1px solid #EDF2F7;
`;

const CheckIcon = styled(Check)`
    height: 16px;
    width: 16px;
    color: #5A67D8;
`;

export default function Hero() {
    return (
        <Section>
            <Container>
                <Header>
                    <SparklesIcon />
                    <span className="text-sm font-medium text-indigo-600">Powered by AI</span>
                </Header>
                <Title>
                    Create the Perfect Resume<br />with AI Assistance
                </Title>
                <Description>
                    Our AI-powered platform helps you craft professional resumes that stand out.
                    Get personalized suggestions, ATS optimization, and expert tips in real-time.
                </Description>
                <ButtonGroup>
                    <PrimaryButton>
                        Start Building Free
                        <ArrowRight className="icon" />
                    </PrimaryButton>
                    <SecondaryButton>
                        View Examples
                    </SecondaryButton>
                </ButtonGroup>
                <Features>
                    {['AI-Powered Suggestions', 'ATS-Optimized', 'Smart Templates'].map((feature) => (
                        <FeatureItem key={feature}>
                            <CheckIcon />
                            <span className="text-gray-600">{feature}</span>
                        </FeatureItem>
                    ))}
                </Features>
            </Container>
        </Section>
    );
}
