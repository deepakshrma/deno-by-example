let range = {
  from: 1,
  to: 5,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,
      async next() {
        const value = await new Promise<number>((resolve) =>
          setTimeout(() => {
            resolve(this.current++);
          }, 1000)
        );
        if (value <= this.last) {
          return { done: false, value };
        } else {
          return { done: true };
        }
      },
    };
  },
};
(async () => {
  for await (let value of range) {
    console.log(value); // 1,2,3,4,5
  }
})();
