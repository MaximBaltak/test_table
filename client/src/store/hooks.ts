import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appDispatch, rootState} from "./index";
//создаём типизированные хукки
export const useAppDispatch: () => appDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
