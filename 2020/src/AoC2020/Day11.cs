using System;
using System.Collections.Generic;

namespace AoC2020
{
    public static class Day11
    {
        public static int CalculatePart1(List<string> seatLayout)
        {
            var previousOccupiedSeats = -1;
            var chaosStablised = false;

            do
            {
                var currentSeatLayout = new List<string>(seatLayout);
                var currentOccupiedSeats = 0;

                for (int i = 0; i < seatLayout.Count; i++)
                {
                    for (int j = 0; j < seatLayout[i].Length; j++)
                    {
                        if (seatLayout[i][j].Equals('L') && CounAdjacentOccupiedSeats1(i, j, seatLayout) == 0)
                        {
                            char[] array = currentSeatLayout[i].ToCharArray();
                            array[j] = '#';
                            currentSeatLayout[i] = new string(array);
                        }

                        if (seatLayout[i][j].Equals('#'))
                        {
                            currentOccupiedSeats += 1;

                            if (CounAdjacentOccupiedSeats1(i, j, seatLayout) >= 4)
                            {
                                char[] array = currentSeatLayout[i].ToCharArray();
                                array[j] = 'L';
                                currentSeatLayout[i] = new string(array);
                            }
                        }
                    }
                }

                seatLayout = new List<string>(currentSeatLayout);

                if (currentOccupiedSeats != previousOccupiedSeats)
                {
                    previousOccupiedSeats = currentOccupiedSeats;
                }
                else
                {
                    chaosStablised = true;
                }

            }
            while (!chaosStablised);

            return previousOccupiedSeats;
        }

        public static int CalculatePart2(List<string> seatLayout)
        {
            var previousOccupiedSeats = -1;
            var chaosStablised = false;

            do
            {
                var currentSeatLayout = new List<string>(seatLayout);
                var currentOccupiedSeats = 0;

                for (int i = 0; i < seatLayout.Count; i++)
                {
                    for (int j = 0; j < seatLayout[i].Length; j++)
                    {
                        if (seatLayout[i][j].Equals('L') && CounAdjacentOccupiedSeats2(i, j, seatLayout) == 0)
                        {
                            char[] array = currentSeatLayout[i].ToCharArray();
                            array[j] = '#';
                            currentSeatLayout[i] = new string(array);
                        }

                        if (seatLayout[i][j].Equals('#'))
                        {
                            currentOccupiedSeats += 1;

                            if (CounAdjacentOccupiedSeats2(i, j, seatLayout) >= 5)
                            {
                                char[] array = currentSeatLayout[i].ToCharArray();
                                array[j] = 'L';
                                currentSeatLayout[i] = new string(array);
                            }
                        }
                    }
                }

                seatLayout = new List<string>(currentSeatLayout);

                if (currentOccupiedSeats != previousOccupiedSeats)
                {
                    previousOccupiedSeats = currentOccupiedSeats;
                }
                else
                {
                    chaosStablised = true;
                }

            }
            while (!chaosStablised);

            return previousOccupiedSeats;
        }

        private static int CounAdjacentOccupiedSeats1(int i, int j, List<string> seatLayout)
        {
            var count = 0;

            if (j + 1 < seatLayout[i].Length && seatLayout[i][j + 1].Equals('#'))
            {
                count += 1;
            }

            if (j - 1 >= 0 && seatLayout[i][j - 1].Equals('#'))
            {
                count += 1;
            }

            if (i - 1 >= 0 && seatLayout[i - 1][j].Equals('#'))
            {
                count += 1;
            }

            if (i + 1 < seatLayout.Count && seatLayout[i + 1][j].Equals('#'))
            {
                count += 1;
            }

            if (i + 1 < seatLayout.Count && j - 1 >= 0 && seatLayout[i + 1][j - 1].Equals('#'))
            {
                count += 1;
            }

            if (i + 1 < seatLayout.Count && j + 1 < seatLayout[i].Length && seatLayout[i + 1][j + 1].Equals('#'))
            {
                count += 1;
            }

            if (i - 1 >= 0 && j - 1 >= 0 && seatLayout[i - 1][j - 1].Equals('#'))
            {
                count += 1;
            }

            if (i - 1 >= 0 && j + 1 < seatLayout[i].Length && seatLayout[i - 1][j + 1].Equals('#'))
            {
                count += 1;
            }

            return count;
        }

        private static int CounAdjacentOccupiedSeats2(int i, int j, List<string> seatLayout)
        {
            var count = 0;
            // R
            for (int k = j + 1; k < seatLayout[i].Length; k++)
            {
                if (seatLayout[i][k].Equals('L'))
                {
                    break;
                }

                if (seatLayout[i][k].Equals('#'))
                {
                    count += 1;
                    break;
                }
            }

            // L
            for (int k = j - 1; k >= 0; k--)
            {
                if (seatLayout[i][k].Equals('L'))
                {
                    break;
                }

                if (seatLayout[i][k].Equals('#'))
                {
                    count += 1;
                    break;
                }
            }

            // T
            for (int k = i - 1; k >= 0; k--)
            {
                if (seatLayout[k][j].Equals('L'))
                {
                    break;
                }

                if (seatLayout[k][j].Equals('#'))
                {
                    count += 1;
                    break;
                }
            }

            // B
            for (int k = i + 1; k < seatLayout.Count; k++)
            {
                if (seatLayout[k][j].Equals('L'))
                {
                    break;
                }

                if (seatLayout[k][j].Equals('#'))
                {
                    count += 1;
                    break;
                }
            }

            // BL
            for (int k = i + 1, l = j - 1; k < seatLayout.Count && l >= 0; k++, l--)
            {
                if (seatLayout[k][l].Equals('L'))
                {
                    break;
                }

                if (seatLayout[k][l].Equals('#'))
                {
                    count += 1;
                    break;
                }
            }

            // BR
            for (int k = i + 1, l = j + 1; k < seatLayout.Count && l < seatLayout[i].Length; k++, l++)
            {
                if (seatLayout[k][l].Equals('L'))
                {
                    break;
                }

                if (seatLayout[k][l].Equals('#'))
                {
                    count += 1;
                    break;
                }
            }

            //TL
            for (int k = i - 1, l = j - 1; k >= 0 && l >= 0; k--, l--)
            {
                if (seatLayout[k][l].Equals('L'))
                {
                    break;
                }

                if (seatLayout[k][l].Equals('#'))
                {
                    count += 1;
                    break;
                }
            }

            // TR
            for (int k = i - 1, l = j + 1; k >= 0 && l < seatLayout[i].Length; k--, l++)
            {
                if (seatLayout[k][l].Equals('L'))
                {
                    break;
                }

                if (seatLayout[k][l].Equals('#'))
                {
                    count += 1;
                    break;
                }
            }

            return count;
        }
    }
}