import React from 'react';
import { Sparkles, Brain, Target, Wand2, MessageSquare, FileCheck } from 'lucide-react';
import styled from 'styled-components';

const features = [
    {
        icon: <Brain className="icon" />,
        title: "Smart Content Suggestions",
        description: "AI-powered suggestions for your professional summary, skills, and experiences based on your industry."
    },
    {
        icon: <Target className="icon" />,
        title: "ATS Optimization",
        description: "Real-time analysis and suggestions to ensure your resume passes Applicant Tracking Systems."
    },
    {
        icon: <Wand2 className="icon" />,
        title: "Instant Formatting",
        description: "Beautiful, professional templates that automatically format your content perfectly."
    },
    {
        icon: <MessageSquare className="icon" />,
        title: "AI Cover Letter Writer",
        description: "Generate personalized cover letters that match your resume and target role."
    },
    {
        icon: <FileCheck className="icon" />,
        title: "Job Match Analysis",
        description: "Compare your resume against job descriptions to optimize your application."
    },
    {
        icon: <Sparkles className="icon" />,
        title: "Smart Improvements",
        description: "Get AI-powered suggestions to enhance your resume's impact and effectiveness."
    }
];

const Section = styled.section`
    padding: 80px 0;
    background: linear-gradient(to bottom, #F9FAFB, #FFFFFF);
`;

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 16px;
`;

const Subtitle = styled.p`
    color: #4A5568;
    max-width: 600px;
    margin: 0 auto 64px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const FeatureCard = styled.div`
    background: white;
    padding: 32px;
    border-radius: 16px;
    border: 1px solid #E2E8F0;
    transition: border-color 0.3s;
    text-align: left;

    &:hover {
        border-color: #C3DAFE;
    }
`;

const IconWrapper = styled.div`
    display: inline-flex;
    padding: 12px;
    background: #EBF4FF;
    border-radius: 12px;
    margin-bottom: 16px;
    transition: background 0.3s;

    ${FeatureCard}:hover & {
        background: #DBEAFE;
    }
`;

const FeatureTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
`;

const FeatureDescription = styled.p`
    color: #4A5568;
`;

export default function Features() {
    return (
        <Section id="features">
            <Container>
                <Title>AI-Powered Features</Title>
                <Subtitle>
                    Our advanced AI technology helps you create the perfect resume for your dream job
                </Subtitle>
                <Grid>
                    {features.map((feature) => (
                        <FeatureCard key={feature.title}>
                            <IconWrapper>{feature.icon}</IconWrapper>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                        </FeatureCard>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
}
