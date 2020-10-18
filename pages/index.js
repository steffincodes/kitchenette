import ListRecipe from "./components/ListRecipe";
import Meta from "./components/Meta";
import FloatingButton from "./components/FloatingButton";
export default function Home(props) {
  return (
    <div>
      <Meta />
      <FloatingButton />
      <ListRecipe props={props.recipies} />
    </div>
  );
}

export async function getStaticProps(context) {
  let recipies = [];
  let res = '';
  res = await fetch(process.env.JSON_BLOB_URL+process.env.JSON_BLOB_ID);
  if (res){
    recipies = await res.json();
  }
  return { props: { recipies } };
}