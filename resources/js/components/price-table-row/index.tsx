import * as React from "react";
import PriceTableRowPorpsType from "../../types/PriceTableRowPorpsType";

import usePhotoProperties from "../../hooks/usePhotoProperties";

import "./style.scss";

const PriceTableRow: React.FC<PriceTableRowPorpsType> = ({
    sizes,
    material,
}) => {
    const { findPriceByIDs } = usePhotoProperties();

    return (
        <tr className="price-table-row">
            <th className="price-table-row__head">{material.name}</th>
            {sizes.map((size, index) => (
                <td className="price-table-row__price" key={index}>
                    {findPriceByIDs(material.id, size.id)?.price || "-"}
                </td>
            ))}
        </tr>
    );
};

export default PriceTableRow;
