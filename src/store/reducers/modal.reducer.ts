import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface ModalProps {
    open: boolean;
    children: React.ReactNode;
}

const initialState: ModalProps = {
    open: false,
    children: undefined,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        },
        setChildren: (state, action: PayloadAction<React.ReactNode>) => {
            state.children = action.payload;
        }
    },
})

export const { 
    setOpen,
    setChildren,
 } = modalSlice.actions

export const getOpen = (state: RootState) => state.modal.open;
export const getChildren = (state: RootState) => state.modal.children;

export default modalSlice.reducer