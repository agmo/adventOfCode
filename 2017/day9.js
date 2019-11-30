function getTotalScoreForGroupsPart1(streamOfChars) {
    let openingBraces = 0;
    let withinGarbage = false;
    let cancelled = false;
    let totalScore = 0;

    for (let char of streamOfChars) {
        if (!withinGarbage) {
            if (char === '<') {
                withinGarbage = true;
            }

            if (char === '{') {
                openingBraces++;
                totalScore += openingBraces;
            }

            if (char === '}' && openingBraces) {
                openingBraces--;
            }
        }

        if (char === '>' && withinGarbage && !cancelled) {
            withinGarbage = false;
        }

        cancelled = char === '!' && !cancelled;
    }

    return totalScore;
}

function countGarbageCharsPart2(streamOfChars) {
    let withinGarbage = false;
    let cancelled = false;
    let garbageChars = 0;

    for (let char of streamOfChars) {
        if (!withinGarbage && char === '<') {
            withinGarbage = true;
            continue;
        }

        if (withinGarbage && !cancelled) {
            if (char === '>') {
                withinGarbage = false;
                continue;
            } else if (char !== '!') { //exclamation marks ('!') don't count
                garbageChars++;
            }
        }

        cancelled = char === '!' && !cancelled;
    }

    return garbageChars;
}


//puzzle input
//{{{{{}},{{{{<a!!!!!>!!u!!}!!\',eo!!u">}},{<!!!!!!!>},<!\'a!!eui>},{{<,"!>},<<!>},<}>,{}},{}}},{{{{{}}},{}}},{{<eo!>},<!\'e}>,{}}}}},{{{{<e!!!!!>!!}<!!!>ii!>,<>},{<!ie<!!!>,,!{<o,!>,<e!><,u>,<!!!>!!!>{{a!!!>a>},{{<\'!!!>iea!!iao!>},<u!>},<>},{<!ao!!!>},<!e>,{<<!}!!,!>eoa>}},{<!>,<<>}}},{{},<u!oe!<!!!>}a!>},<!>!>!!o\'e\'>},{}},{{{<}\'{ua!>},<!>},<<>,{<!>e!!!!!>},<i!<<!!!!!>u{ee>}},<!\'"!!!>!>},<o",!!e\'!!!!a{>},{<{\'!a"}!!!!!>eo,!>},<>,{<}!>,!>,<!>!>,<!>},<!\'a!{}u{e>,<<e!>"e!>!>},<!oe!>,<!>,<<!!e!!i!>,<u>}}},{{{<!,u!!!>!{e!>e!!oo!!!><">}}}},{{{{},{{<<i!!!!\'o!!!}{!!!!o\'"i"ia>}},{{<o!!u!!,!o!!!!o{<>},{{},<!!!!{{!!u!>},<>},{{{{{},{{<{\'!>>},{<\'!>{!!{e"!!}{!>},<u!>,<!>}ia}!!!>>}},{<}!>!!i}{<u!"!>},<>,{}}},{{<>},<,o!!!>!!!!!>!!ioa\'"\'!!a!>,<>}},{<ui!!o"!!"!!!>},<i>,{{<!,!!!!i!!!>>},{<!!!>>}}},{{<!!!>},<,!>},<"!\'!!!>a}>},{}}},{{<>,{}},{<}{!!!!!>!io!a!!aio,i!>\'{>,{<!>,<!!i,!>!!a!>,<}<>}}},{{}}}}}},{{{<\'<"<!!!>{,!ai!!!>,<!>},<>}},{{},<>},{{<o>}}},{},{{<oi!!!>!!!>a!>!>},<!!!>},<i!\'\'!>},<!>},<<\'!>,<!!a!>,<>,{<e\'}}!>,<!>!>},<"{,!!}!>,<,!>},<o!!!!!{>}}}}},{{{{},{<>},{{<\'!>u\'!>},<!!e!>i!!!>>},<a!>,<i!!!>!}ueue,!>u\'!<}>}},{{{<!>!!!>!!!>}!>,<!!!!!!<ou}>},{<,!!!>!!!!!>{o}a>}},{<<<}",!!,!>},<!>,<<!>},<<!\'i}!!u>,<aie!\'!!!!a!!i!!!>\'a\'u!>,<!>},<>},{<<,"a\'}!>},<}!>},<{!>a!>,<<<{!>>,{<u!>!,!>,<}>}}},{{{{{},<>}},{{<<!>},<!>!!!>},<a!{{!!>}},{{}}},{{{{{{<,!!!>!!u\'u>,{{<a!>,<i>}}}},{{{<i!>},<!!!>ou<,ua}\'!!uoii!!!!!!!><>}},{}}},{<!>,<,i>,{<!!u!>!a}!{<!!o{,!!<!!!>o!!!>>}}},{{<oao}"a<{ei<>,<!!i!>,<\'!>},<<!!!!!>},<{!>,<}\'!!u,a}!!!>iu>},{}},{<{u!>},<!>u!{!>i!}!>},<i}!!}{},!>},<<>}},{<u!!!!!!!>a<!!!>\'a{!!!!!!!>!!"i!!!>e>,<!>i!!o{!!\'<"!,}<!!!!!!o>},{}},{{{{},{<o!!o\'\'i!>o,io!>>}}}}}},{{{},{{{<!>,<!o"u"\'!>,<<a>}}},{{<!!}oe!!oo\'!{!>},<,!{}>}}},{{{<e>,<>},{{}},{{},<!!!!!>a}\'{,>}},{{{<\'!>},<"\'!!!!i,!!e!!!>},<}<a>},{<"!<!>\'"<!e!!!<ooe!>a!>},<o!\'e!>>}},{<\'>,{<!!,i!!!>!!!>!>},<{>}},{{<!>},<u\'!!oa!>,<!"<{!,a>},<u}}{u{!<e!uo!!!\'!>},<!!!>>}}},{{{<u!!!>!!\'!}{e{\'{<i!}>,<!ua>},<<>},{<uo!>},<i!>!>u!!}!>,<,u\'!>>,<!!ee!>ue!i!>!!!>!>!!>}},{{{{<{!!!!!\'!\'!!{}!>,<!e!!!>>}},{{{<>}}},{{}}},{{},{}}}},{{{{{{{<!>{\'<!!!!!!!>,<!o{{!>},<!!!>eu!!<i!!}>,<iua\'!<eo{e}!>},<!>"<!!!!>},<i>},<}!>},<>},{<!!i!>!!!>!>},<!!!!e>}},{{<{i!>,<!!}!>},<!>>},{<a!>,,!>},<>}},{{<!!!>!!e!>},<"oo!!!>!!!>},<>,{}},{<!!!>{!>!>},<!!""},e<},>},{{<!}u!>!!!>\'!><},!!!>!>,<!!!>e>},{<>}}},{{{<!!!!!>!">,{<i{\'>}}},{{<<"!!!>!>!!",!!!!!>!!i!"{oi}{>},<!!i!>},<!!!>}<!<u"<ao"!!!{!\'!>},<>},{}}},{{{{{<\'!<!>,<!i!!!>!!\'u,!}"\'e!!!!\'{!>,<!>,<!!!>i>},{<!,!>!>o\'!!!>,<!!!>},<}!!!>}}<o!>,<\'!!!>!!i!>},<u>}},{{{<a!>!!!><\'eeuui}!>!>,<o!u!><>}},{{{<o}!!{i!<u!,i!>,<>},<"\'o>},<!!!}!!u\'e<{"!!!!">}},{{<,<o}o,!!!!o,i">}}},{{{<!o\'!><u"u<!!,\'o<!ui!!i!,,i>}},{<!!!>!>,<o!!!>!!!>>,{<!u"!!!!<!i>,{<e!>},<!}i\'{"!>},<o{i>}}},{{{}},{{{{}}},{{},<>}},{<>,{<auaee!!,,!!!!}!,o!>!!!>!!!!ua>}}}},{{{<e!!e,u!!!>,<e!!}!!{!a\',!}>}},{<,ui!!!>!eu>},{{{{{<i>,{{<",,{}}{a!e"!!u>},{<\',a}\'!,,iai>}}}}},{{{<o!!{!>,<ao<"i!>},<>}}}},{<!>},<!>},<<!>},<o"!>ai"!>},<!<"">},{{},<e!!!>a>}}}},{{{{{<!e!!!>!>e}e!!{!>},<!!ai!>>},{}}},{}},{{<!!{>}},{}},{{{<!>,<!u!!!!e}a!!!!","!>,<>,{<{!!!>u!!e!>},<<"!!!>{!u!>!!!>},<!!!>\'!u\'!!i>}},{{{<>}},<a!>o!!a!!!>},<{"!}>},{<"<}!!!>,<!>},<!!!!!>!>!"!>,<"u\'!>!>},<>,<\'!>},<<u>}},{{{{{<\'!><o<!i{o\'a!>eoa"!!!>>}}},{{},{{},{{<i}{}!!!>!!\'!>,<!!!>{e!!!>,<\'>,<!!!>i!a!!!>\'o<{a!>,<}<>},{<!!!>a!>},<!>,<e!!!!!>i!>,<{o!>!!!!!>e>}}}},{{},{{}},{<!>,<!>,<<!!!>!>},<<ao"!!}!>i!>},<e>,<aei"!,i{i!>!!!>,<}!>},<i",e>}},{{{<!!!!!>,!!!!!>u!>},<!i!!!>o\'"!>,<}!{"o>,{{{{{<!>,<!!!!!>,<{>}}},{{<{u!>o!>,\'!!!>""!!a!ui!>},<>}}},<a!!!>!>,<,,,oa!!<!>,<ea,,"!>,<u!>},<!>>}},{{<a,o!>},<!>,<!>},<!!a>}}}}},{{{<!>},<e!>{!!!!!>>},{}}}},{{{<ei!>!!{!>},<}\'!!!>!i!!a},>},<!!!>!a!>u!>},<e{"!>!>},<!>,<!!!!!>!>},<!>,<i\'>}},{{{<!!!!!>oi"o!>,<o!>>},{<!>},<>,<{!>,<!>},<!!<!!!!}!!i!!!>!a!>!>},<!!<!>!>},<,!!!><>}}}},{{{{{<<!!u!>,<!!!>!!!>!!}!!!>!!{!>},<!>,<!!"i!>},<>},<!>,<u!u!>,<!!!>!>},<{!!i!>,<!>,<>},<!>},<ee!!!>!!!>u,,!!!>!!<u!>>}},{{<<"!>uu!>!!"!>u!>},<eu>},{{<>},{}}},{{{{{<!!!>\'>}}},{{<ue!!\'>},{<!!!!oo>}}},{{<oo!>},<"\'a}e!!!!\'!!""ae!>,<!>,<!!!!o>,{}}},{<u!>},<{!!!>o!!!e}!>a,!!,<}>}}}},{{{{<!<{!!!!!>!!!>!>,<{!!!><!>!!"o!!!>},<>,<<!<!>,<<i<!!!>u{!!}!>},<!!<\'!>},<<!!<a>},{{<{o!!!>!}}i!!!!o!>ue!>},<a!u!>!>},<o!>!!!>>,<>},<>},{{<!!\'i{u!!,!!!>,<!>},<!"!!!>,<!!!!<e>}}},{{{{<}!!!>\'!>,<!!!>!!>},{<<o"{>}}}},{{{{<!!<o!!!!!>}>},{}},{{<!>!!!>\'\'u!}!!!a!>},<\'",o!{!!!>!!<>}}}}},{{{<{i!!oa!!<,,e!!{"ae{}{!!!>>},{{<ea!>,<ea!>i}"i!!\'>},{<iu!!",!>},<!<},<"a<!">}},{}},{},{<!>i{"\'"!!!}<!>,<}!o!!u!>},<!!!>!u>}},{{{<!!!!,i>},{<!u!>},<>,{<!!i}!>"!"i!>!!u<!!!>!!}}!!!>,<>}}},{{{{<!>},<a!>!>},<>,{}}},<{!>},<}i!!!>!!\'!>"!!!>u!!!>},<!>,<!!<>},{{},{<o!!>}}},{<,!>,<\'aa!!}i"!!<ea"eeio>}},{{{},{{{<!>},<<!!!>,<!!!!a!!!!!>!>,<ae>},<e}\'!!i"!!!!!>,"<!!!>>},{{<o!!!>,<}}!>,<>},{}}},{{{{<eui}!>!!!>>},{}}},{{{{{{{{<o!o{>}},{{<eoa>}}}},{<!!!>>}},{<!>a!>,<\'!!!>!>!!!>{!!!>!>},<">,<e\'"io<\'!!!!<{!,e>}},{{{<e>}},{{{<!!!>a<>},{}}}}},{{{<>},{<!!!>"e!o>}},{{<>,{{{{{<a!>},<"!>},<!!!!<\'{ui{o!!{i!>{u!>},<!!ao>}}},{{}}},{<"!>,<!!!!!>!>!!\'{!!!!!>!>,<{>}}}},{<!>o\'}o,">,{<}i!>},<!!{!!!!!!!!!ie,i}ue"au!>},<!>,<}}>,<!>,<!><>}}},{{{<{u!!!>},<e{!>},<!>e!>"e,{,>},{<!!!>{o{}a!>},<e",{>}},{{<<>}},{<"!>,uo\'eo{!i!><u!>!!\'!!e\'>,{{<>}}}}},{{<!!,!!!>!!!>e{ua!!!!!>e!!<>,{<!>},<a!!!!!>},<,>}},{{{},{}},{<!>},<!>!!o\'eo"!!auua{!oi>}},{}},{{{}}}}}}},{{{{{<e!>!>,<iei!!!!!>e>},{<{u!!<!>},<iu!>!>},<!!!>!>,<>}},{<">},{{{<!!<}{o>},<!!!><a!ii!!{!!ae!!!>!!!{<<aa!>},<!!!>\'"o>},{<io!>,<oi!!!>,<<!>o\'!>,<}!!e!>},<}>}}},{{<,,,\'>},{}},{{{<!!i<!>},<e!>!!!>!>},<e!>},<i<a!>,<!!!>!>,<!!!!!>>}},{<!!\'!!auo{>,<!>o!!!!!>,<i,"a>},{{<e!,!!!!!!!!!>!>ua!i>,{{<e!<>},<}!>},<>}},{<!>},<!!\'ee!>,<!!!>},oi!!!>>}}},{{},{{<ea!!o"!>},<a\'!u!{!!!>,<!>,<\'!u!!!>!>u>},{<!!!>,<!"!!!!!>u!>{""!>,<!!"!u!>o!>,<>}}}},{{{{<"!>},<!>,<\'\'"aie!>,<o!>},<<\'!>>,<!!!>},<o!!o}io!!}ui!}{!<!!!!!>!>,<>},<<!!o>},{<!>,!!!!<!>},!>},<!!!>,<!>,<,!>,<!!\'!,e!!!>>}}},{}},{{{},{},{<!>},<,!a!!!>">}},{{{<o},}ee!!<!!"!!!>,<!>},<!!!!>,{}}},{{{{<!!}!>e>}},{{<{e!!!>!!}!!!!i!a"!!!>!!!>>}},{{{<!>!!\'e!!\'{e!>,<u!>>,<",!>i!>}>}}}},{{},{{{{{{{},{{<<!!!>"!!!>}{i!!<!>\'!>},<!>,<u{!>,<a>}}},<{!!!!!>},<!>},<!,"oe,!!!i!,!!!>!!!!!>},<<!aa!!!!!>!!}>},{{{<>}}}},{},{{<<e!!!>u!>,<!>},<e!>},<!>},<"!!,a\'!{<!!,<!!,>}}}},{{{<!>,<!,!>,<!!!>e{!!\'{u!!e!>,<\',e>},{<o!><a{!!<{!>},<!>,<",!!!>},<{!!!>}!!!>">}}}}},{{{<!!{i,!!!i,!!\'i!>!>,<,!!!>},<"ou!!!>!>,<>}}},{{},{{{},{}},{{{},{<i}>}},{}},{}}}},{{{<}!>},<eo}i}!>!>!!!!o}i">,{<!>,<!!<<"!,"u!!!,e"<!>,<u!>,<!>,,!!a>}}},{{}},{{{{<\'{!>,<!>,<!>{!!e>},<!e\'!>},<ui}>},<,e!>>}}},{{{<!!!>\'u">},{{<!>},<\',!!!!!>!>ia!\'>},<\'}<\'"!,!>{o!,>}},{{{{<u!!!!!>!!!>!!o}}\'>},{}},{<!>,<a!!u!>},<aii,u>}}}}},{{{{<!!!>,<aae!>!!!>!!i>},<!u!>},<{!!!>,<e!!!>{}!e"!!a,o,!!{>},{{<<\'!!e>},{<o,!a!>,<!!!><a!!u!>iu!>!e>}}},{},{<!>}a!!!<!>},<!>},<!u\'au!!\'!!!!!>{!!,!>},<i>,{<<!!!>},<e!!!!!>u!u"e!!!>!!ii"!!!>,<!!!>!!i}u!{>}}}}},{{{{<}\'!>,<\'!!o!{ee!!!\'!>!"e\'!eii">},<!!i}<,!!,!!<e!>},<<<a,!>,<ou!!!>>},{{},<!!!>!>,<!!!>,<>},{{}}},{{{{<ui,!>{!>,o\'o">}},{<!!!!!>"<{a!!{!>!{u!!uo<!>},<>,<<e!<!,!!,i}e}>},{<u,!u!}!>,<iue!!!>,i!>,<!>>}},{{<}}!>"!>,<e}<!!a{,\'<o>,{<<>}}}},{{{{},{}},{<o!>,!>},<e{>}},{<!!!>}\'e,!>!!!>!>,<u!>!ii>,<!>},<!!!>\'!!!>,<!>},<!<>},{<a!{i"!>},<<\'{!>!!!>a!!!u"!\'!!!!!>!!!!\'i"!>>,{<i!!\'<!!<!>,<!!!>">}}},{{{<!!<!>},<"!"{,!>,<!>!>},<{!{iu!!!!!!!>u}o>}},{<io!!<}i"<a!!!!!<>},{{<!>,<"!!!>!!!>"}ae!o!!!>!>}i!!!i!\'>}}}},{{{{<{{!>,<uu<u!!"!!!>,<!>>,<u!>!{u!>,<>},{{{<!>},<o!!,<ii!,>}},{{<aei!>,<!>,<,aeu,o>,<!!!>{!!eo!e>}}},{{<,!!!>!e{e!\'!>i>},{}}},{{{{<ao{i!>,<!!!!!a<!>}!<<>}},{{{},<"a!>},<aiei!!!ao!>,<a!>,<"!i>},{{},{<,<o!!!>!!!>!!o!!!>o!>},<!!a"!!i!<}o!!}>}},{<!>},<\'!!!>ae!!!>"!!!!!!,ie}!!!>!!!>!i>,{}}},{{{<!>},<!>,<\'}!>},<u>,{}},<u!>}!>},<<u>},{<o,u!!!>i!!!>!!!i\',<!!!>aa!!!!!!{{!!}>}}},{{{}}}},{{<!>,<!>o"a!>},<!!!!!>!>!!!>"!!a!!!>>},{}}},{{{{{{},{<o\'!!<\'a"!i!>\'>}},{}},{{{{<!!u!>,<"!\'o"""!}\'"e!!>,<\'u!!}i!!!>},<!!!>,<!>u!!!>},<,<oa!>,<!!>},{{{{<!!!!!>!!!<!!!>!!<!!!<i},!!!>},<a!!!!i",>},<<!>,<!!i\'\'!>!!"!!>},{{{}},{{<!!u}""ui>}},{<o!!eii"!>},<<,,io!!!!!!,o>,{<\'!>!!!>},<!>!>,<,!!ii"}a,!>,<!>,<>}}}},{<>,{<!!!>,"!!!!!>!!u!!u{o>,{<,e!!!>!i>,{}}}}},{{},<i!>,<!>,<a}!>},<!!"}<{>}},{{<a!!!>!!!>},<!!!>a>},{{{{<!!!>,<e}!>,<"!!!!!!>}}},<o,!>!>!>,<<!>u!!{!>,<!!au>}},{{<u!\'">},<!>},<!!\'{!!!>!>},<>}},{{{<!i!>},<\'ea!!!u!!{!,!!{{<!>eo}<!!,o!u>}},{{{{{{{}},{{}}}},{},{{<!!,o!!i!!"a>}}},{{{<\'ueui>}}}},{{<oa!>},<>}},{<!!!"a",",o!<>,{<!>},<u{},!!!!\'\'>}}}},{{<!!!>e!!!>,<ae"!>}!<au{!>,<oi!>>,<!!!>!!<!!!>a>},{{}}},{{{{},{{<<!!a!!"!!!>!>,<!!"!>},<!!!>},<e}\'<{u!!!>"\'e>}},{{},<\'!>},<o"!!!>\'!>!!!>o!!!>!i,u<e!>},<!>},<\'>}},{{},{<o"}eei!!!>!!}\'au>,{{{<{"iua}}!!>},{<{}oe!!o,a\'!"u,!!o"i>}},{<>}}},{{<{>},{<u,e<!!"a}o{aa,e!>,<>}}}},{},{{},{{<>,<!"!!!>!>,<o!!!>!!ui!!!!!io!o!>i!>,<\'"u!!!!{}>}}}}},{{},{}}},{{<oo{}a<!!>},{<!>},<\'e,u}"}a"!>,<\'\'!>,<!>,<i!>},<{">},{{<i>},{}}},{{<\'!!!\'!>!>>},{<!i<!a{a{"!!ie!,,!\'!!!>!>,<!}!e!!!!{o>,<!!!>!!!>,<ao!!!>,<>},{{<e!!!>u,oo!!u!!o!!!>},<!u!>,<!>},<a!!\'!{{{o>},{<e{<!!o"}!a\'!>,<!u,i{a!!<u!!u<>}}},{{<!>},<!!!!<>},{<!!!!\'}{!ua<\'>,{<}!>},<!!ai<!!!>,!>},<!>},<!>},<!!u{i{u}ao>}},{{{{}}},<!!!>,,a!>},<!!a!>,<oao!!!>!!oa{!!!!"e!>>}}},{{},{{{{<{!!!!i>},{<!!\'!!!>u!>,<!>{!e>}}},{{<!!oo!!u!!{}{!!>},{<<{{ioi}!!uea\'{!!!>},<>}}},{{{{},{<!>},<!!,o,!>}!!!>,<<a{i!>}!>},<a!!!>!>},<<>,<e!!!!{!ae!!!>},<e<u{,}!!!>!!!!!!{"!>,<<>},{{},{{<{o"}>}}}},{<!!!>{!>},<!!!>!!,<!>,<!>,<!<,>},{{},<!>"i"}<\'!!<!>},<!!!>eioee!u<!>},<>}},{{{<!!<>}},{{},<!>,<!!!>\'a!!!>>}},{{{<!>,<<!!!!e!!!>>}},{{<o!>,<{!!}!!{}!>o>}},{<!!!!!!!!!>a!>},<i!!"!!!>!>{i>,<},o!>,<<!!<iu!!!a>}}}},{{{<!<!>a!!!>!!e"}!!a!>,<!>!>},<!i{{<}>},{{<!!!>!>"!!!>u{a}!!!!!!!{"!!o!u!!!i,!>,<>}}},{{<<{<a<e!!oi!!!!!>,<>,<!>},<!>ua!>ea!!<o!>,<}!>},<\'>}},{{{{},{{},{<!!!!,!!!>!!!!<,!!!!!>>}}},{{<i!!!!!>!!"!!u!>,<!>{e}!!!>}<!\'e>},{<ao!i!!!>ai{auu!>},<ie<!!!>},<>}},{{{{<ao\'>},{}},{{{<e}!!!>"!>,<"!!a!>,<u!!!>},<!{>}},{<u!>},<{\'{!!!!!>i>},{{<\'<!!!><!!oo!>},<}!!!!!!!!!!>},<!>},<!>,<,!>>}}},{{}},{{{<{!!!>io>},<!!!!"!!!"!!i!!!ii!!!>,<o!>!>>}}}},{{{<o!>,<,!!!>u}"!o!o!oua>},{<<u!>},<a!>},<!{!>!>,<!>!!u!,u!i\'!>,<!!!>u>}}}},{{{{{<>},{}},{<!>},<{i{<\'u,!>,<!!!>>}},{{}}},{{}},{{},{{},<!!!>e\'!!}!!o\'<!!u,\'!!!>,!!u\'!!eu">},{}}}},{{{{{<>}},{<!!!!!,!!!!!>}a!!!iuu"!>"a{u!>>}},{{{<!>"!>},<e!>},<eu}!>},<i!!!>,<!>},<a">},{<}u<!>,<}"!!!>!>},<!oi!!!!!!!>u!!\'!!!!{>}},{<e!>},<!>},<ae!!e!>},<!!"!u!!!!">},{<!>,{!!\'!!e\'u,e<!>},<o>,{<!>,<uu!>!!!>\'!!">}}},{{}}},{{{<u!eua!!oi"!>},<!>,<i>},<!>,<i>},{<!>,<i"!{a>},{{{<<!>!!\'!!e!>,<!>},<e!!>}}}}}},{{{},{{},<!!}!>,<!><!!e!!!{!!!ee!>,<o!!!>{!!}}{!!!>>},{<!!}!>o!o,ia>}},{{<>,{{{<>}},<o,e<{{!!!u!>,<!!!!!>i!>!{}ui!!,"!>},<>}},{{{{<!!!!e!>e!"<!{!,ii!!!!!>!>,<,!>},<e>},{<,o!!e<}\'!!!>a!>},<e!!!e!!!>oe"i>}},{<"a!>},<a!>,<!!uo>,<>}},{{<o,iui{!!!>}!!!>},<!>},<}ei{!!!>>,{}},<<e<i!!!>},<\'\'i>}}},{{{}},{{{},{{{},{<<"!!"!uoa!>},<!!!>}oi{e!!!>u<>}}}},{<ou!>,<{!!a}>,{<,i!>},<i!!a!>},<!o<!>,<{{,ua!!!!!>>}},{<\'}!!!!<!<!!!>!>,<"\'<!a>,<{u!!!>>}}}}},{{{{<"o!>,<oa,i}!!!>{i<{>},{},{<\'!!!<e!!<{eia!>,<<>,{{<{!e!!!>ai}a!a{!>,<,!>},<!>!}>},{<>}}}},{{{<>},{{<>},<eo>}},{{<!>,<}!>,<!!o{"""!>},<u\'!!!>!!!>>},<!>!!"!i"!!,!>ioa!>!!oe>},{<!>,<!!!>\'!,!ea!>},<i!>,<>}}},{{{{{<i!!!>!>,<!!>}}},<!>,<{}>},{{<"!!!>}!!!>u",>},{<,!>},<!>,<e!!!!!>>}}},{{<a\'i!,!!!!!>!>!u!>,<!!\'}!!!!>},{}}}},{{{},{{{{<>,{<!>,<{uo!<}}!!!>!>},<",{!!!>!>>,{{<>},{{<!!!>!!!!{u<!>!!!>!!!>!!!!!>,<u!>,<,o!!{!!!!{>,<ueu>},{<!>},<!!"!>},<!>,<!!!>i>}}}}},{{<ia"!!!>ei!>},<ee!!>},{{{}}}},{<!!{oa!!!>!!!>}{e!!!>e!<a}aa{>,{<!!!!\'!>},<e!!"<u!>,<!!!>!!!><a!>!i!>,<>}}}},{},{<<"a!o!e!>},<<{!!>,{<!!!>,!!!!o!!!>,ao{ui\'}o!!eo>}}},{{{{<<!!!!!>!!i!!!>!!!!!>},<!!!>!>>},{<{!!\'i!},!!!!{!>,<i"!!,,!>,!!!!!!}>}},<!>,<e!!!>{>}},{{{{{},{<}i{"!>!!!>u{>}}},{{},{}}},{<!!u>,{}},{<!>},<i!!!>!>!!"\',!!e!>}!!,>,<!!!>>}}},{{{{{}},{<}!!!!!!a\'a!!!>ei>,<e!>i>},{<!>},<!!o!>,<!!!>},<a!>},<!>},<>}},{{<!>},<<}!!\'!!!>>},{}}},{{{<!>,<!!e\'!!!>!o!>},<>}},{{<o!>,<u,oai\'!>e!!eui!>!>},<!!>},{<e">,{<!!!!<!>,<!>,<o!!!>,<!>,<!!!>}{}!!!>a!<<,!!o>,{<!>!!!>!>"e}>}}}}},{{{{<!!!>!>,<}!!!>,>},{}},{{<!>,<\'i"!!,o<!!,}!!>,<oo!>,<!uou!!<>},{<{}i!>},<,!<ie\'{\'>}},{{}}},{<!>,<i,,!!>,{}},{{{<"oa!>},<<!!!!a!>,<a>},{<"!!}u,iu<a\'!{oae!>>},{}},{{<!!!>!>,<"<>},{<!!!"!!e}\'!!i>}},{{}}}}},{{{<>,{<o!!!>}}!"!>>}},{{<!!,>},{<}!>},<i!!!o>}}},{{<<!}!!!>o,a!>},<{u>},{{{<{!!!>ea!>},<!!!!!!e}i>,{<!>,<"\'o}u!o!!!>!!ao>}}}}},{{{<"!!a}{\'e>}},{{{{},<i!!!!e\'!!!>,!ai!!!!!>!>,<!!uoi"<ai">},<!u\'!}!>,<!>,<!>\'o"{o}"uo<<>},{{{<!!a"">},{{<!>},<!!!>},<"!!!!<!}!!ou!!>}}}}}}}},{{{<u"e"!!!>!>,<,!>,<i>,{<,}}u!>,<,,\'\'!>},<\'!>,<oue>,<ea!>u!>,<{u!!!>,<>}},{{{<aa\'ua!a!!!>,<{a!>},<uu,i!!!!au>},<a>},<a!!ei}u>},{{<">},{<>}}},{{{{{{<i!>,<\'"!\'>},<u<}!>,<>},{<o!!"!!!>!!}\'>}}},{{<,<<!!"\'!!!!a!>},<>},{<,oi{oe}"!!!ue!!\'{!{}a>}},{{{<!e!>,<!>},<{o\'!!}>}},{},{<!>>,{{<!>!>,!!i>},<!>,<!>,<!>,<!!,u,!!iee!>,<!>,<!!\'!{a>}}}},{{{<!>,<u!!!>,<a!uuo!!\'\'i,>}},{{},<!>!!!>},<eai!!!>u!!!>!!!!!!a!>,<{<!!!>a{>},{<!<!!"!>},<!>ouu!!!><"!>,<!!!"!!u<!!!>{>,<}u!>}!!,"!!\'}oa<!!!>oa!!!>o>}},{{{<!!!>!!!!>}},{{<!>,<!>,<e"!>,<>},{{{<!!o>,<}{!!!!!>o!!!>!>e!!i!!!>!u!!!>,<,!>,<!>>},{<>}},{{{<u"\',}!!!>uu!!!><!!!>},<!!!>},<!>,<">},<!!!!!>,<u!>}\'!>{!>!!!!{a}eeu!!!>,<>},{<{!!!>!>,<a!>},<e>}},{{<!!!>},<!!!!!!">},<!!ua,"{ee!!!e{>}},{{{<{{!!!>},<!>},<"\'!!!e!>},<u\'">}},{{<!>,<u!!i<!e,u!aei!>},<!!!!u>},{<}>}}}},{{{{<u>},<!!,}!>,<!!!>,!>},<<>},{{{<!!!>!!,!!!!{{!>},<a!>},<o<!e!!u!!!!!>"}u>},{{{<">}},<a!ea}!>},<{<!!{!!uu!!u<e}>}}},{{{<>},<i!>!!e!!!>o!!,,!!!>},<>}}}}}}}}}