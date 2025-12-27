import en from "./locales/en.json";

export type MessageSchema = typeof en;

export const config = {
    locale: "en",
    messages: {
        en: en,
    },
};
