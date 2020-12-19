using System.Collections.Generic;
using System.IO;

namespace AoC2020
{
    public static class AoCHelper
    {
        public static List<string> GetPuzzleInput(int day)
        {
            var paths = new string[] {"puzzle_inputs", $"day{day}_example.txt"};
            // var paths = new string[] {"puzzle_inputs", $"day{day}_example2.txt"};
            // var paths = new string[] {"puzzle_inputs", $"day{day}.txt"};
            var fullPath = Path.Combine(paths);
            var result = new List<string>();
            
            using (var reader = File.OpenText(fullPath))
            {
                var line = reader.ReadLine();

                while (line != null)
                {
                    result.Add(line);
                    line = reader.ReadLine();
                }
            }

            return result;
        }
    } 
}