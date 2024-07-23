import { createRoot } from "react-dom/client";
import ModeExplorer from "./components/ModeExplorer";

const container = document.getElementById("mode-explorer-mount-point");
const root = createRoot(container);
root.render(<ModeExplorer />);