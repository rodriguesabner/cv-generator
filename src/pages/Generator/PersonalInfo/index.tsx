import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getPersonalInfo, setPersonalInfo } from "../../../store/reducers/cv.reducer";
import { WrapperSection, TwoColumn, Input } from "../styles";

const PersonalInfo = () => {
    const personalInfo = useAppSelector(getPersonalInfo)
    const dispatch = useAppDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const item = {
            [name]: value,
        }

        dispatch(setPersonalInfo({...personalInfo, ...item}))
    }

    return (
        <WrapperSection className="personal_info__section" marginTop={"0"}>
            <h2 className="title__section">
                Informações pessoais
            </h2>

            <TwoColumn>
                <label>
                    Título
                    <Input name="title" type="text" placeholder="ex: Analista de Sistemas" onChange={(e) => handleInputChange(e)} />
                </label>
            </TwoColumn>

            <TwoColumn>
                <label>
                    Primeiro nome
                    <Input name="firstName" type="text" placeholder="Maria" onChange={(e) => handleInputChange(e)} />
                </label>

                <label>
                    Último Nome
                    <Input name="lastName" type="text" placeholder="Silva" onChange={(e) => handleInputChange(e)} />
                </label>
            </TwoColumn>

            <TwoColumn>
                <label>
                    Email
                    <Input name="email" type="text" placeholder="maria.silva@email.com" onChange={(e) => handleInputChange(e)} />
                </label>

                <label>
                    Telefone
                    <Input name="phoneNumber" type="text" placeholder="1191234-5678" onChange={(e) => handleInputChange(e)} />
                </label>
            </TwoColumn>

            <TwoColumn>
                <label>
                    País
                    <Input name="country" type="text" placeholder="Brasil" onChange={(e) => handleInputChange(e)} />
                </label>

                <label>
                    Cidade
                    <Input name="city" type="text" placeholder="São Paulo" onChange={(e) => handleInputChange(e)} />
                </label>
            </TwoColumn>
        </WrapperSection>
    )
}
export default PersonalInfo;