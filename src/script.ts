//npm install -D typescript, tem q instalar no node, o -D só para desenvolvimento

const idade: number = 27;
const nome: string = 'Diogo';
const maiorDeIdade: boolean = true; 

function soma(num1:number, num2:number): number {
    return num1+num2;
}
document.write(`A soma de 7 + 5 é ${soma(7,5)}`);

//comando para transpilar o typeScript tsc