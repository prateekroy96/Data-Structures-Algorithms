add = (n) => {
  if (!n) return 0;
  return (m) => {
    return m ? add(m + n) : n;
  };
};

console.log(add(1)(2)(3)(0));
