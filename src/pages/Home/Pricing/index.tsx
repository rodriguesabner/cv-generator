import React from 'react';
import { Check, Sparkles, Download, Wand2, MessageSquare, Zap } from 'lucide-react';
import styled from 'styled-components';

const features = [
    {
        icon: <Sparkles className="icon" />,
        text: "AI-powered content suggestions"
    },
    {
        icon: <Download className="icon" />,
        text: "Unlimited resume downloads"
    },
    {
        icon: <Wand2 className="icon" />,
        text: "Smart template formatting"
    },
    {
        icon: <MessageSquare className="icon" />,
        text: "AI cover letter generation"
    },
    {
        icon: <Zap className="icon" />,
        text: "Real-time ATS optimization"
    }
];

const Section = styled.section`
    padding: 80px 0;
    width: 100%;
    background-color: #F9FAFB;
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

const PricingCard = styled.div`
    max-width: 400px;
    margin: 0 auto;
    background: white;
    border-radius: 16px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const Header = styled.div`
    background: linear-gradient(to right, #5A67D8, #805AD5);
    color: white;
    padding: 32px;
    text-align: center;
`;

const IconWrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    padding: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    margin-bottom: 16px;
`;

const PlanTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 8px;
`;

const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 16px;

    .price {
        font-size: 2.5rem;
        font-weight: bold;
    }

    .frequency {
        color: rgba(255, 255, 255, 0.8);
    }
`;

const Description = styled.p`
    color: rgba(255, 255, 255, 0.8);
`;

const FeatureList = styled.ul`
    padding: 32px;
    list-style: none;
    margin: 0;
`;

const FeatureItem = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #4A5568;
    margin-bottom: 16px;

    .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: #EBF4FF;
        border-radius: 8px;
        color: #5A67D8;
    }
`;

const Button = styled.button`
    width: 80%;
    background: linear-gradient(to right, #5A67D8, #805AD5);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.9;
    }

    .icon {
        transition: transform 0.3s;
    }

    &:hover .icon {
        transform: scale(1.1);
    }
`;

const GuaranteeText = styled.p`
    text-align: center;
    color: #A0AEC0;
    font-size: 0.875rem;
    margin-top: 16px;
    margin-bottom: 2em;
`;

export default function Pricing() {
    return (
        <Section id="pricing">
            <Container>
                <Title>Simple, Affordable Pricing</Title>
                <Subtitle>
                    Get access to all our AI-powered features at one low price
                </Subtitle>

                <PricingCard>
                    <Header>
                        <IconWrapper>
                            <Sparkles className="icon" />
                        </IconWrapper>
                        <PlanTitle>Pro Plan</PlanTitle>
                        <PriceWrapper>
                            <span className="price">$9</span>
                            <span className="frequency">/ month</span>
                        </PriceWrapper>
                        <Description>Everything you need to create the perfect resume</Description>
                    </Header>

                    <FeatureList>
                        {features.map((feature) => (
                            <FeatureItem key={feature.text}>
                                <div className="icon-wrapper">{feature.icon}</div>
                                <span>{feature.text}</span>
                            </FeatureItem>
                        ))}
                    </FeatureList>

                    <Button>
                        Get Started
                        <Check className="icon" />
                    </Button>

                    <GuaranteeText>30-day money-back guarantee</GuaranteeText>
                </PricingCard>
            </Container>
        </Section>
    );
}
