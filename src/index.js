import { createRoot } from "react-dom/client";
import ModeExplorer from "/src/components/ModeExplorer.js";

const container = document.getElementById("mode-explorer");
const root = createRoot(container)
root.render(<ModeExplorer />);
