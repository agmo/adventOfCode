using System.Collections.Generic;

namespace AoC2020
{
    public static class Day15
    {
        public static int CalculateDay15(int[] startingNumbers, int turnCount)
        {
            var lastSpokenNumber = -1;

            for (int i = 0; i < startingNumbers.Length; i++)
            {
                _cache.Add(startingNumbers[i], new List<int>() {i + 1});

                if (i == startingNumbers.Length - 1)
                {
                    lastSpokenNumber = startingNumbers[i];
                }
            }

            for (int i = startingNumbers.Length + 1; i <= turnCount; i++)
            {
                if (IsNumberSpokenFirstTime(lastSpokenNumber))
                {
                    AddToCache(0, i);
                    lastSpokenNumber = 0;
                }
                else
                {
                    var diff = _cache[lastSpokenNumber][0] - _cache[lastSpokenNumber][1];
                    AddToCache(diff, i);
                    lastSpokenNumber = diff;
                }
            }

            _cache.Clear();

            return lastSpokenNumber;
        }

        private static void AddToCache(int number, int turn)
        {
            if (_cache.ContainsKey(number))
            {
                _cache[number].Insert(0, turn);
                
                if (_cache[number].Count > 2)
                {
                    _cache[number].RemoveAt(_cache[number].Count - 1);
                }
            }
            else
            {
                _cache.Add(number, new List<int>() {turn});
            }
        }
        private static bool IsNumberSpokenFirstTime(int number)
        {
            var temp = !_cache.ContainsKey(number) || _cache[number].Count == 1;
            return temp;
        }

        private static Dictionary<int, List<int>> _cache = new Dictionary<int, List<int>>();
    }
}