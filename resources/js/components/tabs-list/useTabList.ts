import React from "react";
import classNames from "classnames";

const useTabList = () => {
    const setActive = React.useCallback((tabName, isActive) => {
        return classNames("tabs-list__link", `--${tabName}`, {
            "--active": isActive,
        });
    }, []);

    return { setActive };
};

export default useTabList;
