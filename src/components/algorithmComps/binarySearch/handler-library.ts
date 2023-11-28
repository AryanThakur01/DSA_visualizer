export interface IArray {
  value: number;
  isLeft?: boolean;
  isRight?: boolean;
  isMid?: boolean;
}

const resetHandler = (
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].isLeft = arr[i].isRight = arr[i].isMid = false;
  }
  setArray([...arr]);
};

const mlrSelector = (
  key: number,
  l: number,
  r: number,
  m: number,
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
): Promise<boolean> => {
  arr[l].isLeft = arr[r].isRight = arr[m].isMid = true;
  setArray([...arr]);
  return new Promise((resolve) => {
    setTimeout(() => {
      arr[l].isLeft = arr[r].isRight = arr[m].isMid = false;
      if (key === arr[m].value) arr[m].isMid = true;
      setArray([...arr]);
      resolve(true);
    }, 1000);
  });
};

export const binarySearch = async (
  key: number,
  arr: IArray[],
  setArray: React.Dispatch<React.SetStateAction<IArray[]>>,
  setInitialComparison: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3>>,
) => {
  resetHandler(arr, setArray);
  let l = 0;
  let r = arr.length - 1;
  let mid = Math.floor(l + (r - l) / 2);
  while (l <= r) {
    const midval = arr[mid].value;
    setInitialComparison(midval < key ? 1 : midval > key ? 2 : 3);
    await mlrSelector(key, l, r, mid, arr, setArray);
    if (arr[mid].value < key) {
      l = mid + 1;
    } else if (arr[mid].value > key) {
      r = mid - 1;
    } else if (arr[mid].value === key) {
      return;
    }
    mid = Math.floor(l + (r - l) / 2);
  }
};
