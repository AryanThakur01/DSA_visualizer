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

const nodeDeselector = async (
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
  j: number,
  time: number,
) => {
  return new Promise((resolve) => {
    arr[j].isSelected = false;
    setArray([...arr]);
    setTimeout(() => {
      resolve(true);
    }, time * 1000);
  });
};
const nodeSelect = async (
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
  j: number,
  time: number,
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3>>,
) => {
  return new Promise((resolve) => {
    arr[j].isSelected = true;
    if (arr[j + 1]) {
      if (arr[j].value < arr[j + 1].value) setStep(1);
      else if (arr[j].value > arr[j + 1].value) setStep(2);
    }
    setArray([...arr]);
    setTimeout(() => {
      resolve(true);
    }, time * 1000);
  });
};
export const bubbleSort = async (
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3>>,
  speed: React.MutableRefObject<number>,
) => {
  resetHandler(arr, setArray);
  for (let i = 0; i < arr.length - 1; i++) {
    let sorted = 1;
    for (let j = 0; j < arr.length - i - 1; j++) {
      await nodeSelect(arr, setArray, j, speed.current, setStep);
      if (arr[j].value > arr[j + 1].value) {
        let temp = arr[j].value;
        arr[j].value = arr[j + 1].value;
        arr[j + 1].value = temp;
        sorted = 0;
      }
      await nodeDeselector(arr, setArray, j, 0.01);
      await nodeSelect(arr, setArray, j + 1, speed.current, setStep);
      console.log(speed.current);
    }
    if (sorted) break;
  }
  for (let i = 0; i < arr.length; i++) {
    await nodeSelect(arr, setArray, i, 0.01, setStep);
  }
  for (let i = 0; i < arr.length; i++) {
    await nodeDeselector(arr, setArray, i, 0.01);
  }
  setStep(0);
};
