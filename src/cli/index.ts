import { prompt } from "enquirer";
import { displaySolution } from "../shared/utils";
import { getDays, getParts, getAlgorithms, getAlgorithm, getInput } from "./files";
import { performance } from "perf_hooks";

const cli = async () => {
  const year = "2022"; // can make dynamic later

  const days = getDays(year);

  const dayRes: {
    day: string;
  } = await prompt({
    name: "day",
    type: "select",
    message: "Pick a day.",
    choices: days.map((day) => ({
      name: day,
    })),
  });

  const { day } = dayRes;

  const parts = getParts(year, day);

  const partRes: {
    part: string;
  } = await prompt({
    name: "part",
    type: "select",
    message: "Pick a part.",
    choices: parts.map((part) => ({
      name: part,
    })),
  });

  const { part } = partRes;

  const algorithms = getAlgorithms(year, day, part);

  const algorithmRes: {
    algorithm: string;
  } = await prompt({
    name: "algorithm",
    type: "select",
    message: "Pick an algorithm.",
    choices: algorithms.map((part) => ({
      name: part,
    })),
  });

  const { algorithm } = algorithmRes;

  const algo: Function = (await getAlgorithm(year, day, part, algorithm))["default"];
  const input = getInput(year, day);

  const start = performance.now();
  const result = await algo(input);
  const end = performance.now();

  const time = end - start;

  displaySolution(result.toString());

  console.log(`Time: ${time}ms`);
};

cli();
