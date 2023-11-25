import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { getLanguages } from "../../../store/reducers/cv.reducer";
import { setChildren, setOpen } from "../../../store/reducers/modal.reducer";
import { List, WrapperSection, Item, Button } from "../styles";
import * as Constants from "../../../common/constants";
import AddLanguages from "./Add";

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
                <List>
                    {languages.length <= 0 && (
                        <p>
                            <b>Você ainda não adicionou nenhuma linguagem</b>
                        </p>
                    )}
                    {languages.map((language, index) => (
                        <Item key={index}>
                            <h4>
                                {language.language}
                            </h4>
                            <p>
                                {Constants.LEVEL_LANGUAGE[language.level as keyof typeof Constants.LEVEL_LANGUAGE]}
                            </p>
                        </Item>
                    ))}

                    <Button onClick={() => handleClickAdd()}>
                        Adicionar nova linguagem
                    </Button>
                </List>
            </div>
        </WrapperSection>
    )
}

export default Languages;