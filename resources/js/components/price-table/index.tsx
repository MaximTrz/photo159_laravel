import * as React from "react";
import TablePricePropsType from "../../types/TablePricePropsType";
import PriceTableHeart from "../price-table-heart";
import PriceTableRow from "../price-table-row";

const PriceTable: React.FC<TablePricePropsType> = ({
    title,
    sizes,
    materials,
    prices,
}) => {
    console.log(title);
    return (
        <table>
            <PriceTableHeart sizes={sizes} />
            <tbody>
                {materials.map((material, index) => (
                    <PriceTableRow
                        key={index}
                        material={material}
                        sizes={sizes}
                        prices={prices}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default PriceTable;
