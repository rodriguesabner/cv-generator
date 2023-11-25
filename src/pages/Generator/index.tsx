import { Link } from "react-router-dom"
import Hobbies from "./Hobbies"
import Languages from "./Languages"
import PersonalInfo from "./PersonalInfo"
import ProfessionalHistory from "./ProfessionalHistory"
import ProfessionalSummary from "./ProfessionalSummary"
import Skills from "./Skills"
import Websites from "./Websites"
import { Form, Layout, ButtonGenerate } from "./styles"

const Generator = () => {
    return (
        <Layout>
            <Form>
                <PersonalInfo />
                <ProfessionalSummary />
                <Websites />
                <ProfessionalHistory />
                <Skills />
                <Languages />
                <Hobbies />

                <Link to="/visualizer">
                    <ButtonGenerate>
                        Gerar Currículo
                    </ButtonGenerate>
                </Link>
            </Form>
        </Layout>
    )
}

export default Generator