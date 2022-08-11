import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Dimensions } from 'react-native';

import { useData, useTheme, useTranslation } from "../../hooks";
import { Block, Button, Article, Text } from '../../components/';
import Image from '../../components/Image'
import { p_data_week } from './pregnancy_week_by_week';

const PregnancyTracker = () => {
    const { t } = useTranslation();
    const { following, trending } = useData();
    const [products, setProducts] = useState(following);
    const { assets, colors, fonts, gradients, sizes, icons } = useTheme();
    const data = useData();
    const windowWidth = Dimensions.get('window').width;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const months_sinhala = ["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"];
    const d = new Date();
    let month = months_sinhala[d.getMonth()];
    let date = d.getDay();
    const p_weeks = [];
    for (let i = 1; i <= 40; i++) {
        p_weeks.push(i);
    }

    const [pregnancy_tracker, setPregnancy_tracker] = useState([
        {
            Week: 1,

            Your_baby: "ඔබගේ අවසාන ඔසප් වීමේ පළමු දිනය අනුව ඔබේ ගැබ් ගැනීම ගණනය කෙරේ. ඔබේ ඔසප් චක්‍රයේ පළමු සතියේදී සහ දෙවන සතියේදී ඔබේ ඩිම්බ කෝෂ මඟින් බිත්තරයක් (ඩිම්බයක් ලෙස හැඳින්වේ) නිකුත් කරයි. මෙය තුන්වන සතියේදී ඔබේ සහකරුගේ ශුක්‍රාණු මගින් සංසේචනය වේ. පිළිසිඳ ගැනීමෙන් පැය 30 කට පමණ පසු සංසේචනය වූ බිත්තරය දෙකට බෙදී යයි. මෙම අදියරේදී එය zygote ලෙස හැඳින්වේ. සෛල සංඛ්‍යා වලින් බෙදීම සහ ගුණ කිරීම දිගටම සිදු වන අතර සයිගොටය ක්‍රමයෙන් පැලෝපීය නාලයෙන් පහළට ගර්භාෂය දෙසට ගමන් කරයි (ගර්භාෂය). හතරවන සතිය අවසානයේදී බිත්තරය ඔබේ ගර්භාෂය තුළට බද්ධ කරයි. එය දැන් බ්ලාස්ටොසිස්ට් ලෙස හැඳින්වේ. එය 0.2mm පමණ පළල වන අතර සෛල 200 ක් පමණ අඩංගු වේ.බ්ලාස්ටොසිස්ට් සෛල විවිධ ස්ථර වලින් සෑදී ඇත. පිටත තට්ටුව, ectoderm ලෙස හැඳින්වේ, දරුවාගේ ස්නායු පද්ධතිය සහ මොළය බවට පත්වනු ඇත. මැද ස්ථරය හෝ මෙසෝඩර්ම් හදවත, රුධිර නාල, මාංශ පේශි සහ අස්ථි බවට පත් වන අතර අභ්‍යන්තර ස්ථරය හෝ එන්ඩොඩර්ම් හුස්ම ගැනීමේ සහ ආහාර ජීර්ණ පද්ධතිය බවට පත්වේ. බ්ලාස්ටොසිස්ට් වල පිටත කොරියොනික් විලී නම් කුඩා කූඩාරම් ඇති අතර එය වැදෑමහ බවට වර්ධනය වේ.            .",
            Length: "0.2mm",

            Weight: "මැනිය නොහැක",

            Your_Body: "ඔබ පිළිසිඳගත් වහාම ඔබේ ශරීරයේ හෝමෝන මට්ටම වෙනස් වීමට පටන් ගනී. ඔබ ප්‍රොජෙස්ටරෝන් හෝමෝනය වැඩි ප්‍රමාණයක් නිපදවන අතර එමඟින් ඔබට ඔසප් වීම වළක්වන අතර ඔබේ මානව chorionic gonadotropin (hCG) මට්ටම ඉහළ යයි. ඔබ ගර්භණී පරීක්ෂණයක් කරන විට අනාවරණය වන ගර්භණී හෝමෝනය මෙයයි. ඔබ තවමත් ගැබ්ගෙන ඇති බවට කිසිදු සලකුනක් ඔබට නොපෙනේ. බොහෝ කාන්තාවන්ගේ පළමු ලක්ෂණය වන්නේ සතිය අවසානයේදී ඔවුන්ගේ ඔසප් වීම මග හැරීමයි. කොඳු ඇට පෙළ වැනි ස්නායු නාල දෝෂ වැළැක්වීම සඳහා දිනකට ෆෝලේට් මයික්‍රෝ ග්‍රෑම් 400ක් ගැනීම හොඳ අදහසකි. දරුවා සැලසුම් කර ඇත්නම්, ඔබ ගැබ් ගැනීමට පෙර ජාන පරීක්ෂාව ගැන කතා කිරීමට හෝ ලිංගිකව සම්ප්‍රේෂණය වන ආසාදන සඳහා පරීක්‍ෂා කර ගැනීමට ඔබේ වෛද්‍යවරයා හමුවීමට සලකා බැලිය හැකිය. ඔබ සෞඛ්‍ය සම්පන්න ආහාර වේලක් ගැනීමට උත්සාහ කළ යුතු අතර ඔබේ බර වැඩි නොවන බවට වග බලා ගන්න. ගැබ් ගැනීමට උත්සාහ කරයි. මත්පැන් පානය නොකිරීම සහ දුම්පානය අත්හැරීම ඔබේ දරුවාට හොඳම වේ. පූර්ව නිගමන සෞඛ්‍යය පිළිබඳ වැඩිදුර කියවන්න            .",

            Image1: "https://i.postimg.cc/50mVvMHF/pregnancy-week-01-f95197.png",
            Image2: "https://i.postimg.cc/DzG27dDj/pregnancy-week-2-fertilization-square-png-pagespeed-ce-ce-POu-Nvw.png"
        },
        {
            Week: 2,

            Your_baby: "ඔබේ අවසන් ඔසප් වීමේ පළමු දිනය අනුව ඔබේ ගැබ් ගැනීම ගණනය කෙරේ. ඔබේ ඔසප් චක්‍රයේ පළමු සතියේදී සහ දෙවන සතියේදී ඔබේ ඩිම්බ කෝෂ මඟින් ඩිම්බයක් නිකුත් කරයි (ඩිම්බයක් ලෙස හැඳින්වේ). මෙය තුන්වන සතියේදී ඔබේ සහකරුගේ ශුක්‍රාණු මගින් සංසේචනය වේ. පිළිසිඳ ගැනීමෙන් පැය 30 කට පමණ පසු සංසේචනය වූ බිත්තරය දෙකට බෙදී යයි. මෙම අදියරේදී එය zygote ලෙස හැඳින්වේ. සෛල සංඛ්‍යා වලින් බෙදීම සහ ගුණ කිරීම දිගටම සිදුවන අතර සයිගොටය ක්‍රමයෙන් පැලෝපීය නාලයෙන් පහළට ගර්භාෂය (ගර්භාෂය) දෙසට ගමන් කරයි. සිව්වන සතිය අවසානයේදී බිත්තරය ඔබේ ගර්භාෂය තුළට බද්ධ කරයි. එය දැන් බ්ලාස්ටොසිස්ට් ලෙස හැඳින්වේ. එය 0.2mm පමණ පළල වන අතර සෛල 200 ක් පමණ අඩංගු වේ.බ්ලාස්ටොසිස්ට් සෛල විවිධ ස්ථර වලින් සෑදී ඇත. පිටත තට්ටුව, ectoderm ලෙස හැඳින්වේ, දරුවාගේ ස්නායු පද්ධතිය සහ මොළය බවට පත්වනු ඇත. මැද ස්ථරය හෝ මෙසෝඩර්ම් හදවත, රුධිර නාල, මාංශ පේශි සහ අස්ථි බවට පත් වන අතර අභ්‍යන්තර ස්ථරය හෝ එන්ඩොඩර්ම් හුස්ම ගැනීමේ සහ ආහාර ජීර්ණ පද්ධතිය බවට පත්වේ. බ්ලාස්ටොසිස්ට් වල පිටත chorionic villi නම් කුඩා කූඩාරම් ඇති අතර එය වැදෑමහ බවට වර්ධනය වේ.            .",
            Length: "0.2mm",

            Weight: "මැනිය නොහැක",

            Your_Body: "ඔබ පිළිසිඳගත් වහාම ඔබේ ශරීරයේ හෝමෝන මට්ටම වෙනස් වීමට පටන් ගනී. ඔබ ප්‍රොජෙස්ටරෝන් හෝමෝනය වැඩි ප්‍රමාණයක් නිපදවන අතර එමඟින් ඔබට ඔසප් වීම වළක්වන අතර ඔබේ මානව chorionic gonadotropin (hCG) මට්ටම ඉහළ යයි. ඔබ ගර්භණී පරීක්ෂණයක් කරන විට අනාවරණය වන ගර්භණී හෝමෝනය මෙයයි. ඔබ තවමත් ගැබ්ගෙන ඇති බවට කිසිදු සලකුනක් ඔබට නොපෙනේ. බොහෝ කාන්තාවන්ගේ පළමු ලක්ෂණය වන්නේ සතිය අවසානයේදී ඔවුන්ගේ ඔසප් වීම මග හැරීමයි. කොඳු ඇට පෙළ වැනි ස්නායු නාල දෝෂ වැළැක්වීම සඳහා දිනකට ෆෝලේට් මයික්‍රෝ ග්‍රෑම් 400ක් ගැනීම හොඳ අදහසකි. දරුවා සැලසුම් කර ඇත්නම්, ඔබ ගැබ් ගැනීමට පෙර ජාන පරීක්ෂාව ගැන කතා කිරීමට හෝ ලිංගිකව සම්ප්‍රේෂණය වන ආසාදන සඳහා පරීක්‍ෂා කර ගැනීමට ඔබේ වෛද්‍යවරයා හමුවීමට සලකා බැලිය හැකිය. ඔබ සෞඛ්‍ය සම්පන්න ආහාර වේලක් ගැනීමට උත්සාහ කළ යුතු අතර ඔබේ බර වැඩි නොවන බවට වග බලා ගන්න. ගැබ් ගැනීමට උත්සාහ කරයි. මත්පැන් පානය නොකිරීම සහ දුම්පානය අත්හැරීම ඔබේ දරුවාට හොඳම වේ. පූර්ව නිගමන සෞඛ්‍යය පිළිබඳ වැඩිදුර කියවන්න            .",

            Image1: "https://i.postimg.cc/50mVvMHF/pregnancy-week-01-f95197.png",
            Image2: "https://i.postimg.cc/DzG27dDj/pregnancy-week-2-fertilization-square-png-pagespeed-ce-ce-POu-Nvw.png"
        },
        {
            Week: 3,

            Your_baby: "ඔබේ අවසන් ඔසප් වීමේ පළමු දිනය අනුව ඔබේ ගැබ් ගැනීම ගණනය කෙරේ. ඔබේ ඔසප් චක්‍රයේ පළමු සතියේදී සහ දෙවන සතියේදී ඔබේ ඩිම්බ කෝෂ මඟින් ඩිම්බයක් නිකුත් කරයි (ඩිම්බයක් ලෙස හැඳින්වේ). මෙය තුන්වන සතියේදී ඔබේ සහකරුගේ ශුක්‍රාණු මගින් සංසේචනය වේ. පිළිසිඳ ගැනීමෙන් පැය 30 කට පමණ පසු සංසේචනය වූ බිත්තරය දෙකට බෙදී යයි. මෙම අදියරේදී එය zygote ලෙස හැඳින්වේ. සෛල සංඛ්‍යා වලින් බෙදීම සහ ගුණ කිරීම දිගටම සිදුවන අතර සයිගොටය ක්‍රමයෙන් පැලෝපීය නාලයෙන් පහළට ගර්භාෂය (ගර්භාෂය) දෙසට ගමන් කරයි. සිව්වන සතිය අවසානයේදී බිත්තරය ඔබේ ගර්භාෂය තුළට බද්ධ කරයි. එය දැන් බ්ලාස්ටොසිස්ට් ලෙස හැඳින්වේ. එය 0.2mm පමණ පළල වන අතර සෛල 200 ක් පමණ අඩංගු වේ.බ්ලාස්ටොසිස්ට් සෛල විවිධ ස්ථර වලින් සෑදී ඇත. පිටත තට්ටුව, ectoderm ලෙස හැඳින්වේ, දරුවාගේ ස්නායු පද්ධතිය සහ මොළය බවට පත්වනු ඇත. මැද ස්ථරය හෝ මෙසෝඩර්ම් හදවත, රුධිර නාල, මාංශ පේශි සහ අස්ථි බවට පත් වන අතර අභ්‍යන්තර ස්ථරය හෝ එන්ඩොඩර්ම් හුස්ම ගැනීමේ සහ ආහාර ජීර්ණ පද්ධතිය බවට පත්වේ. බ්ලාස්ටොසිස්ට් වල පිටත chorionic villi නම් කුඩා කූඩාරම් ඇති අතර එය වැදෑමහ බවට වර්ධනය වේ.",
            Length: "0.2mm",

            Weight: "මැනිය නොහැක",

            Your_Body: "ඔබ පිළිසිඳගත් වහාම ඔබේ ශරීරයේ හෝමෝන මට්ටම වෙනස් වීමට පටන් ගනී. ඔබ ප්‍රොජෙස්ටරෝන් හෝමෝනය වැඩි ප්‍රමාණයක් නිපදවන අතර එමඟින් ඔබට ඔසප් වීම වළක්වන අතර ඔබේ මානව chorionic gonadotropin (hCG) මට්ටම ඉහළ යයි. ඔබ ගර්භණී පරීක්ෂණයක් කරන විට අනාවරණය වන ගර්භණී හෝමෝනය මෙයයි. ඔබ තවමත් ගැබ්ගෙන ඇති බවට කිසිදු සලකුනක් ඔබට නොපෙනේ. බොහෝ කාන්තාවන්ගේ පළමු ලක්ෂණය වන්නේ සතිය අවසානයේදී ඔවුන්ගේ ඔසප් වීම මග හැරීමයි. කොඳු ඇට පෙළ වැනි ස්නායු නාල දෝෂ වැළැක්වීම සඳහා දිනකට ෆෝලේට් මයික්‍රෝ ග්‍රෑම් 400ක් ගැනීම හොඳ අදහසකි. දරුවා සැලසුම් කර ඇත්නම්, ඔබ ගැබ් ගැනීමට පෙර ජාන පරීක්ෂාව ගැන කතා කිරීමට හෝ ලිංගිකව සම්ප්‍රේෂණය වන ආසාදන සඳහා පරීක්‍ෂා කර ගැනීමට ඔබේ වෛද්‍යවරයා හමුවීමට සලකා බැලිය හැකිය. ඔබ සෞඛ්‍ය සම්පන්න ආහාර වේලක් ගැනීමට උත්සාහ කළ යුතු අතර ඔබේ බර වැඩි නොවන බවට වග බලා ගන්න. ගැබ් ගැනීමට උත්සාහ කරයි. මත්පැන් පානය නොකිරීම සහ දුම්පානය අත්හැරීම ඔබේ දරුවාට හොඳම වේ. පූර්ව නිගමන සෞඛ්‍යය පිළිබඳ වැඩිදුර කියවන්න",

            Image1: "https://i.postimg.cc/50mVvMHF/pregnancy-week-01-f95197.png",
            Image2: "https://i.postimg.cc/DzG27dDj/pregnancy-week-2-fertilization-square-png-pagespeed-ce-ce-POu-Nvw.png"
        },
        {
            Week: 4,

            Your_baby: "ඔබේ අවසන් ඔසප් වීමේ පළමු දිනය අනුව ඔබේ ගැබ් ගැනීම ගණනය කෙරේ. ඔබේ ඔසප් චක්‍රයේ පළමු සතියේදී සහ දෙවන සතියේදී ඔබේ ඩිම්බ කෝෂ මඟින් ඩිම්බයක් නිකුත් කරයි (ඩිම්බයක් ලෙස හැඳින්වේ). මෙය තුන්වන සතියේදී ඔබේ සහකරුගේ ශුක්‍රාණු මගින් සංසේචනය වේ. පිළිසිඳ ගැනීමෙන් පැය 30 කට පමණ පසු සංසේචනය වූ බිත්තරය දෙකට බෙදී යයි. මෙම අදියරේදී එය zygote ලෙස හැඳින්වේ. සෛල සංඛ්‍යා වලින් බෙදීම සහ ගුණ කිරීම දිගටම සිදුවන අතර සයිගොටය ක්‍රමයෙන් පැලෝපීය නාලයෙන් පහළට ගර්භාෂය (ගර්භාෂය) දෙසට ගමන් කරයි. සිව්වන සතිය අවසානයේදී බිත්තරය ඔබේ ගර්භාෂය තුළට බද්ධ කරයි. එය දැන් බ්ලාස්ටොසිස්ට් ලෙස හැඳින්වේ. එය 0.2mm පමණ පළල වන අතර සෛල 200 ක් පමණ අඩංගු වේ.බ්ලාස්ටොසිස්ට් සෛල විවිධ ස්ථර වලින් සෑදී ඇත. පිටත තට්ටුව, ectoderm ලෙස හැඳින්වේ, දරුවාගේ ස්නායු පද්ධතිය සහ මොළය බවට පත්වනු ඇත. මැද ස්ථරය හෝ මෙසෝඩර්ම් හදවත, රුධිර නාල, මාංශ පේශි සහ අස්ථි බවට පත් වන අතර අභ්‍යන්තර ස්ථරය හෝ එන්ඩොඩර්ම් හුස්ම ගැනීමේ සහ ආහාර ජීර්ණ පද්ධතිය බවට පත්වේ. බ්ලාස්ටොසිස්ට් වල පිටත chorionic villi නම් කුඩා කූඩාරම් ඇති අතර එය වැදෑමහ බවට වර්ධනය වේ.",
            Length: "0.2mm",

            Weight: "මැනිය නොහැක",

            Your_Body: "ඔබ පිළිසිඳගත් වහාම ඔබේ ශරීරයේ හෝමෝන මට්ටම වෙනස් වීමට පටන් ගනී. ඔබ ප්‍රොජෙස්ටරෝන් හෝමෝනය වැඩි ප්‍රමාණයක් නිපදවන අතර එමඟින් ඔබට ඔසප් වීම වළක්වන අතර ඔබේ මානව chorionic gonadotropin (hCG) මට්ටම ඉහළ යයි. ඔබ ගර්භණී පරීක්ෂණයක් කරන විට අනාවරණය වන ගර්භණී හෝමෝනය මෙයයි. ඔබ තවමත් ගැබ්ගෙන ඇති බවට කිසිදු සලකුනක් ඔබට නොපෙනේ. බොහෝ කාන්තාවන්ගේ පළමු ලක්ෂණය වන්නේ සතිය අවසානයේදී ඔවුන්ගේ ඔසප් වීම මග හැරීමයි. කොඳු ඇට පෙළ වැනි ස්නායු නාල දෝෂ වැළැක්වීම සඳහා දිනකට ෆෝලේට් මයික්‍රෝ ග්‍රෑම් 400ක් ගැනීම හොඳ අදහසකි. දරුවා සැලසුම් කර ඇත්නම්, ඔබ ගැබ් ගැනීමට පෙර ජාන පරීක්ෂාව ගැන කතා කිරීමට හෝ ලිංගිකව සම්ප්‍රේෂණය වන ආසාදන සඳහා පරීක්‍ෂා කර ගැනීමට ඔබේ වෛද්‍යවරයා හමුවීමට සලකා බැලිය හැකිය. ඔබ සෞඛ්‍ය සම්පන්න ආහාර වේලක් ගැනීමට උත්සාහ කළ යුතු අතර ඔබේ බර වැඩි නොවන බවට වග බලා ගන්න. ගැබ් ගැනීමට උත්සාහ කරයි. මත්පැන් පානය නොකිරීම සහ දුම්පානය අත්හැරීම ඔබේ දරුවාට හොඳම වේ. පූර්ව නිගමන සෞඛ්‍යය පිළිබඳ වැඩිදුර කියවන්න",

            Image1: "https://i.postimg.cc/50mVvMHF/pregnancy-week-01-f95197.png",
            Image2: "https://i.postimg.cc/DzG27dDj/pregnancy-week-2-fertilization-square-png-pagespeed-ce-ce-POu-Nvw.png"
        },

        {
            Week: 5,
            Your_baby: "5 වන සතිය වන විට, ඔබේ දරුවා ඔබේ ගර්භාෂයේ බිත්තියට ඇතුල් වී ඇත. එය දැන් කලලයක් ලෙස හඳුන්වන අතර අවසානයේ සිට අවසානය දක්වා 2mm පමණ වේ. සියලුම ප්‍රධාන ඉන්ද්‍රියයන් සඳහා පදනම් පිහිටුවා ඇත. ළදරුවා සිටින්නේ ඇම්නියොටික් මල්ලක් තුළය, එය ආරක්ෂා කරන තරල මල්ලක්. දරුවාගේ සෛල තවමත් බෙදී යයි. 5 වන සතියේදී, මොළය සහ කොඳු ඇට පෙළ දැනටමත් සෑදීමට පටන් ගනී. සුෂුම්නාව ස්නායු නාලය ලෙස හඳුන්වන අතර එය විවෘත වලක් ලෙස වර්ධනය වේ. මොළය සහ මුහුණ ඉතා ශීඝ්‍රයෙන් වර්ධනය වන බැවින් මෙම අවධියේදී ඔබේ දරුවාගේ හිස ශරීරයේ අනෙකුත් කොටස් වලට වඩා විශාල වේ.ඔබේ දරුවාගේ හදවත මේ සතියේ ස්පන්දනය වීමට පටන් ගනී. රුධිර වාහිනී දැනටමත් සෑදීමට පටන් ගෙන ඇති අතර දරුවාගේ සිරුරේ රුධිරය සංසරණය වේ. රුධිර නාල මාලාවක් ඔබව ඔබේ දරුවාට සම්බන්ධ කරන අතර, මෙය අවසානයේ පෙකණි වැල බවට පත්වේ.            ",

            Length: "2mm",
            Weight: "මැනිය නොහැක",

            Your_Body: "5 වන සතිය බොහෝ කාන්තාවන් තමන් ගැබ්ගෙන ඇත්දැයි කල්පනා කිරීමට පටන් ගනී. ඔබට ඔබේ ඔසප් වීම මඟ හැරී ඇත, නමුත් එය ආරම්භ වීමට ආසන්න බව ඔබට හැඟෙනවා විය හැකිය. ඔබේ පියයුරු විශාල වී වේදනාවක් දැනෙන බව ඔබට පෙනෙනු ඇත, ඔබට තෙහෙට්ටුවක් දැනෙන්නට පුළුවනි.සමහර කාන්තාවන්ට ඔක්කාරය දැනිය හැක, නැතහොත් වෙනදාට වඩා නිතර වැසිකිලියට යාමට අවශ්‍ය බව දකියි.ඔබ වැඩිපුර මානව chorionic gonadotropin (hCG) නිපදවනු ඇත. )            ",

            Things_to_remember: "ඔබට ඔසප් වීම මග හැරීමට පසු දින ඔබට ගර්භණී පරීක්ෂණයක් කළ හැකිය. විවිධ පරීක්ෂණ තිබේ, එබැවින් ඔබ උපදෙස් හොඳින් පිළිපදින්න. ගර්භණී පරීක්ෂණයෙන් ඔබ ගැබ්ගෙන ඇති බව පෙන්නුම් කරන්නේ නම්, හැකි ඉක්මනින් ඔබේ වෛද්යවරයා හමුවීම හොඳ අදහසකි. ඔවුන් ඔබ ගැබ්ගෙන ඇති බව තහවුරු කර ඔබ සහ ඔබේ දරුවා රැකබලා ගන්නා ආකාරය පිළිබඳව ඔබට උපදෙස් දෙනු ඇත. ඔබ ගැබ්ගෙන ඇති බව සොයා ගැනීම ඉතා උද්යෝගිමත් විය හැක. නමුත් සමහර කාන්තාවන්ට ගැබ් ගැනීම සැලසුම් රහිත ය. දරුවා සැලසුම් කර තිබුණත් නැතත්, ඔබට ප්‍රීතියේ සිට පුදුමය දක්වා කම්පනය දක්වා හැඟීම් පරාසයක් දැනෙන්නට පුළුවනි. ඔබ ගැබ්ගෙන ඇත්නම් මත්පැන්, සිගරට් හෝ නීති විරෝධී මත්ද්‍රව්‍ය නොබීම වැදගත් වන්නේ මේ සියල්ල ඔබේ දරුවාට ඉතා හානිකර විය හැකි බැවිනි.            .",

            Image1: "https://i.postimg.cc/6pM77X97/pregnancy-week-05-39f617.png",
            Image2: "https://i.postimg.cc/wx1hG9z6/pregnancy-week-5-amniotic-sac-4x3-jpg-pagespeed-ce-9h-KWjz-Y6n4.jpg",
        },

        {
            Week: 6,

            Your_baby: "This week your baby is growing very quickly – they will double in size to about 4mm long by the end of week 6.By that time, the baby looks like a curved tadpole. It has a large head and a tail. Inside, the organs are starting to form. If you have an ultrasound in the sixth week, you may be able to see the baby’s heart beating.The baby’s cells all have different jobs. They contain all the genetic information they needed to grow everything from the baby’s skin to their eyes to their liver.Their jaw and eyes are starting to develop, as well as the ‘buds’ that will become arms and legs. Vertebrae are starting to form along their back. Also this week, a stalk which will develop into the umbilical cord attaches to the front of the baby’s body.",

            Length: "4mm",
            Weight: "මැනිය නොහැක",

            Your_Body: "If you didn’t realise you were pregnant last week, you will probably have noticed a missed period by now. You may also be feeling tired, your breasts may be tender, and you may be feeling nauseous or even vomiting.Not all women experience morning sickness during pregnancy. It can happen at any time of day, not just in the morning, but it usually clears up by about 3 months into pregnancy. If you’re feeling very unwell or you have severe vomiting that doesn’t stop, talk to your doctor.You might also notice your sense of smell is stronger and you might be having dizzy spells.",

            Things_to_remember: "It’s a good idea to start your pregnancy care as soon as you realise you’re pregnant. See your doctor, who will confirm the pregnancy with a blood test, talk to you about your care options, and give you advice on how to look after yourself and your baby.Make sure you tell your doctor if you are taking any medications. Now is the time to start eating healthily, which means eating all the nutrients you need for the baby and avoiding any foods that could harm them. It’s also important not to drink alcohol, smoke cigarettes or take illicit drugs while you’re pregnant since these can harm your baby.If you’re feeling sick and tired, some gentle exercise may help you to feel better. Swimming or walking are good options. Keeping fit will help your body cope better with the demands of pregnancy.",

            Image1: "https://i.postimg.cc/13NNgdjs/pregnancy-week-06-8a81ea.png",
            Image2: "https://i.postimg.cc/mknjKrX9/pregnancy-week-6-webbed-hands-4x3-jpg-pagespeed-ce-9p-Kom-A0-PO.jpg "
        },


        {
            Week: 7,
            Your_baby: "Your baby is now about 1 cm long. The brain is developing rapidly, and the head is much bigger than the body. They have large eyes, a wide forehead and 'buds' where the ears are going to form. They also have nostrils and lips, while the brain, spinal cord and internal organs are developing, including the stomach, kidneys and lungs.The baby is lying inside an amniotic sac, a bag formed of membranes filled with fluid. A placenta is starting to form and attaching to the inside of your womb (uterus) so that it can deliver nutrients and oxygen from your blood stream to your baby.The baby’s heart is now beating at 150-180 beats per minute.",

            Length: "1cm",
            Weight: "මැනිය නොහැක",
            Your_Body: "Your hormone levels are still different from normal and this might be making you quite emotional, irritable and moody. You may still be feeling tired and less energetic, but this is quite normal.Your breasts may still be swollen and tender. The areola, the dark area around the nipple, may be darker. You may also have little bumps on the areola and the nipples may be larger. If your breasts are uncomfortable, now might be the time to consider a maternity bra.Some women have problems with constipation at this stage. It can help if you drink more water and eat foods that contain a lot of fibre, like vegetables, fruits and whole grains.",

            Things_to_remember: "Make sure you get plenty of rest – try to put your feet up at lunch time, go to bed early and ask for help if you need it, especially if you have other children.Doing some exercise will help you feel better. Aim for 150 minutes of exercise per week, or 30 minutes on most days.If you haven’t seen a doctor yet, it’s a good idea to make an appointment now. You will have a number of regular antenatal visits throughout your pregnancy with your doctor, midwife or obstetrician. At your first visit, your doctor will confirm you are pregnant, calculate your due date (you may need an ultrasound to do this), check your overall health and order a blood test.",

            Image1: "https://i.postimg.cc/c4zxPMBz/pregnancy-week-07-a9c96c.png",
            Image2: "https://i.postimg.cc/Zn6PsLdG/pregnancy-week-7-tailbone-4x3-jpg-pagespeed-ce-4-UDWAK48-BL.jpg "
        },


        {
            Week: 8,
            Your_baby: "Your baby is now 1.3cm long. They still look a bit like a tadpole, but the tail is getting shorter and will eventually disappear. The eyes and nose are visible, the inner ear and the tongue are developing, and the roof of the mouth is coming together with the upper jaw There are hands at the end of the arm buds, and webbed fingers are starting to grow. The arms and legs are made of cartilage at this stage. The reproductive organs are also developing now, but it’s too early to tell whether the baby is a boy or a girl.The fetus is still inside the amniotic sac and getting its nutrients from a yolk sac. The placenta is developing and will attach to the wall of the womb with structures called chorionic villi.",

            Length: "1.3cm",
            Weight: "මැනිය නොහැක",

            Your_Body: "Even though your baby is tiny, by week 8 your womb (uterus) has grown to the size of a tennis ball. It’s putting more pressure on your bladder, so you might need to go to the toilet more often than normal.This is the week when morning sickness is often at its worst. Some women are glowing and have a lot of energy, but others are feeling tired, emotional and moody. It’s normal to have mood swings when you’re pregnant, but chat to your doctor if you’re feeling very anxious or down.At this time, you may start to notice problems with your teeth. Hormones can make your gums bleed more easily and you may also develop lumps on the gums. Vomiting a lot or eating sweet foods can also affect your teeth. Make sure you floss and use a soft toothbrush. It’s a good idea to see a dentist regularly throughout your pregnancy.",

            Things_to_remember: "If you haven’t seen a doctor yet, now is the time to go. You will have a number of regular antenatal visits with your doctor, midwife or obstetrician regularly throughout your pregnancy.It’s important to look after your own health when you’re pregnant. For example, if you catch the flu when you’re pregnant it can be much more serious and result in you going to hospital. It’s a good idea to consider a flu shot - it’s free for pregnant women in Australia at any stage of their pregnancy, under the National Immunisation Program. You can read more about influenza vaccination in pregnancy on the Department of Health website.",

            Image1: "https://i.postimg.cc/MG5rFwCm/pregnancy-week-08-845d37.png",
            Image2: "https://i.postimg.cc/43t39FRR/pregnancy-week-8-brain-nerve-cells-4x3-jpg-pagespeed-ce-f-MZjcv-Q6bk.jpg"
        },


        {
            Week: 9,
            Your_baby: "Your baby is growing very quickly. They are now about 2cm long – about the size of a peanut shell – and their tiny muscles have developed enough for them to be able to move around. Their skin is transparent, and their arms and legs are bent so it looks like they are hugging themselves.The baby's shape is now more recognisable. The head is still large and the features on the face are forming, with closed eyes, a mouth and tongue, including tiny taste buds. The inner ear is forming, but the baby won’t be able to hear until about 24 weeks. The liver is making blood cells and there are blood vessels underneath the skin. The bones in your baby’s skeleton are forming and there are clear fingers and toes.",

            Length: "2cm",
            Weight: "මැනිය නොහැක",
            Your_Body: "Your 'baby bump' probably won’t be visible just yet, but you may start putting on some weight. Remember, you don’t need to ‘eat for two’ so you don’t need any extra calories at this stage of the pregnancy. You just need to make sure you eat the right foods, with enough nutrients for you and your baby. It’s important to follow a healthy diet throughout your pregnancy.Your skin may be producing more oil because of the pregnancy hormones. This may give you a lovely pregnancy glow – but it might also give you pimples. Some women find their skin is drier than normal. Drinking plenty of water – 6 to 8 glasses a day – will help your skin.You may still be feeling very nauseous, but any morning sickness should subside in a few weeks. Many women develop headaches at this time. It’s OK to take paracetamol while you’re pregnant, but take the lowest dose for the shortest possible time. If you have migraines, talk to your doctor about what medication is safe to take.",

            Things_to_remember: "Because of your pregnancy hormones, you might need to go to the toilet more often than usual. If you feel a burning or stinging sensation, or if you need to pass urine very frequently, see your doctor or midwife since this could be a sign of an infection. Urinary tract infections are more common in pregnancy.Many women wonder whether it’s OK to have sex during early pregnancy. Unless your doctor or midwife has told you otherwise, sex is perfectly fine and won’t harm the baby. Some women don’t feel like sex at this time while others want more sex than usual.",

            Image1: "https://i.postimg.cc/wjg3DtNv/pregnancy-week-09-9b2906.png",
            Image2: "https://i.postimg.cc/L8t7gzQ0/pregnancy-week-9-finger-touch-pads-4x3-jpg-pagespeed-ce-7-L59-H-b2-NZ.jpg"
        },



        {
            Week: 10,
            Your_baby: "From 10 weeks, your baby is called a fetus. They are about 3.5cm long – around the size of a prune – and weight about 8g. The tadpole-like tail has disappeared.All of the organs have formed but they aren’t working yet. The ears are developing and the nostrils are in place above the upper lip. The jaw bones already include all the milk teeth.The baby has internal sex organs, their ovaries or testicles, but the external sex organs still haven’t developed. The brain is active and has brain waves. The heart has 4 separate chambers and is beating at about 180 beats per minute, 3 times faster than an adult heart.The arms and legs have grown longer, and the baby has tiny fingers and toes. Their ankles, wrists, knees and elbows are forming.",

            Length: "3.5cm",
            Weight: "8g",
            Your_Body: "Your womb (uterus) is now about the size of an orange. You may find your clothes are tighter and your stomach may be sticking out, but this can be due to changes in your bowel rather than your pregnancy.Many women feel vulnerable and emotional when they are pregnant. This is completely normal. You may also be more hungry than usual. Try not to fill yourself up with unhealthy food – choose nutritious snacks as part of a healthy diet while you’re pregnant.",

            Things_to_remember: "You may have already had an ultrasound scan to confirm your due date, but a dating scan is normally done at around 10 weeks.From 10 weeks you can start thinking about prenatal screening. One screening test you can have now is a non-invasive prenatal test, or NIPT, to screen for Down syndrome and certain other abnormalities in the baby. This is a simple, very accurate blood test, but it’s quite expensive and it’s not for everyone. Most women who want to screen for Down syndrome have combined first trimester screening a little later in the pregnancy.You do not have to have screening. It depends on your age, history and unique circumstances. Talk to your doctor or genetic counsellor about the best screening tests for you.",

            Image1: "https://i.postimg.cc/KcCTVrKs/pregnancy-week-10-225264.png",

            Image2: "https://i.postimg.cc/sxtjxpHg/pregnancy-week-10-fingernails-4x3-jpg-pagespeed-ce-ZMl-OW3-Js-W.jpg "
        },

        {
            Week: 11,
            Your_baby: "Your baby now measures about 4.5 cm — about the size of a fig - and weighs around 10g. The brain and nervous system have almost finished developing. The muscles and nerves are now starting to work together so the baby is starting to make small, jerky movements around your uterus.The baby’s head is now about the same length as their body. The bones are starting to harden, the baby’s hands and feet are in front of their body, and they have individual fingers and toes with nail beds. The passages of the nose are open and the tongue has formed.The fingernails are growing, the heart is pumping blood, and there are teeth inside the gums.",

            Length: "4.5cm",
            Weight: "10g",
            Your_Body: "Many women find morning sickness starts to settle down by week 11, although some don’t feel better until about week 14, when the pregnancy hormones decrease and the placenta starts to support the baby.You might get cramps in your legs or feet. One way of dealing with this is to eat more calcium in foods such as milk, yoghurt and cheese. Make sure you’re getting enough exercise, too – about 30 minutes of moderate exercise per day is ideal.",

            Things_to_remember: "From week 11 of your pregnancy, you can have an ultrasound scan to check how the baby is developing. This is often when you see an image of your baby for the first time. An ultrasound can be used to check your due date and also whether your baby is at risk of a condition such as Down syndrome. You might also think about prenatal screening now to check for Down syndrome and other genetic abnormalities. You do not have to do this; it depends on your age, history and own personal circumstances. Now is a good time to talk to your doctor or a genetic counsellor about whether screening is right for you.The reasons you might decide to talk to a genetic counsellor include if:there are genetic conditions in your family or the father’s familyyou or your partner has a serious condition that could be passed on to the baby,you both carry a faulty gene,you are older than 35,you have been exposed to harmful chemicals or household products during your pregnancy,you have had an ultrasound or another screening test that showed your baby could be at increased risk,you and your partner come from an ethnic backgrounds where genetic problems are more common",

            Image1: "https://i.postimg.cc/DwQJN9sx/pregnancy-week-11-e16c9f.png",
            Image2: "https://i.postimg.cc/5NY5rbwB/pregnancy-week-11-tooth-buds-4x3-jpg-pagespeed-ce-Ie-Evv-RWkur.jpg"
        },

        {
            Week: 12,
            Your_baby: "Your baby is about 6cm long — about the size of a plum – and weighs about 18g. The fetus has almost doubled in size in the past 4 weeks and is now fully formed, with all of the organs, muscles, limbs and bones in place. At this point, your baby fills your whole uterus.The head is about half the length of the body. The arms appear a more normal length, although the legs are still short. The kidneys are functioning, and the baby is swallowing amniotic fluid and passing urine. They are practising breathing movements and their digestive system is starting to practise too.The baby is moving around constantly — stretching, yawning and wriggling. The heart is beating strongly and can be heard with a heart monitor.",

            Length: "6cm",
            Weight: " 18g",
            Your_Body: "Any morning sickness should be easing up now and your uterus will have shifted so there is less pressure on your bladder. You should also be feeling less tired and you might even have more energy.Some women notice dark patches on their face or neck, called ‘chloasma’. You may also develop a dark line from your belly button down to your pubic area, called the linea nigra. These are both caused by the hormonal changes going on in your body.",
            Things_to_remember: "Week 12 is when many women start their routine antenatal visits. This can be with your doctor, a midwife or an obstetrician. How often you see them will depend on how the pregnancy is going, as well as your circumstances.Now is the time to organise diagnostic or screening tests, if you are going to have them. Screening tests that are available to you from 12 weeks include:combined first trimester screening test: a combination of a nuchal translucency scan (an ultrasound) and a blood test non-invasive prenatal test (NIPT): a reliable but expensive blood test to screen for Down syndrome.chorionic villus sampling (CVS): a test that diagnoses Down syndrome or other disorders by taking a sample of cells from the placenta. Some women can feel down or anxious when they are expecting a baby. This is very normal, but if the feelings last for more than 2 weeks it’s a good idea to mention them to your doctor or midwife. It’s possible to develop antenatal depression or anxiety when you’re pregnant, especially if you have had a mental health condition in the past. If this happens, it’s important to get help as soon as possible.",

            Image1: "https://i.postimg.cc/D0q6YCcL/pregnancy-week-12-17a7e7.png",
            Image2: "https://i.postimg.cc/X7bFsdYb/pregnancy-week-12-eyelids-4x3-jpg-pagespeed-ce-x-Oqv-LUl-L7p.jpg"
        },

        {
            Week: 13,
            Your_baby: "Your baby is now fully formed and looks much more like a human being. They are about 7.5 cm long — about the size of a peach — and weigh about 30g. They are moving about vigorously in your uterus and they can move their arms and legs, suck their thumb and form a fistTheir organs, including the liver and pancreas, are starting to function. The vocal cords are beginning to develop, and they have soft hair on their eyebrows and head. They are growing a penis or clitoris, but these are too small to be seen during an ultrasound.The kidneys produce urine, which becomes amniotic fluid. The baby practises breathing and swallowing the fluid.",
            Length: "7.5cm",
            Weight: "30g",
            Your_Body: "At 13 weeks, you have officially entered the second trimester of pregnancy. If morning sickness is still a problem, talk to your doctor or midwife about how to manage it.Your bump might start to show and you might feel the ligaments stretching in your tummy and groin.You may notice more visible veins, especially in your breasts. You may also be tired, have food cravings or food aversions, or have heartburn, indigestion or constipation.",

            Things_to_remember: "The chances of having a miscarriage decrease once you enter the second trimester. Many people therefore decide to share the news of their pregnancy at this time. Chat with your partner about how you want to do this, and be prepared in case people don’t react in the way you hope for.You don’t have to tell your employer that you’re pregnant. If you want to take maternity leave, however, you will need to give your employer 10 weeks’ notice. It’s worth thinking early about how you will manage life with a baby. If you haven’t already, now is a good time to find out more about your parental rights and entitlements.If you haven’t already had prenatal screening or diagnostic tests, now is also the time to organise appointments them if you want to. At 13 weeks you can have a nuchal translucency scan (an ultrasound) or chorionic villus sampling (CVS) if there are any concerns that your baby may have Down syndrome or some other genetic disorders.",

            Image1: "https://i.postimg.cc/vHTLnHJ5/pregnancy-week-13-d5a769.png",
            Image2: "https://i.postimg.cc/L56SsxVS/pregnancy-week-13-fingerprints-4x3-jpg-pagespeed-ce-my6-HLq-VAah.jpg "
        },

        {
            Week: 14,
            Your_baby: "By 14 weeks, your baby weighs about 45g and is about 11cm long – the size of a lemon. Its organs have formed, including the ovaries and testicles.The face is becoming more recognisable, with a longer neck and fully developed eyes, which are covered by fused eyelids. The fingers and toes are growing nails.The baby’s reflexes have started working – if you were to touch their hands or feet, they would curl or close. You can’t feel it yet, but the baby is moving around. The vocal cords are working and the baby can cry.",
            Length: "11cm",
            Weight: "45g",

            Your_Body: "The second trimester is when many women start to feel more energetic and active. Hopefully your morning sickness is disappearing by now and you should be more comfortable now.Your 'baby bump' might start to become more noticeable. Your breasts may be getting larger and may already be making colostrum. You might notice new moles or skin tags developing on your body. These are nothing to worry about, but chat to your doctor or midwife if they’re bothering you",

            Things_to_remember: "Now you’re feeling more energetic, doing more physical activity will help keep you in shape for your pregnancy. Exercising will prevent you from putting on too much weight and is also good for your mood.If you were fit and active before you fell pregnant, it’s OK to carry on with a light to moderate exercise program. But don’t suddenly start a lot of exercise for the first time while you’re pregnant. Chat to your doctor about what’s best for you.Aim for 150 minutes of exercise per week, or 30 minutes on most days. It’s probably best not to exercise for more than 60 minutes at a time while you’re pregnant. Both aerobic and strengthening exercises are fine.",

            Image1: "https://i.postimg.cc/1tTD3FyW/pregnancy-week-14-9c66e9.png",
            Image2: "https://i.postimg.cc/k4WN5cgT/14-weeks-pregnant-4x3-png-pagespeed-ce-Ap-FRsy6u-Cz.png "
        },

        {
            Week: 15,
            Your_baby: "Your baby is gaining weight quickly now, and their body is growing faster than their head. They weigh about 80g and measure about 12cm from head to bottom – about the size of an orange.The bones in the baby’s ears are developing, which means they are starting to hear for the first time. They will be able to listen to the sound of your heartbeat, digestive system and voice. Their eyes are still fused shut, but they can respond to light. They may be able to suck their thumb, grip with their fingers, squint and grimace. Fine hair, called lanugo, is starting to grow all over their body.",

            Length: "12cm",
            Weight: "80g",
            Your_Body: "More blood is now flowing around your body, which might be giving you a pregnancy ‘glow’. It can also cause some side effects, including changes to your blood pressure, bleeding gums or nose, and headaches.The nausea of the first trimester should have cleared up by now, but talk to your doctor if you’re still feeling sick or vomiting.You will be gaining weight and your body may be changing. The skin around your nipples may be getting darker and you may notice your hair and nails are growing more quickly. You might feel a bit achy and have tingling in your hands or feet – but this is normal.",

            Things_to_remember: "From 15 weeks, you might have a blood test and detailed ultrasound, known as maternal serum screening. This is usually done if you didn’t have the combined first trimester screening. Maternal serum screening will indicate whether your baby is at risk of certain physical or intellectual conditions such as Down syndrome– but it’s not foolproof. While screening might suggest about 5 in every 100 babies could be at increased risk, most of these won’t experience problems.If you need to have an amniocentesis, this can be done from 15 weeks. An amniocentesis is not a routine test in pregnancy; it’s used to diagnose any problems or serious health conditions affecting your baby.You might also need an amniocentesis if you’re older than 35, if there is a history of genetic disorders in your family, or if the screening tests you had earlier in your pregnancy showed there might be a problem. An amniocentesis will give you a clear diagnosis.",

            Image1: "https://i.postimg.cc/BbBDcVxz/pregnancy-week-15-c34344.png",
            Image2: "https://i.postimg.cc/02XSP3C8/15-weeks-pregnant-4x3-png-pagespeed-ce-WVRLBE6-Gi.png "
        },

        {
            Week: 16,
            Your_baby: "Your baby now weighs about 110g and is about 12.5cm – around the size of a small avocado. They are growing quickly and are about to have a growth spurt. They will roughly double in size over the next month.The baby looks much more human now. Their eyes are no longer at the side of their head and their ears are in the right place. All of their joints are working and they can wriggle their fingers and toes.The umbilical cord is now fully formed, with 2 arteries and 1 vein. Your baby may be gripping hold of it. They can flex their muscles and limbs and make expressions with their face, although they can’t control them yet.",

            Length: "12.5cm",
            Weight: "110g",
            Your_Body: "Many women have a clear 'baby bump' by now. Some will even feel their baby moving for the first time, especially if this isn’t their first pregnancy. But don’t worry if you can’t feel anything yet – many women won’t notice their baby’s movements until 18 to 22 weeks into their pregnancy.Increases in your blood and hormone levels might be causing you some discomfort. You might develop acne as your skin produces more oil. You might also notice varicose veins or get cramps in your legs. Exercising and stretching should help to relieve this. As you and your baby put on weight, it’s important to take care of your back since back ache is common. Make sure you stand straight and bend and lift correctly. Doing simple stretches and exercises can also help with back ache.",

            Things_to_remember: "Some women notice their libido increases during the second trimester. This is because of the hormones. Other women find they don’t want sex at all during this time.It’s fine to have sex while you’re pregnant, unless your doctor or midwife has told you not to. It won’t harm your baby. If you or your partner don’t feel like sex, you can still be intimate by touching or massage. Every couple is different.Your doctor may offer you further screening or diagnostic tests at this time, including a blood test and ultrasound (maternal serum screening) or amniocentesis.",
            Image1: "https://i.postimg.cc/FH8MQWL8/pregnancy-week-16-419bc0.png",
            Image2: "https://i.postimg.cc/SQTRM9Yd/16-weeks-pregnant-4x3-png-pagespeed-ce-JLRl49-JX7-A.png"
        },
        {
            Week: 17,
            Your_baby: "Your baby is growing rapidly, and might be bigger than the placenta now. They weigh about 150g and are about 13cm long - about the length of a nail file. They are now developing a layer of fat called the adipose layer. This helps them to gain weight and will define their features. The umbilical cord is becoming thicker and stronger. The external sex organs are fully formed so it’s usually possible to see the baby’s gender on an ultrasound.Their kidneys are also functioning now. The baby swallows amniotic fluid and passes urine about every 50 minutes. Their taste buds are working and they can tell the difference between sweet and bitter. There are tiny lines on their fingers that will develop into their unique fingerprints.",
            Length: "13cm",
            Weight: "150g",
            Your_Body: "Many women have lots of energy at this stage. As the baby moves up in your abdomen you won’t need to go to the toilet as often, and if you had nausea, it is hopefully now a thing of the past.Increased hormone levels are causing changes to your body. You might notice a dark line forming from your belly button to the top of your pubic bone, called the linea nigra. Your hair should be thicker because it’s not falling out as much.Changes to your hormones may mean you have a stuffy nose and you might start snoring at night. You can use a saline spray, but talk to your doctor before you use antihistamines to clear your nose while you’re pregnant. You might notice more vaginal discharge, which you can manage by using panty liners. If the discharge changes colour or is smelly, see your doctor because this could mean you have an infection.",

            Things_to_remember: "Now might be the time to start thinking about antenatal classes. These are designed to help you and your partner get ready for the labour and birth as well as learn about breastfeeding and how to care for a newborn baby. They are also an opportunity for you to discuss your feelings and meet other people who are going through the same experiences as you.Antenatal classes are usually offered by hospitals, community health centres or through private organisations. Your doctor or midwife will be able to suggest antenatal classes in your area. Some are free, while for others you may need to pay a fee. There are also antenatal classes online if you can’t travel to one.",

            Image1: "https://i.postimg.cc/R03XvvBL/pregnancy-week-17-97013d.png",
            Image2: "https://i.postimg.cc/j5C00Dqq/17-weeks-pregnant-4x3-png-pagespeed-ce-AR7-Vw9088g.png"
        },

        {
            Week: 18,
            Your_baby: "Your baby weighs about 200g and has grown to about 14cm – about the length of a $20 note. They have eyebrows, hair and fingernails.The baby can yawn and hiccup. Their nervous system is developing and a layer of myelin is growing to cover their nerve cells. Their bowel is filling with meconium, which will become their first poos. Your baby is moving around a lot by now. You might notice this as little 'bubbles' or 'flutters' in your stomach, and it's known as the ‘quickening’. The baby will probably rest at times when you are active, so you’re more likely to feel them when you’re lying still at night.If you can’t feel your baby’s movements yet, don’t worry – you might not feel anything for another couple of weeks.",

            Length: "14cm",
            Weight: "200g",
            Your_Body: "By 18 weeks, many women are starting to feel light-headed and dizzy. This is because the growing uterus can push against an artery when you’re sitting or lying down. When you stand up, there’s a rush of blood which makes your head spin.Your body is making more blood to nourish your baby, so you’ll need to drink plenty of fluids to support the process.You may notice that you’re starting to gain weight now. If you were in the healthy weight range before you fell pregnant, you should aim to gain about 1.5 to 2 kg each month from now until you give birth. You don’t need to eat a lot more food, but do make sure you have a healthy diet so that you and your baby get the nutrition you need.",

            Things_to_remember: "Between 18 and 20 weeks, you will have an ultrasound to check your baby’s development. This is called a fetal anomaly or morphology scan. It checks the size of the baby and measures physical features including the heart, brain, spine and kidneys.At this scan you may be able to find out (if you want to) whether you’re having a boy or a girl. If the scan shows there might be problems with the baby’s development, you may be referred to an obstetrician or genetic counsellor for more tests.",

            Image1: "https://i.postimg.cc/44bdWt9p/pregnancy-week-18-c3753a.png",
            Image2: "https://i.postimg.cc/d1GXKGPY/18-weeks-pregnant-4x3-png-pagespeed-ce-D5-SQ9-Bva-U.png"
        },

        {
            Week: 19,
            Your_baby: "Your baby’s rapid growth is continuing. They now weigh about 260g and measure about 15cm - the length of a small banana. A layer of fat is developing underneath the skin and their head may be covered with hair.At 19 weeks, your baby has clear waking and sleep cycles, like a newborn baby. They will sleep for about 18 hours a day and move around for about 6 hours a day.They can react to sounds that come from outside your tummy, so you can read or play music to them – things they will recognise after they’re born.",

            Length: "15cm",
            Weight: " 260g,",

            Your_Body: "Most women look obviously pregnant by 19 weeks. Baby 'bumps' come in all shapes and sizes, however, so don’t worry if yours looks bigger or smaller than other women at the same stage of pregnancy. Your doctor or midwife will feel and measure your tummy at your regular antenatal visits to make sure the baby is growing as it should.Not only will your abdomen be large and round, you may find your feet grow too. This is because your ligaments are stretching and you are carrying extra weight. Your breasts will be larger and you will be curvier overall.",

            Things_to_remember: "Some women find their changing shape affects how they feel about themselves and their relationships. Open communication is the key to negotiating any fears, stress or changes to your sex life that pregnancy might bring.Some women develop anxiety or depression during their pregnancy. You are more at risk if you have had a mental health problem in the past. Symptoms might include:having a panic attack worrying all the time,having mood swings,feeling sad and low all the time,feeling nervous and 'on edge',losing interest in your friends and family,feeling constantly exhausted,having thoughts of hurting yourself,sleeping too much or not at all,If you feel like this for more than 2 weeks while you’re pregnant, it’s important to tell your doctor. Prenatal depression and anxiety are common and they are treatable.For more information and help on prenatal depression and anxiety, visit the Perinatal Anxiety & Depression Australia (PANDA) website, or call the PANDA hotline on 1300 726 306.",
            Image1: "https://i.postimg.cc/Dy0cF2Fp/pregnancy-week-19-71fd81.png",
            Image2: "https://i.postimg.cc/B6s9YJtN/19-weeks-pregnant-4x3-png-pagespeed-ce-Z76-Kkm3-e7.png "
        },

        {
            Week: 20,
            Your_baby: "Your baby is now very active as their muscles become more mature. You will probably be able to feel them moving around by now. They weigh about 320g and measure about 16cm, the size of a cantaloupe or rockmelon.The baby has fingerprints, permanent teeth in the gums underneath their baby teeth and, if it’s a girl, there are already eggs in the ovaries. Cartilage throughout their body is turning into bone and the bone marrow is starting to make blood cells.The baby’s ears haven’t finished developing yet but they can hear sounds from outside the womb. Their body is covered in a white substance called vernix, which protects their skin from the amniotic fluid.",

            Length: "16cm",
            Weight: "320g",

            Your_Body: "Congratulations, you are now half-way through your pregnancy. The top of your uterus, called the fundus, is usually now roughly level with your belly button. Your doctor or midwife can feel it when they press on your tummy and will regularly check the size of your uterus.As your uterus takes up more room, there is less space for your other organs, including your heart and lungs. This might make you feel breathless from time to time, especially when you lie on your back. Also, you might find your back and hips are aching. Putting a pillow between your legs when you lie on your side will help.You might also notice that you are quite clumsy now. Many women report ‘baby brain’ when they are pregnant – their memory and brain function is less effective than before they were pregnant. This tends to get worse into the third trimester, but it’s nothing to worry about and is completely normal.",

            Things_to_remember: "You might have trouble fitting into your normal clothes at this point. But, you don’t have to spend a lot of money on maternity clothes – look through your wardrobe for loose fitting tops, or borrow from your partner or friends. You can buy an ‘expander’ that makes your normal pants and skirts larger so you can keep wearing them through your pregnancy.You don’t have to wear a special bra while you’re pregnant, though underwire bras are not recommended during pregnancy. Many women find a maternity bra more comfortable. Bras designed for pregnancy can also be used while you’re breastfeeding. It’s a good idea to have a maternity bra professionally fitted, if you haven’t done so already.If you haven’t yet had your second trimester ultrasound (fetal anomaly or morphology scan), then now is the time to have it. You should also talk to your doctor or midwife about any other tests you need during your pregnancy.",

            Image1: "https://i.postimg.cc/pX7Lrt5L/pregnancy-week-20-529f72.png",
            Image2: "https://i.postimg.cc/15KHwsZs/20-weeks-pregnant-4x3-png-pagespeed-ce-Kq1-Jj-Qm-DMj.png"
        },


        {

            Week: 21,
            Your_baby: "Your baby now weighs about 390g and measures 18cm from head to bottom – about the size of a large banana. They are surrounded by amniotic fluid and have plenty of room to move around inside the uterus. They may be kicking you hard enough for your partner to feel by now. Also, their brain is developing rapidly.Your baby’s arms and legs have grown and now look more in proportion to the rest of their body. There is soft hair on the baby’s head; they have eyebrows; and their body is covered in fine hair (lanugo). In girls, the uterus is formed and in boys, the testicles.",

            Length: "18cm",

            Weight: "390g",

            Your_Body: "Your growing uterus might be putting pressure on your stomach, leading to heartburn or indigestion. This is very common in pregnancy. You can improve how you feel by eating smaller meals, avoiding foods that you know trigger your symptoms, and by raising your head when you lie down.If your heartburn is very bad and it’s not helped by lifestyle changes or medications from the pharmacy, then mention it to your doctor or midwife. It could be the sign of something more serious such as pre-eclampsia.Other common pregnancy discomforts you might have at this time include bloating and gas, as well as changes to your appetite. Try not to eat too much – have small, nutritious meals as part of a healthy diet). You might also experience varicose veins, backache, bleeding gums and stretch marks at this time.",

            Things_to_remember: "The second trimester is a good time to travel since you may not be able to do so later in your pregnancy. If you decide to go away, you will need to take a few precautions.If you have a normal, healthy pregnancy, there’s no reason why you cannot fly up until 32 weeks into the pregnancy. Always check with the airline and your travel insurer before you go. You are more at risk of deep vein thrombosis (DVT) when you’re pregnant, so it’s important to keep walking around the plane and to wear compression stockings on long flights.If you’re driving, it’s very important - as well as required by law - to wear a seatbelt in the car. Put the lap part underneath your bump.Always take care with what you eat and drink while you’re pregnant, especially if you’re overseas. If in doubt, always drink bottled water and make sure you stay well hydrated in hot climates. See a doctor straight away if you get sick.",

            Image1: " https://i.postimg.cc/q7yL1Jxg/pregnancy-week-21-b5269f.png",
            Image2: "https://i.postimg.cc/GpsDTmqM/pregnancy-week-21-eyelid-4x3-jpg-pagespeed-ce-gr-Cs1-Y-wzf.jpg"
        },

        {
            Week: 22,
            Your_baby: "Your baby now weighs about 460g and is about 19cm long, which means they would fit into your cupped hands.Some parts of their body are now fully formed, including their inner ear and the retina in their eyes, although the irises don’t have any colour yet. They have eyelashes and the nails have grown to the ends of their fingers.Your baby is now probably lying across your tummy, in the ‘transverse’ position, but they are moving and changing position all the time. Their movements become stronger and more defined as their muscles mature.",

            Length: "19cm",
            Weight: "460g",
            Your_Body: "You may have a range of pregnancy discomforts, including bloating and gas, varicose veins, backache, bleeding gums and stretch marks.Many women develop haemorrhoids during pregnancy. These lumps form around the anus if you are constipated, or they may be due to pressure from the growing baby and uterus. They can be itchy, or make it painful to go to the toilet. To avoid haemorrhoids, make sure you eat plenty of fruit and vegetables for their fibre; avoid straining when you’re using the toilet; and if possible, avoid standing for a long time.You might be feeling quite emotional now, and this is normal. But if you are very stressed for any reason, it’s important that you talk to your doctor or midwife. If you feel as though you are having a personal crisis, call Lifeline on 131 114 or Beyond Blue on 1300 224 636.",

            Things_to_remember: "ou may start to feel Braxton Hicks contractions around now, although they may have started earlier or may not start until later in your pregnancy. These are a type of contraction where the muscles of your uterus tighten and your bump goes hard.Braxton Hicks contractions are not the same as labour pains. They aren’t regular and they often go away if you shift position.If the contractions are painful, regular or getting stronger, they could be a sign of premature labour. Always contact your doctor if you have contractions along with pain, pressure or discomfort in your pelvis, abdomen or lower back. If you’re not sure whether they are Braxton Hicks or labour pains, always call your doctor or midwife, just to be on the safe side.",

            Image1: " https://i.postimg.cc/tgBdgByt/pregnancy-week-22-aa0b06.png",
            Image2: "https://i.postimg.cc/NfMwx9mj/pregnancy-week-22-eyes-4x3-jpg-pagespeed-ce-nfz-Evy-Sd7-V.jpg"
        },

        {
            Week: 23,
            Your_baby: "Your baby now weighs about 540g and measures about 20cm from head to bottom – about the size of a papaya. They are covered in fine hair, called lanugo, which is getting darker and may be visible on an ultrasound scan. The hair on their head and their eyebrows is developing colour.The lungs have started to produce surfactant, which will help them to stay inflated when your baby is breathing air after birth. The baby is practising to breathe in the womb, but they are still getting all their oxygen from the placenta.Their brain and nervous system are developing rapidly. They can now recognise light, sound and pain. Their vision is improving and they will know the sound of your heartbeat. Their pancreas is producing insulin.",

            Length: "20cm",
            Weight: "540g",
            Your_Body: "Your growing uterus might be pressing down on your bladder, causing you to leak fluid, especially when you cough, laugh or sneeze. This incontinence might be temporary, but it’s important to strengthen your pelvic floor muscles by doing regular exercises. You should do these exercises every day throughout your pregnancy and continue after you have the baby.Many women start to feel warm during the second trimester. This is because of the extra blood in your body. If it’s summertime, you can stay cool by wearing loose cotton clothes. Keeping well hydrated is also especially important while you’re pregnant.You may also notice a pain like a stitch down the side of your tummy. This is because the ligaments are stretching as your uterus grows. Resting or moving position normally helps. If the pain doesn’t go away, gets worse, or if you have any bleeding or discharge from your vagina along with the pain, let your doctor or midwife know as soon as possible.",

            Things_to_remember: "The birth might seem like it’s a long way off, but now is the time to start preparing for being a parent. Having a baby will change your life. If possible, plan not to have any additional upheaval in the first few months after the baby is born, such as changing your job, renovating or moving house.It’s a good idea to talk to your partner about who will be there to support you during the birth, who is going to take time off to look after the baby, and how you will share household chores and caring for other children in the first weeks and months.If you don’t have a partner, it’s important to start thinking about how to get support after the baby is born. Think about what practical help you can ask for from family and friends, what services are available in your area, and how you can meet other parents to build a support network. Your doctor or midwife will be able to point you in the right direction to find out what’s available.",

            Image1: "https://i.postimg.cc/26fYV7wy/pregnancy-week-23-63ab8a.png",
            Image2: "https://i.postimg.cc/MTMWtnhB/pregnancy-week-23-hearing-4x3-jpg-pagespeed-ce-NYLD9-Ue6-Du.jpg"
        },

        {
            Week: 24,
            Your_baby: "Your baby is now about 25cm long – about the size of a very large corn cob. They weigh from around 0.6kg to around 0.7kg.Your baby's brain is growing rapidly and their senses are continuing to develop. The tastebuds on their tongue are growing and becoming more sensitive, their eyes respond to light and they can hear sounds from outside the uterus.Their lungs are developing too. They are growing branches and getting ready to produce surfactant, the substance that will enable the lungs to expand when your baby is breathing.Preterm babies born at 24 weeks have about a 1 in 2 chance of surviving if they are delivered in hospital and receive expert care in a neonatal unit. However, they would have a high chance of having a disability, such as cerebral palsy or blindness, if they were born this early.",

            Length: "21cm",
            Weight: "630g",
            Your_Body: "The top of your uterus is just above your belly button now. As the baby’s movements get stronger, you might be able ,to feel them by placing your hand on your tummy. You might find other people making comments about your pregnancy or even trying to touch your tummy, which might make you feel uncomfortable.You may start to feel Braxton Hicks contractions from now on. These are a type of contraction when the muscles of your uterus tighten and your bump goes hard. You can tell the difference between Braxton Hicks contractions and labour contractions because they aren’t regular and they will probably stop if you shift position. Always seek medical attention if you experience:contractions that become stronger, more frequent or that last longer,persistent pain or pressure in your tummy, back or pelvis,vaginal bleeding,your baby’s movements slowing or stopping",

            Things_to_remember: "At some time between 24 and 28 weeks, you might be offered a test for gestational diabetes. This is a type of diabetes that develops in pregnancy and goes away once the baby is born.The test is called a Glucose Tolerance Test (GTT). It’s a blood test that you have after you have fasted for 8 to 12 hours. You then have a glucose drink and 1 to 2 hours later you have another blood test.If the GTT shows you have gestational diabetes, you can manage the condition by monitoring your blood sugar, making changes to your diet, exercising, and sometimes taking medication. You will need extra care for the rest of your pregnancy.",

            Image1: "https://i.postimg.cc/W1rfhLfm/pregnancy-week-24-15f437.png",
            Image2: "https://i.postimg.cc/L41k7NSq/pregnancy-week-24-lung-development-4x3-jpg-pagespeed-ce-Q-p6frlo-D.jpg"
        },

        {
            Week: 25,
            Your_baby: "Your baby is gaining weight rapidly. At 25 weeks they weigh about 0.7kg and their heart is beating at about 140 beats per minute – much faster than it will beat after they are born.This week the baby’s eyelids will open for the first time. Their brain waves are regulating what they see and hear, and their senses are all improving. The brain, lungs and digestive system are formed but they haven’t finished developing yet.The lungs still aren’t mature, but they are also developing quickly. Your baby would have about an 80% chance of surviving in intensive care if they were born now, but they would still need help to breathe for quite a while.",
            Length: "22.5cm",
            Weight: "720g",
            Your_Body: "As the uterus expands upwards you might feel uncomfortable around your ribs. You might also be experiencing indigestion and heartburn. You can control these symptoms by eating smaller meals more often and avoiding some foods and drinks. If indigestion and heartburn are bothering you, see your doctor. Sometimes they can be a symptom of a more serious condition, such as pre-eclampsia.Another common problem you might start noticing is leg cramps, especially when you go to bed. They’re not serious but they can become quite uncomfortable. You can ease cramps by stretching your leg and pulling your toes back towards your knee, or by standing up and putting your weight on your leg.",

            Things_to_remember: "As you near the end of the second trimester, it’s a good idea to talk to your partner or support person about going to hospital when the time comes. Think about how you will get there – don’t drive yourself – and what you will do if you can’t get hold of anyone when you go into labour. Remember, things might happen more quickly than you expect, so having a plan in place will help you know what to do if you get taken by surprise.",

            Image1: "https://i.postimg.cc/CK9GDzBz/pregnancy-week-25-5e6e35.png",
            Image2: "https://i.postimg.cc/V6t7D4v8/pregnancy-week-25-baby-fat-4x3-jpg-pagespeed-ce-Xk4s-B0-KUme.jpg"
        },

        {
            Week: 26,
            Your_baby: "Your baby now measures more than 30cm and weighs about 820g. They will start to put on a lot of fat and muscle from now, which will fill them out to look more like a newborn baby.By 26 weeks, your baby can respond better to the world around them. They can suck, see, hear and taste, and might move in response to you running your hand firmly over your tummy. In boys, the testicles are fully descended now.The lungs still aren’t mature, but they are developing quickly. The baby would have about an 80% chance of surviving in intensive care if they were born now, but they would still need help to breathe for quite a while.",

            Length: "23cm",
            Weight: "820g",

            Your_Body: "As your baby grows, your centre of gravity is shifting. This means you might start walking differently and you might be quite clumsy. Take care not to trip over!You will probably be experiencing Braxton Hicks contractions, leg cramps and backache. You may also have indigestion and heartburn as your baby bump moves higher under your rib cage.From now and into the third trimester, you might start having some vivid dreams. That’s due to the pregnancy hormones and because your sleep is more disturbed. You might also find that because, for example, you need to get up to go to the toilet more often, you’re more likely to remember your dreams.",

            Things_to_remember: "If you don’t know your Rhesus (Rh) blood type, you will need a blood test now to check whether your baby needs protection against rhesus disease.That’s because if you are Rh-negative and your baby is Rh-positive, there can be serious complications for the baby. If you are Rh-negative, you will need special injections at your 26-28 week antenatal visit and again at 34-36 weeks.Talk to your doctor or midwife about having the blood test if you don’t know your blood type.",


            Image1: "https://i.postimg.cc/GmyhttCM/pregnancy-week-26-546679.png",
            Image2: "https://i.postimg.cc/qqYG83cF/pregnancy-week-26-ear-nerves-4x3-jpg-pagespeed-ce-d-B2-ZVXt-Nxx.jpg"
        },

        {
            Week: 27,
            Your_baby: "Your baby is growing and maturing fast. Their muscles have developed and their body is well proportioned, but they are still very thin. They will put on a lot of weight in the next month.Their skin is no longer transparent. It’s red, very wrinkly and is covered in vernix, a waxy coating that protects the skin.They can open their eyes and are kicking you quite hard now. You and others will be able to feel the kicks by placing a hand on your tummy.",

            Length: "24cm",
            Weight: "920g",
            Your_Body: "Women usually put on quite a lot of weight from now until 36 weeks. Different women put on weight at different times, so don’t compare yourself to others. Remember, you don’t need to eat for two. Having a healthy diet with good nutrition for you and the baby is more important than the quantity of food you eat.As your bump grows, you might start to see stretch marks – pink or purple lines that develop on the surface of the skin. These might develop on your tummy, thighs or breasts. The skin can become sensitive and itchy, too.Stretch marks aren’t harmful and they will fade over time. Not every woman develops stretch marks. The more weight you put on, the more likely you are to get them.",

            Things_to_remember: "If you haven’t already had one, now is the time to have a whooping cough (pertussis) vaccination. Whooping cough can be a very serious illness for newborn babies. If you are vaccinated, you will transfer your antibodies to the baby, protecting them when they are too young to have a vaccination themselves.This vaccination is offered free to all pregnant women in Australia through the National Immunisation Program. It’s recommended to have the vaccination between 20 and 32 weeks in each pregnancy.You can read more about the whooping cough vaccination in the Department of Health’s brochure, Protect your baby from whooping cough.",

            Image1: "https://i.postimg.cc/rsB3P8Pm/pregnancy-week-27-02f7d2.png",
            Image2: "https://i.postimg.cc/Gm4QhqR1/pregnancy-week-27-sleep-jpg-pagespeed-ce-ow-IHb-KME7-I.jpg"
        },
        {
            Week: 28,
            Your_baby: "Your baby now measures about 37cm from the top of their head to their toes, and weighs about 1kg. Their body is now in proportion with their head and their face has filled out, so they look more like a normal baby.They are putting on weight rapidly and have less room to move around. They may be in the breech position at this stage, with their head up and their bottom down. Don’t worry though - most babies will move into the head-down position by the time they are born.Your baby's heartbeat can be heard through a stethoscope, and your partner might even be able to hear it by putting their ear to your tummy, although it’s difficult to find the right place.Their lungs have developed enough for them to breathe outside the uterus – although they would probably need some help. If they were born now, your baby would have a good chance of surviving, although there would still be a high risk of disability.",

            Length: "25cm",
            Weight: "1kg",
            Your_Body: "Congratulations - you have reached the third trimester! As the birth gets nearer, you will probably start seeing your doctor or midwife for antenatal appointments every 2 weeks.Many women find things get more uncomfortable in their third trimester. You might have back pain and leg cramps, indigestion and heartburn, and your hands and feet might get quite swollen. It’s a good idea to take off any tight jewellery and put your feet up as often as you can. You should sleep on your side as your pregnancy progresses, especially from 28 weeks. Lying on your back puts pressure on major blood vessels. This can reduce the flow of blood to your womb, and restrict your baby’s oxygen supply. Research has shown that sleeping on your side can reduce the risk of stillbirth by half.",

            Things_to_remember: "If your blood is Rhesus (Rh) negative, you will need to have an injection now to protect your baby against Rhesus disease. If you are Rh-negative and your baby is Rh-positive, then you can produce antibodies that attack the baby’s blood. This can make them very sick. It can be prevented by having an injection called the anti-D injection. You need this injection now and then again at your 34 to 36 week check-up. If you haven’t had it already, you may also be offered a Glucose Tolerance test to check whether you have gestational diabetes at 28 weeks.",

            Image1: "https://i.postimg.cc/7hHjvsHv/pregnancy-week-28-c14e54.png",
            Image2: "https://i.postimg.cc/6QQMRtnF/pregnancy-week-28-eyelashes-4x3-jpg-pagespeed-ce-kd4-Xb-Qa8-Tu.jpg"
        },

        {
            Week: 29,
            Your_baby: "Your baby is still growing rapidly. They now weigh about 1.15 kg – about a third of the size they will be if they are born at full term (over 37 weeks). All of their organs are developed and most are fully functioning. Their lungs are maturing, and they are practising to breathe in a more regular rhythm.They are making red blood cells in their bone marrow. Their eyes are open and their eyelashes have grown. They are also learning how to focus their eyes.",

            Length: "26cm",
            Weight: "1.15kg",
            Your_Body: "At this point, because your uterus is pushing against your internal organs (such as your diaphragm, stomach, liver and intestines), you might feel quite uncomfortable.Since your uterus is pushing against your diaphragm and lungs, you might be feeling quite breathless. This is normal, but talk to your doctor or midwife if you’re feeling very out of breath. If you have asthma, your symptoms can get worse when you’re pregnant. It’s very important to keep asthma under control so that both you and your baby are getting enough oxygen. Talk to your doctor about your asthma medications and take them as instructed.The extra weight might also make you feel very tired. It can be difficult to get a good night’s sleep now because you feel so uncomfortable. Rest as much as you can and go to bed earlier if you need to.",

            Things_to_remember: "Now is the time to make a birth plan, if you don’t already have one. A birth plan is a written list of things you would like to happen during labour and the birth. It means you can be involved in decisions about your care and let your healthcare team know what you want.When you’re thinking about your birth plan, decide where you would like to give birth, who you want to support you, what aids you might like to have (like bean bags or music), what pain relief you would like, and what position you would like to give birth in.Remember, things don’t always go to plan. A birth plan is just a guide, and you may need to be flexible when the time comes.",

            Image1: "https://i.postimg.cc/NMzRYLYg/pregnancy-week-29-2c031a.png",
            Image2: "https://i.postimg.cc/vH6xSjLk/pregnancy-week-29-brain-development-4x3-jpg-pagespeed-ce-s-Qgt-Iuqh-ET.jpg"
        },

        {
            Week: 30,
            Your_baby: "Your baby is now laying down fat stores, which makes them look plumper and smooths out the wrinkles in their skin. They weigh about 1.3 kg. The fine hair, known as lanugo, that was covering their body is disappearing and more hair is growing on their head. By now, their toenails have developed.Their reflexes are also developing, and they may be sucking their thumb or fingers. They are aware of the Braxton Hicks contractions.",

            Length: "27cm",
            Weight: "1.3kg",
            Your_Body: "As you gain weight and your baby grows, your ligaments are stretching and you might find it quite uncomfortable to sit in some positions or stand for a long time. Many women develop backache during the third trimester. It’s important to have good posture all the time and to consider wearing flat shoes from now on. You can support your back with a cushion when you’re sitting. Take extra care with lifting.You have twice the normal amount of blood in your body now. Your doctor or midwife will take your blood pressure at every visit. About 1 in 10 women develops high blood pressure while they are pregnant. However, high blood pressure can also be a sign of pre-eclampsia, which is a more serious condition.",

            Things_to_remember: "Even if you’re feeling tired and uncomfortable, it’s still important to exercise. It will give you more energy and will help you to stay fit in preparation for the birth.As your shape changes and your ligaments get looser, your balance may be affected and you may be at higher risk of injury. In the third trimester, it’s best to choose walking, swimming or stationary cycling for exercise. Try to avoid activities on your back, or high impact jumping and bouncing exercises, since these can put more strain on your pelvic floor muscles.Try also to exercise on most days of the week — up to about 300 minutes of moderate physical activity every 7 days. Talk to your doctor about what level of exercise is safe for you.",

            Image1: "https://i.postimg.cc/kXXDw7ds/pregnancy-week-30-079580.png",
            Image2: " https://i.postimg.cc/nLJ5gy8L/pregnancy-week-30-amniotic-fluid-4x3-jpg-pagespeed-ce-9-PJu-Yt-JLzx.jpg"
        }
        ,
        {
            Week: 31,
            Your_baby: "Your baby now weighs about 1.5kg. Their brain is developing, sending lots of messages to the body. Their eyes are open and they can focus. They can hear sounds outside the womb, and a loud noise might make them startle.Their lungs are maturing but they still can’t make surfactant, the substance they need to breathe on their own.",
            Length: "27.5cm",
            Weight: "1.5kg",

            Your_Body: "Many women find they get more emotional in the third trimester. If you’re feeling sad, it might be because of your hormones, because you’re not getting a good night’s sleep, or because the thought of becoming a parent can stir up deep emotions.It’s normal to feel tired and to lack energy at this stage. Anxiety and depression are common during pregnancy and after the birth, and it’s important to seek help. If you feel very emotional and stressed, have a chat to your doctor or midwife, or you can contact Perinatal Anxiety & Depression Australia (PANDA) on 1300 726 306 or beyondblue on 1300 22 4636.You might notice your breasts are leaking more as the birth approaches. This is normal. You can buy breast pads from a supermarket or pharmacy to help you feel more comfortable.",

            Things_to_remember: "It’s a good idea to organise a car restraint for your baby now. By law in Australia, babies under 6 months must have a properly fastened, rear-facing child restraint with an inbuilt harness.Your car will need to have the correct anchorage points and have enough room to fit the child restraint properly. It’s best to have the restraint professionally fitted, and you will need to book this in.If you’re buying a restraint, make sure it meets Australian/New Zealand Standard AS/NZS 1754 (this will be on the packaging or the seat itself). Alternatively, you can hire a restraint from your local council, private company or ambulance service.All this can take a while to organise, so it’s a good idea to do it soon in case the baby comes early.",

            Image1: "https://i.postimg.cc/C1qr3yT6/pregnancy-week-31-0d477a.png",
            Image2: "https://i.postimg.cc/K8y3XjRy/pregnancy-week-31-taste-buds-4x3-jpg-pagespeed-ce-pi-Ph-ZUDns-I.jpg"
        },

        {
            Week: 32,
            Your_baby: "Although your baby is by now quite squashed inside your womb, they can still move around. Most babies are in the head-down position by 32 weeks, although some babies stay in the breech position (bottom down) until the last month. They are probably asleep most of the time.Your baby is about 40cm long (from head to toe) and weighs about 1.8 kg since their weight has almost doubled in the past 4 weeks. From now, your baby’s weight will grow faster than their length.",

            Length: "28cm",
            Weight: "1.8kg",
            Your_Body: "There is now more amniotic fluid in your uterus and your bump is growing fast. This can cause pain in your pelvis, which can make it difficult for you to move around. If you have a lot of pain, talk to your doctor about whether seeing a physiotherapist might help. They can give you exercises and therapy to help ease the pain.Your belly button might be stretched flat or stick out, and it’s a good idea to remove any piercings at this point.",

            Things_to_remember: "If your baby is born now they would be considered premature, but they would be unlikely to have any long-term problems. Keep a watch out for any signs of premature labour, such as contractions, your waters breaking, bleeding, a ‘show’ of mucus from your vagina or a sudden decrease in your baby’s movements.If you haven’t had your whooping cough (pertussis) vaccination yet, it’s very important to have it now. Whooping cough can kill newborn babies and they can’t have their own vaccination until they’re older. Having the vaccination now means you will pass on antibodies to protect your baby. Depending on the season, it’s also a good idea to have a flu shot too.Both vaccinations are free for pregnant women under the National Immunisation Program. You can read more about the whooping cough and flu vaccination on the Department of Health website.",

            Image1: " https://i.postimg.cc/4dWnR06V/pregnancy-week-32-0c28d0.png",
            Image2: "https://i.postimg.cc/bwH8ZNL8/pregnancy-week-32-fingernails-4x3-jpg-pagespeed-ce-wq-Cqv-W1-U-p.jpg"
        }
        ,

        {
            Week: 33,
            Your_baby: "Your baby is gaining a lot of weight, ready to be born. They weigh about 1.9kg now. Their lungs are maturing and they are producing surfactant, which means they will be able to breathe by themselves outside the uterus.The baby’s brain and nervous system are now fully developed. They can suck and swallow, although these reflexes won’t be coordinated properly for another week or so. They are storing iron in their liver, which they will use for about 6 months after they are born.",
            Length: "29cm",
            Weight: "1.9kg",
            Your_Body: "As you get closer to the end of your pregnancy, all your discomforts are likely to increase, including leg cramps, backache, indigestion and heartburn and swelling of your feet and legs. Contact your doctor or midwife straight away if the swelling suddenly gets much worse, if you have it first thing in the morning, or if your face or hands are swollen.The weight of the baby can also cause bladder and bowel problems, including haemorrhoids, frequent urination or incontinence (when you leak some urine). It’s a very good idea to do pelvic floor exercises every day from now on. These will strengthen your muscles and improve your bladder and bowel control.",

            Things_to_remember: "The larger your baby grows, the more squashed into your uterus they become. This can affect their movements. You might be able to feel limbs poking you at all sorts of odd angles.You will probably be getting familiar with your baby’s pattern of movements. They may be very active at certain times (often during the night, when you’re trying to sleep), and still when you’re moving around during the day.Some women might not feel many movements, for example, if they have a lot of tummy fat or if the placenta is on the front wall of the uterus. But if you notice any sudden changes in what is normal for your baby, or if they stop moving altogether, talk to your doctor or midwife urgently.",

            Image1: "https://i.postimg.cc/gc6rTgwX/pregnancy-week-33-16b6cd.png",
            Image2: "https://i.postimg.cc/NfFQPcgk/pregnancy-week-33-skull-4x3-jpg-pagespeed-ce-UF0-Wz-Zw2c-C.jpg"
        }
        ,
        {
            Week: 34,
            Your_baby: "Your baby now weighs more than 2kg and measures about 30cm from head to bottom. Their immune system is developing, and their bones are getting harder. However, the bones in their skull will stay soft until after they are born. During the birth, these bones will gently slide over each other to protect the baby’s brain.There isn’t much room for your baby to move around anymore, but you might feel them kick and roll over. This can be quite uncomfortable.",

            Length: "30cm",
            Weight: "2.1kg",
            Your_Body: "As at the beginning of your pregnancy, you might find you are quite tired and emotional from now on. You will probably have lots of aches and pains and it can be quite hard to sleep. Make sure you get plenty of rest and look after yourself.Eating a healthy diet and doing some gentle exercise will help you cope now and during the birth. Make sure you keep up your pelvic floor exercises too because the muscles in this area will be under a lot of strain from now on.Many women develop pains at the top of their legs during the later stages of pregnancy. These are due to the ligaments stretching. If they are very painful, tell your doctor or midwife.",

            Things_to_remember: "Your doctor or midwife will be monitoring your weight closely during your regular antenatal appointments. You shouldn’t be putting on more than a few hundred grams per week now.The total amount of weight you might be expected to gain throughout your pregnancy will depend on your weight before you were pregnant. If you were in the normal weight range (with a BMI between 18.5 and 24.9), you should gain between 11.5kg and 16kg by the end of the pregnancy – less if you were overweight, and more if you were underweight.If your blood is Rhesus (RhD) negative, you will need to have your second injection of anti-D to protect the baby at your next check-up. You will also be offered anti-D if you have a bleed. Talk to your doctor or midwife for more information",

            Image1: "https://i.postimg.cc/G2DrqSMb/pregnancy-week-34-0fd551.png",
            Image2: "https://i.postimg.cc/CMDyQxD0/pregnancy-week-34-lung-development-4x3-jpg-pagespeed-ce-76-OOl-Lqi-o.jpg"
        },

        {
            Week: 35,
            Your_baby: "Your baby now weighs more than 2.3kg and measures about 32cm from head to bottom. They are quite cramped and their legs are bent up into their chest, but they can still change position and kick you. They can swallow about a litre of amniotic fluid every day, which is passed as urine.Don’t worry if your baby is still in the breech position (head up, feet down) – most babies will gradually turn into the head-down position during the last month. If your baby is still in the breech position during the next week or two, your doctor or midwife may try to turn them using a procedure known as External Cephalic Version (ECV).",

            Length: "32cm",
            Weight: "2.3kg",
            Your_Body: "You may be having a lot of Braxton Hicks contractions by now. They feel like a tightening or cramping in your tummy, and they can happen as often as every 10 to 20 minutes in late pregnancy. They are your body’s way of preparing for the birth and are nothing to be worried about. You can tell if they’re Braxton Hicks and not real contractions because they normally go away if you move position.They may be real contractions if: they get stronger or closer together,they last longer as time goes by,they are stronger when you walk,you feel pain or pressure in your pelvis, abdomen or lower back,If you went into labour now it would be considered premature labour and you would need medical attention straight away. If you’re in doubt, contact your doctor or midwife.",

            Things_to_remember: "If your pregnancy is high risk, your doctor or midwife will probably want to see you more often from now on.One serious complication that can develop in late pregnancy is pre-eclampsia. This is usually diagnosed if your doctor notices you have high blood pressure or protein in your urine.See your doctor straight away if you develop:a bad headache,pain in the tummy,blurry vision,sudden swelling of your hands or feet",

            Image1: "https://i.postimg.cc/SNSFMspS/pregnancy-week-35-4bc007.png",
            Image2: "https://i.postimg.cc/C1QCg0qp/pregnancy-week-35-fetal-weight-4x3-jpg-pagespeed-ce-p9umtw2-Sb-Z.jpg"
        }
        ,
        {
            Week: 36,
            Your_baby: "Your baby is curled up and cramped inside your uterus. They weigh about 2.5kg and measure about 34cm from head to bottom now.Their lungs and digestive system are fully formed, meaning they could breathe and feed by themselves if they were born now. In just one week’s time, your baby will be considered full term.Most babies ‘engage’ at around this time. This means the head moves down into your pelvis ready for the birth. But don’t worry if your baby hasn’t engaged yet – some babies don’t do this until labour starts.",

            Length: "34cm",
            Weight: " 2.5kg",
            Your_Body: "If your baby has engaged, you might notice your bump has moved down. You might also feel pressure in your lower abdomen or on your cervix, and you will probably need to go to the toilet more often.In the last month of pregnancy, you might feel quite breathless as the baby presses against your diaphragm. This should ease as the baby descends into your pelvis.",

            Things_to_remember: "Some women will be tested this week for group B streptococcus (‘GBS’, or ‘group B strep’). This is a common bacteria that lives in the vagina of 1 in 20 women but it has no symptoms.If you have group B strep in your vagina when your baby is born, there is a small chance the baby will develop a severe infection. To prevent this from happening, women with group B strep are given antibiotics during labour.Your doctor or midwife may check for group B strep by taking a swab from your vagina at 36 weeks. Some hospitals don’t take a swab, but they give antibiotics to women who have certain risk factors for group B strep like premature labour or their waters breaking for longer than 18 hours.If you have any questions about group B strep, ask your doctor or midwife at your next visit.",

            Image1: "https://i.postimg.cc/pLjZVf1p/pregnancy-week-36-47c7a2.png",
            Image2: "https://i.postimg.cc/KYhnGQj4/pregnancy-week-36-vernix-caseosa-4x3-jpg-pagespeed-ce-DH9qw-Qzt-K9.jpg"
        },

        {
            Week: 37,
            Your_baby: "By the end of week 37, your baby will be full-term. They look like a newborn baby, measuring about 35cm from head to bottom. They weight about 3kg and are getting ready to be born.The baby has fully mature lungs and can grip firmly with their hand. Their gut contains sticky green meconium that will form their first poo after they are born.",

            Length: "35cm",
            Weight: "3kg",
            Your_Body: "Your baby may engage – move down into your pelvis – any time from now until the birth. This is more likely to happen if it’s your first baby. When the baby engages, you should start to feel a little more comfortable.Many women notice their breasts leak colostrum (your first milk) towards the end of the pregnancy. If this is bothering you, you can buy breast pads from your local pharmacy. You may also notice more vaginal discharge than usual. This is normal – but tell your doctor or midwife if the discharge is smelly, green or brown, of if it’s making you itchy or sore.You are probably feeling very tired because of the extra weight you are carrying. But it can also be difficult to sleep. You may find it hard to roll over in bed and you will probably need to get up to go to the toilet a lot through the night. Try to get as much rest as you can.",

            Things_to_remember: "If you haven’t already stopped working, you will probably want to stop now.Your parental leave can start up to 6 weeks before your due date, or earlier if you and your employer agree. Your employer can also ask you to produce a medical certificate saying that you are fit to work in the weeks before the baby is born. All employees are entitled to up to 12 months’ unpaid parental leave if they have worked for 12 months continuously for their employer. This can also include casual employees if they have been working regularly for the same employer.Your employer may also offer you paid parental leave. You can talk to them about when you would like this to start. It’s a good idea to work out a budget to help you plan for taking time off work.",

            Image1: 'https://i.postimg.cc/cHfCrHG7/pregnancy-week-37-87664a.png',
            Image2: "https://i.postimg.cc/zB53McBS/pregnancy-week-37-hair-growth-4x3-jpg-pagespeed-ce-g-SCrzzm-Xs-Q.jpg"
        },

        {
            Week: 38,
            Your_baby: "Your baby is now ready to be born. They weigh about 3.2kg and measure about 35cm from head to bottom. They may still have some lanugo – fine hair – on their body, but it has mostly disappeared. They are probably covered in vernix, a white, creamy film that protects their skin from amniotic fluid.The meconium inside your baby’s bowel can sometimes be released during labour. If this happens, it would turn the amniotic fluid green. Your baby would then need to be monitored closely since it could be a sign they are in distress.",

            Length: "35cm",
            Weight: "3.2kg",
            Your_Body: "You could go into labour at any time between now and 42 weeks. You might notice the very early signs of labour, which include pressure in your pelvis, cramps or tightening like period pains, backache or diarrhoea. You might have a ‘show’ – when a plug of mucus comes out of your vagina – or your waters might break, either as a trickle or a gush.You will know if you are in labour when you have strong, regular contractions that last for at least a minute each.You are probably feeling tired and uncomfortable, but some women get a burst of energy in the last few weeks of pregnancy. You may feel like you need to prepare the house for the baby. Just be careful not to exert yourself physically.",

            Things_to_remember: "Every labour is different. Often, labour is very slow and can take hours or days. But sometimes, things can move very quickly.It’s a good idea to have a plan in place for what to do when labour starts. Your doctor or midwife will have discussed with you when to go to the hospital. It’s a good idea to give the hospital a call when you go into labour.Make sure you know how you will get to hospital when the time comes. Do not drive yourself. If for some reason you can’t contact your partner or support person, make sure you have another way of getting there.",

            Image1: "https://i.postimg.cc/s2hDNXxF/pregnancy-week-38-7ec8de.png",
            Image2: "https://i.postimg.cc/FzdfgQqG/pregnancy-week-38-eye-color-4x3-jpg-pagespeed-ce-y98ij-Ol6us.jpg"
        },


        {
            Week: 39,
            Your_baby: "Your baby’s weight gain will probably slow down now because they are almost ready to be born. They will likely weigh about 3.3kg and measure between 35cm and 36cm, although babies are born in all shapes and sizes.They now look like a newborn baby. If they are a boy, the testicles are fully descended into the scrotum. They will have a lot of fat underneath their skin and they will be covered in creamy white vernix.",

            Length: "35-36cm",
            Weight: "3.3kg",
            Your_Body: "Your cervix will be growing thinner in preparation for the birth. It will gradually soften and open until it is 10cm wide. You may have a lot of vaginal discharge and you may get a ‘show’ – when you discharge the plug of mucus that was keeping your cervix closed. This is all part of the first stage of labour. You may lose a little blood mixed in with the mucus, but if you notice you’re bleeding it’s important to call the doctor or midwife straight away since it could be the sign of something more serious.The placenta has grown to around 17cm or 18cm across and can weigh as much as 1kg. It will be delivered after the baby if you have a vaginal birth.",

            Things_to_remember: "Most women won’t need any more scans now. But if you have complications, such as gestational diabetes or pre-eclampsia, or if you are having multiple babies, your doctor may want to do an ultrasound to check that everything is OK. They will monitor you carefully if your baby is in the breech position or to see where the placenta is.Unless your doctor or midwife has told you otherwise, you should stay at home as long as you can after labour starts. Try to rest as much as you can. When the pain becomes more intense and there is less than 3 to 5 minutes between each contraction, it’s time to go.Make sure you have everything packed for going to hospital – clothes, toiletries and sanitary pads for you, and clothes and nappies for the baby. It’s also a good idea to stock the fridge for when you come back, so you don’t have to think about cooking with a newborn in the house.If you’re planning to have the baby at home, make sure you have lots of clean towels and sheets, a large plastic sheet to cover the birthing area and enough drinks and snacks for you and your support person. The midwife will bring most of the equipment needed for the birth.",

            Image1: "https://i.postimg.cc/9Mc5YFqY/pregnancy-week-39-6700da.png",
            Image2: " https://i.postimg.cc/fTPtLkVF/pregnancy-week-39-mature-lungs-4x3-jpg-pagespeed-ce-o35-OEEY-g-W.jpg"
        }
        ,

        {
            Week: 40,
            Your_baby: "You have now reached your due date! Your baby is likely measuring about    50cm (head to toe) and weighing about 3.5 kg. Their head circumference is about 35cm.A well grown, term baby can weigh anything from 2.9kg to 4.2kg – all pregnancies are different. If you have a large baby or small baby, in some instances you may require more monitoring. Your doctor or midwife will discuss any concerns they may have with you, making sure to provide individualised care that is right for you and your baby.Your baby’s movements are very important right until the end of your pregnancy and even into labour. If your baby’s movement pattern changes, it may be a sign that they are unwell. If you are concerned at any stage about a change in your babies’ movements, contact your doctor or midwife immediately.",

            Length: "50cm (head to toe)",
            Weight: "3.5kg",
            Your_Body: "Although it might feel as though you have been pregnant for ever, the journey is not quite over. Only a small number of babies are actually born on their due date. If you go more than 10 to 12 days past your due date, or if there is a risk to your own or your baby’s health, your doctor or midwife may recommend to induce labour. Any decision about you and your pregnancy should be made in consultation with you.If you are overdue you may be feeling fed up and uncomfortable, but there is usually no need to worry. Your doctor or midwife will monitor you and the baby carefully.",

            Things_to_remember: "There’s not long to wait now until you meet your baby. Even if you don’t have any experience with babies, don’t worry. Staff at the hospital will be there to support you.After the birth, your baby will be offered several tests including:newborn screening test – a prick on the baby’s heel to test their blood for inherited disorders,vitamin K injection,hepatitis B vaccination,hearing test.These tests are all very important to ensuring your baby’s future health. You may have already given your consent to these tests before you go to hospital, or the hospital may talk to you about them after the baby is born.To prepare for the exciting days ahead, you can read more about the early signs of labour, having a baby, newborn essentials, breastfeeding and your body after the birth.",

            Image1: "https://i.postimg.cc/9FD3pkzK/pregnancy-week-40-672131.png",
            Image2: "https://i.postimg.cc/LsYJLS1X/pregnancy-week-40-soft-spots-jpg-pagespeed-ce-hny-TPHh-LRf.jpg"
        }

    ]);
    const [activeWeek, setActiveWeek] = useState(1);



    return (
        <Block>
            {/* categories list */}

            <Block
                color={colors.card}
                flex={0}
                align={"center"}
                padding={sizes.padding}
                row
                justify='space-between'
                gradients={gradients.tertiary}
            >
                <Block color={colors.card} flex={0} align={"center"} row >
                    <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
                    <Block flex={0} >
                        <Text font={fonts.bold} >  {t('pregnancy_tracker.Pregnancy_Tracking')}</Text>
                        <Text> {t('temp_user.name')} </Text>
                    </Block>
                </Block>
                <Block flex={0} align={"center"} radius={50} width={150} style={{ borderColor: "green", borderWidth: 1 }} padding={sizes.s}>
                    <Text> {t("pregnancy_tracker.more_days")} 250  </Text>
                </Block>
            </Block>
            <Block
                scroll
            >
                <Block color={colors.card} row flex={0} padding={sizes.padding} >
                    <Block

                        style={styles.week_container} >
                        <Block
                            flex={0} >
                            <Text > {month} {date} ,</Text>
                            <Text size={16} bold > {t('pregnancy_tracker.Pregnancy_Tracking')} </Text>
                        </Block>
                        <Block flex={0} row justify='space-between' marginBottom={-50} paddingTop={10} width={"100%"}>
                            <Block flex={0}
                                align="center" justify='center' marginHorizontal={10} marginVertical={10}>
                                <Text bold h5 color="gray" > {pregnancy_tracker[activeWeek - 1].Length} </Text>
                                <Text size={12} color={"gray"} > {t('pregnancy_tracker.Length')} </Text>
                            </Block>
                            <Block flex={0}
                                align="center" justify='center' marginHorizontal={10} marginVertical={10}>
                                <Text bold h5 color="gray" > {pregnancy_tracker[activeWeek - 1].Weight}</Text>
                                <Text size={12} color={"gray"} > {t('pregnancy_tracker.Weight')} </Text>
                            </Block>
                        </Block>
                        <Block
                            flex={0}
                            marginTop={20}
                            align='center'>
                            <Image
                                style={{ height: 300, width: 300 }}
                                background
                                resizeMode="contain"
                                radius={sizes.cardRadius}
                                source={{ uri: pregnancy_tracker[activeWeek - 1].Image1 }} >

                            </Image>
                        </Block>

                        <Block
                            card
                            gradient={gradients.primary}
                            scroll
                            horizontal={true}
                            paddingVertical={10}
                            flex={0} row>

                            {
                                pregnancy_tracker.map((item, index) => {
                                    return <Button key={item.Week} onPress={() => { setActiveWeek(item.Week) }} >
                                        <Block flex={0}
                                            gradient={activeWeek == item.Week ? gradients.secondary : gradients.light} style={[styles.week, activeWeek == item.Week ? styles.week_active : null, { shadowOpacity: 1, shadowColor: "red" }]} align="center" justify='center' marginHorizontal={10} marginVertical={10}>
                                            <Text bold h3 color={activeWeek == item.Week ? "white" : "gray"}>{item.Week}</Text>
                                            <Text size={12} color={activeWeek == item.Week ? "white" : "gray"} > {t('pregnancy_tracker.week')} </Text>
                                        </Block>
                                    </Button>
                                })
                            }
                        </Block>
                    </Block>

                </Block>

                <Block
                    paddingVertical={10}
                    paddingHorizontal={sizes.m}
                    flex={0}
                    column
                >
                    <Block
                        flex={0} >
                        <Text size={16} bold marginBottom={10} > {t('pregnancy_tracker.Your_Baby')} </Text>
                    </Block>
                    <Block
                        card
                        flex={0} >
                        <Text > {pregnancy_tracker[activeWeek - 1].Your_baby} </Text>
                    </Block>
                </Block>
                <Block
                    flex={0}
                    marginVertical={20}
                    align='center'>
                    <Image
                        rounded
                        fadeDuration={1}
                        borderRadius={10}
                        style={{ height: 300, width: 300 }}
                        background
                        resizeMode="contain"
                        radius={sizes.cardRadius}
                        source={{ uri: pregnancy_tracker[activeWeek - 1].Image2 }} >

                    </Image>
                </Block>
                <Block
                    paddingVertical={10}
                    paddingHorizontal={sizes.m}
                    flex={0}
                    column
                >
                    <Block
                        flex={0} >
                        <Text size={16} bold marginBottom={10} > {t('pregnancy_tracker.Your_Body')} </Text>
                    </Block>
                    <Block
                        card
                        flex={0} >
                        <Text > {pregnancy_tracker[activeWeek - 1].Your_Body} </Text>
                    </Block>
                </Block>


                <Block
                    paddingVertical={10}
                    paddingHorizontal={sizes.m}
                    flex={0}
                    column
                >
                    <Block
                        flex={0} >
                        <Text size={16} bold marginBottom={10} > {t('pregnancy_tracker.Things_to_remember')} </Text>
                    </Block>
                    <Block
                        card
                        flex={0} >
                        <Text > {pregnancy_tracker[activeWeek - 1].Your_baby} </Text>
                    </Block>
                </Block>

                
            </Block>
        </Block>
    );
};

const styles = StyleSheet.create({
    user_avatart: {
        height: 40,
        width: 40
    },
    week_container: {
    },
    week: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    week_active: {
        backgroundColor: "red",
    }
});
export default PregnancyTracker;
