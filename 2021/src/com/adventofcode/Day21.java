package com.adventofcode;

public class Day21 {
    public static long calculatePart1() {
        int playerOnePosition = 10;
        int playerTwoPosition = 4;
        int playerOneScore = 0;
        int playerTwoScore = 0;
        int die = 0;
        int dieRolls = 0;

        while (true) {
            die = (die + 3) % 100;
            dieRolls += 3;
            // Sum of consecutive numbers formula:
            // (n / 2) * (first number + last number) = sum,
            // where n is the number of integers
            // Here, there are always 3 numbers, so it's simplified.
            int playerOneMoves = (int) (1.5 * (die - 2 + die));
            int newPlayerOnePosition = (playerOnePosition + playerOneMoves) % 10;
            playerOnePosition = newPlayerOnePosition == 0 ? 10 : newPlayerOnePosition;
            playerOneScore += playerOnePosition;

            if (playerOneScore >= 1000) {
                break;
            }

            die = (die + 3) % 100;
            dieRolls += 3;
            int playerTwoMoves = (int) (1.5 * (die - 2 + die));
            int newPlayerTwoPosition = (playerTwoPosition + playerTwoMoves) % 10;
            playerTwoPosition = newPlayerTwoPosition == 0 ? 10 : newPlayerTwoPosition;
            playerTwoScore += playerTwoPosition;

            if (playerTwoScore >= 1000) {
                break;
            }
        }

        return (long) Integer.min(playerOneScore, playerTwoScore) * dieRolls;
    }
}
