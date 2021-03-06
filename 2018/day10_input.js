const mockPoints = [{position: {x: 9, y: 1}, velocity: {x: 0, y: 2}},
    {position: {x: 7, y: 0}, velocity: {x: -1, y: 0}},
    {position: {x: 3, y: -2}, velocity: {x: -1, y: 1}},
    {position: {x: 6, y: 10}, velocity: {x: -2, y: -1}},
    {position: {x: 2, y: -4}, velocity: {x: 2, y: 2}},
    {position: {x: -6, y: 10}, velocity: {x: 2, y: -2}},
    {position: {x: 1, y: 8}, velocity: {x: 1, y: -1}},
    {position: {x: 1, y: 7}, velocity: {x: 1, y: 0}},
    {position: {x: -3, y: 11}, velocity: {x: 1, y: -2}},
    {position: {x: 7, y: 6}, velocity: {x: -1, y: -1}},
    {position: {x: -2, y: 3}, velocity: {x: 1, y: 0}},
    {position: {x: -4, y: 3}, velocity: {x: 2, y: 0}},
    {position: {x: 10, y: -3}, velocity: {x: -1, y: 1}},
    {position: {x: 5, y: 11}, velocity: {x: 1, y: -2}},
    {position: {x: 4, y: 7}, velocity: {x: 0, y: -1}},
    {position: {x: 8, y: -2}, velocity: {x: 0, y: 1}},
    {position: {x: 15, y: 0}, velocity: {x: -2, y: 0}},
    {position: {x: 1, y: 6}, velocity: {x: 1, y: 0}},
    {position: {x: 8, y: 9}, velocity: {x: 0, y: -1}},
    {position: {x: 3, y: 3}, velocity: {x: -1, y: 1}},
    {position: {x: 0, y: 5}, velocity: {x: 0, y: -1}},
    {position: {x: -2, y: 2}, velocity: {x: 2, y: 0}},
    {position: {x: 5, y: -2}, velocity: {x: 1, y: 2}},
    {position: {x: 1, y: 4}, velocity: {x: 2, y: 1}},
    {position: {x: -2, y: 7}, velocity: {x: 2, y: -2}},
    {position: {x: 3, y: 6}, velocity: {x: -1, y: -1}},
    {position: {x: 5, y: 0}, velocity: {x: 1, y: 0}},
    {position: {x: -6, y: 0}, velocity: {x: 2, y: 0}},
    {position: {x: 5, y: 9}, velocity: {x: 1, y: -2}},
    {position: {x: 14, y: 7}, velocity: {x: -2, y: 0}},
    {position: {x: -3, y: 6}, velocity: {x: 2, y: -1}},];

const actualPoints = [
    {position: {x: -42417, y: 32097}, velocity: {x: 4, y: -3}},
    {position: {x: -10502, y: -10533}, velocity: {x: 1, y: 1}},
    {position: {x: -53094, y: 32093}, velocity: {x: 5, y: -3}},
    {position: {x: -53090, y: -21188}, velocity: {x: 5, y: 2}},
    {position: {x: 53486, y: 21441}, velocity: {x: -5, y: -2}},
    {position: {x: -21142, y: -42496}, velocity: {x: 2, y: 4}},
    {position: {x: -42422, y: 32088}, velocity: {x: 4, y: -3}},
    {position: {x: 42778, y: 10784}, velocity: {x: -4, y: -1}},
    {position: {x: 10826, y: 42748}, velocity: {x: -1, y: -4}},
    {position: {x: -10449, y: 53401}, velocity: {x: 1, y: -5}},
    {position: {x: -42453, y: -21187}, velocity: {x: 4, y: 2}},
    {position: {x: 32154, y: -31839}, velocity: {x: -3, y: 3}},
    {position: {x: -42434, y: -53156}, velocity: {x: 4, y: 5}},
    {position: {x: -21149, y: 32097}, velocity: {x: 2, y: -3}},
    {position: {x: -10497, y: 53409}, velocity: {x: 1, y: -5}},
    {position: {x: -42438, y: -53151}, velocity: {x: 4, y: 5}},
    {position: {x: 21490, y: 10778}, velocity: {x: -2, y: -1}},
    {position: {x: 42831, y: 42753}, velocity: {x: -4, y: -4}},
    {position: {x: 53474, y: -42501}, velocity: {x: -5, y: 4}},
    {position: {x: -42436, y: -21192}, velocity: {x: 4, y: 2}},
    {position: {x: 53450, y: -53154}, velocity: {x: -5, y: 5}},
    {position: {x: 32118, y: -21185}, velocity: {x: -3, y: 2}},
    {position: {x: -21158, y: -10533}, velocity: {x: 2, y: 1}},
    {position: {x: 10842, y: 42749}, velocity: {x: -1, y: -4}},
    {position: {x: 53467, y: 21436}, velocity: {x: -5, y: -2}},
    {position: {x: 32130, y: -53160}, velocity: {x: -3, y: 5}},
    {position: {x: 32119, y: -53151}, velocity: {x: -3, y: 5}},
    {position: {x: 32143, y: -21183}, velocity: {x: -3, y: 2}},
    {position: {x: -10486, y: 10781}, velocity: {x: 1, y: -1}},
    {position: {x: -53098, y: 21433}, velocity: {x: 5, y: -2}},
    {position: {x: -10465, y: -42503}, velocity: {x: 1, y: 4}},
    {position: {x: -53083, y: 10776}, velocity: {x: 5, y: -1}},
    {position: {x: 32173, y: -53151}, velocity: {x: -3, y: 5}},
    {position: {x: -31782, y: 21436}, velocity: {x: 3, y: -2}},
    {position: {x: 32143, y: 10782}, velocity: {x: -3, y: -1}},
    {position: {x: 21487, y: -42500}, velocity: {x: -2, y: 4}},
    {position: {x: -53082, y: 42752}, velocity: {x: 5, y: -4}},
    {position: {x: 42775, y: -21183}, velocity: {x: -4, y: 2}},
    {position: {x: 53431, y: -53160}, velocity: {x: -5, y: 5}},
    {position: {x: -53078, y: 10784}, velocity: {x: 5, y: -1}},
    {position: {x: -10505, y: 53408}, velocity: {x: 1, y: -5}},
    {position: {x: 21507, y: -53151}, velocity: {x: -2, y: 5}},
    {position: {x: 42814, y: -53160}, velocity: {x: -4, y: 5}},
    {position: {x: 53427, y: 53402}, velocity: {x: -5, y: -5}},
    {position: {x: -21164, y: 10780}, velocity: {x: 2, y: -1}},
    {position: {x: 21461, y: 53404}, velocity: {x: -2, y: -5}},
    {position: {x: 32173, y: 21436}, velocity: {x: -3, y: -2}},
    {position: {x: -53086, y: 21438}, velocity: {x: 5, y: -2}},
    {position: {x: 32146, y: -42503}, velocity: {x: -3, y: 4}},
    {position: {x: 32159, y: 21439}, velocity: {x: -3, y: -2}},
    {position: {x: 53442, y: 42751}, velocity: {x: -5, y: -4}},
    {position: {x: -31817, y: 42752}, velocity: {x: 3, y: -4}},
    {position: {x: 53459, y: -21188}, velocity: {x: -5, y: 2}},
    {position: {x: 21458, y: -21191}, velocity: {x: -2, y: 2}},
    {position: {x: -21134, y: 53402}, velocity: {x: 2, y: -5}},
    {position: {x: -10481, y: -10534}, velocity: {x: 1, y: 1}},
    {position: {x: -21137, y: -53158}, velocity: {x: 2, y: 5}},
    {position: {x: -21110, y: -31839}, velocity: {x: 2, y: 3}},
    {position: {x: -21153, y: 21441}, velocity: {x: 2, y: -2}},
    {position: {x: -31766, y: -42495}, velocity: {x: 3, y: 4}},
    {position: {x: 42799, y: -53155}, velocity: {x: -4, y: 5}},
    {position: {x: -42449, y: 42752}, velocity: {x: 4, y: -4}},
    {position: {x: -53102, y: -10531}, velocity: {x: 5, y: 1}},
    {position: {x: -21149, y: -10527}, velocity: {x: 2, y: 1}},
    {position: {x: -31801, y: 53401}, velocity: {x: 3, y: -5}},
    {position: {x: -10462, y: -31842}, velocity: {x: 1, y: 3}},
    {position: {x: -31806, y: 42751}, velocity: {x: 3, y: -4}},
    {position: {x: -10502, y: 10777}, velocity: {x: 1, y: -1}},
    {position: {x: -53129, y: 10785}, velocity: {x: 5, y: -1}},
    {position: {x: 10803, y: -21186}, velocity: {x: -1, y: 2}},
    {position: {x: 42810, y: -31847}, velocity: {x: -4, y: 3}},
    {position: {x: 53450, y: -21189}, velocity: {x: -5, y: 2}},
    {position: {x: 53434, y: 21433}, velocity: {x: -5, y: -2}},
    {position: {x: -21126, y: 32094}, velocity: {x: 2, y: -3}},
    {position: {x: 53446, y: -53157}, velocity: {x: -5, y: 5}},
    {position: {x: 21518, y: -31839}, velocity: {x: -2, y: 3}},
    {position: {x: -21146, y: -53157}, velocity: {x: 2, y: 5}},
    {position: {x: 32135, y: 32089}, velocity: {x: -3, y: -3}},
    {position: {x: -53094, y: -21188}, velocity: {x: 5, y: 2}},
    {position: {x: 32170, y: -53152}, velocity: {x: -3, y: 5}},
    {position: {x: -42476, y: 21437}, velocity: {x: 4, y: -2}},
    {position: {x: -42446, y: -31840}, velocity: {x: 4, y: 3}},
    {position: {x: 53471, y: -42503}, velocity: {x: -5, y: 4}},
    {position: {x: 10850, y: 42752}, velocity: {x: -1, y: -4}},
    {position: {x: -21141, y: -10531}, velocity: {x: 2, y: 1}},
    {position: {x: -10508, y: 53404}, velocity: {x: 1, y: -5}},
    {position: {x: 42818, y: -21190}, velocity: {x: -4, y: 2}},
    {position: {x: 21483, y: -42503}, velocity: {x: -2, y: 4}},
    {position: {x: -10482, y: -42503}, velocity: {x: 1, y: 4}},
    {position: {x: -53089, y: -31847}, velocity: {x: 5, y: 3}},
    {position: {x: 32162, y: 32092}, velocity: {x: -3, y: -3}},
    {position: {x: -31763, y: 42753}, velocity: {x: 3, y: -4}},
    {position: {x: -10462, y: -10535}, velocity: {x: 1, y: 1}},
    {position: {x: 42831, y: 21433}, velocity: {x: -4, y: -2}},
    {position: {x: 42819, y: -42504}, velocity: {x: -4, y: 4}},
    {position: {x: 53426, y: -21192}, velocity: {x: -5, y: 2}},
    {position: {x: 21475, y: -42495}, velocity: {x: -2, y: 4}},
    {position: {x: -10462, y: 32092}, velocity: {x: 1, y: -3}},
    {position: {x: 42802, y: -10533}, velocity: {x: -4, y: 1}},
    {position: {x: 32146, y: 32088}, velocity: {x: -3, y: -3}},
    {position: {x: 10831, y: -21184}, velocity: {x: -1, y: 2}},
    {position: {x: 53466, y: 42752}, velocity: {x: -5, y: -4}},
    {position: {x: 21516, y: -42499}, velocity: {x: -2, y: 4}},
    {position: {x: 32159, y: -53152}, velocity: {x: -3, y: 5}},
    {position: {x: -53123, y: 32097}, velocity: {x: 5, y: -3}},
    {position: {x: -53126, y: 21434}, velocity: {x: 5, y: -2}},
    {position: {x: -31790, y: -21189}, velocity: {x: 3, y: 2}},
    {position: {x: -31789, y: -31843}, velocity: {x: 3, y: 3}},
    {position: {x: -10502, y: -21185}, velocity: {x: 1, y: 2}},
    {position: {x: -53124, y: 21441}, velocity: {x: 5, y: -2}},
    {position: {x: 53486, y: 10779}, velocity: {x: -5, y: -1}},
    {position: {x: 42805, y: -31846}, velocity: {x: -4, y: 3}},
    {position: {x: -42470, y: 53406}, velocity: {x: 4, y: -5}},
    {position: {x: 53469, y: -42495}, velocity: {x: -5, y: 4}},
    {position: {x: 53450, y: 42751}, velocity: {x: -5, y: -4}},
    {position: {x: 42822, y: -31843}, velocity: {x: -4, y: 3}},
    {position: {x: 32133, y: 21436}, velocity: {x: -3, y: -2}},
    {position: {x: 21487, y: 21437}, velocity: {x: -2, y: -2}},
    {position: {x: 32149, y: -31841}, velocity: {x: -3, y: 3}},
    {position: {x: -31778, y: -53151}, velocity: {x: 3, y: 5}},
    {position: {x: 32175, y: -42504}, velocity: {x: -3, y: 4}},
    {position: {x: 10834, y: 42750}, velocity: {x: -1, y: -4}},
    {position: {x: 10855, y: 10777}, velocity: {x: -1, y: -1}},
    {position: {x: 21492, y: 21438}, velocity: {x: -2, y: -2}},
    {position: {x: -21131, y: 21434}, velocity: {x: 2, y: -2}},
    {position: {x: 53455, y: 32091}, velocity: {x: -5, y: -3}},
    {position: {x: -31786, y: 53408}, velocity: {x: 3, y: -5}},
    {position: {x: 10829, y: 10781}, velocity: {x: -1, y: -1}},
    {position: {x: 10831, y: -10529}, velocity: {x: -1, y: 1}},
    {position: {x: -42460, y: 53405}, velocity: {x: 4, y: -5}},
    {position: {x: 10813, y: -31839}, velocity: {x: -1, y: 3}},
    {position: {x: -53076, y: 21432}, velocity: {x: 5, y: -2}},
    {position: {x: -10452, y: -42499}, velocity: {x: 1, y: 4}},
    {position: {x: 21487, y: -10534}, velocity: {x: -2, y: 1}},
    {position: {x: -53082, y: 10781}, velocity: {x: 5, y: -1}},
    {position: {x: 10839, y: -10527}, velocity: {x: -1, y: 1}},
    {position: {x: 42770, y: 21441}, velocity: {x: -4, y: -2}},
    {position: {x: 53466, y: -21185}, velocity: {x: -5, y: 2}},
    {position: {x: 10812, y: 42753}, velocity: {x: -1, y: -4}},
    {position: {x: 32156, y: 21432}, velocity: {x: -3, y: -2}},
    {position: {x: 10803, y: 53407}, velocity: {x: -1, y: -5}},
    {position: {x: 53430, y: 42747}, velocity: {x: -5, y: -4}},
    {position: {x: -53114, y: 32088}, velocity: {x: 5, y: -3}},
    {position: {x: 32156, y: 42748}, velocity: {x: -3, y: -4}},
    {position: {x: 42802, y: -42499}, velocity: {x: -4, y: 4}},
    {position: {x: -53110, y: -42500}, velocity: {x: 5, y: 4}},
    {position: {x: 21474, y: -31840}, velocity: {x: -2, y: 3}},
    {position: {x: -21166, y: 21432}, velocity: {x: 2, y: -2}},
    {position: {x: -10506, y: 42746}, velocity: {x: 1, y: -4}},
    {position: {x: -31819, y: -42499}, velocity: {x: 3, y: 4}},
    {position: {x: -31769, y: -10528}, velocity: {x: 3, y: 1}},
    {position: {x: 53426, y: 32088}, velocity: {x: -5, y: -3}},
    {position: {x: -21150, y: -10529}, velocity: {x: 2, y: 1}},
    {position: {x: -53086, y: 53408}, velocity: {x: 5, y: -5}},
    {position: {x: -31782, y: 32095}, velocity: {x: 3, y: -3}},
    {position: {x: -42449, y: 42747}, velocity: {x: 4, y: -4}},
    {position: {x: -53098, y: -31847}, velocity: {x: 5, y: 3}},
    {position: {x: 32162, y: -21185}, velocity: {x: -3, y: 2}},
    {position: {x: -53110, y: -42497}, velocity: {x: 5, y: 4}},
    {position: {x: 53455, y: -10532}, velocity: {x: -5, y: 1}},
    {position: {x: 32157, y: -42504}, velocity: {x: -3, y: 4}},
    {position: {x: 42802, y: -53155}, velocity: {x: -4, y: 5}},
    {position: {x: -53106, y: 42749}, velocity: {x: 5, y: -4}},
    {position: {x: -31781, y: -31848}, velocity: {x: 3, y: 3}},
    {position: {x: -53100, y: 53403}, velocity: {x: 5, y: -5}},
    {position: {x: -10508, y: -21187}, velocity: {x: 1, y: 2}},
    {position: {x: -42477, y: 53407}, velocity: {x: 4, y: -5}},
    {position: {x: -31795, y: -42504}, velocity: {x: 3, y: 4}},
    {position: {x: -53077, y: -10527}, velocity: {x: 5, y: 1}},
    {position: {x: 32133, y: 32097}, velocity: {x: -3, y: -3}},
    {position: {x: -53090, y: 53409}, velocity: {x: 5, y: -5}},
    {position: {x: 10847, y: 42749}, velocity: {x: -1, y: -4}},
    {position: {x: 21466, y: -21192}, velocity: {x: -2, y: 2}},
    {position: {x: 21476, y: -21192}, velocity: {x: -2, y: 2}},
    {position: {x: -10462, y: 21439}, velocity: {x: 1, y: -2}},
    {position: {x: 53430, y: -53153}, velocity: {x: -5, y: 5}},
    {position: {x: 42831, y: -10534}, velocity: {x: -4, y: 1}},
    {position: {x: -42435, y: 21432}, velocity: {x: 4, y: -2}},
    {position: {x: 32131, y: 53400}, velocity: {x: -3, y: -5}},
    {position: {x: -10481, y: -31844}, velocity: {x: 1, y: 3}},
    {position: {x: -10478, y: 53404}, velocity: {x: 1, y: -5}},
    {position: {x: -42438, y: -53160}, velocity: {x: 4, y: 5}},
    {position: {x: 32170, y: -53153}, velocity: {x: -3, y: 5}},
    {position: {x: 42778, y: 32092}, velocity: {x: -4, y: -3}},
    {position: {x: -42427, y: 42753}, velocity: {x: 4, y: -4}},
    {position: {x: 21476, y: -21183}, velocity: {x: -2, y: 2}},
    {position: {x: -21126, y: -21191}, velocity: {x: 2, y: 2}},
    {position: {x: -21118, y: -31842}, velocity: {x: 2, y: 3}},
    {position: {x: -10505, y: -31848}, velocity: {x: 1, y: 3}},
    {position: {x: -42421, y: -10536}, velocity: {x: 4, y: 1}},
    {position: {x: -31779, y: 21436}, velocity: {x: 3, y: -2}},
    {position: {x: -53106, y: 21437}, velocity: {x: 5, y: -2}},
    {position: {x: 42807, y: -53151}, velocity: {x: -4, y: 5}},
    {position: {x: 10810, y: 10778}, velocity: {x: -1, y: -1}},
    {position: {x: 32154, y: -10534}, velocity: {x: -3, y: 1}},
    {position: {x: 42814, y: -53160}, velocity: {x: -4, y: 5}},
    {position: {x: 53430, y: 21439}, velocity: {x: -5, y: -2}},
    {position: {x: -42462, y: 32097}, velocity: {x: 4, y: -3}},
    {position: {x: 21506, y: 10777}, velocity: {x: -2, y: -1}},
    {position: {x: -53092, y: -42495}, velocity: {x: 5, y: 4}},
    {position: {x: -53081, y: -10528}, velocity: {x: 5, y: 1}},
    {position: {x: 53471, y: -53153}, velocity: {x: -5, y: 5}},
    {position: {x: -53106, y: -21187}, velocity: {x: 5, y: 2}},
    {position: {x: 53450, y: 21437}, velocity: {x: -5, y: -2}},
    {position: {x: 21515, y: -10527}, velocity: {x: -2, y: 1}},
    {position: {x: 42791, y: -31846}, velocity: {x: -4, y: 3}},
    {position: {x: 21463, y: 21433}, velocity: {x: -2, y: -2}},
    {position: {x: 53485, y: 10776}, velocity: {x: -5, y: -1}},
    {position: {x: 42790, y: -31848}, velocity: {x: -4, y: 3}},
    {position: {x: -21122, y: -21192}, velocity: {x: 2, y: 2}},
    {position: {x: 21511, y: 53406}, velocity: {x: -2, y: -5}},
    {position: {x: -10505, y: -21192}, velocity: {x: 1, y: 2}},
    {position: {x: -21163, y: 21436}, velocity: {x: 2, y: -2}},
    {position: {x: 53426, y: -42496}, velocity: {x: -5, y: 4}},
    {position: {x: 32162, y: 10781}, velocity: {x: -3, y: -1}},
    {position: {x: -42470, y: -10527}, velocity: {x: 4, y: 1}},
    {position: {x: -10458, y: 32093}, velocity: {x: 1, y: -3}},
    {position: {x: -21105, y: 42745}, velocity: {x: 2, y: -4}},
    {position: {x: 53479, y: -31840}, velocity: {x: -5, y: 3}},
    {position: {x: -31805, y: 42744}, velocity: {x: 3, y: -4}},
    {position: {x: 21498, y: 32094}, velocity: {x: -2, y: -3}},
    {position: {x: -10486, y: 32094}, velocity: {x: 1, y: -3}},
    {position: {x: 21484, y: 10781}, velocity: {x: -2, y: -1}},
    {position: {x: 32140, y: 32088}, velocity: {x: -3, y: -3}},
    {position: {x: -21130, y: 10777}, velocity: {x: 2, y: -1}},
    {position: {x: 42794, y: -10533}, velocity: {x: -4, y: 1}},
    {position: {x: 21498, y: -21187}, velocity: {x: -2, y: 2}},
    {position: {x: -21116, y: -31848}, velocity: {x: 2, y: 3}},
    {position: {x: 53450, y: -31844}, velocity: {x: -5, y: 3}},
    {position: {x: 32142, y: 42745}, velocity: {x: -3, y: -4}},
    {position: {x: -31782, y: -53152}, velocity: {x: 3, y: 5}},
    {position: {x: -53091, y: -10527}, velocity: {x: 5, y: 1}},
    {position: {x: 42798, y: 10777}, velocity: {x: -4, y: -1}},
    {position: {x: -42422, y: 42744}, velocity: {x: 4, y: -4}},
    {position: {x: 10855, y: -10529}, velocity: {x: -1, y: 1}},
    {position: {x: 21490, y: 32094}, velocity: {x: -2, y: -3}},
    {position: {x: -42437, y: -42504}, velocity: {x: 4, y: 4}},
    {position: {x: 53483, y: -21192}, velocity: {x: -5, y: 2}},
    {position: {x: 53466, y: 53406}, velocity: {x: -5, y: -5}},
    {position: {x: -10458, y: -31848}, velocity: {x: 1, y: 3}},
    {position: {x: 42771, y: 32090}, velocity: {x: -4, y: -3}},
    {position: {x: -31780, y: 53404}, velocity: {x: 3, y: -5}},
    {position: {x: -53115, y: -10536}, velocity: {x: 5, y: 1}},
    {position: {x: -10449, y: 10776}, velocity: {x: 1, y: -1}},
    {position: {x: -31772, y: 32097}, velocity: {x: 3, y: -3}},
    {position: {x: 21515, y: -21186}, velocity: {x: -2, y: 2}},
    {position: {x: 42815, y: 42749}, velocity: {x: -4, y: -4}},
    {position: {x: -21158, y: 21437}, velocity: {x: 2, y: -2}},
    {position: {x: 42774, y: -31846}, velocity: {x: -4, y: 3}},
    {position: {x: -53105, y: 53405}, velocity: {x: 5, y: -5}},
    {position: {x: 21478, y: -10527}, velocity: {x: -2, y: 1}},
    {position: {x: -31781, y: -21183}, velocity: {x: 3, y: 2}},
    {position: {x: 53450, y: 32093}, velocity: {x: -5, y: -3}},
    {position: {x: 10810, y: -42499}, velocity: {x: -1, y: 4}},
    {position: {x: 32132, y: 10781}, velocity: {x: -3, y: -1}},
    {position: {x: 32138, y: 10785}, velocity: {x: -3, y: -1}},
    {position: {x: 10863, y: -21190}, velocity: {x: -1, y: 2}},
    {position: {x: 10859, y: 53409}, velocity: {x: -1, y: -5}},
    {position: {x: -53109, y: -42499}, velocity: {x: 5, y: 4}},
    {position: {x: 32132, y: 53400}, velocity: {x: -3, y: -5}},
    {position: {x: 53434, y: 32088}, velocity: {x: -5, y: -3}},
    {position: {x: 53479, y: -10530}, velocity: {x: -5, y: 1}},
    {position: {x: 53487, y: 21432}, velocity: {x: -5, y: -2}},
    {position: {x: 53427, y: 10779}, velocity: {x: -5, y: -1}},
    {position: {x: -10465, y: 21434}, velocity: {x: 1, y: -2}},
    {position: {x: -21149, y: 21432}, velocity: {x: 2, y: -2}},
    {position: {x: 10823, y: -42504}, velocity: {x: -1, y: 4}},
    {position: {x: -42446, y: 10783}, velocity: {x: 4, y: -1}},
    {position: {x: -31771, y: 42753}, velocity: {x: 3, y: -4}},
    {position: {x: 21501, y: 10780}, velocity: {x: -2, y: -1}},
    {position: {x: -53081, y: -31847}, velocity: {x: 5, y: 3}},
    {position: {x: 53475, y: 53400}, velocity: {x: -5, y: -5}},
    {position: {x: -53074, y: -53160}, velocity: {x: 5, y: 5}},
    {position: {x: -53126, y: 21441}, velocity: {x: 5, y: -2}},
    {position: {x: 10823, y: -21190}, velocity: {x: -1, y: 2}},
    {position: {x: 53485, y: -53160}, velocity: {x: -5, y: 5}},
    {position: {x: -21108, y: 10785}, velocity: {x: 2, y: -1}},
    {position: {x: -42457, y: 32097}, velocity: {x: 4, y: -3}},
    {position: {x: -10486, y: -53158}, velocity: {x: 1, y: 5}},
    {position: {x: 53466, y: 21432}, velocity: {x: -5, y: -2}},
    {position: {x: 10834, y: 53409}, velocity: {x: -1, y: -5}},
    {position: {x: 21493, y: 32090}, velocity: {x: -2, y: -3}},
    {position: {x: -31798, y: -21183}, velocity: {x: 3, y: 2}},
    {position: {x: -42429, y: -10536}, velocity: {x: 4, y: 1}},
    {position: {x: -53131, y: 10781}, velocity: {x: 5, y: -1}},
    {position: {x: 53459, y: 53404}, velocity: {x: -5, y: -5}},
    {position: {x: 53469, y: 53404}, velocity: {x: -5, y: -5}},
    {position: {x: 42828, y: 53409}, velocity: {x: -4, y: -5}},
    {position: {x: -21139, y: -53160}, velocity: {x: 2, y: 5}},
    {position: {x: -31769, y: -42499}, velocity: {x: 3, y: 4}},
    {position: {x: 42821, y: 10781}, velocity: {x: -4, y: -1}},
    {position: {x: 21490, y: 21434}, velocity: {x: -2, y: -2}},
    {position: {x: 21459, y: -53158}, velocity: {x: -2, y: 5}},
    {position: {x: 10842, y: -10533}, velocity: {x: -1, y: 1}},
    {position: {x: 42778, y: 32097}, velocity: {x: -4, y: -3}},
    {position: {x: 32131, y: 42750}, velocity: {x: -3, y: -4}},
    {position: {x: 42821, y: -10531}, velocity: {x: -4, y: 1}},
    {position: {x: 42775, y: -53159}, velocity: {x: -4, y: 5}},
    {position: {x: 42820, y: -42495}, velocity: {x: -4, y: 4}},
    {position: {x: 53468, y: 53404}, velocity: {x: -5, y: -5}},
    {position: {x: -31818, y: 42746}, velocity: {x: 3, y: -4}},
    {position: {x: -42422, y: -31840}, velocity: {x: 4, y: 3}},
    {position: {x: 21479, y: -21183}, velocity: {x: -2, y: 2}},
    {position: {x: -42454, y: 21435}, velocity: {x: 4, y: -2}},
    {position: {x: 10847, y: -53152}, velocity: {x: -1, y: 5}},
    {position: {x: -31813, y: 53409}, velocity: {x: 3, y: -5}},
    {position: {x: 10847, y: 21435}, velocity: {x: -1, y: -2}},
    {position: {x: -53081, y: 32094}, velocity: {x: 5, y: -3}},
    {position: {x: -42473, y: 32096}, velocity: {x: 4, y: -3}},
    {position: {x: 10807, y: -42503}, velocity: {x: -1, y: 4}},
    {position: {x: 10862, y: 32097}, velocity: {x: -1, y: -3}},
    {position: {x: 53469, y: 10785}, velocity: {x: -5, y: -1}},
    {position: {x: 21503, y: -42498}, velocity: {x: -2, y: 4}},
    {position: {x: 53430, y: 21435}, velocity: {x: -5, y: -2}},
    {position: {x: 53427, y: -31841}, velocity: {x: -5, y: 3}},
    {position: {x: 42799, y: -42495}, velocity: {x: -4, y: 4}},
    {position: {x: -21107, y: -31839}, velocity: {x: 2, y: 3}},
    {position: {x: 21511, y: -53151}, velocity: {x: -2, y: 5}},
    {position: {x: -42433, y: -10530}, velocity: {x: 4, y: 1}},
    {position: {x: -31777, y: -31846}, velocity: {x: 3, y: 3}},
    {position: {x: -21141, y: -21191}, velocity: {x: 2, y: 2}},
    {position: {x: -53100, y: 32094}, velocity: {x: 5, y: -3}},
    {position: {x: 21514, y: 42753}, velocity: {x: -2, y: -4}},
    {position: {x: -42466, y: 10785}, velocity: {x: 4, y: -1}},
    {position: {x: -31790, y: 21441}, velocity: {x: 3, y: -2}},
    {position: {x: -42433, y: 32095}, velocity: {x: 4, y: -3}},
    {position: {x: -42430, y: -42497}, velocity: {x: 4, y: 4}},
    {position: {x: 21503, y: -31840}, velocity: {x: -2, y: 3}},
    {position: {x: 21475, y: -53154}, velocity: {x: -2, y: 5}},
    {position: {x: -42449, y: 32095}, velocity: {x: 4, y: -3}},
    {position: {x: -53094, y: 10784}, velocity: {x: 5, y: -1}},
    {position: {x: 21495, y: -21192}, velocity: {x: -2, y: 2}},
    {position: {x: 53434, y: -21191}, velocity: {x: -5, y: 2}},
    {position: {x: 32143, y: -21189}, velocity: {x: -3, y: 2}},
    {position: {x: -21140, y: -53155}, velocity: {x: 2, y: 5}},
    {position: {x: 21495, y: 42744}, velocity: {x: -2, y: -4}},
    {position: {x: 21502, y: 32097}, velocity: {x: -2, y: -3}},
    {position: {x: -53094, y: -42495}, velocity: {x: 5, y: 4}},
    {position: {x: -42474, y: 53406}, velocity: {x: 4, y: -5}},
    {position: {x: -21141, y: -10535}, velocity: {x: 2, y: 1}},
    {position: {x: 42788, y: -31843}, velocity: {x: -4, y: 3}},
    {position: {x: -21139, y: -21192}, velocity: {x: 2, y: 2}},
    {position: {x: -10493, y: 10782}, velocity: {x: 1, y: -1}}];