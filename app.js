let pronoun = ['the','our','their'];
let adj = ['great', 'big','small'];
let noun = ['jogger','racoon','rat'];
let domain = ['.com','.es','.net'];

pronoun.forEach(item => {
    adj.forEach(item2=>{
       noun.forEach(item3 => {
           domain.forEach(item4 =>{
            let concat1 = item.concat(item2);
            let concat2 = concat1.concat(item3);
            let concat3 = concat2.concat(item4);
            console.log(concat3);
           });
       });
    });
});

