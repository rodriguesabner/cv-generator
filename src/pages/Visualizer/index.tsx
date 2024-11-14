import YellowCV from "./YellowCV"
import BlueCV from "./BlueCV"
import SimpleCV from "./SimpleCV"
import CVNotFound from "./NotFound"
import {useEffect, useState} from "react"
import {setCV} from "../../store/reducers/cv.reducer"
import {useAppDispatch} from "../../store/hooks"
import useCVHook from "../../hooks/useCV.hook"
import {Container, Header, Layout, Left, List, Right} from "./style"
import {Link} from "react-router-dom"
import {CaretLeft} from "phosphor-react"
import GradientResume from "./GradientResume";

const Visualizer = () => {
    const [hasData, setHasData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [currentCV, setCurrentCV] = useState(<SimpleCV/>);
    const cv = useCVHook();

    const dispatch = useAppDispatch();

    useEffect(() => {
        function getLocalData() {
            const item = {
                "personalInfo": {
                    "firstName": "Abner",
                    "lastName": "Rodrigues",
                    "email": "abner.rodrigues20@hotmail.com",
                    "phoneNumber": "5511982743910",
                    "country": "Brasil",
                    "city": "São Paulo"
                },
                "professionalSummary": {
                    "description": "Desenvolvedor Fullstack com mais de 6 anos de experiência em ReactJS, NodeJS, VueJS e Java. Apaixonado por aprendizado e por contribuir em projetos significativos."
                },
                "websites": [
                    {
                        "label": "Github",
                        "title": "Github",
                        "url": "https://github.com/rodriguesabner"
                    },
                    {
                        "label": "Linkedin",
                        "title": "LinkedIn",
                        "url": "https://linkedin.com/in/rodriguesabner"
                    }
                ],
                "professionalHistory": [
                    {
                        "company": "Consultsegur",
                        "position": "Desenvolvedor Fullstack",
                        "startDate": "Julho 2019",
                        "endDate": "Março 2020",
                        "description": "Desenvolvimento da landing page e aplicação, inicialmente em Java Swing, posteriormente migrada para ReactJS e NodeJS."
                    },
                    {
                        "company": "BravoBrasil Corretora",
                        "position": "Desenvolvedor Fullstack",
                        "startDate": "Abril 2020",
                        "endDate": "Junho 2020",
                        "description": "Desenvolvimento da plataforma para a BravoBrasil Corretora utilizando tecnologias de frontend e backend.",
                        "city": "Minas Gerais"
                    },
                    {
                        "company": "DingoX",
                        "position": "Desenvolvedor Fullstack",
                        "startDate": "Julho 2020",
                        "endDate": "Dezembro 2020",
                        "description": "Desenvolvimento de uma aplicação para gerenciar o WhatsApp de forma automatizada, com foco em criação de grupos para campanhas publicitárias.",
                        "city": "Porto, Portugal"
                    },
                    {
                        "company": "WPP Connect",
                        "position": "Desenvolvedor Frontend",
                        "startDate": "Janeiro 2021",
                        "endDate": "Junho 2021",
                        "description": "Contribuição no projeto, responsável pelo frontend em ReactJS, auxílio no backend em NodeJS, e criação de switch no React Native para auxiliar no desenvolvimento."
                    },
                    {
                        "company": "Zoox Smart Data",
                        "position": "Desenvolvedor Fullstack",
                        "startDate": "Julho 2021",
                        "endDate": "Presente",
                        "description": "Colaboro ativamente no planejamento de projetos para garantir entregas eficazes.\n\nPossuo habilidades avançadas na otimização de desempenho de banco de dados MongoDB, incluindo a criação de índices, melhorias em consultas e execução de scripts.\n\nAuxilio outros desenvolvedores independente da senioridade e promovo boas práticas e padrões de codificação.\n\n*Para aumentar a eficiência e a qualidade em todo o ciclo de desenvolvimento, criei um Toolbox para a equipe, facilitando a entrada nas máquinas (EC2) e extração de relatórios das aplicações, no desenvolvimento desse Toolbox utilizei ReactJS e Tauri.\n\nStacks: PHP, VueJS, NodeJS, NestJS, TypeScript.",
                        "city": "Rio de Janeiro"
                    },
                ],
                "skills": [
                    "ReactJS",
                    "NodeJS",
                    "JavaScript",
                    "React Native",
                    "Firebase",
                    "Google Analytics",
                    "MongoDB",
                    "Git",
                    "Linux",
                    "PHP",
                    "NestJS",
                    "VueJS"
                ],
                "languages": [
                    {
                        "language": "Inglês",
                        "level": "basic"
                    },
                    {
                        "language": "Português",
                        "level": "native"
                    }
                ],
                "hobbies": {
                    "description": "Visitar museus, exposições e experimentar comidas novas."
                }
            }

            if (item == null) {
                return;
            }

            // const data = JSON.parse(item)
            dispatch(setCV(item));
            setHasData(true);
        }

        if (cv.personalInfo.firstName === "") {
            getLocalData();
        } else {
            setHasData(true);
        }

        setLoading(false);
    }, [cv.personalInfo.firstName]);

    return (
        loading ? (
            <div>
                <h1>
                    Carregando...
                </h1>
            </div>
        ) : (
            hasData ? (
                <Layout>
                    <Header>
                        <Link to='/generator'>
                            <CaretLeft size={24} color={"#fff"}/>
                            Voltar para o editor
                        </Link>
                    </Header>
                    <Container>
                        <Left>
                            <List>
                                <li>
                                    <button onClick={() => setCurrentCV(<SimpleCV/>)}>
                                        <img
                                            src="https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=1.75,width=154/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg"
                                            alt="arrow"/>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setCurrentCV(<YellowCV/>)}>
                                        <img
                                            src="https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=1.75,width=154/uploads/local_template_image/image/1826/persistent-resource/copenhagen-resume-templates.jpg"
                                            alt="arrow"/>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setCurrentCV(<BlueCV/>)}>
                                        <img
                                            src="https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=1.75,width=154/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg"
                                            alt="arrow"/>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setCurrentCV(<GradientResume/>)}>
                                        <img
                                            src="https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=1.75,width=154/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg"
                                            alt="arrow"/>
                                    </button>
                                </li>
                            </List>
                        </Left>
                        <Right>
                            {currentCV}
                        </Right>
                    </Container>
                </Layout>
            ) : (
                <CVNotFound/>
            )
        )
    )
}

export default Visualizer;
