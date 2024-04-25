import * as React from "react";
import PriceTableRowPorpsType from "../../types/PriceTableRowPorpsType";

const PriceTableRow: React.FC<PriceTableRowPorpsType> = ({
    sizes,
    material,
    prices,
}) => {
    console.log(sizes, material, prices);
    return (
        <tr>
            <th>{material.name}</th>
            {sizes.map((size, index) => (
                <td key={index}>{``}</td>
            ))}
        </tr>
    );
};

export default PriceTableRow;
