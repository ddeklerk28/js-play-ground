export default function keyTrendsToTen() {
    console.log('🔢 Key Trends to Ten - TPV Rank Sorting');
    console.log('========================================');

    console.log(`Processing ${obj.length} objects...`);
    console.log('');

    // Process each object in the array
    const processedData = obj.map((item, index) => {
        console.log(`Processing "${item.name}":`);

        // Sort keyTrends by tpvRank (ascending) and limit to 10
        const sortedKeyTrends = [...item.keyTrends]
            .sort((a, b) => a.tpvRank - b.tpvRank)
            .slice(0, 10);

        sortedKeyTrends.forEach((trend, i) => {
            console.log(`    ${i + 1}. ${trend.name} (tpvRank: ${trend.tpvRank})`);
        });
        console.log('');

        return {
            ...item,
            keyTrends: sortedKeyTrends
        };
    });

    console.log('✅ Processing complete!');
    console.log('Result stored in processedData variable');
    console.log('Each object now has associations and keyTrends limited to top 10 by tpvRank');

    // Make the result available for inspection
    (window as any).processedData = processedData;
}

const obj = [
    {
        "name": "Diet",
        "performanceInfo": {
            "volume": 7397,
            "shareOfVoice": 0,
            "pastGrowthPercent": 10.477389,
            "pastGrowth": 30.4342,
            "forecast": "Growing",
            "forecastGrowthPercent": 5.816203,
            "forecastGrowthRank": 13,
            "pastGrowthRank": 18,
            "sentiment": {
                "positive": 25,
                "negative": 1
            }
        },
        "associations": [
            {
                "name": "Meal Replacement",
                "maturity": "Growing",
                "tpvRank": 101,
                "lens": "Benefits",
                "volume": 4803,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 35, negative: 4"
            },
            {
                "name": "Helps Gain Weight",
                "maturity": "Mature",
                "tpvRank": 204,
                "lens": "Benefits",
                "volume": 7371,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 28, negative: 6"
            },
            {
                "name": "Sugar-Free",
                "maturity": "Growing",
                "tpvRank": 245,
                "lens": "Themes",
                "volume": 83022,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 31, negative: 3"
            },
            {
                "name": "Sugar Alternative",
                "maturity": "Mature",
                "tpvRank": 169,
                "lens": "Ingredients",
                "volume": 3123,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 25, negative: 4"
            },
            {
                "name": "Simple Ingredients",
                "maturity": "Mature",
                "tpvRank": 173,
                "lens": "Benefits",
                "volume": 89862,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 74, negative: 0"
            },
            {
                "name": "Energises",
                "maturity": "Mature",
                "tpvRank": 246,
                "lens": "Benefits",
                "volume": 19596,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 47, negative: 2"
            },
            {
                "name": "Healthy",
                "maturity": "Growing",
                "tpvRank": 231,
                "lens": "Benefits",
                "volume": 200206,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 61, negative: 2"
            },
            {
                "name": "Better Blood Pressure",
                "maturity": "Dormant",
                "tpvRank": 139,
                "lens": "Benefits",
                "volume": 210,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 47, negative: 6"
            },
            {
                "name": "Warms Me Up",
                "maturity": "Declining",
                "tpvRank": 268,
                "lens": "Benefits",
                "volume": 22491,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 43, negative: 2"
            },
            {
                "name": "Lose Weight",
                "maturity": "Mature",
                "tpvRank": 264,
                "lens": "Benefits",
                "volume": 72361,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 20, negative: 14"
            },
            {
                "name": "Dry Roasted",
                "maturity": "Mature",
                "tpvRank": 231,
                "lens": "Themes",
                "volume": 4174,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 48, negative: 1"
            },
            {
                "name": "Slow Cooked",
                "maturity": "Mature",
                "tpvRank": 252,
                "lens": "Themes",
                "volume": 100761,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 46, negative: 1"
            },
            {
                "name": "Surprising Moment",
                "maturity": "Mature",
                "tpvRank": 280,
                "lens": "Benefits",
                "volume": 42652,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 57, negative: 4"
            },
            {
                "name": "Capsule Format",
                "maturity": "Mature",
                "tpvRank": 197,
                "lens": "Themes",
                "volume": 11156,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 14, negative: 4"
            },
            {
                "name": "Slimming",
                "maturity": "Growing",
                "tpvRank": 137,
                "lens": "Benefits",
                "volume": 3242,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 45, negative: 2"
            },
            {
                "name": "Fat-Free",
                "maturity": "Growing",
                "tpvRank": 152,
                "lens": "Themes",
                "volume": 18838,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 2"
            },
            {
                "name": "High Quality",
                "maturity": "Mature",
                "tpvRank": 278,
                "lens": "Benefits",
                "volume": 136456,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 63, negative: 3"
            },
            {
                "name": "Artificial Sweetener",
                "maturity": "Growing",
                "tpvRank": 60,
                "lens": "Themes",
                "volume": 4964,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 27, negative: 19"
            },
            {
                "name": "High Protein",
                "maturity": "Growing",
                "tpvRank": 126,
                "lens": "Themes",
                "volume": 96653,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 44, negative: 1"
            },
            {
                "name": "Higher Calorie",
                "maturity": "Growing",
                "tpvRank": 190,
                "lens": "Benefits",
                "volume": 17585,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 18, negative: 5"
            },
            {
                "name": "Decadent",
                "maturity": "Growing",
                "tpvRank": 212,
                "lens": "Benefits",
                "volume": 60698,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 64, negative: 2"
            },
            {
                "name": "Better For You",
                "maturity": "Mature",
                "tpvRank": 223,
                "lens": "Benefits",
                "volume": 14257,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 54, negative: 5"
            },
            {
                "name": "Low Sugar",
                "maturity": "Growing",
                "tpvRank": 26,
                "lens": "Themes",
                "volume": 12972,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 37, negative: 3"
            },
            {
                "name": "Multigrain",
                "maturity": "Mature",
                "tpvRank": 134,
                "lens": "Themes",
                "volume": 13316,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 39, negative: 1"
            },
            {
                "name": "High Calorie",
                "maturity": "Growing",
                "tpvRank": 71,
                "lens": "Themes",
                "volume": 13092,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 23, negative: 4"
            },
            {
                "name": "Lowers Cholesterol",
                "maturity": "Growing",
                "tpvRank": 117,
                "lens": "Benefits",
                "volume": 2827,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 44, negative: 4"
            },
            {
                "name": "Burns Fat",
                "maturity": "Growing",
                "tpvRank": 253,
                "lens": "Benefits",
                "volume": 12606,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 4"
            },
            {
                "name": "Aids Sleep",
                "maturity": "Mature",
                "tpvRank": 107,
                "lens": "Benefits",
                "volume": 2425,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 43, negative: 4"
            },
            {
                "name": "Comforts",
                "maturity": "Growing",
                "tpvRank": 258,
                "lens": "Benefits",
                "volume": 186935,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 70, negative: 1"
            },
            {
                "name": "Improves Flexibility",
                "maturity": "Dormant",
                "tpvRank": 265,
                "lens": "Benefits",
                "volume": 241,
                "forecastGrowth": "DECLINING",
                "sentiment": "Positive: 15, negative: 0"
            },
            {
                "name": "Vegan Protein",
                "maturity": "Growing",
                "tpvRank": 89,
                "lens": "Themes",
                "volume": 3819,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 37, negative: 2"
            },
            {
                "name": "Weight Watchers Diet",
                "maturity": "Mature",
                "tpvRank": 148,
                "lens": "Themes",
                "volume": 13803,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 1"
            },
            {
                "name": "Grass-Fed",
                "maturity": "Growing",
                "tpvRank": 157,
                "lens": "Themes",
                "volume": 25851,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 25, negative: 5"
            },
            {
                "name": "Easy To Eat",
                "maturity": "Mature",
                "tpvRank": 182,
                "lens": "Benefits",
                "volume": 13640,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 60, negative: 1"
            },
            {
                "name": "Unsweetened",
                "maturity": "Growing",
                "tpvRank": 199,
                "lens": "Themes",
                "volume": 33408,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 30, negative: 1"
            },
            {
                "name": "Reduced Fat",
                "maturity": "Declining",
                "tpvRank": 210,
                "lens": "Benefits",
                "volume": 5786,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 35, negative: 1"
            },
            {
                "name": "Pairs Well With",
                "maturity": "Mature",
                "tpvRank": 251,
                "lens": "Benefits",
                "volume": 32579,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 64, negative: 1"
            },
            {
                "name": "Reduced Carbohydrates",
                "maturity": "Growing",
                "tpvRank": 142,
                "lens": "Benefits",
                "volume": 4747,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 41, negative: 1"
            }
        ],
        "keyTrends": [
            {
                "name": "Energises",
                "maturity": "Mature",
                "tpvRank": 246,
                "lens": "Benefits",
                "volume": 19596,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 47, negative: 2"
            },
            {
                "name": "Nutritious",
                "maturity": "Mature",
                "tpvRank": 281,
                "lens": "Benefits",
                "volume": 104405,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 60, negative: 3"
            },
            {
                "name": "Healthy",
                "maturity": "Growing",
                "tpvRank": 231,
                "lens": "Benefits",
                "volume": 200206,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 61, negative: 2"
            },
            {
                "name": "Low Sodium",
                "maturity": "Growing",
                "tpvRank": 198,
                "lens": "Themes",
                "volume": 27945,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 28, negative: 1"
            },
            {
                "name": "Fasting",
                "maturity": "Mature",
                "tpvRank": 270,
                "lens": "Themes",
                "volume": 48956,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 16, negative: 5"
            },
            {
                "name": "Lose Weight",
                "maturity": "Mature",
                "tpvRank": 264,
                "lens": "Benefits",
                "volume": 72361,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 20, negative: 14"
            },
            {
                "name": "Pescetarian Diet",
                "maturity": "Growing",
                "tpvRank": 74,
                "lens": "Themes",
                "volume": 10308,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 24, negative: 4"
            },
            {
                "name": "Slimming",
                "maturity": "Growing",
                "tpvRank": 137,
                "lens": "Benefits",
                "volume": 3242,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 45, negative: 2"
            },
            {
                "name": "Fat-Free",
                "maturity": "Growing",
                "tpvRank": 152,
                "lens": "Themes",
                "volume": 18838,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 2"
            },
            {
                "name": "Lowers Blood Pressure",
                "maturity": "Mature",
                "tpvRank": 36,
                "lens": "Benefits",
                "volume": 717,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 48, negative: 3"
            },
            {
                "name": "High Protein",
                "maturity": "Growing",
                "tpvRank": 126,
                "lens": "Themes",
                "volume": 96653,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 44, negative: 1"
            },
            {
                "name": "Builds Muscle",
                "maturity": "Growing",
                "tpvRank": 194,
                "lens": "Benefits",
                "volume": 7014,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 22, negative: 3"
            },
            {
                "name": "Lowers Cholesterol",
                "maturity": "Growing",
                "tpvRank": 117,
                "lens": "Benefits",
                "volume": 2827,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 44, negative: 4"
            },
            {
                "name": "Healthy Diet",
                "maturity": "Mature",
                "tpvRank": 201,
                "lens": "Benefits",
                "volume": 10337,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 56, negative: 3"
            },
            {
                "name": "Improves Flexibility",
                "maturity": "Dormant",
                "tpvRank": 265,
                "lens": "Benefits",
                "volume": 241,
                "forecastGrowth": "DECLINING",
                "sentiment": "Positive: 15, negative: 0"
            },
            {
                "name": "Weight Watchers Diet",
                "maturity": "Mature",
                "tpvRank": 148,
                "lens": "Themes",
                "volume": 13803,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 1"
            },
            {
                "name": "Clean Eating",
                "maturity": "Growing",
                "tpvRank": 45,
                "lens": "Themes",
                "volume": 18509,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 33, negative: 2"
            },
            {
                "name": "Mediterranean Diet",
                "maturity": "Growing",
                "tpvRank": 5,
                "lens": "Themes",
                "volume": 7397,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 25, negative: 1"
            },
            {
                "name": "Low Fat",
                "maturity": "Growing",
                "tpvRank": 223,
                "lens": "Themes",
                "volume": 45987,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 23, negative: 2"
            }
        ]
    },
    {
        "name": "Diet Principles",
        "performanceInfo": {
            "volume": 6178,
            "shareOfVoice": 0,
            "pastGrowthPercent": 6.5512214,
            "pastGrowth": 22.365759,
            "forecast": "Growing",
            "forecastGrowthPercent": 2.6136298,
            "forecastGrowthRank": 24,
            "pastGrowthRank": 23,
            "sentiment": {
                "positive": 23,
                "negative": 4
            }
        },
        "associations": [
            {
                "name": "Helps Gain Weight",
                "maturity": "Mature",
                "tpvRank": 204,
                "lens": "Benefits",
                "volume": 7371,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 28, negative: 6"
            },
            {
                "name": "Sugar Alternative",
                "maturity": "Mature",
                "tpvRank": 169,
                "lens": "Ingredients",
                "volume": 3123,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 25, negative: 4"
            },
            {
                "name": "Reduced Calorie",
                "maturity": "Growing",
                "tpvRank": 167,
                "lens": "Benefits",
                "volume": 16920,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 33, negative: 4"
            },
            {
                "name": "Slow Cooked",
                "maturity": "Mature",
                "tpvRank": 252,
                "lens": "Themes",
                "volume": 100761,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 46, negative: 1"
            },
            {
                "name": "Surprising Moment",
                "maturity": "Mature",
                "tpvRank": 280,
                "lens": "Benefits",
                "volume": 42652,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 57, negative: 4"
            },
            {
                "name": "Slimming",
                "maturity": "Growing",
                "tpvRank": 137,
                "lens": "Benefits",
                "volume": 3242,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 45, negative: 2"
            },
            {
                "name": "Party Size",
                "maturity": "Mature",
                "tpvRank": 143,
                "lens": "Benefits",
                "volume": 1656,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 23, negative: 2"
            },
            {
                "name": "Higher Calorie",
                "maturity": "Growing",
                "tpvRank": 190,
                "lens": "Benefits",
                "volume": 17585,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 18, negative: 5"
            },
            {
                "name": "Decadent",
                "maturity": "Growing",
                "tpvRank": 212,
                "lens": "Benefits",
                "volume": 60698,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 64, negative: 2"
            },
            {
                "name": "Better For You",
                "maturity": "Mature",
                "tpvRank": 223,
                "lens": "Benefits",
                "volume": 14257,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 54, negative: 5"
            },
            {
                "name": "Reduced Salt",
                "maturity": "Declining",
                "tpvRank": 196,
                "lens": "Benefits",
                "volume": 2730,
                "forecastGrowth": "DECLINING",
                "sentiment": "Positive: 22, negative: 1"
            },
            {
                "name": "Multigrain",
                "maturity": "Mature",
                "tpvRank": 134,
                "lens": "Themes",
                "volume": 13316,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 39, negative: 1"
            },
            {
                "name": "Lowers Cholesterol",
                "maturity": "Growing",
                "tpvRank": 117,
                "lens": "Benefits",
                "volume": 2827,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 44, negative: 4"
            },
            {
                "name": "Burns Fat",
                "maturity": "Growing",
                "tpvRank": 253,
                "lens": "Benefits",
                "volume": 12606,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 4"
            },
            {
                "name": "Fibre Rich",
                "maturity": "Growing",
                "tpvRank": 30,
                "lens": "Themes",
                "volume": 16333,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 32, negative: 2"
            },
            {
                "name": "Natural",
                "maturity": "Mature",
                "tpvRank": 288,
                "lens": "Benefits",
                "volume": 204507,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 29, negative: 3"
            },
            {
                "name": "Grass-Fed",
                "maturity": "Growing",
                "tpvRank": 157,
                "lens": "Themes",
                "volume": 25851,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 25, negative: 5"
            },
            {
                "name": "Keeps You Fuller For Longer",
                "maturity": "Growing",
                "tpvRank": 105,
                "lens": "Benefits",
                "volume": 4419,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 42, negative: 1"
            },
            {
                "name": "Reduced Carbohydrates",
                "maturity": "Growing",
                "tpvRank": 142,
                "lens": "Benefits",
                "volume": 4747,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 41, negative: 1"
            },
            {
                "name": "More Convenient",
                "maturity": "Mature",
                "tpvRank": 273,
                "lens": "Benefits",
                "volume": 143043,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 42, negative: 2"
            },
            {
                "name": "100 Calories",
                "maturity": "Growing",
                "tpvRank": 4,
                "lens": "Themes",
                "volume": 6936,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 23, negative: 2"
            },
            {
                "name": "Sugar-Free",
                "maturity": "Growing",
                "tpvRank": 245,
                "lens": "Themes",
                "volume": 83022,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 31, negative: 3"
            },
            {
                "name": "Simple Ingredients",
                "maturity": "Mature",
                "tpvRank": 173,
                "lens": "Benefits",
                "volume": 89862,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 74, negative: 0"
            },
            {
                "name": "Energises",
                "maturity": "Mature",
                "tpvRank": 246,
                "lens": "Benefits",
                "volume": 19596,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 47, negative: 2"
            },
            {
                "name": "Healthy",
                "maturity": "Growing",
                "tpvRank": 231,
                "lens": "Benefits",
                "volume": 200206,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 61, negative: 2"
            },
            {
                "name": "Lose Weight",
                "maturity": "Mature",
                "tpvRank": 264,
                "lens": "Benefits",
                "volume": 72361,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 20, negative: 14"
            },
            {
                "name": "Fat-Free",
                "maturity": "Growing",
                "tpvRank": 152,
                "lens": "Themes",
                "volume": 18838,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 2"
            },
            {
                "name": "High Quality",
                "maturity": "Mature",
                "tpvRank": 278,
                "lens": "Benefits",
                "volume": 136456,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 63, negative: 3"
            },
            {
                "name": "Refreshing",
                "maturity": "Growing",
                "tpvRank": 217,
                "lens": "Benefits",
                "volume": 67697,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 73, negative: 1"
            },
            {
                "name": "High Protein",
                "maturity": "Growing",
                "tpvRank": 126,
                "lens": "Themes",
                "volume": 96653,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 44, negative: 1"
            },
            {
                "name": "High Calorie",
                "maturity": "Growing",
                "tpvRank": 71,
                "lens": "Themes",
                "volume": 13092,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 23, negative: 4"
            },
            {
                "name": "Powdered Peanut Butter",
                "maturity": "Growing",
                "tpvRank": 36,
                "lens": "Ingredients",
                "volume": 2953,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 27, negative: 1"
            },
            {
                "name": "Anabolic",
                "maturity": "Declining",
                "tpvRank": 199,
                "lens": "Benefits",
                "volume": 1922,
                "forecastGrowth": "DECLINING",
                "sentiment": "Positive: 24, negative: 6"
            },
            {
                "name": "Improves Flexibility",
                "maturity": "Dormant",
                "tpvRank": 265,
                "lens": "Benefits",
                "volume": 241,
                "forecastGrowth": "DECLINING",
                "sentiment": "Positive: 15, negative: 0"
            },
            {
                "name": "Lactose-Free",
                "maturity": "Growing",
                "tpvRank": 81,
                "lens": "Themes",
                "volume": 9573,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 28, negative: 4"
            },
            {
                "name": "Zero Sugar",
                "maturity": "Growing",
                "tpvRank": 6,
                "lens": "Themes",
                "volume": 7780,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 26, negative: 4"
            },
            {
                "name": "Weight Watchers Diet",
                "maturity": "Mature",
                "tpvRank": 148,
                "lens": "Themes",
                "volume": 13803,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 1"
            },
            {
                "name": "Easy To Eat",
                "maturity": "Mature",
                "tpvRank": 182,
                "lens": "Benefits",
                "volume": 13640,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 60, negative: 1"
            },
            {
                "name": "Reduced Fat",
                "maturity": "Declining",
                "tpvRank": 210,
                "lens": "Benefits",
                "volume": 5786,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 35, negative: 1"
            },
            {
                "name": "Bite-Size",
                "maturity": "Mature",
                "tpvRank": 238,
                "lens": "Benefits",
                "volume": 41609,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 51, negative: 1"
            },
            {
                "name": "Meal Kit",
                "maturity": "Mature",
                "tpvRank": 101,
                "lens": "Themes",
                "volume": 4103,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 22, negative: 2"
            }
        ],
        "keyTrends": [
            {
                "name": "Calories In Calories Out (Cico)",
                "maturity": "Growing",
                "tpvRank": 66,
                "lens": "Themes",
                "volume": 4202,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 17, negative: 6"
            },
            {
                "name": "Reduced Calorie",
                "maturity": "Growing",
                "tpvRank": 167,
                "lens": "Benefits",
                "volume": 16920,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 33, negative: 4"
            },
            {
                "name": "Lose Weight",
                "maturity": "Mature",
                "tpvRank": 264,
                "lens": "Benefits",
                "volume": 72361,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 20, negative: 14"
            },
            {
                "name": "High Fat",
                "maturity": "Growing",
                "tpvRank": 54,
                "lens": "Themes",
                "volume": 12348,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 17, negative: 6"
            },
            {
                "name": "Low Calorie",
                "maturity": "Growing",
                "tpvRank": 206,
                "lens": "Themes",
                "volume": 63653,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 34, negative: 2"
            },
            {
                "name": "Fat-Free",
                "maturity": "Growing",
                "tpvRank": 152,
                "lens": "Themes",
                "volume": 18838,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 2"
            },
            {
                "name": "Promotes Weight Loss",
                "maturity": "Mature",
                "tpvRank": 205,
                "lens": "Benefits",
                "volume": 8196,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 24, negative: 14"
            },
            {
                "name": "Higher Calorie",
                "maturity": "Growing",
                "tpvRank": 190,
                "lens": "Benefits",
                "volume": 17585,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 18, negative: 5"
            },
            {
                "name": "High Calorie",
                "maturity": "Growing",
                "tpvRank": 71,
                "lens": "Themes",
                "volume": 13092,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 23, negative: 4"
            },
            {
                "name": "Semaglutides",
                "maturity": "Growing",
                "tpvRank": 14,
                "lens": "Themes",
                "volume": 11643,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 12, negative: 9"
            },
            {
                "name": "Burns Fat",
                "maturity": "Growing",
                "tpvRank": 253,
                "lens": "Benefits",
                "volume": 12606,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 4"
            },
            {
                "name": "Healthy Diet",
                "maturity": "Mature",
                "tpvRank": 201,
                "lens": "Benefits",
                "volume": 10337,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 56, negative: 3"
            },
            {
                "name": "Weight Watchers Diet",
                "maturity": "Mature",
                "tpvRank": 148,
                "lens": "Themes",
                "volume": 13803,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 1"
            },
            {
                "name": "Calorie Counting",
                "maturity": "Growing",
                "tpvRank": 110,
                "lens": "Themes",
                "volume": 13013,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 14, negative: 4"
            },
            {
                "name": "Reduced Fat",
                "maturity": "Declining",
                "tpvRank": 210,
                "lens": "Benefits",
                "volume": 5786,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 35, negative: 1"
            },
            {
                "name": "Mediterranean Diet",
                "maturity": "Growing",
                "tpvRank": 5,
                "lens": "Themes",
                "volume": 7397,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 25, negative: 1"
            }
        ]
    },
    {
        "name": "Vegan Options",
        "performanceInfo": {
            "volume": 6314,
            "shareOfVoice": 0,
            "pastGrowthPercent": 12.697481,
            "pastGrowth": 5.5133224,
            "forecast": "Stable",
            "forecastGrowthPercent": 0.78523064,
            "forecastGrowthRank": 29,
            "pastGrowthRank": 12,
            "sentiment": {
                "positive": 55,
                "negative": 1
            }
        },
        "associations": [
            {
                "name": "Indulgent",
                "maturity": "Growing",
                "tpvRank": 197,
                "lens": "Benefits",
                "volume": 21550,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 70, negative: 1"
            },
            {
                "name": "Recommended Dietary Allowance (RDA)",
                "maturity": "Growing",
                "tpvRank": 111,
                "lens": "Benefits",
                "volume": 2099,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 20, negative: 4"
            },
            {
                "name": "Nut-Free",
                "maturity": "Growing",
                "tpvRank": 9,
                "lens": "Themes",
                "volume": 14946,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 65, negative: 1"
            },
            {
                "name": "Effective",
                "maturity": "Mature",
                "tpvRank": 263,
                "lens": "Benefits",
                "volume": 111799,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 33, negative: 3"
            },
            {
                "name": "Nutritious",
                "maturity": "Mature",
                "tpvRank": 281,
                "lens": "Benefits",
                "volume": 104405,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 60, negative: 3"
            },
            {
                "name": "Grain-Free",
                "maturity": "Mature",
                "tpvRank": 31,
                "lens": "Themes",
                "volume": 17017,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 62, negative: 1"
            },
            {
                "name": "Warms Me Up",
                "maturity": "Declining",
                "tpvRank": 268,
                "lens": "Benefits",
                "volume": 22491,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 43, negative: 2"
            },
            {
                "name": "Reduced Calorie",
                "maturity": "Growing",
                "tpvRank": 167,
                "lens": "Benefits",
                "volume": 16920,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 33, negative: 4"
            },
            {
                "name": "Whole Grain",
                "maturity": "Growing",
                "tpvRank": 259,
                "lens": "Ingredients",
                "volume": 44087,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 24, negative: 2"
            },
            {
                "name": "Child-Friendly",
                "maturity": "Mature",
                "tpvRank": 275,
                "lens": "Benefits",
                "volume": 73250,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 52, negative: 1"
            },
            {
                "name": "Pre-Packaged",
                "maturity": "Growing",
                "tpvRank": 228,
                "lens": "Benefits",
                "volume": 19491,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 19, negative: 5"
            },
            {
                "name": "Multigrain",
                "maturity": "Mature",
                "tpvRank": 134,
                "lens": "Themes",
                "volume": 13316,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 39, negative: 1"
            },
            {
                "name": "Lowers Cholesterol",
                "maturity": "Growing",
                "tpvRank": 117,
                "lens": "Benefits",
                "volume": 2827,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 44, negative: 4"
            },
            {
                "name": "Comforts",
                "maturity": "Growing",
                "tpvRank": 258,
                "lens": "Benefits",
                "volume": 186935,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 70, negative: 1"
            },
            {
                "name": "Vegan Protein",
                "maturity": "Growing",
                "tpvRank": 89,
                "lens": "Themes",
                "volume": 3819,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 37, negative: 2"
            },
            {
                "name": "Iron-Rich",
                "maturity": "Growing",
                "tpvRank": 104,
                "lens": "Themes",
                "volume": 1964,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 45, negative: 2"
            },
            {
                "name": "Tangy",
                "maturity": "Growing",
                "tpvRank": 283,
                "lens": "Themes",
                "volume": 122472,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 52, negative: 1"
            },
            {
                "name": "Natural",
                "maturity": "Mature",
                "tpvRank": 288,
                "lens": "Benefits",
                "volume": 204507,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 29, negative: 3"
            },
            {
                "name": "Grass-Fed",
                "maturity": "Growing",
                "tpvRank": 157,
                "lens": "Themes",
                "volume": 25851,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 25, negative: 5"
            },
            {
                "name": "Unsweetened",
                "maturity": "Growing",
                "tpvRank": 199,
                "lens": "Themes",
                "volume": 33408,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 30, negative: 1"
            },
            {
                "name": "Simple Ingredients",
                "maturity": "Mature",
                "tpvRank": 173,
                "lens": "Benefits",
                "volume": 89862,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 74, negative: 0"
            },
            {
                "name": "Bioavailable",
                "maturity": "Growing",
                "tpvRank": 66,
                "lens": "Benefits",
                "volume": 1742,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 16, negative: 3"
            },
            {
                "name": "Fortified",
                "maturity": "Growing",
                "tpvRank": 28,
                "lens": "Themes",
                "volume": 9259,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 13, negative: 2"
            },
            {
                "name": "Healthy",
                "maturity": "Growing",
                "tpvRank": 231,
                "lens": "Benefits",
                "volume": 200206,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 61, negative: 2"
            },
            {
                "name": "Fermented",
                "maturity": "Growing",
                "tpvRank": 261,
                "lens": "Themes",
                "volume": 34234,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 20, negative: 3"
            },
            {
                "name": "Enjoyable Moment",
                "maturity": "Growing",
                "tpvRank": 254,
                "lens": "Benefits",
                "volume": 31397,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 74, negative: 2"
            },
            {
                "name": "Enhanced Flavour",
                "maturity": "Mature",
                "tpvRank": 184,
                "lens": "Benefits",
                "volume": 5381,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 68, negative: 3"
            },
            {
                "name": "Vitamin B9 (Folic Acid)",
                "maturity": "Growing",
                "tpvRank": 242,
                "lens": "Ingredients",
                "volume": 3224,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 23, negative: 2"
            },
            {
                "name": "Vitamin Fortified",
                "maturity": "Growing",
                "tpvRank": 9,
                "lens": "Benefits",
                "volume": 652,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 19, negative: 2"
            },
            {
                "name": "Affordable",
                "maturity": "Mature",
                "tpvRank": 262,
                "lens": "Benefits",
                "volume": 178816,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 37, negative: 3"
            },
            {
                "name": "Low Sugar",
                "maturity": "Growing",
                "tpvRank": 26,
                "lens": "Themes",
                "volume": 12972,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 37, negative: 3"
            },
            {
                "name": "Healthy Diet",
                "maturity": "Mature",
                "tpvRank": 201,
                "lens": "Benefits",
                "volume": 10337,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 56, negative: 3"
            },
            {
                "name": "Improves Flexibility",
                "maturity": "Dormant",
                "tpvRank": 265,
                "lens": "Benefits",
                "volume": 241,
                "forecastGrowth": "DECLINING",
                "sentiment": "Positive: 15, negative: 0"
            },
            {
                "name": "Sparks Interest",
                "maturity": "Mature",
                "tpvRank": 267,
                "lens": "Benefits",
                "volume": 156123,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 41, negative: 3"
            },
            {
                "name": "Weight Watchers Diet",
                "maturity": "Mature",
                "tpvRank": 148,
                "lens": "Themes",
                "volume": 13803,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 26, negative: 1"
            },
            {
                "name": "Plant Proteins",
                "maturity": "Growing",
                "tpvRank": 25,
                "lens": "Themes",
                "volume": 8599,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 37, negative: 1"
            },
            {
                "name": "Sensory Experience",
                "maturity": "Growing",
                "tpvRank": 229,
                "lens": "Benefits",
                "volume": 99786,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 65, negative: 5"
            },
            {
                "name": "Easy To Eat",
                "maturity": "Mature",
                "tpvRank": 182,
                "lens": "Benefits",
                "volume": 13640,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 60, negative: 1"
            },
            {
                "name": "New Flavour",
                "maturity": "Growing",
                "tpvRank": 175,
                "lens": "Benefits",
                "volume": 19022,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 49, negative: 2"
            },
            {
                "name": "Quick And Easy",
                "maturity": "Mature",
                "tpvRank": 270,
                "lens": "Benefits",
                "volume": 135344,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 68, negative: 0"
            },
            {
                "name": "Pairs Well With",
                "maturity": "Mature",
                "tpvRank": 251,
                "lens": "Benefits",
                "volume": 32579,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 64, negative: 1"
            },
            {
                "name": "Bite-Size",
                "maturity": "Mature",
                "tpvRank": 238,
                "lens": "Benefits",
                "volume": 41609,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 51, negative: 1"
            },
            {
                "name": "Street Food",
                "maturity": "Growing",
                "tpvRank": 93,
                "lens": "Themes",
                "volume": 48687,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 27, negative: 2"
            }
        ],
        "keyTrends": [
            {
                "name": "Egg-Free",
                "maturity": "Growing",
                "tpvRank": 8,
                "lens": "Themes",
                "volume": 7598,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 46, negative: 1"
            },
            {
                "name": "Simple Ingredients",
                "maturity": "Mature",
                "tpvRank": 173,
                "lens": "Benefits",
                "volume": 89862,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 74, negative: 0"
            },
            {
                "name": "Plant-Based Diet",
                "maturity": "Mature",
                "tpvRank": 102,
                "lens": "Themes",
                "volume": 5102,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 18, negative: 5"
            },
            {
                "name": "Energises",
                "maturity": "Mature",
                "tpvRank": 246,
                "lens": "Benefits",
                "volume": 19596,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 47, negative: 2"
            },
            {
                "name": "Nut-Free",
                "maturity": "Growing",
                "tpvRank": 9,
                "lens": "Themes",
                "volume": 14946,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 65, negative: 1"
            },
            {
                "name": "30 Minute Meals",
                "maturity": "Emerging",
                "tpvRank": 219,
                "lens": "Themes",
                "volume": 6035,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 58, negative: 0"
            },
            {
                "name": "Healthy",
                "maturity": "Growing",
                "tpvRank": 231,
                "lens": "Benefits",
                "volume": 200206,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 61, negative: 2"
            },
            {
                "name": "Bold Flavour",
                "maturity": "Growing",
                "tpvRank": 95,
                "lens": "Benefits",
                "volume": 12312,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 77, negative: 0"
            },
            {
                "name": "Natural",
                "maturity": "Mature",
                "tpvRank": 288,
                "lens": "Benefits",
                "volume": 204507,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 29, negative: 3"
            },
            {
                "name": "Plant Proteins",
                "maturity": "Growing",
                "tpvRank": 25,
                "lens": "Themes",
                "volume": 8599,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 37, negative: 1"
            },
            {
                "name": "Reduced Fat",
                "maturity": "Declining",
                "tpvRank": 210,
                "lens": "Benefits",
                "volume": 5786,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 35, negative: 1"
            },
            {
                "name": "Child-Friendly",
                "maturity": "Mature",
                "tpvRank": 275,
                "lens": "Benefits",
                "volume": 73250,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 52, negative: 1"
            },
            {
                "name": "High Nutritional Value",
                "maturity": "Growing",
                "tpvRank": 124,
                "lens": "Benefits",
                "volume": 10711,
                "forecastGrowth": "GROWING",
                "sentiment": "Positive: 55, negative: 2"
            },
            {
                "name": "Helps Maintain Hair Health",
                "maturity": "Mature",
                "tpvRank": 78,
                "lens": "Benefits",
                "volume": 1078,
                "forecastGrowth": "STABLE",
                "sentiment": "Positive: 58, negative: 2"
            }
        ]
    }
]