import { DotsSixVertical } from "phosphor-react";
import ListCards from "../../../components/ListCards";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { getWebsites, setWebsites } from "../../../store/reducers/cv.reducer";
import { setChildren, setOpen } from "../../../store/reducers/modal.reducer";
import { List, WrapperSection, Item, Button } from "../styles";
import AddWebsites from "./Add";

const Websites = () => {
    const websites = useAppSelector(getWebsites)
    const dispatch = useAppDispatch();

    const handleClickAdd = () => {
        const element = <AddWebsites />
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    return (
        <WrapperSection>
            <h2 className="title__section">
                Portfolio & Redes sociais
            </h2>

            <div>
                <p>
                    Você pode adicionar links para sites que deseja que os gerentes de contratação vejam! Talvez seja um link para seu portfólio, perfil do LinkedIn ou site pessoal
                </p>

                <ListCards
                    list={websites}
                    type={"websites"}
                    handleChangeList={(value) => dispatch(setWebsites(value))}
                    data={(item) => (
                        <Item>
                            <DotsSixVertical size={24} color={"#ccc"} />
                            {item.label}
                        </Item>
                    )}
                />

                {websites.length <= 0 && (
                    <p>
                        <b>Você ainda não adicionou nenhum website/rede social</b>
                    </p>
                )}

                <Button onClick={() => handleClickAdd()}>
                    Adicionar mais um link
                </Button>
            </div>
        </WrapperSection>
    )
}

export default Websites;