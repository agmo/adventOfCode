using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace AoC2020
{
    enum MatchTypes
    {
        Top,
        Right,
        Bottom,
        Left
    }
    public class Tile
    {
        public Tile(string tileId, List<string> tileData, Coords coords)
        {
            TileId = tileId;
            TileData = tileData;
            Coords = coords;
        }

        public string TileId { get; }
        public List<string> TileData { get; }

        public Coords Coords { get; }
    }

    public class WaterRoughnessData
    {
        public WaterRoughnessData(int totalHashes, int seaMonsterCount)
        {
            TotalHashes = totalHashes;
            SeaMonsterCount = seaMonsterCount;
        }

        public int TotalHashes { get; }
        public int SeaMonsterCount { get; }
    }
    public static class Day20
    {
        public static long CalculatePart1(List<string> input)
        {
            List<List<string>> tiles = ConvertToTiles(input);
            var queue = new Queue<Tile>();
            queue.Enqueue(new Tile(tiles[0][0], tiles[0].GetRange(1, tiles[0].Count - 1), new Coords(0, 0)));
            tiles.RemoveAt(0);
            var tileCoordsMap = new List<Tile>() { queue.Peek() };

            while (queue.Count > 0)
            {
                var current = queue.Dequeue();
                var positionsToCheck = Enum.GetNames(typeof(MatchTypes)).Length;

                for (int i = 0; i < positionsToCheck; i++)
                {
                    var match = FindMatches(current, (MatchTypes)i, tiles);

                    if (match.TileId != null)
                    {
                        queue.Enqueue(match);
                        tileCoordsMap.Add(match);
                    }
                }
            }

            var minX = int.MaxValue;
            var maxX = int.MinValue;
            var minY = int.MaxValue;
            var maxY = int.MinValue;

            foreach (var item in tileCoordsMap)
            {
                if (item.Coords.X < minX)
                {
                    minX = item.Coords.X;
                }

                if (item.Coords.X > maxX)
                {
                    maxX = item.Coords.X;
                }

                if (item.Coords.Y < minY)
                {
                    minY = item.Coords.Y;
                }

                if (item.Coords.Y > maxY)
                {
                    maxY = item.Coords.Y;
                }
            }

            var corner1Id = long.Parse(
                tileCoordsMap
                    .Find(item => item.Coords.X == maxX && item.Coords.Y == maxY)
                    .TileId
                    .Split(new string[] { "Tile ", ":" }, StringSplitOptions.None)[1]
                    .ToString()
                );
            var corner2Id = long.Parse(
                tileCoordsMap
                    .Find(item => item.Coords.X == maxX && item.Coords.Y == minY)
                    .TileId
                    .Split(new string[] { "Tile ", ":" }, StringSplitOptions.None)[1]
                    .ToString()
                );
            var corner3Id = long.Parse(
                tileCoordsMap
                    .Find(item => item.Coords.X == minX && item.Coords.Y == minY)
                    .TileId
                    .Split(new string[] { "Tile ", ":" }, StringSplitOptions.None)[1]
                    .ToString()
                );
            var corner4Id = long.Parse(
                tileCoordsMap
                    .Find(item => item.Coords.X == minX && item.Coords.Y == maxY)
                    .TileId
                    .Split(new string[] { "Tile ", ":" }, StringSplitOptions.None)[1]
                    .ToString()
                );

            return corner1Id * corner2Id * corner3Id * corner4Id;
        }

        public static long CalculatePart2(List<string> input)
        {
            List<List<string>> tiles = ConvertToTiles(input);
            var queue = new Queue<Tile>();
            queue.Enqueue(new Tile(tiles[0][0], tiles[0].GetRange(1, tiles[0].Count - 1), new Coords(0, 0)));
            tiles.RemoveAt(0);
            var tileCoordsMap = new List<Tile>() { queue.Peek() };

            while (queue.Count > 0)
            {
                var current = queue.Dequeue();
                var positionsToCheck = Enum.GetNames(typeof(MatchTypes)).Length;

                for (int i = 0; i < positionsToCheck; i++)
                {
                    var match = FindMatches(current, (MatchTypes)i, tiles);

                    if (match.TileId != null)
                    {
                        queue.Enqueue(match);
                        tileCoordsMap.Add(match);
                    }
                }
            }

            var minX = int.MaxValue;
            var maxX = int.MinValue;
            var minY = int.MaxValue;
            var maxY = int.MinValue;

            foreach (var item in tileCoordsMap)
            {
                if (item.Coords.X < minX)
                {
                    minX = item.Coords.X;
                }

                if (item.Coords.X > maxX)
                {
                    maxX = item.Coords.X;
                }

                if (item.Coords.Y < minY)
                {
                    minY = item.Coords.Y;
                }

                if (item.Coords.Y > maxY)
                {
                    maxY = item.Coords.Y;
                }
            }

            var image = MergeIntoImage(RemoveBorders(tileCoordsMap), minX, maxX, minY, maxY);
            var monsterHashCount = 15;
            long result = 0;

            foreach (var method in methodsToCall)
            {
                var processedImage = method.Invoke(image);
                var waterRoughnessData = FindSeaMonsters(processedImage);

                if (waterRoughnessData.SeaMonsterCount > 0)
                {
                    result = waterRoughnessData.TotalHashes - waterRoughnessData.SeaMonsterCount * monsterHashCount;
                    break;

                }
            }

            return result;
        }

        private static WaterRoughnessData FindSeaMonsters(List<string> image)
        {
            // Sea Monster:
            //                   #  
            // #    ##    ##    ### (regex Body)
            //  #  #  #  #  #  #    (regex Feet)

            var monsterCount = 0;
            var hashCount = 0;

            for (int i = 0; i < image.Count; i++)
            {
                hashCount += image[i].Count(c => c == '#');

                if (i == 0 || i == image.Count - 1)
                {
                    continue;
                }

                var seaMonsterBodyRegex = new Regex("(#.{4}##.{4}##.{4}###)");
                var bodyMatches = seaMonsterBodyRegex.Matches(image[i]);

                if (bodyMatches.Count == 0)
                {
                    continue;
                }

                foreach (Match bodyMatch in bodyMatches)
                {
                    var seaMonsterFeetRegex = new Regex("(#.{2}#.{2}#.{2}#.{2}#.{2}#)");
                    var feetMatch = seaMonsterFeetRegex.Match(image[i + 1].Substring(bodyMatch.Index + 1, 16));

                    if (!feetMatch.Success)
                    {
                        continue;
                    }

                    var headMatch = image[i - 1][bodyMatch.Index + 18] == '#';

                    if (headMatch)
                    {
                        monsterCount += 1;
                    }
                }
            }

            return new WaterRoughnessData(hashCount, monsterCount);
        }

        private static List<Tile> RemoveBorders(List<Tile> tileCoordsMap)
        {
            foreach (var tile in tileCoordsMap)
            {
                tile.TileData.RemoveAt(0);
                tile.TileData.RemoveAt(tile.TileData.Count - 1);

                for (int i = 0; i < tile.TileData.Count; i++)
                {
                    var row = tile.TileData[i];
                    tile.TileData[i] = row.Substring(1, row.Length - 2);
                }
            }

            return tileCoordsMap;
        }

        private static List<string> MergeIntoImage(List<Tile> tileCoordsMap, int minX, int maxX, int minY, int maxY)
        {
            var image = new List<string>();

            for (int i = minX; i <= maxX; i++)
            {
                for (int j = maxY, k = 0; j >= minY; j--, k++)
                {
                    var currentTile = tileCoordsMap.Find(item => item.Coords.X == i && item.Coords.Y == j);

                    for (int l = 0; l < currentTile.TileData.Count; l++)
                    {
                        var addAtIndex = currentTile.TileData.Count * k + l;

                        try
                        {
                            image[addAtIndex] = image[addAtIndex] += currentTile.TileData[l];
                        }
                        catch (System.Exception)
                        {

                            image.Add(currentTile.TileData[l]);
                        }
                    }
                }
            }

            return image;
        }

        private static List<string> FlipVertically(List<string> tile)
        {
            // 0 1 4  9    2 3 6 11
            // 1 2 5 10 -> 1 2 5 10
            // 2 3 6 11    0 1 4  9 

            var result = new List<string>();

            for (int i = tile.Count - 1; i >= 0; i--)
            {
                result.Add(tile[i]);
            }

            // Console.WriteLine("Flipped V:");
            // foreach (var item in result)
            // {
            //     Console.WriteLine(item);
            // }

            return result;
        }

        private static List<string> FlipHorizontally(List<string> tile)
        {
            // 0 1 4  9     9 4 1 0
            // 1 2 5 10 -> 10 5 2 1
            // 2 3 6 11    11 6 3 2 

            var result = new List<string>();

            foreach (var item in tile)
            {
                result.Add(Reverse(item));
            }

            // Console.WriteLine("Flipped H:");
            // foreach (var item in result)
            // {
            //     Console.WriteLine(item);
            // }

            return result;
        }

        private static List<string> FlipHorizontallyAndRotateClockwise(List<string> tile)
        {
            return Rotate90Clockwise(FlipHorizontally(tile));
        }

        private static List<string> FlipHorizontallyAndRotateAntiClockwise(List<string> tile)
        {
            return Rotate90Anticlockwise(FlipHorizontally(tile));
        }

        private static List<string> Rotate90Clockwise(List<string> tile)
        {
            var result = new List<string>();

            for (int i = 0; i < tile[0].Length; i++)
            {
                StringBuilder rowAfterRotation = new StringBuilder();

                for (int j = tile.Count - 1; j >= 0; j--)
                {
                    rowAfterRotation.Append(tile[j][i]);
                }

                result.Add(rowAfterRotation.ToString());
            }

            // Console.WriteLine("Rotated 90 R:");
            // foreach (var item in result)
            // {
            //     Console.WriteLine(item);
            // }

            return result;
        }

        private static List<string> Rotate90Anticlockwise(List<string> tile)
        {
            var result = new List<string>();

            for (int i = tile[0].Length - 1; i >= 0; i--)
            {
                StringBuilder rowAfterRotation = new StringBuilder();

                for (int j = 0; j < tile.Count; j++)
                {
                    rowAfterRotation.Append(tile[j][i]);
                }

                result.Add(rowAfterRotation.ToString());
            }

            // Console.WriteLine("Rotated 90 L:");
            // foreach (var item in result)
            // {
            //     Console.WriteLine(item);
            // }

            return result;
        }

        private static List<string> Rotate180(List<string> tile)
        {
            var result = new List<string>();

            foreach (var item in tile)
            {
                result.Insert(0, Reverse(item));
            }

            // Console.WriteLine("Rotated 180:");
            // foreach (var item in result)
            // {
            //     Console.WriteLine(item);
            // }

            return result;
        }

        private static string Reverse(string s)
        {
            char[] charArray = s.ToCharArray();
            Array.Reverse(charArray);

            return new string(charArray);
        }

        private static bool IsMatchedRight(List<string> tileA, List<string> tileB)
        {
            var result = true;

            for (int i = 0; i < tileA.Count; i++)
            {
                var lastA = tileA[i].Substring(tileA[i].Length - 1);
                var firstB = tileB[i].Substring(0, 1);

                if (lastA != firstB)
                {
                    result = false;
                    break;
                }
            }

            return result;
        }

        private static bool IsMatchedLeft(List<string> tileA, List<string> tileB)
        {
            var result = true;

            for (int i = 0; i < tileA.Count; i++)
            {
                var firstA = tileA[i].Substring(0, 1);
                var lastB = tileB[i].Substring(tileB[i].Length - 1);

                if (firstA != lastB)
                {
                    result = false;
                    break;
                }
            }

            return result;
        }

        private static bool IsMatchedTop(List<string> tileA, List<string> tileB)
        {
            return tileA[0] == tileB[tileB.Count - 1];
        }

        private static bool IsMatchedBottom(List<string> tileA, List<string> tileB)
        {
            return tileA[tileA.Count - 1] == tileB[0];
        }

        private static Tile FindMatches(Tile currentTile, MatchTypes matchType, List<List<string>> tiles)
        {
            var tileAData = currentTile.TileData;
            List<string> matchedTileData = null;
            string matchedTileId = null;

            for (int i = 0; i < tiles.Count; i++)
            {
                var tileB = tiles[i];
                var tileBData = tileB.GetRange(1, tiles[i].Count - 1);

                if (matchType == MatchTypes.Top)
                {
                    if (IsMatchedTop(tileAData, tileBData))
                    {
                        matchedTileData = tileBData;
                        matchedTileId = tileB[0];
                        tiles.RemoveAt(i);
                        break;
                    }
                    else
                    {
                        for (int k = 0; k < methodsToCall.Count; k++)
                        {
                            var processedTileBData = methodsToCall[k].Invoke(tileBData);

                            if (IsMatchedTop(tileAData, processedTileBData))
                            {
                                matchedTileData = processedTileBData;
                                matchedTileId = tileB[0];
                                tiles.RemoveAt(i);
                                break;
                            }
                        }
                    }
                }

                if (matchType == MatchTypes.Right)
                {
                    if (IsMatchedRight(tileAData, tileBData))
                    {
                        matchedTileData = tileBData;
                        matchedTileId = tileB[0];
                        tiles.RemoveAt(i);
                        break;
                    }
                    else
                    {
                        for (int k = 0; k < methodsToCall.Count; k++)
                        {
                            var processedTileBData = methodsToCall[k].Invoke(tileBData);

                            if (IsMatchedRight(tileAData, processedTileBData))
                            {
                                matchedTileData = processedTileBData;
                                matchedTileId = tileB[0];
                                tiles.RemoveAt(i);
                                break;
                            }
                        }
                    }
                }

                if (matchType == MatchTypes.Left)
                {
                    if (IsMatchedLeft(tileAData, tileBData))
                    {
                        matchedTileData = tileBData;
                        matchedTileId = tileB[0];
                        tiles.RemoveAt(i);
                        break;
                    }
                    else
                    {
                        for (int k = 0; k < methodsToCall.Count; k++)
                        {
                            var processedTileBData = methodsToCall[k].Invoke(tileBData);

                            if (IsMatchedLeft(tileAData, processedTileBData))
                            {
                                matchedTileData = processedTileBData;
                                matchedTileId = tileB[0];
                                tiles.RemoveAt(i);
                                break;
                            }
                        }
                    }
                }

                if (matchType == MatchTypes.Bottom)
                {
                    if (IsMatchedBottom(tileAData, tileBData))
                    {
                        matchedTileData = tileBData;
                        matchedTileId = tileB[0];
                        tiles.RemoveAt(i);
                    }
                    else
                    {
                        for (int k = 0; k < methodsToCall.Count; k++)
                        {
                            var processedTileB = methodsToCall[k].Invoke(tileBData);

                            if (IsMatchedBottom(tileAData, processedTileB))
                            {
                                matchedTileData = processedTileB;
                                matchedTileId = tileB[0];
                                tiles.RemoveAt(i);
                                break;
                            }
                        }
                    }
                }
            }

            var resultCoords = new Coords();

            switch (matchType)
            {
                case MatchTypes.Top:
                    resultCoords.X = currentTile.Coords.X;
                    resultCoords.Y = currentTile.Coords.Y + 1;
                    break;
                case MatchTypes.Right:
                    resultCoords.X = currentTile.Coords.X + 1;
                    resultCoords.Y = currentTile.Coords.Y;
                    break;
                case MatchTypes.Bottom:
                    resultCoords.X = currentTile.Coords.X;
                    resultCoords.Y = currentTile.Coords.Y - 1;
                    break;
                case MatchTypes.Left:
                    resultCoords.X = currentTile.Coords.X - 1;
                    resultCoords.Y = currentTile.Coords.Y;
                    break;
            }



            if (matchedTileData != null)
            {
                return new Tile(matchedTileId, matchedTileData, resultCoords);
            }
            else
            {
                return new Tile(null, null, resultCoords);
            }
        }
        private static List<List<string>> ConvertToTiles(List<string> input)
        {
            var result = new List<List<string>>();
            var currentTile = new List<string>();

            foreach (var item in input)
            {
                if (String.IsNullOrEmpty(item))
                {
                    continue;
                }

                if (currentTile.Count > 0 && item.StartsWith("Tile"))
                {
                    result.Add(currentTile.GetRange(0, currentTile.Count));
                    currentTile.Clear();
                }

                currentTile.Add(item);
            }

            result.Add(currentTile);

            return result;
        }

        private static List<Func<List<string>, List<string>>> methodsToCall = new List<Func<List<string>, List<string>>>() {
            Rotate90Clockwise,
            Rotate90Anticlockwise,
            Rotate180,
            FlipVertically,
            FlipHorizontally,
            FlipHorizontallyAndRotateClockwise,
            FlipHorizontallyAndRotateAntiClockwise
        };
    }
}