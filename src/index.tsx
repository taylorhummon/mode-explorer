import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import SolfegeExplorer from "src/components/SolfegeExplorer";


const container = document.getElementById("solfege-explorer-mount-point") as HTMLElement;
const root = createRoot(container);
root.render(
  <StrictMode>
    <SolfegeExplorer />
  </StrictMode>
);
