// google interview

const maxArray = () => {
  let nums = [1, 3, -1, -3, 5, 3, 6, 7, 8, 9, 10, 11, 12, 13];
  const deger = nums.length;
  const k = 3;
  let max;
  let output = [];
  for (let i = 0; i <= deger; i++) {
    let numsNew = [];
    if (nums.length >= k) {
      for (let j = 0; j < k; j++) {
        numsNew.push(nums[j]);
        max = numsNew[0];
        numsNew.forEach((e) => {
          max < e ? (max = e) : null;
        });
      }
      console.log(numsNew);
      output.push(max);
    }
    nums.splice(0, 1);
  }
  console.log("output :>> ", output);
};
maxArray();
