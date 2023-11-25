import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { getLanguages, setLanguages } from "../../../store/reducers/cv.reducer";
import { setChildren, setOpen } from "../../../store/reducers/modal.reducer";
import { WrapperSection, Item, Button } from "../styles";
import * as Constants from "../../../common/constants";
import AddLanguages from "./Add";
import { DotsSixVertical } from "phosphor-react";
import ListCards from "../../../components/ListCards";

const Languages = () => {
    const languages = useAppSelector(getLanguages)
    const dispatch = useAppDispatch();

    const handleClickAdd = () => {
        const element = <AddLanguages />
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    return (
        <WrapperSection>
            <h2 className="title__section">
                Linguagens
            </h2>

            <div>
                {languages.length <= 0 && (
                    <p>
                        <b>Você ainda não adicionou nenhuma linguagem</b>
                    </p>
                )}
                <ListCards
                    list={languages}
                    type={"professionalHistory"}
                    handleChangeList={(value) => dispatch(setLanguages(value))}
                    data={(language) => (
                        <Item style={{ alignItems: 'center' }}>
                            <DotsSixVertical size={24} color={"#ccc"} />
                            <h4>{language.language}</h4>
                            <p style={{marginBottom: 0, marginLeft: 5}}>({Constants.LEVEL_LANGUAGE[language.level as keyof typeof Constants.LEVEL_LANGUAGE]})</p>
                        </Item>
                    )}
                />

                <Button onClick={() => handleClickAdd()}>
                    Adicionar nova linguagem
                </Button>
            </div>
        </WrapperSection>
    )
}

export default Languages;