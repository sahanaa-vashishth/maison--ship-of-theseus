// Cultural journey data with InstantStreetView links
const journeys = {
    heritage: {
        title: "UNESCO Heritage Trail",
        description: "Explore Asia's most iconic UNESCO World Heritage Sites that showcase centuries of architectural brilliance and cultural significance.",
        locations: [
            { 
                name: "Great Wall of China", 
                coords: [40.4319, 116.5704],
                description: "The world's longest wall stretching over 13,000 miles, built over 2,000 years ago to protect Chinese empires.",
                streetView: "https://www.instantstreetview.com/@40.4319,116.5704,90.0z,0t,0p",
                country: "china",
                emoji: "🇨🇳"
            },
            { 
                name: "Taj Mahal, India", 
                coords: [27.1751, 78.0421],
                description: "A stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife.",
                streetView: "https://www.instantstreetview.com/@27.1751,78.0421,90.0z,0t,0p",
                country: "india",
                emoji: "🇮🇳"
            },
            { 
                name: "Angkor Wat, Cambodia", 
                coords: [13.4125, 103.8660],
                description: "The world's largest religious monument, originally built as a Hindu temple in the 12th century.",
                streetView: "https://www.instantstreetview.com/@13.4125,103.8660,90.0z,0t,0p",
                country: "cambodia",
                emoji: "🇰🇭"
            },
            { 
                name: "Borobudur, Indonesia", 
                coords: [-7.6079, 110.2038],
                description: "The largest Buddhist temple in the world, featuring over 500 Buddha statues.",
                streetView: "https://www.instantstreetview.com/@-7.6079,110.2038,90.0z,0t,0p",
                country: "indonesia",
                emoji: "🇮🇩"
            },
            { 
                name: "Kyoto Temples, Japan", 
                coords: [35.0116, 135.7681],
                description: "Home to 17 UNESCO sites, including Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine.",
                streetView: "https://www.instantstreetview.com/@35.0116,135.7681,90.0z,0t,0p",
                country: "japan",
                emoji: "🇯🇵"
            }
        ],
        color: "e84393",
        completionStamp: {
            emoji: "🏛️",
            name: "UNESCO Trail Completed",
            description: "You've explored all UNESCO Heritage Trail locations!"
        }
    },
    temple: {
        title: "Sacred Temples & Shrines",
        description: "Explore Asia's most revered spiritual sites, from ancient Buddhist temples to majestic Hindu shrines.",
        locations: [
            { 
                name: "Potala Palace, Tibet", 
                coords: [29.6578, 91.1169],
                description: "The former winter palace of the Dalai Lama, a masterpiece of Tibetan architecture.",
                streetView: "https://www.instantstreetview.com/@29.6578,91.1169,90.0z,0t,0p",
                country: "tibet",
                emoji: "🏔️"
            },
            { 
                name: "Meenakshi Temple, India", 
                coords: [9.9196, 78.1193],
                description: "A historic Hindu temple with towering gopurams (gateways) covered in colorful sculptures.",
                streetView: "https://www.instantstreetview.com/@9.9196,78.1193,90.0z,0t,0p",
                country: "india",
                emoji: "🇮🇳"
            },
            { 
                name: "Shwedagon Pagoda, Myanmar", 
                coords: [16.7983, 96.1496],
                description: "A 2,600-year-old golden stupa, the most sacred Buddhist site in Myanmar.",
                streetView: "https://www.instantstreetview.com/@16.7983,96.1496,90.0z,0t,0p",
                country: "myanmar",
                emoji: "🇲🇲"
            },
            { 
                name: "Kiyomizu-dera, Japan", 
                coords: [34.9949, 135.7850],
                description: "A wooden temple in Kyoto, famous for its veranda overlooking cherry blossoms.",
                streetView: "https://www.instantstreetview.com/@34.9949,135.7850,90.0z,0t,0p",
                country: "japan",
                emoji: "🇯🇵"
            },
            { 
                name: "Wat Pho, Thailand", 
                coords: [13.7465, 100.4930],
                description: "Home to the giant reclining Buddha and the birthplace of Thai massage.",
                streetView: "https://www.instantstreetview.com/@13.7465,100.4930,90.0z,0t,0p",
                country: "thailand",
                emoji: "🇹🇭"
            }
        ],
        color: "27ae60",
        completionStamp: {
            emoji: "🛕",
            name: "Sacred Temples Journey",
            description: "You've explored all Sacred Temples & Shrines locations!"
        }
    },
    festival: {
        title: "Cultural Festivals of Asia",
        description: "Immerse yourself in Asia's most vibrant festivals, where tradition comes alive through dance, music, and celebration.",
        locations: [
            { 
                name: "Diwali, India", 
                coords: [28.6139, 77.2090],
                description: "The Festival of Lights, celebrated with lamps, fireworks, and sweets across India.",
                streetView: "https://www.instantstreetview.com/@28.6139,77.2090,90.0z,0t,0p",
                country: "india",
                emoji: "🇮🇳"
            },
            { 
                name: "Songkran, Thailand", 
                coords: [13.7563, 100.5018],
                description: "Thai New Year's water festival, where streets turn into massive water fights.",
                streetView: "https://www.instantstreetview.com/@13.7563,100.5018,90.0z,0t,0p",
                country: "thailand",
                emoji: "🇹🇭"
            },
            { 
                name: "Hanami, Japan", 
                coords: [35.6762, 139.6503],
                description: "Cherry blossom viewing parties under blooming sakura trees in spring.",
                streetView: "https://www.instantstreetview.com/@35.6762,139.6503,90.0z,0t,0p",
                country: "japan",
                emoji: "🇯🇵"
            },
            { 
                name: "Baliem Valley Festival, Indonesia", 
                coords: [-3.8480, 138.9480],
                description: "A tribal festival in Papua featuring traditional warfare simulations and dances.",
                streetView: "https://www.instantstreetview.com/@-3.8480,138.9480,90.0z,0t,0p",
                country: "indonesia",
                emoji: "🇮🇩"
            },
            { 
                name: "Loy Krathong, Thailand", 
                coords: [18.7061, 98.9817],
                description: "The lantern festival where people float krathongs (decorated baskets) on rivers.",
                streetView: "https://www.instantstreetview.com/@18.7061,98.9817,90.0z,0t,0p",
                country: "thailand",
                emoji: "🇹🇭"
            }
        ],
        color: "e67e22",
        completionStamp: {
            emoji: "🎉",
            name: "Festival Explorer",
            description: "You've explored all Cultural Festivals locations!"
        }
    }
};