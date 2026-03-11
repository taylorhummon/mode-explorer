import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SolfegeName } from "src/enumerations";
import SolfegeExplorer from "src/components/SolfegeExplorer";


function getSolfegeDot(name: SolfegeName) {
  return screen.getByTestId(`solfege-dot-${name}`);
}

test("<SolfegeExplorer /> renders without crashing", () => {
  render(<SolfegeExplorer />);
});

test("<SolfegeExplorer /> shows solfege notes at the correct positions for the major mode", () => {
  render(<SolfegeExplorer />);
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

test("<SolfegeExplorer /> solfege note animates after clicking", async () => {
  const user = userEvent.setup();
  render(<SolfegeExplorer />);
  await user.click(getSolfegeDot(SolfegeName.Fa));
  expect(
    getSolfegeDot(SolfegeName.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("advance-individual")
  );
});
