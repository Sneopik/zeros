module.exports = function zeros(expression) {  
    
  let i = 0;
  let fact_d = [];
  let fact = [];
  let j;
  let div_5;
  let div_2;
  let fives = 0;
  let twos = 0;
  let res = 0;
  
  for (i;i<expression.length;i++){
      expression = expression.replace('*',' ');
  }
  
  expression = expression.split(' ');
  
  for (i=0;i <expression.length; i++){
      if (expression[i].includes('!!')){
      fact_d.push(expression[i]);
      expression.splice(i, 1);
      i -=1 ;
      }
  }
  
  fact_d = String(fact_d);
  
  for (i=0;i<fact_d.length;i++)
  {
      fact_d = fact_d.replace(',',' ');
      fact_d = fact_d.replace('!','');
  }
  fact_d = fact_d.split(' ');
  
  
  expression = String(expression);
  for (i=0;i<expression.length;i++){
      expression = expression.replace('!','');
  }
  expression = expression.split(',');
  
  for (i = 0;i<fact_d.length;i++)
    fact_d[i] = Number(fact_d[i])
    
  for (i = 0;i<expression.length;i++)
    fact[i] = Number(expression[i]);
  
  
  if (fact[0]!=0) {
    for (i = 0;i < fact.length;i++) {
      for (div_5 = 2;div_5 <= fact[i];div_5++) {
        j = div_5;
        while (j % 5 == 0) {
          fives++;
          j /= 5;
        }
      }
  
      for (div_2 = 2;div_2 <= fact[i]; div_2++) {
        j = div_2;
        while (j % 2 == 0) {
          twos++;
          j /= 2;
        }
      }
    }
  }
    
  if (fact_d[0] != 0) {
    for (i = 0;i < fact_d.length;i++) {
      if (fact_d[i] % 2 == 0) {
        for (div_5 = 2;div_5 <= fact_d[i];div_5+=2) {
          j = div_5;
          while (j % 5 == 0) {
            fives++;
            j /= 5;
          }
        }
  
        for (div_2 = 2;div_2 <= fact_d[i];div_2+=2) {
          j = div_2;
          while (j % 2 == 0) {
            twos++;
            j /= 2;
          }
        }
      } else {
        for (div_5 = 1;div_5 <= fact_d[i];div_5+=2) {
          j = div_5;
          while (j % 5 == 0) {
            fives++;
            j /= 5;
          }
        }
  
        for (div_2 = 1; div_2 <= fact_d[i];div_2 += 2) {
          j = div_2;
          while (j % 2 == 0) {
            twos++;
            j /= 2;
          }
        }
      }
    }
  }
  
  
  if (twos == 0 || fives == 0)
    res = 0;
  
  if (fives <= twos)
    res = fives;
  else 
    res = twos;
    
    return res;
}
