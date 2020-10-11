import ListRecipe from "./components/ListRecipe";
import Meta from "./components/Meta";
import FloatingButton from "./components/FloatingButton";
export default function Home() {
  return (
    <div>
      <Meta />
      <FloatingButton />
      <ListRecipe />
    </div>
  );
}
