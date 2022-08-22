import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useData, useTheme } from '../../hooks';
import { Block } from '../../components';
import TrendingArticleCard from '../../components/Articles/TrendingArticleCard';
const TrendingArticle = () => {
    const data = useData();
    const [articles, setArticles] = useState([]);
    const { colors, gradients, sizes } = useTheme();
    // init articles
    useEffect(() => {
        setArticles(data?.articles);
        setArticles([
            {
                title: "ග්‍රාමීය ශ්‍රී ලංකාවේ නව යොවුන් වියේ ගැබ්ගැනීම් වල සැඟවුණු බර;",
                description: "කොරොන වයිරස් රෝගය 2019 (COVID-19) ශ්‍රී ලංකාව ඇතුළු ලොව පුරා මිනිසුන් දහස් ගණනකට බලපා ඇත. දෙමව්පියන් හෝ මව්වරුන් වශයෙන්, මෙම වෛරසය ගැන කනස්සල්ලට පත්වීම ස්වභාවිකය. කෙසේ වෙතත්, COVID-19 පිළිබඳ දැනුමෙන් සන්නද්ධ වීමෙන් - ඔබ ගැබ්ගෙන සිටියත්, හෝ මව්කිරි දෙන මව්වරුන් ඇතුළු දෙමාපියෙකු වුවත් - ඔබට මෙම රෝගය පැතිරීම හේතුවෙන් ඔබට අත්විඳිය හැකි ඕනෑම කාංසාවක් වඩාත් හොඳින් කළමනාකරණය කිරීමට හෝ වළක්වා ගැනීමට හැකිය.",
                image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/pregnant-647x363.jpeg?KtQwM_4Jl81KurqIHeIkrSNMXEP3dYCs",
                category: { "id": 2, "name": "Popular" },
                rating: 1,
                location: { id: 2, city: "Matara", country: "Sri Lanka" },
                timestamp: 1660020477,
                user: { "about": "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).", "avatar": "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80", "department": "Marketing Manager", "id": 1, "name": "ප්‍රසනන් රණවීර", "social": [], "stats": [] },
            },
            {
                title: "ග්‍රාමීය ශ්‍රී ලංකාවේ නව යොවුන් වියේ ගැබ්ගැනීම් වල සැasdඟවුණු බර;",
                description: "කොරොන වයිරස් රෝගය 2019 (COVID-19) ශ්‍රී ලංකාව ඇතුළු ලොව පුරා මිනිසුන් දහස් ගණනකට බලපා ඇත. දෙමව්පියන් හෝ මව්වරුන් වශයෙන්, මෙම වෛරසය ගැන කනස්සල්ලට පත්වීම ස්වභාවිකය. කෙසේ වෙතත්, COVID-19 පිළිබඳ දැනුමෙන් සන්නද්ධ වීමෙන් - ඔබ ගැබ්ගෙන සිටියත්, හෝ මව්කිරි දෙන මව්වරුන් ඇතුළු දෙමාපියෙකු වුවත් - ඔබට මෙම රෝගය පැතිරීම හේතුවෙන් ඔබට අත්විඳිය හැකි ඕනෑම කාංසාවක් වඩාත් හොඳින් කළමනාකරණය කිරීමට හෝ වළක්වා ගැනීමට හැකිය.",
                image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/pregnant-647x363.jpeg?KtQwM_4Jl81KurqIHeIkrSNMXEP3dYCs",
                category: { "id": 2, "name": "Popular" },
                rating: 1,
                location: { id: 2, city: "Matara", country: "Sri Lanka" },
                timestamp: 1660020477,
                user: { "about": "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).", "avatar": "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80", "department": "Marketing Manager", "id": 1, "name": "ප්‍රසනන් රණවීර", "social": [], "stats": [] },
            }
        ]);
    }, [data.articles, data.categories]);
    return (React.createElement(Block, null,
        React.createElement(FlatList, { data: articles, horizontal: true, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, keyExtractor: (item) => `${item?.id}`, style: { paddingHorizontal: sizes.padding }, contentContainerStyle: { paddingBottom: sizes.s }, renderItem: ({ item }) => React.createElement(TrendingArticleCard, { ...item }) })));
};
export default TrendingArticle;
