import React from 'react';
import { Sparkles } from 'lucide-react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 80px 0;
    overflow: hidden;
    width: 100%;
`;

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;
`;

const RelativeWrapper = styled.div`
    position: relative;
`;

const BackgroundOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(93, 112, 216, 0.1), rgba(128, 90, 213, 0.1));
    border-radius: 24px;
`;

const ContentWrapper = styled.div`
    position: relative;
    background: white;
    border-radius: 24px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #E2E8F0;
`;

const Badge = styled.div`
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
    padding: 8px 16px;
    border-radius: 9999px;
    border: 1px solid #E2E8F0;

    span {
        font-size: 0.875rem;
        font-weight: 500;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 600px;
    object-fit: cover;
`;

export default function Preview() {
    return (
        <Section>
            <Container>
                <RelativeWrapper>
                    <BackgroundOverlay />
                    <ContentWrapper>
                        <Badge>
                            <Sparkles className="h-4 w-4 text-indigo-600" />
                            <span>AI-Powered Resume Builder</span>
                        </Badge>
                        <StyledImage
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                            alt="Resume Builder Interface"
                        />
                    </ContentWrapper>
                </RelativeWrapper>
            </Container>
        </Section>
    );
}
