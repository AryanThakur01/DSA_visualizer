export interface IArray {
  value: number;
  isSelected?: boolean;
  isActivated?: boolean;
}

// Reset Function
export const resetHandler = (
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].isSelected = arr[i].isActivated = false;
  }
  setArray([...arr]);
};

// Node Activator/Selector
const nodeModeA = async (
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
  j: number,
  time: number,
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3>>,
  mode: "activate" | "select" | "deActivate" | "deSelect",
) => {
  return new Promise((resolve) => {
    if (mode === "select") arr[j].isSelected = true;
    else if (mode === "activate") arr[j].isActivated = true;
    else if (mode === "deSelect") arr[j].isSelected = false;
    else if (mode === "deActivate") arr[j].isActivated = false;
    setArray([...arr]);
    setTimeout(() => {
      resolve(true);
    }, time * 1000);
  });
};

// Sorting Algorithm
export const selectionSort = async (
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3>>,
  speed: React.MutableRefObject<number>,
) => {
  resetHandler(arr, setArray);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      await nodeModeA(arr, setArray, j, speed.current, setStep, "activate");
      await nodeModeA(arr, setArray, j - 1, speed.current, setStep, "select");
      if (arr[j].value < arr[j - 1].value) {
        let temp = arr[j].value;
        arr[j].value = arr[j - 1].value;
        arr[j - 1].value = temp;
        await nodeModeA(arr, setArray, j, 0.01, setStep, "deActivate");
        await nodeModeA(arr, setArray, j - 1, 0.01, setStep, "deSelect");
      } else {
        await nodeModeA(arr, setArray, j, 0.01, setStep, "deActivate");
        await nodeModeA(arr, setArray, j - 1, 0.01, setStep, "deSelect");
        break;
      }
    }
  }
  for (let i = 0; i < arr.length; i++)
    await nodeModeA(arr, setArray, i, 0.015, setStep, "select");
  for (let i = 0; i < arr.length; i++) {
    await nodeModeA(arr, setArray, i, 0.015, setStep, "deSelect");
    await nodeModeA(arr, setArray, i, 0.01, setStep, "deActivate");
  }
};
