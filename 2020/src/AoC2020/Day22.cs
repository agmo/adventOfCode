using System;
using System.Collections.Generic;

namespace AoC2020
{
    enum Players
    {
        Player1 = 1,
        Player2 = 2
    }

    class Winner
    {
        public Winner(Players winnerName, Queue<int> winnerHand)
        {
            WinnerName = winnerName;
            WinnerHand = winnerHand;
        }

        public Players WinnerName { get; }
        public Queue<int> WinnerHand { get; }
    }
    public static class Day22
    {
        public static long CalculatePart1(List<string> input)
        {
            var player1Hand = new Queue<int>();
            var player2Hand = new Queue<int>();

            var i = 1;
            while (!input[i].StartsWith("Player 2"))
            {
                if (!string.IsNullOrEmpty(input[i]))
                {
                    player1Hand.Enqueue(int.Parse(input[i]));
                }

                i++;
            }

            for (int j = i + 1; j < input.Count; j++)
            {
                player2Hand.Enqueue(int.Parse(input[j]));
            }

            while (player1Hand.Count > 0 && player2Hand.Count > 0)
            {
                var player1Card = player1Hand.Dequeue();
                var player2Card = player2Hand.Dequeue();

                if (player1Card > player2Card)
                {
                    player1Hand.Enqueue(player1Card);
                    player1Hand.Enqueue(player2Card);
                }
                else
                {
                    player2Hand.Enqueue(player2Card);
                    player2Hand.Enqueue(player1Card);
                }
            }

            var winner = player1Hand.Count > 0 ? player1Hand : player2Hand;
            var score = 0;

            while (winner.Count > 0)
            {
                score += winner.Count * winner.Dequeue();
            }

            return score;
        }

        public static long CalculatePart2(List<string> input)
        {
            var player1Hand = new Queue<int>();
            var player2Hand = new Queue<int>();

            var i = 1;
            while (!input[i].StartsWith("Player 2"))
            {
                if (!string.IsNullOrEmpty(input[i]))
                {
                    player1Hand.Enqueue(int.Parse(input[i]));
                }

                i++;
            }

            for (int j = i + 1; j < input.Count; j++)
            {
                player2Hand.Enqueue(int.Parse(input[j]));
            }

            var winner = PlayRecursiveCombat(player1Hand, player2Hand);
            var score = 0;

            while (winner.WinnerHand.Count > 0)
            {
                score += winner.WinnerHand.Count * winner.WinnerHand.Dequeue();
            }

            return score;
        }
        private static Winner PlayRecursiveCombat(Queue<int> player1Hand, Queue<int> player2Hand)
        {
            var gameCache = new Dictionary<Players, List<string>>();
            gameCache.Add(Players.Player1, new List<string>());
            gameCache.Add(Players.Player2, new List<string>());

            while (player1Hand.Count > 0 && player2Hand.Count > 0)
            {
                Winner subGameWinner;
                var player1Cache = gameCache[Players.Player1];
                var player2Cache = gameCache[Players.Player2];
                var player1CurrentCardsCache = string.Join(",", player1Hand);
                var player2CurrentCardsCache = string.Join(",", player2Hand);
                int player1Card = -1;
                int player2Card = -1;

                if (player1Cache.Count > 0 && player1Cache.Contains(player1CurrentCardsCache) ||
                    player2Cache.Count > 0 && player2Cache.Contains(player2CurrentCardsCache))
                {
                    return new Winner(Players.Player1, player1Hand);
                }
                else
                {
                    gameCache[Players.Player1].Add(player1CurrentCardsCache);
                    gameCache[Players.Player2].Add(player2CurrentCardsCache);

                    player1Card = player1Hand.Dequeue();
                    player2Card = player2Hand.Dequeue();

                    if (player1Hand.Count >= player1Card && player2Hand.Count >= player2Card)
                    {
                        var player1SubGameHand = new Queue<int>();
                        var player1SubGameHandArr = player1Hand.ToArray();

                        for (int i = 0; i < player1Card; i++)
                        {
                            player1SubGameHand.Enqueue(player1SubGameHandArr[i]);
                        }

                        var player2SubGameHand = new Queue<int>();
                        var player2SubGameHandArr = player2Hand.ToArray();

                        for (int i = 0; i < player2Card; i++)
                        {
                            player2SubGameHand.Enqueue(player2SubGameHandArr[i]);
                        }

                        subGameWinner = PlayRecursiveCombat(player1SubGameHand, player2SubGameHand);
                    }
                    else
                    {
                        subGameWinner = new Winner(
                            player1Card > player2Card ? Players.Player1 : Players.Player2,
                            player1Card > player2Card ? player1Hand : player2Hand
                            );
                    }
                }

                if (subGameWinner.WinnerName == Players.Player1)
                {
                    player1Hand.Enqueue(player1Card);
                    player1Hand.Enqueue(player2Card);
                }
                else
                {
                    player2Hand.Enqueue(player2Card);
                    player2Hand.Enqueue(player1Card);
                }
            }

            var winningPlayer = player1Hand.Count > 0 ? Players.Player1 : Players.Player2;
            var winningPlayerHand = player1Hand.Count > 0 ? player1Hand : player2Hand;

            return new Winner(winningPlayer, winningPlayerHand);
        }
    }
}