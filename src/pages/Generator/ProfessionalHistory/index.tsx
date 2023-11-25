import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { getProfessionalHistory } from "../../../store/reducers/cv.reducer";
import { setChildren, setOpen } from "../../../store/reducers/modal.reducer";
import { List, WrapperSection, Item, Button } from "../styles";
import AddHistory from "./Add";

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
                <List>
                    {professionalHistories.length <= 0 && (
                        <p>
                            <b>Você ainda não adicionou nenhum histórico profissional</b>
                        </p>
                    )}
                    {professionalHistories.map((history, index) => (
                        <Item key={index}>
                            <div>
                                <p style={{color: "#000"}}>
                                    {history.company}
                                </p>
                                <small style={{color: "#999"}}>
                                    {history.startDate} {" - "} {history.endDate !== "" ? history.endDate : "Atual"}
                                </small>
                            </div>
                        </Item>
                    ))}
                    <Button onClick={() => handleClickAdd()}>
                        Adicionar nova experiência
                    </Button>
                </List>
            </div>
        </WrapperSection>
    )
}

export default ProfessionalHistory;