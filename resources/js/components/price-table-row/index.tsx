import * as React from "react";
import PriceTableRowPorpsType from "../../types/PriceTableRowPorpsType";
import usePriceTableRow from "./usePriceTableRow";

const PriceTableRow: React.FC<PriceTableRowPorpsType> = ({
    sizes,
    material,
    prices,
}) => {
    console.log(sizes, material, prices);
    const { findPrice } = usePriceTableRow();
    return (
        <tr>
            <th>{material.name}</th>
            {sizes.map((size, index) => (
                <td key={index}>{findPrice(size, material, prices)}</td>
            ))}
        </tr>
    );
};

export default PriceTableRow;
