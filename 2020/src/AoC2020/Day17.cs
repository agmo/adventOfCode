using System;
using System.Collections.Generic;

namespace AoC2020
{
    public struct XYZCoords
    {
        public XYZCoords(int x, int y, int z)
        {
            X = x;
            Y = y;
            Z = z;
        }

        public int X { get; }
        public int Y { get; }
        public int Z { get; }
    }
    public static class Day17
    {
        public static int CalculatePart1(List<string> initialState)
        {
            var coords = new Dictionary<XYZCoords, char>();

            for (int i = 0, y = initialState.Count - 1; i < initialState.Count; i++, y--)
            {
                for (int j = 0, x = 0; j < initialState.Count; j++, x++)
                {
                    coords.Add(new XYZCoords(x, y, 0), initialState[i][j]);
                }
            }

            var cyclesToPerform = 6;

            for (int cycle = 1; cycle <= cyclesToPerform; cycle++)
            {
                // Expand z-coordinates:
                for (int y = initialState.Count + cycle - 2; y >= (cycle - 1) * -1; y--)
                {
                    for (int x = (cycle - 1) * -1; x < initialState.Count + cycle - 1; x++)
                    {
                        coords.Add(new XYZCoords(x, y, cycle * -1), '.');
                        coords.Add(new XYZCoords(x, y, cycle), '.');
                    }
                }

                // Expand current region by an extra coordinate on each side: 
                var minX = cycle * -1;
                var maxY = initialState.Count + cycle - 1;
                var sides = 4;

                for (int i = 0, x = minX, y = maxY; i < (initialState.Count + cycle * 2) * sides - 4; i++)
                {
                    for (int z = cycle * -1; z <= cycle; z++)
                    {
                        coords.Add(new XYZCoords(x, y, z), '.');
                    }

                    if (x < maxY && y == maxY)
                    {
                        x++;
                    }
                    else if (x == maxY && y > minX)
                    {
                        y--;
                    }
                    else if (x > minX && y == minX)
                    {
                        x--;
                    }
                    else if (x == minX && y < maxY)
                    {
                        y++;
                    }
                }

                var postCycleCoords = new Dictionary<XYZCoords, char>(coords);

                foreach (var cube in coords)
                {
                    var activeNeighbourCount = 0;
                    var neigh = 1;

                    for (int x = cube.Key.X - 1; x <= cube.Key.X + 1; x++)
                    {
                        for (int y = cube.Key.Y - 1; y <= cube.Key.Y + 1; y++)
                        {
                            for (int z = cube.Key.Z - 1; z <= cube.Key.Z + 1; z++)
                            {
                                if (x == cube.Key.X && y == cube.Key.Y && z == cube.Key.Z)
                                {
                                    continue;
                                }
                                neigh++;

                                if (coords.ContainsKey(new XYZCoords(x, y, z)) && coords[new XYZCoords(x, y, z)] == '#')
                                {
                                    activeNeighbourCount += 1;
                                }
                            }
                        }
                    }

                    if (cube.Value == '#' && (activeNeighbourCount < 2 || activeNeighbourCount > 3))
                    {
                        postCycleCoords[cube.Key] = '.';
                    }
                    else if (cube.Value == '.' && activeNeighbourCount == 3)
                    {
                        postCycleCoords[cube.Key] = '#';
                    }
                }

                coords = new Dictionary<XYZCoords, char>(postCycleCoords);
                // Uncomment to output results to the console:
                // DrawPart1FinalState(cycle, coords);
            }

            var totalActive = 0;

            foreach (var item in coords)
            {
                if (item.Value == '#')
                {
                    totalActive++;
                }
            }

            return totalActive;
        }

        private static void DrawPart1FinalState(int cycle, Dictionary<XYZCoords, char> coords)
        {
            var cycles = 6;

            Console.WriteLine($"Cycle {cycle}");
            for (int z = cycles * -1; z <= cycles; z++)
            {
                Console.WriteLine($"z {z}");
                for (int i = 0, y = 13; i < 20; i++, y--)
                {
                    var line = "";
                    for (int j = 0, x = -6; j < 20; j++, x++)
                    {
                        if (coords.ContainsKey(new XYZCoords(x, y, z)))
                        {
                            line = line + coords[new XYZCoords(x, y, z)];
                        }
                        else
                        {
                            line = line + " ";
                        }
                    }
                    Console.WriteLine(line);
                }
            }
        }
    }
}