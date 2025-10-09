import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;
    padding: 0 20px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
`

export const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1;
`

interface StepCircleProps {
    $active: boolean
}

export const StepCircle = styled.div<StepCircleProps>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    background-color: ${props => props.$active ? 'rgb(26, 145, 240)' : 'rgb(239, 242, 249)'};
    color: ${props => props.$active ? '#fff' : 'rgb(130, 139, 162)'};
    transition: all 0.3s ease;
    z-index: 1;
`

interface StepLabelProps {
    $active: boolean
}

export const StepLabel = styled.span<StepLabelProps>`
    margin-top: 12px;
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.$active ? 'rgb(26, 145, 240)' : 'rgb(130, 139, 162)'};
    text-align: center;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

interface StepLineProps {
    $active: boolean
}

export const StepLine = styled.div<StepLineProps>`
    position: absolute;
    top: 20px;
    left: calc(50% + 20px);
    right: calc(-50% + 20px);
    height: 2px;
    background-color: ${props => props.$active ? 'rgb(26, 145, 240)' : 'rgb(239, 242, 249)'};
    transition: background-color 0.3s ease;
`
