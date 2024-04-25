import * as React from "react";
import TablePricePropsType from "../../types/TablePricePropsType";
import PriceTableRow from "../price-table-row";

import "./style.scss";

const PriceTable: React.FC<TablePricePropsType> = ({
    title,
    sizes,
    materials,
    prices,
}) => {
    return (
        <div className="price-table">
            <h2 className="price-table__title">{title}</h2>
            <table className="price-table__table">
                <thead className="price-table__heart">
                    <tr>
                        <th></th>
                        {sizes.map((size, index) => (
                            <th
                                className="price-table__size"
                                key={index}
                            >{`${size.width}X${size.height} (${size.comment})`}</th>
                        ))}
                    </tr>
                </thead>
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
        </div>
    );
};

export default PriceTable;
