/// <reference types="react" />
declare type Props = {
    trigger: JSX.Element;
    active: string;
    isCompact: boolean;
    isColumn: boolean;
    className: string;
    activeClassName: string;
    dropdownClassName: string;
};
declare const Products: ({ trigger, active, isCompact, isColumn, className, activeClassName, dropdownClassName, }: Props) => false | import("react").FunctionComponentElement<{}> | import("react").DetailedReactHTMLElement<{
    ref: import("react").RefObject<HTMLElement>;
    className: string;
}, HTMLElement> | null;
export default Products;
