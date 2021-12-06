package com.adventofcode;

import java.util.*;
import java.util.stream.IntStream;

class BoardItem {
    private final int val;
    private boolean marked;

    public BoardItem(int val, boolean marked) {
        this.val = val;
        this.marked = marked;
    }

    public int getVal() {
        return val;
    }

    public boolean getMarked() {
        return marked;
    }

    public void setMarked(boolean isMarked) {
        marked = isMarked;
    }
}

public class Day4 {
    private static int boardSize = 5;

    public static int calculatePart1(List<String> puzzleInput) {
        var drawnNumbers = getDrawnNumbers(puzzleInput);
        var boards = getBoards(puzzleInput);
        int finalScore = 0;

        outer:
        for (int i = 0; i < drawnNumbers.length; i++) {
            for (var board : boards) {
                for (var row : board) {
                    for (var item : row) {
                        if (item.getVal() == drawnNumbers[i]) {
                            item.setMarked(true);

                            if (i > boardSize - 1) {
                                boolean boardWins = checkIfBoardWins(board);

                                if (boardWins) {
                                    finalScore = getSumOfUnmarkedNumbers(board) * drawnNumbers[i];
                                    break outer;
                                }
                            }
                        }
                    }
                }
            }
        }

        return finalScore;
    }

    public static int calculatePart2(List<String> puzzleInput) {
        var drawnNumbers = getDrawnNumbers(puzzleInput);
        var boards = getBoards(puzzleInput);
        int lastWinningBoardIndex = 0;
        int lastWinningDrawnNumberIndex = 0;
        Set<Integer> winningBoardIndexes = new HashSet<>();

        for (int i = 0; i < drawnNumbers.length; i++) {
            for (int j = 0; j < boards.size(); j++) {

                var board = boards.get(j);

                for (var row : board) {
                    for (var item : row) {
                        if (item.getVal() == drawnNumbers[i]) {
                            item.setMarked(true);

                            if (i > boardSize - 1 && !winningBoardIndexes.contains(j)) {
                                boolean boardWins = checkIfBoardWins(board);

                                if (boardWins) {
                                    winningBoardIndexes.add(j);
                                    lastWinningBoardIndex = j;
                                    lastWinningDrawnNumberIndex = i;
                                }
                            }
                        }
                    }
                }
            }
        }

        var winningBoard = boards.get(lastWinningBoardIndex);
        var numbersDrawnAfterWinningBoardFound = Arrays.copyOfRange(
                drawnNumbers, lastWinningDrawnNumberIndex + 1, drawnNumbers.length
        );
        var winningBoardUnmarked = unmarkBoard(winningBoard, numbersDrawnAfterWinningBoardFound);

        return getSumOfUnmarkedNumbers(winningBoardUnmarked) * drawnNumbers[lastWinningDrawnNumberIndex];
    }

    private static ArrayList<List<BoardItem>> unmarkBoard(ArrayList<List<BoardItem>> board, int[] numbersToUnmark) {
        for (var row : board) {
            for (var item : row) {
                if (IntStream.of(numbersToUnmark).anyMatch(x -> x == item.getVal())) {
                    item.setMarked(false);
                }
            }
        }

        return board;
    }

    private static int getSumOfUnmarkedNumbers(ArrayList<List<BoardItem>> board) {
        int sum = 0;

        for (var row : board) {
            for (var item : row) {
                if (!item.getMarked()) {
                    sum += item.getVal();
                }
            }
        }

        return sum;
    }

    private static boolean checkIfBoardWins(ArrayList<List<BoardItem>> board) {
        int completeRows = boardSize;

        for (var row : board) {
            for (var item : row) {
                if (!item.getMarked()) {
                    completeRows--;
                    break;
                }
            }
        }

        if (completeRows > 0) {
            return true;
        }

        int completeColumns = boardSize;

        for (int i = 0; i < boardSize; i++) {
            for (var row : board) {
                if (!row.get(i).getMarked()) {
                    completeColumns--;
                    break;
                }
            }
        }

        return completeColumns > 0;
    }

    private static int[] getDrawnNumbers(List<String> puzzleInput) {
        return Arrays.stream(puzzleInput.get(0).split(",")).mapToInt(Integer::parseInt).toArray();
    }

    private static ArrayList<ArrayList<List<BoardItem>>> getBoards(List<String> puzzleInput) {
        List<String> boardInput = puzzleInput.subList(2, puzzleInput.size());
        ArrayList<ArrayList<List<BoardItem>>> result = new ArrayList<>();

        for (int i = 0; i < boardInput.size(); i += boardSize + 1) { // +1 for empty line separators
            ArrayList<List<BoardItem>> board = new ArrayList<>();

            for (int j = 0; j < boardSize; j++) {
                List<BoardItem> row = Arrays.stream(boardInput.get(j + i).trim().split("\\s+"))
                        .mapToInt(Integer::parseInt)
                        .mapToObj(val -> new BoardItem(val, false))
                        .toList();
                board.add(row);
            }

            result.add(board);
        }

        return result;
    }
}
