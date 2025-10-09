import { useNavigate } from "react-router-dom"
import Hobbies from "./Hobbies"
import Languages from "./Languages"
import PersonalInfo from "./PersonalInfo"
import ProfessionalHistory from "./ProfessionalHistory"
import ProfessionalSummary from "./ProfessionalSummary"
import Skills from "./Skills"
import Websites from "./Websites"
import { Form, Layout, ButtonGenerate, NavigationButtons, Header } from "./styles"
import useCVHook from "../../hooks/useCV.hook"
import StepIndicator from "../../components/StepIndicator"
import { useAppDispatch } from "../../store/hooks"
import { setCurrentStep } from "../../store/reducers/cv.reducer"

const STEPS = [
    'Informações Pessoais',
    'Resumo Profissional',
    'Websites',
    'Experiência',
    'Habilidades',
    'Idiomas',
    'Hobbies'
]

const Generator = () => {
    const navigate = useNavigate()
    const cv = useCVHook()
    const dispatch = useAppDispatch()

    const validateCurrentStep = () => {
        switch(cv.currentStep) {
            case 0:
                return cv.personalInfo.title !== "" &&
                       cv.personalInfo.firstName !== "" &&
                       cv.personalInfo.lastName !== "" &&
                       cv.personalInfo.email !== "" &&
                       cv.personalInfo.country !== ""
            case 1:
                return cv.professionalSummary.description !== ""
            default:
                return true
        }
    }

    const handleNext = () => {
        if (validateCurrentStep()) {
            if (cv.currentStep < STEPS.length - 1) {
                dispatch(setCurrentStep(cv.currentStep + 1))
            }
        } else {
            alert("Preencha todos os campos obrigatórios desta etapa")
        }
    }

    const handlePrev = () => {
        if (cv.currentStep > 0) {
            dispatch(setCurrentStep(cv.currentStep - 1))
        }
    }

    const handleGenerate = () => {
        if (!validateCurrentStep()) {
            return alert("Preencha todos os campos obrigatórios")
        }
        localStorage.setItem('curriculumVitae', JSON.stringify(cv))
        navigate('/visualizer')
    }

    const renderStep = () => {
        switch(cv.currentStep) {
            case 0: return <PersonalInfo />
            case 1: return <ProfessionalSummary />
            case 2: return <Websites />
            case 3: return <ProfessionalHistory />
            case 4: return <Skills />
            case 5: return <Languages />
            case 6: return <Hobbies />
            default: return <PersonalInfo />
        }
    }

    return (
        <Layout>
            <Header>
                <StepIndicator currentStep={cv.currentStep} steps={STEPS} />
            </Header>
            <Form>
                {renderStep()}

                {cv.currentStep < STEPS.length - 1 ? (
                    <NavigationButtons>
                        <button
                            className="prev"
                            onClick={handlePrev}
                            disabled={cv.currentStep === 0}
                        >
                            Voltar
                        </button>
                        <button
                            className="next"
                            onClick={handleNext}
                        >
                            Próximo
                        </button>
                    </NavigationButtons>
                ) : (
                    <NavigationButtons>
                        <button
                            className="prev"
                            onClick={handlePrev}
                        >
                            Voltar
                        </button>
                        <ButtonGenerate onClick={handleGenerate}>
                            Gerar Currículo
                        </ButtonGenerate>
                    </NavigationButtons>
                )}
            </Form>
        </Layout>
    )
}

export default Generator