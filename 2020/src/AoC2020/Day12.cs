using System;
using System.Collections.Generic;

namespace AoC2020
{
    enum Directions
    {
        North,
        East,
        South,
        West
    }

    public struct Coords
    {
        public Coords(int x, int y)
        {
            X = x;
            Y = y;
        }

        public int X { get; set; }
        public int Y { get; set; }
    }
    public static class Day12
    {
        public static int CalculatePart1(List<string> instructions)
        {
            var manhattanDistance = 0;
            var currentDirection = Directions.East;
            var coords = new Coords(0, 0);

            foreach (var instruction in instructions)
            {
                int value = int.Parse(instruction.Substring(1));

                switch (instruction.Substring(0, 1))
                {
                    case "N":
                        coords.Y += value;
                        break;

                    case "E":
                        coords.X += value;
                        break;

                    case "S":
                        coords.Y -= value;
                        break;

                    case "W":
                        coords.X -= value;
                        break;

                    case "F":
                        if (currentDirection == Directions.North)
                        {
                            coords.Y += value;
                        }

                        if (currentDirection == Directions.East)
                        {
                            coords.X += value;
                        }

                        if (currentDirection == Directions.South)
                        {
                            coords.Y -= value;
                        }

                        if (currentDirection == Directions.West)
                        {
                            coords.X -= value;
                        }
                        break;

                    case "R":
                        currentDirection = (Directions)(((int)currentDirection + value / 90) % 4);
                        break;

                    case "L":
                        currentDirection = (Directions)(((int)currentDirection + (360 - value) / 90) % 4);
                        break;
                }
            }

            manhattanDistance = Math.Abs(coords.X) + Math.Abs(coords.Y);

            return manhattanDistance;
        }
    }
}