declare module "*.svg" {
    const content: String;
    export default content;
}

declare module "*.png" {
    const content: String;
    export default content;
}

declare module "*.jpg" {
    const content: String;
    export default content;
}

declare module "*.jpeg" {
    const content: String;
    export default content;
}

declare namespace global {
    function s<T>(someObject: T | null | undefined, defaultValue?: T | null | undefined): T;
}

declare interface Micro {
    name: String,
    loader: Function,
    display: Function
}