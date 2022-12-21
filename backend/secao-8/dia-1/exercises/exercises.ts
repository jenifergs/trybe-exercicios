// ./exercises.ts
// 1 - unção para calcular a área de um quadrado. A fórmula para o cálculo é elevar a medida de qualquer um dos lados ao quadrado. A = s²
export function getSquareArea(side: number): number {
  return side ** 2;
}
// 2 - função para calcular a área de um retângulo. A fórmula para o cálculo é a base multiplicada pela altura. A = b * h
export function getRectangleArea(base: number, height: number): number {
  return base * height;
}
// 3 - função para calcular a área de um triângulo. A fórmula para o cálculo é a base multiplicada pela altura e dividida por 2. A = (b * h) / 2
export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

// 4 - será responsável por calcular o perímetro de um polígono. Um polígono é uma forma geométrica fechada que possui
//  lados retos. Por exemplo: triângulos, retângulos,
//  quadrados, trapézios, hexágonos, entre outros. A fórmula para o cálculo consiste em somar a medida de todos os lados. P = a + b + c + d + e + f ...
export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

// 5 - Nossa última função será responsável por verificar se um triângulo é válido com base na medida de seus lados 
// e deve retornar um valor booleano 
// (true ou false). Para que um triângulo exista, um de seus lados deve ser maior que a diferença absoluta
//  entre os outros dois e menor que a soma deles.

export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}