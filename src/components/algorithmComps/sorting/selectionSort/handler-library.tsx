export interface IArray {
  value: number;
  isSelected?: boolean;
  isActivated?: boolean;
}

export const resetHandler = (
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].isSelected = arr[i].isActivated = false;
  }
  setArray([...arr]);
};

const nodeModeD = async (
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
  j: number,
  time: number,
  mode: "deActivate" | "deSelect",
) => {
  return new Promise((resolve) => {
    if (mode === "deSelect") arr[j].isSelected = false;
    else if (mode === "deActivate") arr[j].isActivated = false;
    setArray([...arr]);
    setTimeout(() => {
      resolve(true);
    }, time * 1000);
  });
};
const nodeModeA = async (
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
  j: number,
  time: number,
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3>>,
  mode: "activate" | "select",
) => {
  return new Promise((resolve) => {
    if (mode === "select") arr[j].isSelected = true;
    else if (mode === "activate") arr[j].isActivated = true;
    // if (arr[j + 1]) {
    //   if (arr[j].value < arr[j + 1].value) setStep(1);
    //   else if (arr[j].value > arr[j + 1].value) setStep(2);
    // }
    setArray([...arr]);
    setTimeout(() => {
      resolve(true);
    }, time * 1000);
  });
};
export const selectionSort = async (
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3>>,
  speed: React.MutableRefObject<number>,
) => {
  resetHandler(arr, setArray);
  for (let i = 0; i < arr.length - 1; i++) {
    await nodeModeA(arr, setArray, i, 0.01, setStep, "activate");
    let minI = i;
    for (let j = i + 1; j < arr.length; j++) {
      await nodeModeA(arr, setArray, j, speed.current * 2, setStep, "activate");
      if (arr[j].value < arr[minI].value) {
        if (minI !== i) await nodeModeD(arr, setArray, minI, 0.01, "deSelect");
        minI = j;
        await nodeModeA(arr, setArray, j, 0.01, setStep, "select");
      }
      await nodeModeD(arr, setArray, j, 0.01, "deActivate");
    }
    if (minI !== i) {
      let temp = arr[minI].value;
      arr[minI].value = arr[i].value;
      arr[i].value = temp;
      await nodeModeD(arr, setArray, minI, 0.01, "deSelect");
    }
    await nodeModeD(arr, setArray, i, 0.01, "deActivate");
    await nodeModeA(arr, setArray, i, 0.01, setStep, "select");
  }
  for (let i = 0; i < arr.length; i++) {
    await nodeModeA(arr, setArray, i, 0.015, setStep, "select");
  }
  for (let i = 0; i < arr.length; i++) {
    await nodeModeD(arr, setArray, i, 0.015, "deSelect");
    await nodeModeD(arr, setArray, i, 0.01, "deActivate");
  }
};
