import Banner from "./components/Banner/Banner";
import BreakingNews from "./components/BreakingNews/BreakingNews";
import FeaturedBooks from "./components/FeatureBooks/FeatureBooks";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BreakingNews></BreakingNews>
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
}
