import * as React from "react";

import SizeType from "../../types/SizeType";
import MaterialType from "../../types/MaterialType";
import PriceType from "../../types/PriceType";

import findPrice from "../../utils/findPrice";

const usePriceTableRow = () => {
    const getPrice = React.useCallback(
        (size: SizeType, material: MaterialType, prices: PriceType[]) => {
            const price = findPrice(size, material, prices);
            return price;
        },
        [],
    );

    return {
        getPrice,
    };
};

export default usePriceTableRow;
