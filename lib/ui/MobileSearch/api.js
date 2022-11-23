import { query } from './../../api';
const INSIGHTS_BY_SEARCH_TERM_QUERY = (searchTerm) => `{
    allInsightsBySearchTerm(searchTerm: "${searchTerm}") {
        id
        title
    }
}`;
const insightsBySearchTermAccessor = ({ allInsightsBySearchTerm }) => {
    return allInsightsBySearchTerm || [];
};
export const queryInsightsBySearchTerm = (searchTerm) => query(INSIGHTS_BY_SEARCH_TERM_QUERY(searchTerm)).then(insightsBySearchTermAccessor);
const INSIGHTS_QUERY = () => `{
    allInsights(page: 1, pageSize: 50, from: "utc_now-7d", to: "utc_now") {
        id
        title
    }
}`;
const insightsAccessor = ({ allInsights }) => {
    return allInsights || [];
};
export const queryInsights = () => query(INSIGHTS_QUERY()).then(insightsAccessor);
const PEOPLE_QUERY = `{
    popularInsightAuthors {
      id
      username
      avatarUrl
    }
}`;
const peopleAccessor = ({ popularInsightAuthors }) => {
    return popularInsightAuthors || [];
};
export const queryPeople = () => query(PEOPLE_QUERY).then(peopleAccessor);
const TRENDING_WORDS_QUERY = `{
    getTrendingWords(size: 50, from: "utc_now-1h", to: "utc_now") {
        topWords {
            word
        }
    }
}`;
const trendsAccessor = ({ getTrendingWords }) => {
    let trendingWords = [];
    const item = getTrendingWords[getTrendingWords.length - 1];
    if (item) {
        trendingWords = item.topWords;
    }
    return trendingWords.map(({ word }) => word);
};
export const queryTrends = () => query(TRENDING_WORDS_QUERY).then(trendsAccessor);
//# sourceMappingURL=api.js.map