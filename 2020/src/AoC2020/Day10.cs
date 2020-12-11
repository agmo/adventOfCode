using System;
using System.Collections.Generic;
using System.Linq;

namespace AoC2020
{
    public class Vertice
    {
        public List<int> Parents { get; set; }
        public List<int> Children { get; set; }
        public long PathCount { get; set; }

        public Vertice()
        {
            Parents = new List<int>();
            Children = new List<int>();
        }
    }
    public static class Day10
    {
        public static int CalculatePart1(List<string> joltages)
        {
            var convertedJoltages = joltages.Select(x => int.Parse(x)).ToList();
            convertedJoltages.Sort();
            var initialRating = 0;
            convertedJoltages.Insert(0, initialRating);
            var oneJoltDiffCount = 0;
            var threeJoltDiffCount = 1;

            for (int i = 1; i < convertedJoltages.Count; i++)
            {
                if (convertedJoltages[i] - convertedJoltages[i - 1] == 1)
                {
                    oneJoltDiffCount += 1;
                }

                if (convertedJoltages[i] - convertedJoltages[i - 1] == 3)
                {
                    threeJoltDiffCount += 1;
                }
            }

            return oneJoltDiffCount * threeJoltDiffCount;
        }

        // Part 2 implements the algorithm to find the total number of paths in a directed acyclic graph
        // as outlined in https://www.academia.edu/35790494/ALGORITHM_TO_FIND_TOTAL_NUMBER_OF_PATHS_IN_DIRECTED_ACYCLIC_GRAPH
        public static long CalculatePart2(List<string> joltages)
        {
            var convertedJoltages = joltages.Select(x => int.Parse(x)).ToList();
            convertedJoltages.Sort();
            var initialRating = 0;
            convertedJoltages.Insert(0, initialRating);
            var maxJoltDiff = 3;
            convertedJoltages.Insert(joltages.Count + 1, convertedJoltages[joltages.Count] + maxJoltDiff);

            for (int i = 0; i < convertedJoltages.Count; i++)
            {
                vertices.Add(convertedJoltages[i], new Vertice());
            }

            for (int i = 0; i < convertedJoltages.Count; i++)
            {
                var j = i + 1;

                while (j < convertedJoltages.Count && convertedJoltages[j] - convertedJoltages[i] <= 3)
                {
                    vertices[convertedJoltages[i]].Children.Add(convertedJoltages[j]);

                    if (!vertices[convertedJoltages[j]].Parents.Contains(convertedJoltages[i]))
                    {
                        vertices[convertedJoltages[j]].Parents.Add(convertedJoltages[i]);
                    }

                    j += 1;
                }
            }

            var first = convertedJoltages[0];
            var last = convertedJoltages[convertedJoltages.Count - 1];

            Queue<int> queueOfVerticesToProcess = new Queue<int>();
            queueOfVerticesToProcess.Enqueue(last);
            int current = last;
            vertices[last].PathCount = 1;

            while (queueOfVerticesToProcess.Count > 0)
            {
                current = queueOfVerticesToProcess.Dequeue();

                for (int i = vertices[current].Parents.Count - 1; i >= 0; i--)
                {
                    var start = vertices[current].Parents[i];
                    RemoveConnection(start, current);
                    vertices[start].PathCount += vertices[current].PathCount;

                    if (vertices[start].Children.Count == 0)
                    {
                        queueOfVerticesToProcess.Enqueue(start);
                    }
                }
            }

            return vertices[first].PathCount;
        }

        private static void RemoveConnection(int start, int end)
        {
            vertices[start].Children.Remove(end);
            vertices[end].Parents.Remove(start);
        }
        private static Dictionary<int, Vertice> vertices = new Dictionary<int, Vertice>();
    }
}
