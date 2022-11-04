import { createContext, useContext } from "react";
import { I18N } from '../utils/constants'
import { useRouter } from 'next/router';

const TranslationContext = createContext()

TranslationContext.displayName = "TranslationContext"

export const TranslationsProvider = ({ children }) => {
    const router = useRouter();
    const locale = router.locale

    const getT = (key) => {
        key = key?.toUpperCase()
        if (I18N[locale]) {
            const t = I18N[locale]
            const word = t[key] ? t[key] : key
            return word
        } else {
            return key
        }
    }

    const value = { getT }

    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    )
}

export function useTranslationContext() {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslationContext must be used under <TranslationContextProvider/>');
    }
    return context;
}
