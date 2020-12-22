using System.Collections.Generic;

namespace AoC2020
{
    public static class Day22
    {
        public static long CalculatePart1(List<string> input)
        {
            var player1 = new Queue<int>();
            var player2 = new Queue<int>();

            var i = 1;
            while (!input[i].StartsWith("Player 2"))
            {
                if (!string.IsNullOrEmpty(input[i]))
                {
                    player1.Enqueue(int.Parse(input[i]));
                }

                i++;
            }

            for (int j = i + 1; j < input.Count; j++)
            {
                player2.Enqueue(int.Parse(input[j]));
            }

            while (player1.Count > 0 && player2.Count > 0)
            {
                var player1Card = player1.Dequeue();
                var player2Card = player2.Dequeue();

                if (player1Card > player2Card)
                {
                    player1.Enqueue(player1Card);
                    player1.Enqueue(player2Card);
                }
                else
                {
                    player2.Enqueue(player2Card);
                    player2.Enqueue(player1Card);
                }
            }

            var winner = player1.Count > 0 ? player1 : player2;
            var score = 0;

            while (winner.Count > 0)
            {
                score += winner.Count * winner.Dequeue();
            }

            return score;
        }
    }
}