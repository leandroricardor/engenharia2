const calculoDaArea = (base, altura) => {
  return base * altura;
};

const calculoDoPerimetro = (base, altura) => {
  return 2 * (base + altura);
};

console.log("Area de um retângulo com base=5 e altura=2: ", calculoDaArea(5, 2));
console.log("Perímetro de um retângulo com base=5 e altura=2: ", calculoDoPerimetro(5, 2));
