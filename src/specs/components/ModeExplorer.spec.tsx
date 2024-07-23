import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModeExplorer from "../../components/ModeExplorer";

function getSolfegeDot(name) {
  return screen.getByTestId(`solfege-dot-${name}`);
}

describe("ModeExplorer", () => {
  it("renders without crashing", () => {
    render(<ModeExplorer />);
  });
  it("shows solfege notes at the correct positions for the major mode", () => {
    render(<ModeExplorer />);
    const domElementDo = getSolfegeDot("Do");
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
    const domElementRe = getSolfegeDot("Re");
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
    const domElementMi = getSolfegeDot("Mi");
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
    const domElementFa = getSolfegeDot("Fa");
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
    const domElementSol = getSolfegeDot("Sol");
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
    const domElementLa = getSolfegeDot("La");
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
    const domElementTi = getSolfegeDot("Ti");
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
  it("solfege note animates after clicking", async () => {
    const user = userEvent.setup();
    const div = document.createElement("div");
    render(<ModeExplorer />);
    await user.click(getSolfegeDot("Fa"));
    expect(
      getSolfegeDot("Fa").getAttribute("class")
    ).toEqual(
      expect.stringContaining("advance-individual")
    );
  });
});
