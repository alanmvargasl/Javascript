using System;

namespace Program
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("1 - Binario --------- 2 - Octal");
            int option1 = int.Parse(Console.ReadLine());
            switch(option1)
            {
                case 1: entries(out int base_num, out int num1);
                        entries(out base_num, out int num2);
                        conversionBinarioaDecimal(num1,base_num, out int cNumber1);
                        conversionBinarioaDecimal(num2,base_num, out int cNumber2);
                        Console.Clear();
                        Console.WriteLine("Que quieres hacer con estos numeros? \n 1- Sumar --- 2-Restar --- 3-Multiplicar");
                        int option2 = int.Parse(Console.ReadLine());
                        switch(option2)
                        {
                            case 1: sumar(cNumber1, cNumber2, out int resultadoSumaDecimal);
                                    decimalabinario(resultadoSumaDecimal, out string resultadoSumaBinario);
                                    Console.WriteLine(num1 + " + " + num2 + " = " + resultadoSumaBinario);
                            break;
                            case 2: restar(cNumber1, cNumber2, out int resultadoRestaDecimal);
                                    decimalabinario(resultadoRestaDecimal, out string resultadoRestaBinario);
                                    Console.WriteLine(num1 + " - " + num2 + " = " + resultadoRestaBinario);
                            break;
                            case 3: multiplicar(cNumber1, cNumber2, out int resultadoMultiplicarDecimal);
                                    decimalabinario(resultadoMultiplicarDecimal, out string resultadoMultiplicarBinario);
                                    Console.WriteLine(num1 + " * " + num2 + " = " + resultadoMultiplicarBinario);
                            break;
                            default: Console.WriteLine("Elije una opcion correcta!");
                            break;
                        } break;

                case 2: entriesOctal(out base_num, out num1);
                        entriesOctal(out base_num, out num2);
                        conversionOctalaDecimal(num1,base_num, out cNumber1);
                        conversionOctalaDecimal(num2,base_num, out cNumber2);
                        Console.WriteLine(cNumber1);
                        Console.WriteLine(cNumber1);
                        Console.WriteLine("Que quieres hacer con estos numeros? \n 1- Sumar --- 2-Restar --- 3-Multiplicar");
                        option2 = int.Parse(Console.ReadLine());
                        switch(option2)
                        {
                            case 1: sumar(cNumber1, cNumber2, out int resultadoSumaDecimal);
                                    decimalabinario(resultadoSumaDecimal, out string resultadoSumaBinario);
                                    Console.WriteLine(num1 + " + " + num2 + " = " + resultadoSumaBinario);
                            break;
                            case 2: restar(cNumber1, cNumber2, out int resultadoRestaDecimal);
                                    decimalabinario(resultadoRestaDecimal, out string resultadoRestaBinario);
                                    Console.WriteLine(num1 + " - " + num2 + " = " + resultadoRestaBinario);
                            break;
                            case 3: multiplicar(cNumber1, cNumber2, out int resultadoMultiplicarDecimal);
                                    decimalabinario(resultadoMultiplicarDecimal, out string resultadoMultiplicarBinario);
                                    Console.WriteLine(num1 + " * " + num2 + " = " + resultadoMultiplicarBinario);
                            break;
                            default: Console.WriteLine("Elije una opcion correcta!");
                            break;
                        } break;
                default:
                break;
            }
        }

#region Entries
    public static void entries(out int base_num,out int number1)
    { 
            Console.WriteLine("Ingresa Tu Numero: ");
            int num1 = int.Parse(Console.ReadLine());
            int base_numero = 2; base_num= base_numero; number1 = num1; 
    }
    #endregion
#region EntriesOctal
    public static void entriesOctal(out int base_num,out int number1)
    { 
            Console.WriteLine("Ingresa Tu Numero: ");
            int num1 = int.Parse(Console.ReadLine());
            int base_numero = 8; base_num= base_numero; number1 = num1; 
    }
#endregion
#region conversionBinarioaDecimal
    public static void conversionBinarioaDecimal (int num1, int base_numero,  out int Cnumber) 
    {
        string numbertxt1 = num1.ToString(); //Convert both numbers to text so i can search their position.
        double[] array = new double[15]; //I would like to know how to create an array without asigning a value to it.
        double[] array2 = new double[15]; //I would like to know how to create an array without asigning a value to it.
        for (int i=0,counter= numbertxt1.Length; i<numbertxt1.Length; i++,counter--)
        {
           string process = numbertxt1.Substring(counter-1,1); //This searches through the string.
           double process2 = int.Parse(process); // This converts the string to a Double Number
           double basePorPosicion = Math.Pow(base_numero,i); // It Multiplies the Base Times the Position of the number.
           process2 = process2 * basePorPosicion; // It Multiplies the number times the result of (Base*Position)
           Console.WriteLine(process2);
           array [i] = process2; // We store all the values inside this array.
        } 

       double proccess3 =0;
       for(int i=0;i<array.Length;i++)
       {
        proccess3 = proccess3 + array [i]; //Process 3 is the final result of numbers one convertion
       }
       Cnumber=Convert.ToInt32(proccess3);
      

       
    }
#endregion     
#region conversionDecimalaBinario
    public static void decimalabinario(int number1,out string result)
    {
        int number=number1;
        string remaining=null;
         while ((number >= 2))
            {
                remaining = remaining + (number % 2).ToString();
                number = number / 2;
            }
            remaining = remaining + number.ToString();
    string binaryNumber=null;
            for (int i = remaining.Length; i >= 1; i += -1)
            {
                binaryNumber = binaryNumber + remaining.Substring(i-1, 1);
            }
            result = binaryNumber;
    } 
#endregion   
#region metodos sumar,restar,multiplicar
    public static void sumar(int number1, int number2, out int result)
    {
        int result1=number1 + number2;
        result=result1;
    }
    
     public static void restar(int number1, int number2, out int result)
    {
        
        int result1 = number1 < number2 ? number2-number1:number1-number2;
        
       
         result=result1;
        
    }

     public static void multiplicar(int number1, int number2, out int result)
    {
        int result1=number1 * number2;
        result=result1;
    }
    #endregion

#region conversionOctalaDecimal
    public static void conversionOctalaDecimal (int num1, int base_numero,  out int Cnumber) 
    {
        string numbertxt1 = num1.ToString(); //Convert both numbers to text so i can search their position.
        double[] array = new double[15]; //I would like to know how to create an array without asigning a value to it.
        double[] array2 = new double[15]; //I would like to know how to create an array without asigning a value to it.
        for (int i=1,counter= numbertxt1.Length; i<numbertxt1.Length; i++,counter--)
        {
           string process = numbertxt1.Substring(counter-1,1); //This searches through the string.
           double process2 = int.Parse(process); // This converts the string to a Double Number
           double basePorPosicion = Math.Pow(base_numero,i); // It Multiplies the Base Times the Position of the number.
           process2 = process2 * basePorPosicion; // It Multiplies the number times the result of (Base*Position)
           Console.WriteLine(process2);
           array [i] = process2; // We store all the values inside this array.
        } 

       double proccess3 =0;
       for(int i=0;i<array.Length;i++)
       {
        proccess3 = proccess3 + array [i]; //Process 3 is the final result of numbers one convertion
       }
       Cnumber=Convert.ToInt32(proccess3);
     

       
    }
#endregion     

}
}


