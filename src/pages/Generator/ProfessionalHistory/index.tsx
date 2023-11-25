import { DotsSixVertical } from "phosphor-react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { getProfessionalHistory, setProfessionalHistory } from "../../../store/reducers/cv.reducer";
import { setChildren, setOpen } from "../../../store/reducers/modal.reducer";
import { WrapperSection, Item, Button } from "../styles";
import AddHistory from "./Add";
import ListCards from "../../../components/ListCards";

const ProfessionalHistory = () => {
    const professionalHistories = useAppSelector(getProfessionalHistory)
    const dispatch = useAppDispatch();

    const handleClickAdd = () => {
        const element = <AddHistory />
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    return (
        <WrapperSection>
            <h2 className="title__section">
                Histórico profissional
            </h2>

            <div>
                <p>
                    Mostre sua experiência relevante (últimos 10 anos). Use marcadores para anotar suas conquistas, se possível - use números/fatos (Alcançado X, medido por Y, fazendo Z).
                </p>
                {professionalHistories.length <= 0 && (
                    <p>
                        <b>Você ainda não adicionou nenhum histórico profissional</b>
                    </p>
                )}

                <ListCards
                    list={professionalHistories}
                    type={"professionalHistory"}
                    handleChangeList={(value) => dispatch(setProfessionalHistory(value))}
                    data={(history) => (
                        <Item>
                            <DotsSixVertical size={24} color={"#ccc"} />
                            <div>
                                <p style={{ color: "#000" }}>
                                    {history.company}
                                </p>
                                <small style={{ color: "#999" }}>
                                    {history.startDate} {" - "} {history.endDate !== "" ? history.endDate : "Atual"}
                                </small>
                            </div>
                        </Item>
                    )}
                />
                <Button onClick={() => handleClickAdd()}>
                    Adicionar nova experiência
                </Button>
            </div>
        </WrapperSection>
    )
}

export default ProfessionalHistory;