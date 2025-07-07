import { createContext, type Dispatch } from "react";
import type { TAction, TInitialState } from "../types";

type ContextType = {
	state: TInitialState;
	dispatch: Dispatch<TAction>;
};

export const CartContext = createContext<ContextType | null>(null);
