using System;
using System.Collections.Generic;
using System.Linq;

namespace AoC2020
{
    public static class Day13
    {
        public static int CalculatePart1(List<string> notes)
        {
            int earliestTimestampEstimate = int.Parse(notes[0]);
            List<int> busIds = notes[1].Split(new[] { ',', 'x' }, StringSplitOptions.RemoveEmptyEntries).Select(x => int.Parse(x)).ToList();
            var shortestWaitingTimeInMinutes = int.MaxValue;
            var earliestBusId = -1;

            foreach (var busId in busIds)
            {
                var busDepartsNow = earliestTimestampEstimate % busId == 0;

                if (busDepartsNow)
                {
                    shortestWaitingTimeInMinutes = 0;
                    earliestBusId = busId;
                    break;
                }

                var currentWaitingTime = busId * ((int)(earliestTimestampEstimate / busId) + 1);

                if ((int)currentWaitingTime - earliestTimestampEstimate < shortestWaitingTimeInMinutes)
                {
                    shortestWaitingTimeInMinutes = (int)currentWaitingTime - earliestTimestampEstimate;
                    earliestBusId = busId;
                }
            }

            return shortestWaitingTimeInMinutes * earliestBusId;
        }

        public static ulong CalculatePart2(List<string> notes)
        {
            Dictionary<int, int> busDepartureRestrictions = new Dictionary<int, int>();
            int rarestRunningBusId = int.MinValue;
            int rarestRunningBusTimestampOffset = -1;
            List<string> busIds = notes[1].Split(',').ToList();

            for (int i = 0; i < busIds.Count; i++)
            {
                if (!busIds[i].Equals("x"))
                {
                    int currentBusId = int.Parse(busIds[i]);
                    busDepartureRestrictions.Add(currentBusId, i);

                    if (currentBusId > rarestRunningBusId)
                    {
                        rarestRunningBusId = currentBusId;
                        rarestRunningBusTimestampOffset = i;
                    }
                }
            }

            busDepartureRestrictions.Remove(rarestRunningBusId);

            var sortedBusIds = busDepartureRestrictions.Keys.ToList();
            sortedBusIds.Sort((a, b) => b.CompareTo(a));
            var sortedBusIdArr = sortedBusIds.ToArray();

            var matchFound = false;
            ulong earliestTimestamp = (ulong)rarestRunningBusId;

            while (!matchFound)
            {
                var allMatched = true;
                ulong currentTimestamp = earliestTimestamp - (ulong)rarestRunningBusTimestampOffset;
                ulong currentStep = 1;

                for (int i = 0; i < sortedBusIdArr.Length; i++)
                {
                    if ((currentTimestamp + (ulong)busDepartureRestrictions[sortedBusIdArr[i]]) % (ulong)sortedBusIdArr[i] != 0)
                    {
                        allMatched = false;
                        break;
                    }
                    else
                    {
                        currentStep *= (ulong)sortedBusIdArr[i];
                    }
                }

                if (allMatched)
                {
                    matchFound = true;
                    earliestTimestamp = currentTimestamp;
                }
                else
                {
                    earliestTimestamp += (ulong)rarestRunningBusId * (ulong)currentStep;
                }
            }

            return earliestTimestamp;
        }
    }
}