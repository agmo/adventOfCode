using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace AoC2020
{
    public static class Day14
    {
        public static long CalculatePart1(List<string> initializationProgram)
        {
            var mask = "";
            var memoryAddresses = new Dictionary<long, long>();

            foreach (var item in initializationProgram)
            {
                if (item.StartsWith("mask"))
                {
                    mask = item.Substring(7);
                }
                else
                {
                    var value = item.Split(new[] { '[', ']', '=', ' ' }, StringSplitOptions.RemoveEmptyEntries);
                    var valueWithMask = ApplyMask(mask, long.Parse(value[2]));
                    var key = long.Parse(value[1]);

                    if (memoryAddresses.ContainsKey(key))
                    {
                        memoryAddresses[key] = valueWithMask;
                    }
                    else
                    {
                        memoryAddresses.Add(key, valueWithMask);
                    }
                }
            }

            return memoryAddresses.Sum(x => x.Value);
        }

        public static long CalculatePart2(List<string> initializationProgram)
        {
            var mask = "";
            var memoryAddresses = new Dictionary<long, long>();

            foreach (var item in initializationProgram)
            {
                if (item.StartsWith("mask"))
                {
                    mask = item.Substring(7);
                }
                else
                {
                    var value = item.Split(new[] { '[', ']', '=', ' ' }, StringSplitOptions.RemoveEmptyEntries);
                    var key = long.Parse(value[1]);
                    var parsedValue = long.Parse(value[2]);
                    var memoryAddressesWithMask = ApplyMask2(mask, key);

                    foreach (var memoryAddress in memoryAddressesWithMask)
                    {
                        if (memoryAddresses.ContainsKey(memoryAddress))
                        {
                            memoryAddresses[memoryAddress] = parsedValue;
                        }
                        else
                        {
                            memoryAddresses.Add(memoryAddress, parsedValue);
                        }
                    }
                }
            }

            return memoryAddresses.Sum(x => x.Value);
        }

        private static long ApplyMask(string mask, long value)
        {
            var binaryString = Convert.ToString(value, 2).PadLeft(36, '0');

            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < mask.Length; i++)
            {
                if (mask[i].Equals('X'))
                {
                    sb.Append(binaryString[i]);
                }
                else
                {
                    sb.Append(mask[i]);
                }
            }

            string valueWithMask = sb.ToString();

            return Convert.ToInt64(valueWithMask, 2);
        }

        private static List<long> ApplyMask2(string mask, long value)
        {
            var binaryString = Convert.ToString((long)value, 2).PadLeft(36, '0');

            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < mask.Length; i++)
            {
                if (mask[i].Equals('X'))
                {
                    sb.Append(mask[i]);
                }
                else if (mask[i].Equals('0'))
                {
                    sb.Append(binaryString[i]);
                }
                else if (mask[i].Equals('1'))
                {
                    sb.Append('1');
                }
            }

            string addressWithFloatingBits = sb.ToString();
            sb.Clear();

            int floatingBitCount = addressWithFloatingBits.Count(c => c == 'X');
            var result = new List<long>();
            var regex = new Regex("X");

            // Number of combinations is equal to 2 (because there are 2 possible values: 0 and 1) to the power of 'X's, e.g. 8 for two 'X's. 
            // When converted to binary and padded with leading zeros, subsequent integers (0 through 7 for two 'X's) will list all possible combinations for floating bits.
            for (int i = 0; i < Math.Pow(2, floatingBitCount); i++)
            {
                var currentMask = Convert.ToString(i, 2).PadLeft(floatingBitCount, '0');
                var maskedAddressWithFloatingBits = new StringBuilder(addressWithFloatingBits).ToString();
                
                foreach (var item in currentMask)
                {
                    maskedAddressWithFloatingBits = regex.Replace(maskedAddressWithFloatingBits, item.ToString(), 1);
                }

                result.Add((long)Convert.ToInt64(maskedAddressWithFloatingBits, 2));
            }

            return result;
        }
    }
}