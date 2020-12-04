using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace AoC2020
{
    public static class Day4
    {
        public static int CalculatePart1(List<string> passportData)
        {
            var totalValidPassports = 0;

            foreach (var passport in passportData)
            {
                var isPassportValid = true;

                foreach (var field in requiredFields)
                {
                    if (!passport.Contains(field))
                    {
                        isPassportValid = false;
                        break;
                    }

                }

                if (isPassportValid)
                {
                    totalValidPassports += 1;
                }
            }

            return totalValidPassports;
        }

        public static int CalculatePart2(List<string> passportData)
        {
            var totalValidPassports = 0;

            foreach (var passport in passportData)
            {
                var isPassportValid = true;

                foreach (var field in requiredFields)
                {
                    if (!passport.Contains(field))
                    {
                        isPassportValid = false;
                        break;
                    }
                }

                if (!isPassportValid || !fulfilsBasicRequirements(passport))
                {
                    continue;
                }

                var convertedPassportData = passport.Split(' ')
                .Select(part => part.Split(':'))
                .ToDictionary(sp => sp[0], sp => sp[1]);

                if (!isBirthYearValid(convertedPassportData["byr"]) ||
                !isIssueYearValid(convertedPassportData["iyr"]) ||
                !isExpirationYearValid(convertedPassportData["eyr"]) ||
                !isHeightValid(convertedPassportData["hgt"]) ||
                !isHairColourValid(convertedPassportData["hcl"]) ||
                !isEyeColourValid(convertedPassportData["ecl"]) ||
                !isPassportIdValid(convertedPassportData["pid"]))
                {
                    continue;
                }

                if (isPassportValid)
                {
                    totalValidPassports += 1;
                }
            }

            return totalValidPassports;
        }

        private static bool fulfilsBasicRequirements(string passportData)
        {
            return passportData.Contains('#') &&
            passportData.Count(c => c == '#') == 1 &&
            (passportData.Contains("cm") || passportData.Contains("in"));
        }

        private static bool isBirthYearValid(string birthYearData)
        {
            return birthYearData.Length == 4 && int.Parse(birthYearData) >= 1920 && int.Parse(birthYearData) <= 2002;
        }

        private static bool isIssueYearValid(string issueYearData)
        {
            return issueYearData.Length == 4 && int.Parse(issueYearData) >= 2010 && int.Parse(issueYearData) <= 2020;
        }

        private static bool isExpirationYearValid(string expirationYearData)
        {
            return expirationYearData.Length == 4 && int.Parse(expirationYearData) >= 2020 && int.Parse(expirationYearData) <= 2030;
        }

        private static bool isHeightValid(string heightData)
        {
            var unit = heightData.Substring(heightData.Length - 2);
            var height = int.Parse(heightData.Substring(0, heightData.Length - 2));
            var isHeightValid = false;

            if (unit == "cm")
            {
                isHeightValid = height >= 150 && height <= 193;
            }
            else if (unit == "in")
            {
                isHeightValid = height >= 59 && height <= 76;
            }

            return isHeightValid;
        }

        private static bool isHairColourValid(string hairColourData)
        {
            var pattern = new Regex("^#[0-9a-f]{6}$");

            return pattern.IsMatch(hairColourData);
        }

        private static bool isEyeColourValid(string eyeColourData)
        {
            return Array.Exists(eyeColours, eyeColour => eyeColour == eyeColourData);
        }

        private static bool isPassportIdValid(string passportId)
        {
            var pattern = new Regex("^[0-9]{9}$");

            return pattern.IsMatch(passportId);
        }

        private static readonly string[] requiredFields = new[] { "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid" };
        private static readonly string[] eyeColours = new[] { "amb", "blu", "brn", "gry", "grn", "hzl", "oth" };
    }
}