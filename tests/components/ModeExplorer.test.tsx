import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SolfegeName } from "src/enumerations";
import ModeExplorer from "src/components/ModeExplorer";


function getSolfegeDot(name: SolfegeName) {
  return screen.getByTestId(`solfege-dot-${name}`);
}

describe("ModeExplorer", () => {
  test("renders without crashing", () => {
    render(<ModeExplorer />);
  });
  test("shows solfege notes at the correct positions for the major mode", () => {
    render(<ModeExplorer />);
    const domElementDo = getSolfegeDot(SolfegeName.Do);
    expect(
      domElementDo.getAttribute("class")
    ).toEqual(
      expect.stringContaining("still")
    );
    expect(
      domElementDo.getAttribute("class")
    ).toEqual(
      expect.not.stringContaining("can-move")
    );
    const domElementRe = getSolfegeDot(SolfegeName.Re);
    expect(
      domElementRe.getAttribute("class")
    ).toEqual(
      expect.stringContaining("late")
    );
    expect(
      domElementRe.getAttribute("class")
    ).toEqual(
      expect.not.stringContaining("can-move")
    );
    const domElementMi = getSolfegeDot(SolfegeName.Mi);
    expect(
      domElementMi.getAttribute("class")
    ).toEqual(
      expect.stringContaining("late")
    );
    expect(
      domElementMi.getAttribute("class")
    ).toEqual(
      expect.not.stringContaining("can-move")
    );
    const domElementFa = getSolfegeDot(SolfegeName.Fa);
    expect(
      domElementFa.getAttribute("class")
    ).toEqual(
      expect.stringContaining("early")
    );
    expect(
      domElementFa.getAttribute("class")
    ).toEqual(
      expect.stringContaining("can-move")
    );
    const domElementSol = getSolfegeDot(SolfegeName.Sol);
    expect(
      domElementSol.getAttribute("class")
    ).toEqual(
      expect.stringContaining("late")
    );
    expect(
      domElementSol.getAttribute("class")
    ).toEqual(
      expect.not.stringContaining("can-move")
    );
    const domElementLa = getSolfegeDot(SolfegeName.La);
    expect(
      domElementLa.getAttribute("class")
    ).toEqual(
      expect.stringContaining("late")
    );
    expect(
      domElementLa.getAttribute("class")
    ).toEqual(
      expect.not.stringContaining("can-move")
    );
    const domElementTi = getSolfegeDot(SolfegeName.Ti);
    expect(
      domElementTi.getAttribute("class")
    ).toEqual(
      expect.stringContaining("late")
    );
    expect(
      domElementTi.getAttribute("class")
    ).toEqual(
      expect.stringContaining("can-move")
    );
  });
  test("solfege note animates after clicking", async () => {
    const user = userEvent.setup();
    render(<ModeExplorer />);
    await user.click(getSolfegeDot(SolfegeName.Fa));
    expect(
      getSolfegeDot(SolfegeName.Fa).getAttribute("class")
    ).toEqual(
      expect.stringContaining("advance-individual")
    );
  });
});
