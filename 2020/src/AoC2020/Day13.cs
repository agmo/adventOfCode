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
    }
}