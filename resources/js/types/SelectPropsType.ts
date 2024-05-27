export default interface SelectPropsType {
    options: { id: number; name: string }[];
    handleSelect: (selectedId: number) => void;
}
