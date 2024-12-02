function generatePermutations(arr) {
    if (arr.length === 1) {
      return [arr];
    }
  
    const permutations = [];
  
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
  
      const remainingPermutations = generatePermutations(remaining);
  
      for (const permutation of remainingPermutations) {
        permutations.push([current, ...permutation]);
      }
    }
  
    return permutations;
  }
  
  const input = [1, 2, 3];
  const result = generatePermutations(input);
  
  console.log(result);