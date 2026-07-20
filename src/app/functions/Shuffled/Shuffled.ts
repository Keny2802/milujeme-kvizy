const Shuffled = (shuffledArray: string[]) => {
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const shuffledIndex = Math.floor(Math.random() * (i + 1));
    
    [shuffledArray[i], shuffledArray[shuffledIndex]] = [shuffledArray[shuffledIndex], shuffledArray[i]];
  };

  return shuffledArray;
};

export default Shuffled;