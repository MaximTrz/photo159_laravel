import * as React from "react";
import SizeType from "../../types/SizeType";

const PriceTableHeart: React.FC<{ sizes: SizeType[] }> = ({ sizes }) => {
    return (
        <thead>
            <tr>
                <th></th>
                {sizes.map((size, index) => (
                    <th
                        key={index}
                    >{`${size.width} X ${size.height} (${size.comment})`}</th>
                ))}
            </tr>
        </thead>
    );
};

export default PriceTableHeart;
