import * as React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import PriceTable from "../../components/price-table";
import usePrices from "./usePrices";

import chunkArray from "../../utils/chunkArray";

const Prices: React.FC = () => {
    const {
        baseSizes,
        baseMaterials,
        souvenirSizes,
        souvenirMaterials,
        prices,
    } = usePrices();
    const { width } = useWindowSize();
    let tables;

    if (width) {
        if (width > 768) {
            tables = (
                <>
                    <PriceTable
                        title="Цены на печать фотографий (руб.)"
                        sizes={baseSizes}
                        materials={baseMaterials}
                        prices={prices}
                    />
                    <PriceTable
                        title="Цены на печать сувениров (руб.)"
                        sizes={souvenirSizes}
                        materials={souvenirMaterials}
                        prices={prices}
                    />
                </>
            );
        } else {
            const baseSizeChunks = chunkArray(baseSizes, 3);
            const souvenirSizeChunks = chunkArray(souvenirSizes, 2);

            tables = (
                <>
                    {baseSizeChunks.map((sizesChunk, index) => (
                        <PriceTable
                            key={`base_${index}`}
                            title={`Цены на печать фотографий (руб.)`}
                            sizes={sizesChunk}
                            materials={baseMaterials}
                            prices={prices}
                        />
                    ))}
                    {souvenirSizeChunks.map((sizesChunk, index) => (
                        <PriceTable
                            key={`souvenir_${index}`}
                            title={`Цены на печать сувениров(руб.)`}
                            sizes={sizesChunk}
                            materials={souvenirMaterials}
                            prices={prices}
                        />
                    ))}
                </>
            );
        }
    }

    return tables;
};

export default React.memo(Prices);
