import { createPortal } from "react-dom";
import { getOpen, getChildren, setOpen } from "../../store/reducers/modal.reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Layout, Container, Backrop } from "./styles";

const Modal = () => {
    const isOpen = useAppSelector(getOpen)
    const children = useAppSelector(getChildren)

    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(setOpen(false))
    }

    return isOpen ? createPortal(
        <Layout>
            <Backrop onClick={() => handleClose()}/>
            <Container>
                {children}
            </Container>
        </Layout>,
        document.body
    ) : undefined
}

export default Modal;