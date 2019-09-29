using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Conversion
{
    class Metodos
    {
        #region Convirtiendo de Decimal a Hexadecimal
        private char letras(int numero)
        {
            if (numero <= 9)
                return Convert.ToChar(numero.ToString());
            else if (numero == 10)
                return 'A';
            else if (numero == 11)
                return 'B';
            else if (numero == 12)
                return 'C';
            else if (numero == 13)
                return 'D';
            else if (numero == 14)
                return 'E';
            else
                return 'F';
        }

        private string reversa(string texto)
        {
            string resultado = "";
            foreach (char c in texto)
                resultado = c + resultado;
            return resultado;
        }

        public string decAtodo(int numero, short sistema)
        {
            if (sistema < 2)
                return "Error";

            string resultado = "";
            int auxiliar, residuo;
            while (true)
            {
                auxiliar = numero;
                numero /= sistema;
                residuo = auxiliar % sistema;

                resultado += letras(residuo);
                if (numero <= 1)
                {
                    if (numero == 1 && sistema != 2)
                        resultado += letras(numero);
                    else if (numero <= 1 && sistema == 2)
                        resultado += letras(numero);
                    break;
                }
            }
            return reversa(resultado);
        }
        #endregion

        #region Convirtiendo de Hexadecimal a Decimal
        private short numeros(string letra)
        {
            if (char.IsDigit(letra[0]))
                return Convert.ToInt16(letra);
            else if (letra == "A")
                return 10;
            else if (letra == "B")
                return 11;
            else if (letra == "C")
                return 12;
            else if (letra == "D")
                return 13;
            else if (letra == "E")
                return 14;
            else
                return 15;
        }

        public int todoAdec(string texto, short sistema)
        {
            texto = reversa(texto);
            double resultado = 0;
            for (int c = 0; c < texto.Length; c++)
            {
                string truco = "" + texto[c];
                resultado += Math.Pow(sistema, c) * numeros(truco);
            }
            return Convert.ToInt32(resultado);
        }
        #endregion
    }
}