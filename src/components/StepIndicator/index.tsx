import { Container, Step, StepLine, StepCircle, StepLabel } from "./styles"

interface StepIndicatorProps {
    currentStep: number
    steps: string[]
}

const StepIndicator = ({ currentStep, steps }: StepIndicatorProps) => {
    return (
        <Container>
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepCircle $active={index <= currentStep}>
                        {index + 1}
                    </StepCircle>
                    <StepLabel $active={index <= currentStep}>{step}</StepLabel>
                    {index < steps.length - 1 && (
                        <StepLine $active={index < currentStep} />
                    )}
                </Step>
            ))}
        </Container>
    )
}

export default StepIndicator
