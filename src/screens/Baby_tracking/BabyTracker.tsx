import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Dimensions } from 'react-native';

import { useData, useTheme, useTranslation } from "../../hooks";
import { Block, Button, Article, Text } from '../../components';
import Image from '../../components/Image'

const BabyTracker = () => {
    const { t } = useTranslation();
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

    const [baby_tracker, setbaby_tracker] = useState([
        {
            month: 1,
            description: `“අම්මාගේ සහ ඇගේ අලුත උපන් බිළිඳාගේ බැඳීම තරම් ශක්තිමත් බැඳීමක් නැත. මෙම බැඳීම ආරම්භ වන්නේ මවක් තම දරුවා තම පපුව අසල තබාගෙන සිටින අතර, දරුවාට තම මවගේ උණුසුම දැනෙන අතර ඇගේ හද ගැස්ම ඇසෙන මොහොතේ සිට ආරම්භ වේ. මෙම අත්දැකීම කුඩා දරුවාගේ ප්රතිශක්තිය වැඩි කරයි. උපතින් පසු පළමු පැය 1/2 තුළ ළදරුවන්ට මව්කිරි දෙනු ලැබේ. ඊට පසු, ඔවුන්ගේ අවශ්යතා අනුව මව්කිරි දෙනු ලැබේ. ඔබේ කුඩා බිළිඳා ඉපදී දින දෙකක් දක්වා තම ශරීරයට ශක්තිය සැපයීම සඳහා ශක්තිය සහ පෝෂණය තමන් තුළම ගබඩා කරගෙන ඇත.`,
            topics:[
                     {title:`ඔබේ අලුත උපන් බිළිඳා පිළිබඳ කරුණු කිහිපයක්`,
                     content:`
                     ඔවුන්ගේ සම රෝස පැහැයක් ගනී.
                     ඔවුන්ගේ හිසෙහි පරිධිය සෙන්ටිමීටර 33-35 අතර වේ.
                     ඒවායේ දිග සෙන්ටිමීටර 50 ක් පමණ වන අතර බර කිලෝග්‍රෑම් 3 කට ආසන්න වේ.
                     ඔවුන්ගේ හුස්ම ගැනීමේ වේගය විනාඩියකට 30-40 වාරයක් (ආරම්භයේදී නොගැඹුරු, කෙටි හුස්ම).
                     ඔවුන්ගේ උෂ්ණත්වය සෙල්සියස් අංශක 36.4-37 අතර පරාසයක පවතී.
                     ඔවුන්ගේ උදරය දැවිල්ල ඇති බව පෙනේ.
                     ඔවුන්ගේ අත් සහ පාද හොඳින් වටකුරු සහ උණුසුම් වේ.
                     පළමු අදියරේදී කිසිදු ඉරීමකින් තොරව ඔවුන්ගේ ඇස් වියළිව පවතී. ඇසේ සුදු පැහැති ප්රදේශය තරමක් නිල් පාටයි.
                     ඔවුන්ගේ හෘද ස්පන්දන වේගය විනාඩියකට 120-140 අතර පරාසයක පවතී.
                     පෙකණි වැලේ ඉතිරි කොටස වියළී යනු ඇත. මෙය දින 3-4 කින් මැලවී හැකිලීමට පටන් ගන්නා අතර අවසානයේ දින 7-9 කින් වැටේ.
                     ඉටි වැනි ද්‍රව්‍ය (වර්නික්ස් කැසෝසා, වර්නික්ස් ලෙසද හැඳින්වේ) දරුවාගේ සම මත පවතී. මෙය විෂබීජ නාශකයක් ලෙස ක්‍රියා කරන ආරක්ෂිත ස්ථරයකි.`
                     },
                     {title:`පළමු රුධිර පරීක්ෂාව`,
                     content:`රෝහලේදී පළමු පැය 24-48 තුළ දරුවාගේ තයිරොයිඩ් ග්‍රන්ථියේ ක්‍රියාකාරිත්වය පරීක්ෂා කිරීම සඳහා රුධිරය ගනු ලැබේ (TSH පරීක්ෂණය). මෙය වැදගත් වන්නේ සෑම ළදරුවන් 3,000 කින් එක් අයෙකුට පමණ මෙම රෝගය ආසාදනය විය හැකි නිසාත්, මුල් රෝග නිර්ණයට ප්‍රතිකාර කිරීමෙන් එය සම්පූර්ණයෙන්ම පාහේ සුව කළ හැකි බැවිනි.`
                     },
                     {title:`අලුත උපන් බිළිඳකු සමඟ නිවසට ගිය පසු අවධානය යොමු කළ යුතු කරුණු`,
                      content:`
                      ඔබේ දරුවා දිනකට අවම වශයෙන් අට වතාවක් මුත්‍රා කළ යුතුය.
                      අලුත උපන් බිළිඳා දිනකට වරක් හෝ දෙවරක් මලපහ පිට කළ යුතුය. සමහර ළදරුවන් සිටින අතර මල බද්ධය ඇති විය හැකි අතර දින හතක් දක්වා චලනය වීමට ඉඩ නොදේ. අවස්ථා දෙකම සාමාන්යයි. තම දරුවාගේ මලපහ නොගැලපේ නම් හෝ ඝනකම් නොමැති නම් මව්වරුන් කරදර නොවිය යුතුය. සමහර ළදරුවන් සිටින අතර ඔවුන් පෝෂණය කරන සෑම විටම මල පිට කරයි!
                      සෑම පැය දෙක තුනකට වරක් මිනිත්තු 25 ක සැසි සඳහා ඔබේ කුඩා දරුවාට කිරි දීමට ඔබට අවශ්‍ය වේ. ළදරුවාගේ වර්ධනයත් සමඟ සාත්තු කාලය වෙනස් විය හැකිය. සමහර දරුවන් විනාඩි පහක් හෝ දහයක් තුළ තම අවශ්‍ය කිරි ප්‍රමාණය උරා බොයි.
                      දිනකට හෙද සැසි අටක් ප්රමාණවත් විය යුතුය.
                     `
                  },
                  {title:`පෙකණි වැල ගැන සැලකිලිමත් වීම`,
                  content:`
                  එය වියළි හා පිරිසිදුව තබා ගන්න.
                  ස්ප්රීතු හෝ වෙනත් ද්රව්ය යොදන්න එපා.
                  එය දින හතකට පමණ පසු වැටිය යුතුය, නමුත් සමහර අවස්ථාවලදී, එය සති හතරක් දක්වා ගත විය හැකිය. මෙය පහත වැටෙන විට, ඔබට රුධිර බිංදු කිහිපයක් දැකිය හැකිය.
                  පෙකණි වැල වටා අධික රුධිර වහනයක්, රතු පැහැයක් සහ ඉදිමීමක් තිබේ නම් වෛද්‍යවරයෙකුගෙන් උපදෙස් ලබා ගැනීම වැදගත්ය.`
                  },
                  {title:`ළමා රැකවරණය සහ ආරක්ෂාව`,
                  content:`
                  අධික ශීතලෙන් සහ උෂ්ණයෙන් ඔබේ දරුවා ආරක්ෂා කරන්න.
                  ඔබේ දරුවා කපු ඇඳුමෙන් අඳින්න.
                  කුඩා උණුසුම් ජලය සමග දිනපතා ළදරුවා ස්නානය කරන්න.
                  දරුවාගේ අත් යට සෝදා වියළා ගැනීමට වග බලා ගන්න.
                  සේදීමේදී හැර, ඔබේ ළදරුවා ස්පර්ශ කිරීම සීමා කරන්න.
                 `
                  },{title:`මුල් දිනවල ළදරුවාගේ ඇති වන වෙනස්කම්`,
                  content:`මෙම වෙනස්කම් ස්වභාවික වන අතර වෛද්ය ප්රතිකාර අවශ්ය නොවේ.
                  
                  නිතර කිවිසුම් යාම.
                  නාසයෙන් දියර ගැලීම.
                  නිතර ඉක්කාව.
                  නිතර දඟලන සහ වික්රියා.
                  ක්‍රියාශීලීව සිටීම, නමුත් ඉඳහිට කුඩා ඇඩීම්.
                  හවස හොඳටම අඬනවා.
                  මුත්‍රා කරන විට හෝ චලනය වීමට ඉඩ හරින විට හයියෙන් අඬන්න.
                  දිනකට පැය 16-18 අතර කාලයක් නිදා ගැනීම.
                  සමේ රතු පැහැ ලප (මෙම ලප උපතින් දින 2-3 කට පසුව මතු විය හැක, නමුත් ටික වේලාවකට පසු අතුරුදහන් විය හැක. ඒවා පහසුවෙන් දැකගත හැකිය. ඔබ රතු ප්‍රදේශය ස්පර්ශ කරන විට කුඩා ගැටිත්තක් හඳුනාගත හැකිය. ඔබ තදින් තද කළහොත්, රතු පැහැය මැකී යා හැකි නමුත් ඔබ අතහැර දැමූ පසු නැවත දිස් වේ).
                 `
                  },
                  {title:`භෞතික වර්ධනය`,
                  content:`උපතින් පසු පළමු දින 10 තුළ ඔබේ දරුවා බර වැඩිවීම අපේක්ෂා නොකළ යුතුය. කෙසේ වෙතත්, මෙම ආරම්භක කාල පරිච්ඡේදයෙන් පසුව, ඔවුන් බර වැඩිවීම ආරම්භ කළ යුතුය. සාමාන්යයෙන්, දින 10 කට පසු බර වැඩිවීම දිනකට ග්රෑම් 25-30 ක් පමණ වේ. මාසයකට පසු, ඔවුන්ගේ බර ග්රෑම් 500-600 දක්වා වැඩි විය යුතුය.
                 
                  පළමු මාසය අවසන් වන විට, දරුවාගේ අවධානය යොමු කිරීමේ හැකියාව වැඩි වන අතර ඔවුන් ප්රතිචාර දැක්වීමට පටන් ගනී.
                  මුහුණේ ඇති ද්රව්යයක් සමඟ සම්බන්ධීකරණය කරයි.
                  ඔවුන් තම මුඛය තුළට අත තැබීමට පටන් ගනී.
                  සතියකට පසු, දරුවා තම මවගේ මුහුණ හඳුනා ගැනීමට පටන් ගනී.
                  ඔවුන් කළු, අළු සහ සුදු වැනි වර්ණ හඳුනා ගන්නේ පළමු මාසය තුළ පමණි.
                  ඔවුන්ගේ ශ්‍රවණය සම්පූර්ණයෙන්ම වර්ධනය වී නැතත්, පළමු මාසය තුළ ඔවුන් තම මවගේ කටහඬ හඳුනා ගැනීමට පටන් ගනී.
                  ඔවුන්ගේ රස සංජානනය වැඩි දියුණු වන අතර පැණිරස හා තිත්ත හඳුනා ගැනීමට ඔවුන්ට හැකි වේ.
                  පිරිමි ළමයෙකුගේ වෘෂණ කෝෂ හෝ ගැහැණු ළමයෙකුගේ ලිංගික ප්‍රදේශ ඉදිමීම සාමාන්‍ය දෙයකි. ගැහැණු ළමුන තුළ යෝනි මාර්ගයෙන් ලේ ගැලීම සිදුවිය හැක. මෙයට හේතුව මවගේ හෝමෝන තවමත් දරුවා තුළ පැවතීමයි.
                  ඔවුන් ආලෝකය දෙස බැලීමටත් මුහුණු දෙස බැලීමටත් පටන් ගනීවි.
                  `
                  },
                  {title:`දරුවාගේ සංවර්ධන අවශ්යතා`,
                  content:`
                  සමීප ඇසින් ස්පර්ශ කිරීමෙන් ඔබ සහ අලුත උපන් දරුවා අතර බැඳීම වර්ධනය කරන්න.
                  ඔබේ දරුවා සමඟ ගොඩක් සිනාසෙන්න (ඔබට නොහැකි වන්නේ කෙසේද?).
                  ඔබේ කුඩා දරුවාට ගායනා කිරීමට සහ කතන්දර කීමට කාලය ගත කරන්න (ඔවුන්ට තවමත් කිසිවක් තේරෙන්නේ නැති වුවද ඔබේ කටහඬ ඇසීමට ඔවුන් කැමතියි!).
                  ඔබේ දරුවා සමඟ සෙල්ලම් කරන්න.
                  ඔබේ දරුවා සම්බාහනය කරන්න (හොඳ සම්බාහනයකට අකමැති කවුද?).
                  කවදාවත් ඔබේ දරුවා සොලවන්න එපා. සමහර අවස්ථාවලදී මෙය දරුවන්ගේ මොළයේ රුධිර වහනය වීමට හේතු විය හැක.
                 `
                  },
                  {title:`එන්නත් කිරීම`,
                  content:`BCG එන්නත උපතින් පැය 24ක් ඇතුළත වම් අතේ ඉහළ කොටසට ලබා දිය යුතුය. මෙම එන්නත ක්ෂය රෝගය පාලනය කිරීමට උපකාරී වේ. ටික වේලාවකට පසු කැළලක් නොපෙනේ නම්, එන්නත මාස 6 කට පසු නැවත නැවතත් කළ යුතුය`
                  },
                 ],
            
            Image:`https://i.postimg.cc/pVY2NX6y/m1.png`
           
        },
        
     
     {
         month: 2,
         description: `ළදරුවා මෙම කාලය තුළ හැඬීම හා කලබල කිරීම සිදු කරයි. මෙය සංවර්ධනයේ සාමාන්‍ය කොටසකි. මෙම තත්ත්වය දරුවාගෙන් දරුවාට වෙනස් විය හැකි අතර ආසන්න වශයෙන් මාස තුනක පමණ කාලයක් පැවතිය හැකි ය. මෙම කාලය ඇතුළත මව්කිරි පමණක් ලබා දෙන ලෙස වෛද්‍යවරු උපදෙස් ලබා දේ.`,
         topics:[
                  {title:`ක්‍රියාකාරකම්`,
                  content:`දැන් ඔබේ කුඩා දරුවාට ඔබ ඔවුන්ව කෙළින් තබාගෙන සිටින විට ඔවුන්ගේ හිස මොහොතකට කෙළින් තබා ගැනීමේ හැකියාව ඇත. ඔබේ ප්‍රීති පොදිය ඔවුන් ඔබ සමඟ ඇස ගැටෙන සෑම විටම ඔවුන්ගේ ප්‍රීතිය ප්‍රකාශ කිරීමට උපරිමයෙන් උත්සාහ කරනු ඇත. ඔවුන් තම සන්නිවේදන කුසලතා වැඩි දියුණු කිරීම සඳහා ළදරු පියවර ගන්නා විට උපරිම සහාය ලබා දීමට ඔබේ කාලය ගන්න.`
                  },
                  {title:`ඇස් පෙනීම සහ චලනය`,
                  content:`මාසයක වර්ධනයෙන් පසු ඔබේ කුඩා දරුවාගේ ඇස් පෙනීම වැඩි දියුණු වී ඇත. දැන් ඔවුන්ට සෙන්ටිමීටර 45 ක් පමණ දුරින් භාණ්ඩයක් දැකගත හැකිය. ඔවුන්ට චලනය වන වස්තූන් ද දැකිය හැකි අතර ඔවුන්ගේ ඇස් දෙපැත්තෙන් පැත්තට සහ ඉහළ සිට පහළට ගෙන යා හැකිය. ඔවුන් කටහඬ කෙරෙහි අවධානය යොමු කිරීමටත් ඔබ කතා කරන සෑම විටම ඔබ දෙස බැලීමටත් පටන් ගනීවි. ඔවුන් "aa, o" වැනි ශබ්ද ශබ්ද කළ හැකිය. ඔබේ ළදරුවා චලනය ගැන උනන්දු වන අතර ඔබ ගමන් කරන විට ඔවුන්ගේ හිස දෙපැත්තට හරවනු ඇත. ඔවුන්ගේ පපුව ප්‍රදේශය ඉහළට ඔසවන්නට ඔවුන්ට හැකි වේ. ඔවුන්ට අත් සහ අත් ඇති බව ළදරුවා දැන් හඳුනා ගනී. ඔබ ඔවුන්ගේ විවෘත අත්ලෙහි යමක් තබා ගන්නේ නම්, ඔවුන් එය ග්‍රහණය කර ගැනීමට ඉක්මන් වනු ඇත. ඔබේ පියයුරු හෝ කිරි බෝතලය දුටු විට ඔවුන් ද කට අරිනු ඇත. අවධානය යොමු කරන්න අම්මේ, බඩ ඇති වෙලාවේ ඔබේ කුඩා දරුවා ටිකක් ඔළුව උස්සනවා දකින්නත් පුළුවන්!`
                  },
                  {title:`බර, දිග සහ කෙල නිෂ්පාදනය`,
                  content:`මාසයක් වයසැති පිරිමි ළමයෙකුගේ බර කිලෝ ග්රෑම් 5.5 ක් පමණ වන අතර ඔවුන්ගේ දිග අඟල් 23 කි. මෙම වයසේ ගැහැණු ළමයින්ගේ බර කිලෝ ග්රෑම් 5 ක් පමණ වේ. මෙම කාලය තුළ දරුවාගේ ග්රන්ථි අධික ලෙස ලවණ නිපදවනු ඇත. ඔබේ කුඩා දරුවා ගිලීමේ හැකියාව වර්ධනය කර නොමැති නිසා, මෙම කෙල වලින් වැඩි කොටසක් පිටතට ගලා යයි! මෙය වසර දෙකක් දක්වා පැවතිය හැකිය.`
                  },
                  
                  {title:`ඔබේ දරුවාගේ සංවර්ධනය සඳහා ඔබට කළ හැකි දේ`,
                  content:`
                  ඔබ මව්කිරි දෙන සෑම අවස්ථාවකම අක්ෂි සම්බන්ධතා ඇති බවට වග බලා ගන්න.
                  මව්කිරි දෙන කාලය තුළ ඔබේ දරුවා සමඟ කතා කරන්න හෝ ගායනය කරන්න.
                  ඔබේ දරුවා ආදරයෙන් වැළඳ ගන්න.
                  ඔබේ දරුවා අඬන විට, ඔවුන්ව වැළඳගෙන ඔබේ ආදරය පෙන්වන්න.
                  ඔවුන්ගේ බෙල්ල ශක්තිමත් කිරීමට උපකාර කිරීම සඳහා බඩේ වේලාවක් කරන්න.
                  ඔබේ දරුවා සිනාසෙන විට සිනහවෙන් ප්‍රතිචාර දැක්වීමට දිරිගන්වන්න.
                  සංගීතය සහිත දීප්තිමත් සෙල්ලම් බඩු ඔවුන්ගේ ඇඳ හෝ යහන මත තබා ඔබේ කුඩා දරුවාගේ ඇස් ඔවුන්ගේ චලනයන් අනුගමනය කිරීමට උත්සාහ කරන ආකාරය බලන්න.
                  `
                  }
              ],
     
         Image:`https://i.postimg.cc/j5ShsjhK/m2.png`
        
     },
     {
         month: 3,
         description: `තවමත් මව්කිරි දෙන ඔබේ දරුවා දැන් ඔවුන්ගේ ශරීරය පාලනය කරන්නේ කෙසේදැයි ඉගෙන ගැනීමට උත්සාහ කරයි. බොහෝ දුරට මෙයින් අදහස් කරන්නේ ඔවුන්ට වැතිර සිටින විට හිස කෙළින් තබා ගත හැකි බවයි. ඔබේ දරුවා දැන් කිරි උරා බොන විශේෂඥයෙක් වෙලා. ඔවුන් තනිවම සෙල්ලම් කිරීමට සහ විනෝද වීමට ඉගෙනගෙන ඇති අතර එමඟින් බොහෝ සංවර්ධන ප්‍රතිලාභ ඇත.
         ඔබේ දරුවා මේ වන විට ඔබේ (මවගේ) වටිනා කටහඬ හඳුනාගෙන ඇති අතර ඔබ අතර බැඳීම දිනෙන් දින ශක්තිමත් වේ. ඔවුන්ගේ ඇස් ඔබ පසුපස එනු ඇත, ඔවුන් ඔබ සමඟ සිනහවෙන් හා සිනාසෙනු ඇත. ඔවුන් ඔවුන්ගේ සෙල්ලම් බඩු හොඳින් නිරීක්ෂණය කරනු ඇති අතර, ඔවුන්ගේ සෙල්ලම් බඩු චලනය වන සෑම තැනකම ඔවුන්ගේ හිස චලනය වේ. කෙසේ වෙතත්, වඩා හයියෙන් හැඬීම සහ කරදර බලාපොරොත්තු වන්න. ඔවුන් තම මව සමඟ විවිධ ආකාරයේ සන්නිවේදනයන් අත්හදා බලන වයස මෙයයි. උදා: බඩගිනි වූ විට හැඬීම.
         `,
         topics:[
                  {title:`ක්‍රියාකාරකම්`,
                  content:`
                  මුහුණේ ඉරියව් හරහා හැඟීම් සන්නිවේදනය (කලකිරීම, උනන්දුව, මානසික අවපීඩනය)
                  ශරීර චලනයන් හරහා සන්නිවේදනය කිරීමට උත්සාහ කළේය.
                  ‘කූ’ කියලා ශබ්ද කරනවා.
                  අත් දෙකම එකට තබා, ඔවුන්ගේ අත් සහ පාද දිගු කිරීම සහ නැවීම.
                  ඔවුන්ගේ බඩ මත වැතිර සිටියදී ඔවුන්ගේ හිස සහ පපුව ඔසවන්න.
                  ඔවුන්ගේ දෑත් සමඟ සෙල්ලම් කිරීම සහ ඇඟිලි සම්බන්ධ කිරීම
                  වස්තුවක් දෙසට අත දිගු කර එය ඔවුන්ගේ සම්පූර්ණ අත්ලෙන් අල්ලා ගැනීම.
                  සද්දයක් ඇහෙනකොට ඔලුව වැනුවා.
                 `
                  },
                  {title:`ඔබේ දරුවාගේ වර්ධනයට උපකාර කිරීමට ඔබට කළ හැකි දේ:`,
                  content:`
                  ඔබේ දරුවා සමඟ සිනාසෙන්න. දරුවා ඔබ දෙස සිනාසෙන විට, ශරීරයේ ස්වාභාවික රසායනික ද්‍රව්‍ය ස්‍රාවය වන අතර එමඟින් ශරීරයට ආරක්ෂිත සහ ආරක්ෂිත බවක් දැනේ. මෙය දරුවාගේ වර්ධනයට උපකාරී වේ.
                  බබාව බදාගෙන සිපගන්න. ඔවුන්ට ඔබට ඇසෙන පරිදි මෘදු ලෙස ගායනා කරන්න (ඔවුන් ඔබේ අංක එකේ රසිකයා!). මෙය දරුවාට ශබ්ද සහ වචන හුරුපුරුදු වීමට උපකාරී වන අතර එමඟින් ඔවුන්ගේ භාෂාව සහ සන්නිවේදන කුසලතා වැඩි දියුණු කිරීමට උපකාරී වේ.
                  ඔවුන් සමඟ සෙල්ලම් කිරීමට කාලය ගත කරන්න - ක්‍රීඩා කාලය වර්ධන කාලයයි! එය මොළයේ වර්ධනයට උපකාරී වන අතර ළමයින් ක්‍රීඩාවෙන් ලෝකය ගැන බොහෝ දේ ඉගෙන ගනී. මෙය ශක්තිමත් මව්-දරුවා සබඳතාවයක් වර්ධනය කිරීමට ද උපකාරී වේ.
                  සෑම දිනකම අවම වශයෙන් විනාඩි 1-5 ක් බඩේ වේලාවක් කරන්න. මෙම ක්‍රියාකාරකම් මගින් හිස, බෙල්ල සහ සිරුරේ ඉහළ කොටස් ශක්තිමත් වන අතර ඔබේ දරුවාට දණින් වැටී වේගයෙන් නැගී සිටින ආකාරය කියා දෙනු ඇත.
                  දරුවා සම්බාහනය කරන්න - මෙය ඔබ සමඟ ඔවුන්ගේ සම්බන්ධතාවය වැඩිදියුණු කරනු ඇත.
                  ඔබේ දරුවාගේ මුහුණේ ඉරියව් තුළින් ඔහුගේ හැඟීම් හඳුනා ගැනීමට ඉගෙන ගන්න. ඔබ විශේෂඥයෙකු වූ විට ඔබේ කුඩා දරුවා වැඩිපුරම අඬන්නේ මන්දැයි නිවැරදිව හඳුනා ගැනීමට ඔබට හැකි වනු ඇත. ඇත්ත වශයෙන්ම, දරුවා බොහෝ සෙයින් අඬන විට ඔවුන් ආතතියට හා මානසික අවපීඩනයට පත්විය හැකිය.
                  දීප්තිමත් බෝල සමඟ සෙල්ලම් කරන්න, ඒවා වටා පෙරළන්න, එවිට ඔබේ දරුවාගේ ඇස් සහ හිස ඔවුන්ගේ චලනය නිරීක්ෂණය කිරීමට ඉගෙන ගන්න. මෙය ඔබේ දරුවාගේ බෙල්ලේ මාංශ පේශි ශක්තිමත් කිරීමට උපකාරී වේ.
                  `
                  },
                  {title:`එන්නත්`,
                  content:`ඔබේ දරුවාට මාස දෙකක් වයසැති විට ත්‍රිත්ව එන්නත ලබා දීමට වග බලා ගන්න. මෙය ප්‍රධාන රෝග තුනක් ආවරණය කරයි - ඩිෆ්ටීරියා, ටෙටනස් සහ පර්ටුසිස් (කක්කල් කැස්ස).`
                  },
                  {title:``,
                  content:``
                  },
              ],
     
         Image:`https://i.postimg.cc/vmNvZs2V/m3.png`
        
     },
     {
         month: 4,
         description: `Breast milk should continue to be the one and only source of nutrition for your baby. This is medically endorsed and recommended. There may be some children who are given other types of milk such as soy milk or milk powder, but this option is only considered if there are any complications and based on medical advice.
         The little one can now clearly identify your voice and their bond with you is growing leaps and bounds! They love to look into your beautiful eyes, smile with you and maintain various forms of communication. However, crying remains the only way that they can communicate. There will be no big difference in height compared to the previous month. At birth, the average height of infants is around 50 cm and by the end of 1st year it is 75 cm. Weight increases by about 500-600g.
         `,
         topics:[
                  
                  {title:`Activities to look out for:`,
                  content:`
                  Turns head towards bright colours and lights.
                  Moves eyes towards sounds.
                  Newfound ability to clench their fists.
                  More control over both hands and feet. Did we mention they love to kick?
                  Taking initial steps towards hand-eye coordination by attempting to:
                 
                  Brings clenched fists to touch mum, pushing using hands and feet, opening arms.
                  Raises (or tries to raise) head and chest by pushing using elbows.
                 
                  
                  Inherits an adorable smile and loves to hold a gaze with others for longer times.
                  Starts to cry when tired or uncomfortable. Starts to smile and make gurgling noise when happy or excited.
                 `
                  },
                  {title:`What you can do to help your baby's development:`,
                  content:`Your little baby loves to look at your face. They are stimulated when you bring your face closer to their face and catch their gaze.&nbsp;Try and also mount a mirror to the cradle so your infant can see themselves.`
                  }
              ],
     
         Image:`https://i.postimg.cc/bJn1Y227/m4.png`
        
     },
     {
         month: 5,
         description: `Breast milk should still be the one and only source of nutrition for your little one.There may be some children who are given other types of milk such as soy milk and milk powder, but this option should only be considered if there are any complications and be based on medical advice.
         By this month, your little one will start having about two short naps a day. In total, an infant this age requires 14 to 16 hours of sleep per day, which includes the long night-time sleep of 7-8 hours as well as day time naps. By the 4th month, your Baby girl weighs 10-19 pounds and her length/height will be around 22-26.5 inches. If yours is a baby boy, he will weigh about 11-20 pounds and his length/height will be around 23-27 inches.
     
         `,
         topics:[
                  
                  {title:`Activities to look out for`,
                  content:`
                 Lifts head up.
                 Starts holding their feet using hands when laying on their back.
                 Starts putting anything and everything their hands grasp inside their mouth.
                 Will try to sit using their hips and lower back movement, with your loving help.
                 Naturally smiles with everyone.
                 Identifies family members.
                 Smiles when they see themselves in the mirror.
                 Love to play! Cries when you stop.
                 Turns around to look if something falls.
                 Uses both hand movements and facial expressions to communicate.
                 Tries to communicate with parents through vowel sounds such as ‘oob, aab, coo’.
                 Loves to drop things and waits eagerly for you to pick it up, just so that they can drop it again and again!
                 Sharper sight helps them see across the room now.
                 Identifies the colour red.
                `
                  },
                  {title:`Vaccinations`,
                  content:`It’s time to give your baby the Penta vaccine and polio oral vaccinations.
                  This helps prevents diseases like tuberculosis, whooping cough, hepatitis B, diphtheria, Haemophilus, influenza, and polio.
                 `
                  },
                  {title:`What you can do to help your baby's development:`,
                  content:`
                  As your baby is trying to explore and learn, start to introduce new toys.
                  Spend a few minutes reading a book with them and singing every day.
                  Encourage play that trains their the eyes and engages the entire body.
                  Play with your child in front of the mirror.
                  `
                  },
              ],
     
         Image:`https://i.postimg.cc/m2pkqgPC/m5.png`
        
     },
     {
         month: 6,
         description: `Your little one is growing up fast but still, breast milk should remain the one and only source of nutrition for your little one. General medical advice recommends breast milk should be the only source of nutrition for your little one until they complete 180 days.&nbsp;If you have to return to work or there is a complication, you could, only after obtaining advice from your doctor, introduce alternative sources of nutrition. However, if you are a stay-at-home mother that is producing sufficient milk, you should continue breastfeeding until the first 6 months are completed. If you’re planning on introducing additional food for your five-month-old baby, you can find helpful information in our post titled ‘The Sixth Month of Your Little One’.
         Your baby will generally sleep around 10-12 hours a day. This includes the duration of their three to four daytime naps. At 5-6 months, the average weight of a baby boy or girl is about 17.5 kg and the average length/height is 107.9 cm.
         `,
         topics:[
                  
                  {title:`Activities to look out for:`,
                  content:`
                  Moves their head by themselves. Shift their body towards an object of interest.&nbsp;
                  (e.g. turns)
                  
                  Has better control over their hand and eye movements.
                  They can reach over a distance to grasp an object. Usually, the object will end up straight inside their mouth! Your little juggler can now also shift an object from one hand to the other.
                  Their big toe now acts as a pacifier - as they discover flexibility.
                  While seated, their head will bob backward and they will need your loving support to continue sitting.
                  If you give them support under their arms, they will use it to try and stand up or&nbsp;bounce up and down.
                  Your little one will also try to mimic an adult’s mouth movements as they speak.
                  They will voice out “ee, ab, oob” sounds.
                  Cries when visitors come.
                  Laughs and smiles with familiar faces and voices, and turns head towards sounds.
                  Attempts to gain attention by making sounds, when parents are talking with each other or someone else.
                  Tries to touch, lift, shake and taste any object they can grasp.
                  Shows happiness, fear, anger, and enjoyment and will stop crying when they hear your voice.
                 `
                  },
                  {title:`What you can do to help your baby's development:`,
                  content:`
                 Sing songs if you are interested in music. Smile and clap with your baby.
                 Give them colorful toys to play with.
                  `
                  },
                  
              ],
     
         Image:`https://i.postimg.cc/MTsJTv2Y/m6.png`
        
     },
     {
         month: 7,
         description: `Congratulations mum, your little one is quite big! Now is the time to add extra food to their diet! However, don’t stop breastfeeding, it’s still the most important source of nutrition for your little one. Though you may start feeding other foods, your baby will depend heavily on breast milk in-between meals.
         `,
         topics:[
                  
                  {title:`Activities to look out for:`,
                  content:`
                 Learns to find objects without always relying on sight.
                 Eager to grasp or take objects in front of them. These little scientists will shake, pick-up and drop items just to observe.
                 Comes to the sitting posture with assistance.
                 Shifts toys from hand to hand and loves to put toys inside the mouth.
                 Imitates sound.
                 At 4-5 months, the weight is about twice that of their birth weight. There is no significant difference in height.
                 Refuses to let go of anything they put inside their mouth.
                 They can now roll both directions and remain seated once they come to that posture.
                 Loves to touch and feel surrounding objects and environment and attempts to shifts objects from one hand to another.
                 Raises their chest and head while lying on their tummy.
                  `
                  },
                  {title:`Introducing additional foods`,
                  content:`
                  Start with one or two teaspoons of food a day.
                  Increase the amount of food that is being fed over the next 2-3 days.
                  Add dhal to the rice paste you’re feeding your little one. After a few more days you can introduce vegetables such as carrots, cauliflower, potatoes, beans and ash plantains one at a time.
                  Now you can add green leaves such as gotukola,&nbsp;mukunuwenna and sarana.
                  Introduce one or two spoons of scraped/mashed ripe fruits such as papaya, banana, mango, or avocado. You can give your infant two or three meals a day.
                  Don’t forget to provide breast milk in between these meals.
                 `
                  },
                  {title:`Vaccinations`,
                  content:`Make sure to get your baby vaccinated with the Penta valent vaccine and polio oral vaccine at 6 months (should be given at 2, 4 and 6 months). These vaccinations prevent diphtheria, tetanus, pertussis (DPT), hepatitis B, and Haemophilus influenza type B (Hib), as well as polio.`
                  },
                  {title:`What you can do to help your baby's development:`,
                  content:`
                  Take your child to see paintings so they are exposed to new sights and colours.
                  Introduce moving toys for your child to play with.
                  Avoid blaming your child when she throws or drops items. Do not discourage this behaviour as this is an essential part of their journey of research.
                  Place the child on a clean, flat protective surface. This will allow the child to move freely towards objects.
                  Carry your child outside to the garden so that they can observe their surroundings.
                  Talk to your child whenever possible. Sing to him/her and read books.
                  `
                  },
              ],
     
         Image:`https://i.postimg.cc/G2Bn4bLw/m7.png`
        
     },
     {
         month: 8,
         description: `Little by little, your baby is getting used to new foods at this age. You can introduce vegetables and fruits slowly to their diet. On average, baby girls by this time will be about 67.3 cm tall and weigh 8.3 kg, while baby boys will be around 69.2 cm in length and weigh about 8.6 kg.&nbsp;Hope you’re getting better sleep now mum? Your little one will be developing the ability to sleep 11 hours at night with minimal interruption, and will also be napping a few times during the day for around 3-5 hours.
         `,
         topics:[
                  
                  {title:`Activities to look out for:`,
                  content:`
                  Uses fingers to pick up an object, touch and pull it towards them.
                  Moves by turning around and is able to kneel a little bit.
                  Might sit by themselves and reach out to grab things.
                  Practices conversations by varying volume levels of their voice.
                  Uses body language ??to communicate. For example, they might combine their voice and actions to get attention.
                  If your little one is an early talker, they might be able to learn 1 or 2 simple words without really knowing its meaning.
                  Your child's emotions are developing. They will do their best to communicate with parents when they feel happy or sad.
                  By now your child would have strong connections with parents and those who take care of them regularly.
                  Will still be afraid of new and unfamiliar faces. Your little one will also start experiencing anxiety when they are separated from you or encounter strangers.
                  Tries to stand up holding things for support and will look to bite all things!
                 `
                  },
                  {title:`Feeding`,
                  content:`
                  It is very important to provide mashed up food which will be easy for your child to eat with no teeth.
                
                  Provide 2-3 servings of rice mixed with dhal and a vegetable/green leaf/meat (chicken/fish/ powdered sprats). The serving size should be about ¾ of a cup.
                  Use coconut milk/coconut oil/butter when preparing food.
                  Don’t forget to continue breastfeeding in between these meals.
                  `
                  },
                  {title:`What you can do to help your baby's development:`,
                  content:`
                 Introduce new shapes and colours.
                 Provide support and security when attempting new activities.
                 Create a safe environment to move freely and reach their toys/books.
                 Provide more opportunities to observe the surroundings.
                 Talk to your child, tell them stories and sing songs.
                  `
                  },
              ],
     
         Image:`https://i.postimg.cc/sDrbrYhR/m8.png`
        
     },
     {
         month: 9,
         description: `Your little baby is extremely busy now and they love to be active throughout the day. By now, on average a baby girl will be nearly 8 kg in weight, with a height of about 27.1 inches. Meanwhile, a baby boy will now weigh about 8.5 kg and be about 27.8 inches tall. At this age, little babies don’t enjoy sleeping but will still nap for 1-2 hours in the morning or evening. However, some will only nap for about 20 minutes. Nevertheless, in total, they should be getting 13-14 hours of sleep during a day.
         `,
         topics:[
                  
                  {title:`Activities to look out for:`,
                  content:`
                  Tries to talk, kneel, clap or even get up.
                  Their brain is growing considerably.
                  Starts to show preferences with those who take care of them.
                  Exhibits little hints of their personality.
                  Starts to combine a few words and express themselves.
                  Learns to identify parental body language. For example, what it means when you point a finger.
                  Speaks simple words without knowing the meaning.
                  Imitates sounds or voices, and makes use of noise to gather attention.
                  Explores everything around themselves. Pro-tip: try hiding an object for them to find.
                  Ceases any activity when you say ‘No’.
                  Starts to munch and drink water by sucking.
                  Tries to eat by themselves.
                  Responds to their name.
                  Pronounces "m" and "b" sounds.
                  Reacts to the happiness and sadness of others.
                  Learns a lot by touch and taste.
                  Stands using a chair or desk as support.
                  Begins teething.
                  
                  
                 `
                  },
                  {title:`Feeding`,
                  content:`
                  Give your child a little something to hold and eat while you feed them their main meal.
                  In addition to their main three meals, try to sneak in an extra snack.
                  Give small pieces of food.
                  Start feeding about ½ a tablespoon of egg yolk, and increase gradually.
                  Feed breast milk in between these meals and snacks.
                 
                  `
                  },
                  {title:`What you can do to help your baby's development:`,
                  content:`
                  Speak to your child in a loving, gentle voice that is also easy to imitate.
                  Give toys that make various sounds.
                  Provide opportunities to interact with the surrounding environment.
                  Talk to your child, tell stories, sing to them.
                  Play hide and seek.
                 
                  `
                  },
              ],
     
         Image:`https://i.postimg.cc/L5TDRZcH/m9.png`
        
     },
     {
         month: 10,
         description: `The average weight and height of a baby this age is about 7.2- 10.9 kg and the height is about 67.7-76.2 cm. These little ones sleep an average of 14 hours a day, out of which two hours are in the afternoon.
         `,
         topics:[
                  
                  {title:`Activities to look out for:`,
                  content:`
                  Learns to follow simple instructions you give, such as waving (bye, bye).
                  Picks up things using fingers, starts to use the thumb and forefinger to lift something up.
                  Stands up holding onto things for support.
                  Identifies own toys and familiar faces.
                  Tries to speak words.
                  Hides their face when shy.
                 
                  
                 `
                  },
                  {title:`Feeding`,
                  content:`
                  Feed three main meals a day.
                  Offer two extra snacks.
                  Give food in small pieces.
                  You can feed a whole egg yolk.
                  Let the baby use their fingers and eat by themselves.
                  Provide different types of food.
                  
                  
                  `
                  },
                  {title:`Vaccinations`,
                  content:`It’s time for the first dose of the MMR vaccine, which provides protection against Measles, Mumps and Rubella.
                  
                  `
                  },
                  {title:`What you can do to help your baby's development:`,
                  content:`
                  Feed three main meals a day.
                  Offer two extra snacks.
                  Give food in small pieces.
                  You can feed a whole egg yolk.
                  Let the baby use their fingers and eat by themselves.
                  Provide different types of food.
                 
                 
                  `
                  },
              ],
     
         Image:`https://i.postimg.cc/t413vf4R/m10.png`
        
     },
     {
         month: 11,
         description: `On average little baby girls this age weighs about 8.7 kg and boys weigh about 9.5 kg. The height of a girl is about 28.7 inches, while a boys length is about 29.3 inches. By this time your baby is getting a good night's rest coupled with a short nap during day time.
         `,
         topics:[
                  
                  {title:`Activities to look out for:`,
                  content:`
                  Loves to converse.
                  Will speak their first words.
                  Recognises the meaning of the words mother and father.
                  Begins to say 1 - 2 words.
                  Can walk when you hold their hand. Might even manage a few steps without any help!.
                  Stands without help.
                  Walk a few steps.
                  Indicates what they want or where they want to go using fingers.
                  Eats food with fingers.
                  Imitates words.
                  Will wave ‘bye’.
                  Identified colours.
                  Grows in curiosity and loves to explore.
                  Expresses loneliness when separated.
                  Understands request parents make - even a full sentence.
                  Loves music and dancing.
                  
                  
                 `
                  },
                  {title:`Feeding`,
                  content:`
                  
                  `
                  },
                  {title:`What you can do to help your baby's development:`,
                  content:`
                  Begin to interpret and voice out what your child is trying to say in words so that they can hear you.
                  e.g. say no - while shaking the head, wave and say goodbye
                  
                  Smile and kiss when the child can see the reflection in the mirror.
                  Play games of hide and seek with your child. These simple games increase the understanding of the little one.
                  Look deep into the child's eyes. Parents who build close bonds through eye contact have lesser problem when having to discipline them.
                  
                 
                  `
                  },
              ],
     
         Image:`https://i.postimg.cc/FK3jNLS2/m11.png`
        
     },
     {
         month: 12,
         description: `Now your ‘not-so-little’ little one is close to reaching a very special milestone! Are you making plans? Looking back, you would have seen and marveled how that little bundle of joy kept growing both physically and mentally, while winning more and more of your heart and love. Can you believe how much they have learnt?
         `,
         topics:[
                  
                  {title:`Activities to look out for:`,
                  content:`
                  Can sit without support.
                  Tries to get up using hands, feet, and knees.
                  Will try to walk with some help or a walker.
                  Tries to imitate words and sounds. Responds to simple requests.
                  Has fun playing and hitting the floor with hands.
                  Makes and repeats sound to gain attention.
                  Uses the thumb and forefinger to pick up things.
                  Tries to hold on to a cup or spoon and eat by themselves.
                  Begin to interpret the child's hints and signs with words.
                  <p>For example, say "no" when nodding the head, say goodbye when waving.</p>
                  
                  The child may try to point their finger and show what they want.
                  Will smile at their own reflection in the mirror and try to tap on the mirror or even kiss.
                  Resists being kept in the Cot or any other restrictive spaces for long.
                  Buries face on your shoulders to hide when meeting guests.
                  
                  
                 `
                  },
                  {title:`Feeding`,
                  content:`
                  Serve four meals. For main meals, feed a full cup.
                  Try not to feed them any snacks, 2-3 hours before their main meal. This will help your baby be hungry when you are feeding the main meal.
                  Provide 2 snacks in between the main meals.
                  Mix crushed green beans, peas, chickpeas and potatoes with coconut.
                  Feed fruits or yogurt.
                  Encourage your baby to eat an edge of a white hopper, roast bread, baby biscuits by themselves.
                  Provide breast milk if needed after a meal.
                
                  
                  `
                  },
                  {title:`What you can do to help your baby's development:`,
                  content:`
                  Make sure you create a safe environment inside the home for your child.
                  Keeping the floor neat and tidy will promote curiosity and free movement.
                  Give the child something to push (like a cart). This is a highly beneficial activity.
                  Make it a habit to read books as a routine before bedtime. Reading together increases language skills and intimacy.
                  Encourage playful activities such as hide and seek. It will help your children learn new concepts.
                  Look deep into your child's beautiful eyes. Parents who have developed intimacy through close eye contact are less likely to have problems with the child's discipline.
             
                  `
                  },
              ],
     
         Image:`https://i.postimg.cc/GhtG9NYP/m12.png`
        
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
                        <Text font={fonts.bold} >  {t('baby_tracker.Baby_Tracking')}</Text>
                        <Text> {t('temp_user.name')} </Text>
                    </Block>
                </Block>
                <Block flex={0} align={"center"} radius={50} width={150} style={{ borderColor: "green", borderWidth: 1 }} padding={sizes.s}>
                    <Text> 1 {t("baby_tracker.month")}   </Text>
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
                            <Text size={16} bold > {t('baby_tracker.Baby_Tracking')} </Text>
                        </Block>
                        {/* <Block flex={0} row justify='space-between' marginBottom={-50} paddingTop={10} width={"100%"}>
                            <Block flex={0}
                                align="center" justify='center' marginHorizontal={10} marginVertical={10}>
                                <Text bold h5 color="gray" > {baby_tracker[activeWeek - 1].Length} </Text>
                                <Text size={12} color={"gray"} > {t('baby_tracker.Length')} </Text>
                            </Block>
                            <Block flex={0}
                                align="center" justify='center' marginHorizontal={10} marginVertical={10}>
                                <Text bold h5 color="gray" > {baby_tracker[activeWeek - 1].Weight}</Text>
                                <Text size={12} color={"gray"} > {t('baby_tracker.Weight')} </Text>
                            </Block>
                        </Block> */}
                        <Block
                            flex={0}
                            marginTop={20}
                            align='center'
                           
                            >
                            <Block
                            flex={0}
                            marginTop={20}
                            align='center'
                            height={300}
                            width={300}
                            radius={500}
                                gradient={gradients.black}
                            >
                            <Image
                                style={{ height: 300, width: 300 }}
                                background
                                resizeMode="contain"
                                radius={sizes.cardRadius}
                                source={{ uri: baby_tracker[activeWeek - 1].Image }} >

                            </Image>
                        </Block>
                        </Block>

                        <Block
                            card
                            gradient={gradients.primary}
                            scroll
                            horizontal={true}
                            paddingVertical={10}
                            flex={0} row>

                            {
                                baby_tracker.map((item, index) => {
                                    return <Button key={item.month} onPress={() => { setActiveWeek(item.month) }} >
                                        <Block flex={0}
                                            gradient={activeWeek == item.month ? gradients.secondary : gradients.light} style={[styles.week, activeWeek == item.month ? styles.week_active : null, { shadowOpacity: 1, shadowColor: "red" }]} align="center" justify='center' marginHorizontal={10} marginVertical={10}>
                                            <Text bold h3 color={activeWeek == item.month ? "white" : "gray"}>{item.month}</Text>
                                            <Text size={12} color={activeWeek == item.month ? "white" : "gray"} > {t('baby_tracker.month')} </Text>
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
                        <Text size={16} bold marginBottom={10} > {t('baby_tracker.things_know')} </Text>
                    </Block>
                    <Block
                        card
                        flex={0} >
                        <Text > {baby_tracker[activeWeek - 1].description} </Text>
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
                        source={{ uri: baby_tracker[activeWeek - 1].Image2 }} >

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
                        <Text size={16} bold marginBottom={10} > {t('baby_tracker.Your_Body')} </Text>
                    </Block>
                    <Block
                        card
                        flex={0} >
                        <Text > {baby_tracker[activeWeek - 1].Your_Body} </Text>
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
                        <Text size={16} bold marginBottom={10} > {t('baby_tracker.Things_to_remember')} </Text>
                    </Block>
                    <Block
                        card
                        flex={0} >
                        <Text > {baby_tracker[activeWeek - 1].Your_baby} </Text>
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
export default BabyTracker;
