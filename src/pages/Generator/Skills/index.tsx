import { DotsSixVertical } from "phosphor-react";
import ListCards from "../../../components/ListCards";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getSkills, setSkills } from "../../../store/reducers/cv.reducer";
import { setChildren, setOpen } from "../../../store/reducers/modal.reducer";
import { WrapperSection, Button, Item } from "../styles";
import AddSkills from "./Add";

const Skills = () => {
    const skills = useAppSelector(getSkills)
    const dispatch = useAppDispatch();

    const handleClickAdd = () => {
        const element = <AddSkills />
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    return (
        <WrapperSection>
            <h2 className="title__section">
                Habilidades
            </h2>

            <div>
                <p>
                    Escolha 5 habilidades importantes que mostram que você se enquadra na posição. Certifique-se de que correspondam às principais habilidades mencionadas na lista de empregos (especialmente ao se inscrever por meio de um sistema online).
                </p>
                <ListCards
                    list={skills}
                    type={"skills"}
                    handleChangeList={(value) => dispatch(setSkills(value))}
                    data={(item) => (
                        <Item>
                            <DotsSixVertical size={24} color={"#ccc"} />
                            {item.label}
                        </Item>
                    )}
                />


                {skills.length <= 0 && (
                    <p>
                        <b>Você ainda não adicionou nenhuma habilidade</b>
                    </p>
                )}

                <Button onClick={() => handleClickAdd()}>
                    Adicionar mais uma skill
                </Button>
            </div>
        </WrapperSection>
    )
}

export default Skills;