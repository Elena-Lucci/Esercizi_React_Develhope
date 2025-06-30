/* MountLogger:
 * Logs a message only the very first time the component mounts.
 * Wrapped in <StrictMode>, useRef ensures we guard against repeated effect calls within the same instance.
 */
// MountLogger: stampa in console “MountLogger: primo montaggio!” soltanto alla prima apparizione effettiva del componente, proteggendosi dai raddoppi di montaggio che StrictMode può generare in sviluppo.

import React, { useEffect, useRef } from "react";

export function MountLogger() {
  // È un ref inizialmente false.
  const hasLogged = useRef(false);

  useEffect(() => {
    // Il controllo !hasLogged.current serve a impedire che lo stesso messaggio venga loggato più volte.
    if (!hasLogged.current) {
      console.log("MountLogger: primo montaggio!");
      hasLogged.current = true;
      // Alla prima esecuzione, hasLogged.current è false, quindi stampa il messaggio e poi lo imposta a true.
      // Alle eventuali riletture dello stesso effetto, la condizione sarà falsa e non stamperà più nulla.
    }
  }, []);
  //l’array vuoto [] garantisce che l’effetto venga eseguito solo una volta, al montaggio del componente.

  return <div>Controlla la console per il messaggio del primo montaggio.</div>;
}
