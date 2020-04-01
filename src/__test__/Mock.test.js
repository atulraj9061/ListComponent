 
 function sum (a,b) {
     return a + b;
 }

 describe ("Mock tests", ()=>{
     test ("2 + 3 return five", () => {
         const sum = jest.fn((a,b) => a+b);
         expect(sum(2,3)).toBe(5);
         expect(sum).toHaveBeenCalled();
         expect(sum).toHaveBeenCalledTimes(1);
         expect(sum).toHaveBeenCalledWith(2,3);
     }
     )
 }
 )