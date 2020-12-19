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

        public static int CalculatePart2(List<string> instructions)
        {
            var manhattanDistance = 0;
            var shipCoords = new Coords(0, 0);
            var waypointCoords = new Coords(shipCoords.X + 10, shipCoords.Y + 1);

            foreach (var instruction in instructions)
            {
                int value = int.Parse(instruction.Substring(1));

                switch (instruction.Substring(0, 1))
                {
                    case "N":
                        waypointCoords.Y += value;
                        break;

                    case "E":
                        waypointCoords.X += value;
                        break;

                    case "S":
                        waypointCoords.Y -= value;
                        break;

                    case "W":
                        waypointCoords.X -= value;
                        break;

                    case "F":
                    shipCoords.X += value * waypointCoords.X;
                    shipCoords.Y += value * waypointCoords.Y;
                        break;
                }

                if (instruction == "R180" || instruction == "L180")
                {
                    waypointCoords.X = waypointCoords.X * -1;
                    waypointCoords.Y = waypointCoords.Y * -1;
                }

                if (instruction == "R90" || instruction == "L270")
                {
                    var tempX = waypointCoords.X;
                    waypointCoords.X = waypointCoords.Y;
                    waypointCoords.Y = tempX * -1;
                }

                if (instruction == "R270" || instruction == "L90")
                {
                    var tempX = waypointCoords.X;
                    waypointCoords.X = waypointCoords.Y * -1;
                    waypointCoords.Y = tempX;
                }
            }

            manhattanDistance = Math.Abs(shipCoords.X) + Math.Abs(shipCoords.Y);

            return manhattanDistance;
        }
    
    }
}