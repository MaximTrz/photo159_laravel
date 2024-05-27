export default interface SelectPropsType {
    options: { id: number; name: string }[];
    selected: number;
    handleSelect: (selectedId: number) => void;
}
