import * as React from "react";

import Context from "../../context";

import PriceTable from "../../components/price-table";

const Prices: React.FC = () => {
    const { apiService } = React.useContext(Context);
    const {
        baseSizes,
        baseMaterials,
        souvenirSizes,
        souvenirMaterials,
        prices,
    } = apiService.getPrices();

    return (
        <>
            <PriceTable
                title="Цены на печать фотографий (руб.)"
                sizes={baseSizes}
                materials={baseMaterials}
                prices={prices}
            />
            <PriceTable
                title="Цены на печать cувениров (руб.)"
                sizes={souvenirSizes}
                materials={souvenirMaterials}
                prices={prices}
            />
        </>
    );
};

export default Prices;
