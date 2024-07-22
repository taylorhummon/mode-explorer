import { render } from '@testing-library/react';
import ModeExplorer from "../../components/ModeExplorer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<ModeExplorer />, div);
});
