function matrizOrdenadaLineal(matriz) 
{
  let anterior = matriz[0][0]; 

  for (let i = 0; i < matriz.length; i++) 
  {
    for (let j = 0; j < matriz[i].length; j++) 
    {
      if (matriz[i][j] < anterior) 
      {
        return false; // si un elemento es menor al anterior, no está ordenada
      }
      anterior = matriz[i][j];
    }
  }
  return true; // si nunca se rompe la condición, está ordenada
}
