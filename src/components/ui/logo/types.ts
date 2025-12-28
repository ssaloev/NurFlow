export interface Props {
    size?: Size;
}

export type Size = (typeof LOGO_SIZE)[keyof typeof LOGO_SIZE];

export const LOGO_SIZE = {
    SMALL: "small",
    DEFAULT: "default",
    NORMAL: "normal",
    BIG: "big",
    EXTRA_BIG: "extra-big",
} as const;
