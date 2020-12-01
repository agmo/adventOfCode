using System.Collections.Generic;
using System.IO;

namespace AoC2020
{
    public static class AoCHelper
    {
        public static List<int> GetPuzzleInput(int day)
        {
            var paths = new string[] {"puzzle_inputs", $"day{day}.txt"};
            var fullPath = Path.Combine(paths);
            var result = new List<int>();
            
            using (var reader = File.OpenText(fullPath))
            {
                var line = reader.ReadLine();

                while (line != null)
                {
                    var number = int.Parse(line);
                    result.Add(number);
                    line = reader.ReadLine();
                }
            }

            return result;
        }
    } 
}