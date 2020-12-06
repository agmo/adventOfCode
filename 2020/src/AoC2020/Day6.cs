using System;
using System.Collections.Generic;

namespace AoC2020
{
    public static class Day6
    {
        public static int CalculatePart1(List<string> answers)
        {
            var groupAnswers = new Dictionary<char, int>();
            var totalAnswers = 0;

            for (int i = 0; i < answers.Count; i++)
            {
                bool isEndOfGroup = i + 1 == answers.Count || answers[i + 1].Length == 0;

                foreach (var answer in answers[i])
                {
                    if (groupAnswers.ContainsKey(answer))
                    {
                        groupAnswers[answer] += 1;
                    }
                    else
                    {
                        groupAnswers.Add(answer, 1);
                    }
                }

                if (isEndOfGroup)
                {
                    totalAnswers += groupAnswers.Count;
                    groupAnswers.Clear();
                    i++;
                }
            }

            return totalAnswers;
        }

        public static int CalculatePart2(List<string> answers)
        {
            var groupAnswers = new Dictionary<char, int>();
            var groupCount = 0;
            var totalAnswers = 0;

            for (int i = 0; i < answers.Count; i++)
            {
                bool isEndOfGroup = i + 1 == answers.Count || answers[i + 1].Length == 0;
                groupCount += 1;

                foreach (var answer in answers[i])
                {
                    if (groupAnswers.ContainsKey(answer))
                    {
                        groupAnswers[answer] += 1;
                    }
                    else
                    {
                        groupAnswers.Add(answer, 1);
                    }
                }

                if (isEndOfGroup)
                {
                    foreach (KeyValuePair<char, int> kvp in groupAnswers)
                    {
                        if (kvp.Value == groupCount)
                        {
                            totalAnswers += 1;
                        }
                    }

                    groupAnswers.Clear();
                    groupCount = 0;
                    i++;
                }
            }

            return totalAnswers;
        }
    }
}