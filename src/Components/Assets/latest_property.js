import './all_agents';

import floor_plan from '../Assets/floor_plan.png';

import offert1_1 from '../Assets/offerts/offert1/offert1.1.png';
import offert1_2 from '../Assets/offerts/offert1/offert1.2.jpg';
import offert1_3 from '../Assets/offerts/offert1/offert1.3.jpg';
import offert1_4 from '../Assets/offerts/offert1/offert1.4.jpg';
import offert1_5 from '../Assets/offerts/offert1/offert1.5.jpg';

import offert2_1 from '../Assets/offerts/offert2/offert2.1.png';
import offert2_2 from '../Assets/offerts/offert2/offert2.2.jpg';
import offert2_3 from '../Assets/offerts/offert2/offert2.3.jpg';
import offert2_4 from '../Assets/offerts/offert2/offert2.4.jpg';
import offert2_5 from '../Assets/offerts/offert2/offert2.5.jpg';

import offert3_1 from '../Assets/offerts/offert3/offert3.1.png';
import offert3_2 from '../Assets/offerts/offert3/offert3.2.jpg';
import offert3_3 from '../Assets/offerts/offert3/offert3.3.jpg';
import offert3_4 from '../Assets/offerts/offert3/offert3.4.jpg';
import offert3_5 from '../Assets/offerts/offert3/offert3.5.jpg';

import offert4_1 from '../Assets/offerts/offert4/offert4.1.png';
import offert4_2 from '../Assets/offerts/offert4/offert4.2.jpg';
import offert4_3 from '../Assets/offerts/offert4/offert4.3.jpg';
import offert4_4 from '../Assets/offerts/offert4/offert4.4.jpg';
import offert4_5 from '../Assets/offerts/offert4/offert4.5.jpg';

import offert5_1 from '../Assets/offerts/offert5/offert5.1.png';
import offert5_2 from '../Assets/offerts/offert5/offert5.2.jpg';
import offert5_3 from '../Assets/offerts/offert5/offert5.3.jpg';
import offert5_4 from '../Assets/offerts/offert5/offert5.4.jpg';
import offert5_5 from '../Assets/offerts/offert5/offert5.5.jpg';

import offert6_1 from '../Assets/offerts/offert6/offert6.1.png';
import offert6_2 from '../Assets/offerts/offert6/offert6.2.jpg';
import offert6_3 from '../Assets/offerts/offert6/offert6.3.jpg';
import offert6_4 from '../Assets/offerts/offert6/offert6.4.jpg';
import offert6_5 from '../Assets/offerts/offert6/offert6.5.jpg';

import offert7_1 from '../Assets/offerts/offert7/offert7.1.png';
import offert7_2 from '../Assets/offerts/offert7/offert7.2.jpg';
import offert7_3 from '../Assets/offerts/offert7/offert7.3.jpg';
import offert7_4 from '../Assets/offerts/offert7/offert7.4.jpg';
import offert7_5 from '../Assets/offerts/offert7/offert7.5.jpg';

import offert8_1 from '../Assets/offerts/offert8/offert8.1.png';
import offert8_2 from '../Assets/offerts/offert8/offert8.2.jpg';
import offert8_3 from '../Assets/offerts/offert8/offert8.3.jpg';
import offert8_4 from '../Assets/offerts/offert8/offert8.4.jpg';
import offert8_5 from '../Assets/offerts/offert8/offert8.5.jpg';

import offert9_1 from '../Assets/offerts/offert9/offert9.1.png';
import offert9_2 from '../Assets/offerts/offert9/offert9.2.jpg';
import offert9_3 from '../Assets/offerts/offert9/offert9.3.jpg';
import offert9_4 from '../Assets/offerts/offert9/offert9.4.jpg';
import offert9_5 from '../Assets/offerts/offert9/offert9.5.jpg';

import offert10_1 from '../Assets/offerts/offert10/offert10.1.png';
import offert10_2 from '../Assets/offerts/offert10/offert10.2.jpg';
import offert10_3 from '../Assets/offerts/offert10/offert10.3.jpg';
import offert10_4 from '../Assets/offerts/offert10/offert10.4.jpg';
import offert10_5 from '../Assets/offerts/offert10/offert10.5.jpg';

import offert11_1 from '../Assets/offerts/offert11/offert11.1.png';
import offert11_2 from '../Assets/offerts/offert11/offert11.2.jpg';
import offert11_3 from '../Assets/offerts/offert11/offert11.3.jpg';
import offert11_4 from '../Assets/offerts/offert11/offert11.4.jpg';
import offert11_5 from '../Assets/offerts/offert11/offert11.5.jpg';

import offert12_1 from '../Assets/offerts/offert12/offert12.1.png';
import offert12_2 from '../Assets/offerts/offert12/offert12.2.jpg';
import offert12_3 from '../Assets/offerts/offert12/offert12.3.jpg';
import offert12_4 from '../Assets/offerts/offert12/offert12.4.jpg';
import offert12_5 from '../Assets/offerts/offert12/offert12.5.jpg';



let latest_property = [
  {
    id: 1,
    offer: "rent",
    price: 5000,
    location: "Warsaw, Centrum",
    surface: 88,
    bedrooms: 4,
    bathrooms: 1,
    parking: 2,
    main_image: offert1_1,
    additionalImages: [offert1_2, offert1_3, offert1_4, offert1_5],
    description: "The apartment consists of a spacious living room, a bright kitchen, four comfortable bedrooms, two bathrooms, and a functional hallway. Well-thought-out architectural solutions and modern finishes give this place a unique character.<br><br>The living room, along with the open kitchen, serves as the central area of the apartment, perfect for spending time with family and entertaining guests. Large windows allow plenty of light into the interior, adding a sense of brightness and freshness.<br><br>The four cozy bedrooms provide ideal spaces for relaxation after a busy day, ensuring privacy and comfort.",
    floorPlan: floor_plan,
    agentId: 1,
  },
  {
    id: 2,
    offer: "sell",
    price: 450000,
    location: "Warsaw, Centrum",
    surface: 54,
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    main_image: offert2_1,
    additionalImages: [offert2_2, offert2_3, offert2_4, offert2_5],
    description: "The apartment consists of a spacious living room, a bright kitchen, three comfortable bedrooms, a bathroom, and a functional hallway. Well-thought-out architectural solutions and modern finishes give this place a unique character.<br><br>The living room, along with the open kitchen, serves as the central area of the apartment, perfect for spending time with family and entertaining guests. Large windows allow plenty of light into the interior, adding a sense of brightness and freshness.<br><br>The three cozy bedrooms provide excellent spaces for relaxation after a busy day, maintaining privacy and comfort.",
    floorPlan: floor_plan,
    agentId: 2,
  },
  {
    id: 3,
    offer: "sell",
    price: 290000,
    location: "Warsaw, Targówek",
    surface: 26,
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    main_image: offert3_1,
    additionalImages: [offert3_2, offert3_3, offert3_4, offert3_5],
    description: "This functional apartment comprises a comfortable room, a kitchenette, and a bathroom. Despite its compact size, thoughtful architectural solutions allow for convenient and functional use of the space.<br><br>The room serves as the main center of the apartment, serving as both a bedroom and a living room. It is the perfect place to relax after a busy day.<br><br>The kitchenette is equipped with all the necessary appliances, encouraging the preparation of simple meals.",
    floorPlan: floor_plan,
    agentId: 3,
  },
  {
    id: 4,
    offer: "sell",
    price: 700000,
    location: "Warsaw, Bródno",
    surface: 70,
    bedrooms: 4,
    bathrooms: 2,
    parking: 3,
    main_image: offert4_1,
    additionalImages: [offert4_2, offert4_3, offert4_4, offert4_5],
    description: "The apartment features a spacious living room, a separate kitchen, four comfortable bedrooms, a bathroom, and a functional foyer. Well-thought-out architectural solutions and bright interiors give this place a unique character.<br><br>The living room, along with the open kitchen, serves as the central hub of the apartment, perfect for spending time with loved ones and entertaining guests. Large windows allow ample light into the interior, adding a sense of brightness and freshness.<br><br>The four cozy bedrooms provide excellent spaces for relaxation after a busy day, ensuring privacy and comfort.",
    floorPlan: floor_plan,
    agentId: 4,
  },
  {
    id: 5,
    offer: "rent",
    price: 3200,
    location: "Warsaw, Bródno",
    surface: 56,
    bedrooms: 2,
    bathrooms: 1,
    parking: 0,
    main_image: offert5_1,
    additionalImages: [offert5_2, offert5_3, offert5_4, offert5_5],
    description: "This modern apartment comprises a spacious living room, a bright kitchen, two comfortable bedrooms, a bathroom, and a functional hallway. Well-thought-out architectural solutions and contemporary finishes give this place a unique character.<br><br>The living room, along with the open kitchen, serves as the central zone of the apartment, perfect for spending time with family and friends. Large windows allow plenty of light into the interior, adding a sense of brightness and freshness.<br><br>The two cozy bedrooms provide ideal spaces for relaxation after a busy day, ensuring privacy and comfort.",
    floorPlan: floor_plan,
    agentId: 1,
  },
  {
    id: 6,
    offer: "rent",
    price: 3100,
    location: "Warsaw, Powiśle",
    surface: 65,
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    main_image: offert6_1,
    additionalImages: [offert6_2, offert6_3, offert6_4, offert6_5],
    description: "The apartment features a spacious living room, a bright kitchen, two comfortable bedrooms, a bathroom, and a functional hallway. The bright interiors with large windows allow plenty of natural light, creating a welcoming atmosphere.<br><br>The living room, along with the open kitchen, serves as the central point of the apartment, perfect for spending time with loved ones and entertaining guests. The large windows add charm and bring a lightness to the interiors.<br><br>The two cozy bedrooms are perfect retreats for relaxation after a busy day, ensuring privacy and comfort.",
    floorPlan: floor_plan,
    agentId: 2,
  },
  {
    id: 7,
    offer: "sell",
    price: 500000,
    location: "Warsaw, Praga Południe",
    surface: 66,
    bedrooms: 3,
    bathrooms: 1,
    parking: 1,
    main_image: offert7_1,
    additionalImages: [offert7_2, offert7_3, offert7_4, offert7_5],
    description: "The apartment comprises a spacious living room, a separate kitchen, three comfortable bedrooms, a bathroom, and a functional hallway. The bright interiors with large windows allow plenty of natural light, creating a friendly atmosphere.<br><br>The living room, along with the open kitchen, serves as the central point of the apartment, perfect for spending time with loved ones and entertaining guests. The large windows add charm and bring a sense of lightness to the interiors.<br><br>The three cozy bedrooms are perfect retreats for relaxation after a busy day, ensuring privacy and comfort.",
    floorPlan: floor_plan,
    agentId: 3,
  },
  {
    id: 8,
    offer: "sell",
    price: 400000,
    location: "Warsaw, Mokotów",
    surface: 46,
    bedrooms: 2,
    bathrooms: 1,
    parking: 2,
    main_image: offert8_1,
    additionalImages: [offert8_2, offert8_3, offert8_4, offert8_5],
    description: "The apartment features a spacious living room, a bedroom, a separate kitchen, a bathroom, and a functional hallway. The bright interiors with large windows allow abundant natural light, creating a pleasant atmosphere.<br><br>The living room, along with the separate kitchen, forms an open and spacious area, perfect for spending time with loved ones and entertaining guests. The large windows add charm and bring a sense of lightness to the interiors.<br><br>The bedroom is an ideal place for rest and relaxation, ensuring privacy.",
    floorPlan: floor_plan,
    agentId: 4,
  },
  {
    id: 9,
    offer: "rent",
    price: 2100,
    location: "Warsaw, Praga Południe",
    surface: 32,
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    main_image: offert9_1,
    additionalImages: [offert9_2, offert9_3, offert9_4, offert9_5],
    description: "This functional apartment consists of a comfortable room, a kitchenette, a bathroom, and a functional hallway. Thoughtful architectural solutions allow for convenient use of space, and the bright interiors add charm to the apartment.<br><br>The room serves as both a living room and a bedroom, creating a pleasant space for relaxation and work.<br><br>The kitchenette is equipped with all the necessary appliances, encouraging creative cooking.",
    floorPlan: floor_plan,
    agentId: 1,
  },
  {
    id: 10,
    offer: "sell",
    price: 320000,
    location: "Warsaw, Bemowo",
    surface: 26,
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    main_image: offert10_1,
    additionalImages: [offert10_2, offert10_3, offert10_4, offert10_5],
    description: "This cozy apartment consists of a compact room with a kitchenette and a functional bathroom. Despite its small size, thoughtful architectural solutions allow for comfortable and functional use of every square meter.<br><br>The room serves as the main center of the apartment, functioning as both a bedroom and a living room. It's a place for relaxation after a busy day and for unwinding.<br><br>The kitchenette is equipped with all the necessary appliances, encouraging the preparation of simple meals.",
    floorPlan: floor_plan,
    agentId: 2,
  },
  {
    id: 11,
    offer: "sell",
    price: 430000,
    location: "Warsaw, Ursynów",
    surface: 30,
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    main_image: offert11_1,
    additionalImages: [offert11_2, offert11_3, offert11_4, offert11_5],
    description: "This modern apartment comprises a comfortable room, an open kitchen, a bathroom, and a functional hallway. Thoughtful architectural solutions and bright interiors give this place a unique character.<br><br>The room serves as the main center of the apartment, functioning as both a bedroom and a living room. It's an ideal place for relaxation and work.<br><br>The open kitchen encourages experimenting with cooking and is designed for functionality, making daily meal preparation easier.",
    floorPlan: floor_plan,
    agentId: 3,
  },
  {
    id: 12,
    offer: "sell",
    price: 9000000,
    location: "Warsaw, Mokotów",
    surface: 120,
    bedrooms: 4,
    bathrooms: 2,
    parking: 2,
    main_image: offert12_1,
    additionalImages: [offert12_2, offert12_3, offert12_4, offert12_5],
    description: "The apartment comprises a spacious living room, dining area, kitchen, four comfortable bedrooms, two elegant bathrooms, and a functional hallway. Bright interiors with large windows open up views of the surroundings and allow abundant natural light, creating a pleasant atmosphere.<br><br>The living room, together with the dining area, forms an open and spacious area, perfect for social gatherings and relaxation. Large windows add charm and bring a sense of lightness to the interiors.<br><br>The four comfortable bedrooms are excellent spaces for relaxation after a busy day, maintaining privacy and comfort.",
    floorPlan: floor_plan,
    agentId: 4,
  },
]

export default latest_property