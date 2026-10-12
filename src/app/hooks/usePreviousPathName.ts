"use client";

import { useState, useRef, useEffect, } from "react";
import { usePathname, } from "next/navigation";

const usePreviousPathName = () => {
    const currentPathname = usePathname();
    const [previousPathname, setPreviousPathname] = useState<string | null>(null);
    const lastPathname = useRef(currentPathname);

    useEffect(() => {
        if (lastPathname.current !== currentPathname) {
            setPreviousPathname(lastPathname.current);

            lastPathname.current = currentPathname;
        };
    }, [currentPathname]);

    return previousPathname;
};

export default usePreviousPathName;