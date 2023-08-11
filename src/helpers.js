export const formatReview = (value) => {
    const addition =
      value.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0) / value.length;
  
    return Math.round(addition);
  };
  