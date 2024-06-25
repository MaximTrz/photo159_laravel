import * as React from "react";

import PriceTable from "../../components/price-table";
import usePrices from "./usePrices";

const Prices: React.FC = () => {
    const {
        baseSizes,
        baseMaterials,
        souvenirSizes,
        souvenirMaterials,
        prices,
    } = usePrices();

    return (
        <>
            <PriceTable
                title="Цены на печать фотографий (руб.)"
                sizes={baseSizes()}
                materials={baseMaterials()}
                prices={prices}
            />
            <PriceTable
                title="Цены на печать сувениров (руб.)"
                sizes={souvenirSizes()}
                materials={souvenirMaterials()}
                prices={prices}
            />
        </>
    );
};

export default Prices;
