import { FC, ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    height: "full" | "half" | "quarter";
}

const Section: React.FC<SectionProps> = ({ children, height }) => {
    let style: string = "min-h-screen";

    if (height === "half") {
        style = "min-h-[50vh]";
    } else if (height === "quarter") {
        style = "min-h-[25vh]";
    }

    style = "p-10 " + style;

    return (
        <>
            <section className={style}>
                {children}
            </section>
        </>
    )
}

export default Section;