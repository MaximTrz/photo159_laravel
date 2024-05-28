import * as React from "react";
import useDeleteAll from "./useDeleteAll";
import "./style.scss";

const DeleteAll: React.FC = () => {
    const { deleteAllPhoto } = useDeleteAll();
    return (
        <button onClick={deleteAllPhoto} className="delete-all">
            Удалить все
        </button>
    );
};

export default DeleteAll;
