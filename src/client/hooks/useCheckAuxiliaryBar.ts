import useConnector from "./useConnector";

export default function useCheckAuxiliaryBar() {
    const layout = useConnector('layout');
    const auxiliaryBar = useConnector('auxiliaryBar');
    return [!layout.auxiliaryBar.hidden, !!auxiliaryBar.current]
}
