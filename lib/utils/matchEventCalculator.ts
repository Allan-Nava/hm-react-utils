export const matchEventCalculator = (scores: any) => {
    let events = []
    if (scores) {
        events = scores.filter((item, i) => {

            return (item.Tipo != "NAssist" && item.Tipo != "StartM" && item.Tipo != "StartT" && item.Tipo != "StopM")
        }).map((item => {
            const minuto = item.TempoDiGioco == "2T"
                ? item.Minuto + 45
                : item.TempoDiGioco == "1TS"
                    ? item.Minuto + 90
                    : item.TempoDiGioco == "2TS"
                        ? item.Minuto + 105
                        : item.Minuto
            const label = minuto > 45 && item.TempoDiGioco == "1T"
                ? 45 + `+${minuto - 45}`
                : minuto > 90 && item.TempoDiGioco == "2T"
                    ? 90 + `+${minuto - 90}`
                    : minuto
            return {
                team: item.CODSQUADRA,
                minute: minuto,
                label: label,
                UTCTime: item.UTCTime,
                player: item.CognomeNomeXL,
                action: item.Tipo ? item.Tipo : item.Codice,
                TempoDiGioco: item.TempoDiGioco,
                ShortName: (item.Nome ? item.Nome?.charAt(0) + ". " : "") + item.Cognome?.charAt(0).toUpperCase() + item.Cognome?.slice(1).toLowerCase()
            }
        }))
    }

    return events
}