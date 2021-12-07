package com.adventofcode;

import java.util.*;

class Lanternfish {
    private final int age;
    private final int birthDay;
    private final int hashCode;

    public Lanternfish(int age, int birthDay) {
        this.age = age;
        this.birthDay = birthDay;
        this.hashCode = Objects.hash(age, birthDay);
    }

    public int getAge() {
        return age;
    }

    public int getBirthDay() {
        return birthDay;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;

        if (o == null || getClass() != o.getClass())
            return false;

        Lanternfish that = (Lanternfish) o;

        return age == that.age && birthDay == that.birthDay;
    }

    @Override
    public int hashCode() {
        return this.hashCode;
    }
}

public class Day6 {
    public static int calculatePart1(List<String> puzzleInput) {
        ArrayList<Integer> lanternfishAges = Arrays.stream(puzzleInput.get(0).split(","))
                .mapToInt(Integer::parseInt)
                .collect(ArrayList::new, ArrayList::add, ArrayList::addAll);
        var days = 80;
        var lastFishCount = lanternfishAges.size();

        while (days > 0) {
            for (int i = 0; i < lastFishCount; i++) {
                if (lanternfishAges.get(i) == 0) {
                    lanternfishAges.set(i, 6);
                    lanternfishAges.add(8);
                } else {
                    lanternfishAges.set(i, lanternfishAges.get(i) - 1);
                }
            }

            lastFishCount = lanternfishAges.size();
            days--;
        }

        return lastFishCount;
    }

    public static long calculatePart2(List<String> puzzleInput) {
        int[] lanternfishAges = Arrays.stream(puzzleInput.get(0).split(",")).mapToInt(Integer::parseInt).toArray();
        long fishCount = lanternfishAges.length;

        for (var fishAge : lanternfishAges) {
            Lanternfish lanternfish = new Lanternfish(fishAge, 0);

            if (cache.containsKey(lanternfish)) {
                fishCount += cache.get(lanternfish);
            } else {
                long babyCount = getBabyFishCount(lanternfish, 256);
                fishCount += babyCount;
                cache.put(lanternfish, babyCount);
            }

        }
        return fishCount;
    }

    private static final Map<Lanternfish, Long> cache = new HashMap<>();

    private static long getBabyFishCount(Lanternfish fishMum, int daysToBreed) {
        if (daysToBreed - fishMum.getBirthDay() - fishMum.getAge() <= 0) {
            return 0;
        }

        long babyFishCount = 0;

        int start = fishMum.getAge() + fishMum.getBirthDay() + 1;
        int breedingInterval = 7;

        for (int i = start; i <= daysToBreed; i += breedingInterval) {
            babyFishCount++;
            Lanternfish lanternfish = new Lanternfish(8, i);

            if (cache.containsKey(lanternfish)) {
                babyFishCount += cache.get(lanternfish);
            } else {
                long babyCount = getBabyFishCount(lanternfish, daysToBreed);
                babyFishCount += babyCount;
                cache.put(lanternfish, babyCount);
            }
        }

        return babyFishCount;
    }
}
