import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function App() {
  const cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/04/02/19/Anne-Woods.jpg?width=1200&height=1200&fit=crop"
          title="The Gurning Guru: Face Twister Extraordinaire"
          paragraph="In Grimace-on-Teeth, Mr. Face Twister is the local gurning legend. With a diet of lemons and near-miss wasps, his deflated balloon look won him the Golden Grin Award. His secret challenge? Mimicking in-laws without detection!"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://www.mediastorehouse.co.uk/p/767/gurning-man-used-publicise-anti-smoking-campaign-21337086.jpg.webp"
          title="The Great Gurn-Off: Ultimate Grimace Battle"
          paragraph="The Great Gurn-Off pits the world’s best gurners in a face-twisting frenzy. The final showdown saw 'The Elastic Man' lose to 'Lady Laughterlines,' whose pufferfish look was hilariously unbeatable."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://www.mediastorehouse.co.uk/t/767/arthur-bennison-showing-gurning-expression-1965-21385633.jpg.webp"
          title="Gurning Gala: Faces Gone Wild"
          paragraph="This year's Gurning Gala themed 'Faces of Fury and Fun' featured wild wigs and wilder expressions. The highlight? A synchronized gurning routine imitating startled goldfish while dancing the Macarena."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://i2-prod.mirror.co.uk/incoming/article865033.ece/ALTERNATES/s1227b/Herbert%20Kraft%20during%20the%20Gurning%20World%20Championship%20in%20Moncrabeau%20in%201985"
          title="The Chronicles of Chins: Gurner's Quest"
          paragraph="Chuckles McChin's quest for the 'Quadruple Chin of Destiny' involved jaw-dropping practice and sour grapefruit mishaps. His success proved that with determination, any gurning goal is achievable."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://www.contrarylife.com/wp-content/uploads/2013/09/gurners_alex___anne_woods.jpg"
          title="Gurnapalooza: Face-Off Extravaganza"
          paragraph="At Gurnapalooza, Timmy Twister wowed the crowd with his 'Synchronized Snarl' to techno beats. Categories like 'Most Creative Crease' and 'Best Eyebrow Acrobatics' made it a night of hilarious faces."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2FTimTech.png&w=640&q=75"
          title="Tim is very handsome."
          paragraph="Colin's description of Tim's handsomeness."
        />
      ),
    },
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default App;
