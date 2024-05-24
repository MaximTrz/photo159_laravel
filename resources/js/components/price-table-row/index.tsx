import * as React from "react";
import PriceTableRowPorpsType from "../../types/PriceTableRowPorpsType";
import usePriceTableRow from "./usePriceTableRow";

import "./style.scss";

const PriceTableRow: React.FC<PriceTableRowPorpsType> = ({
    sizes,
    material,
    prices,
}) => {
    const { getPrice } = usePriceTableRow();
    return (
        <tr className="price-table-row">
            <th className="price-table-row__head">{material.name}</th>
            {sizes.map((size, index) => (
                <td className="price-table-row__price" key={index}>
                    {getPrice(size, material, prices)}
                </td>
            ))}
        </tr>
    );
};

export default PriceTableRow;
