import getIconImage from "./Utilities";
import { ERROR } from "../../lib/global";
export default function ListRecipe({ props }) {
  const listOfRecipes = props;
  const recipeList = [];
  if (listOfRecipes) {
    for (const [index, recipe] of listOfRecipes.entries()) {
      recipeList.push(
        <div
          className="flex flex-col justify-center items-center max-w-sm mx-auto"
          key={index}
        >
          <div
            className={`${
              recipe.meat ? "bg-red-100" : "bg-green-100"
            }  shadow-lg rounded-lg overflow-hidden m-3 p-10`}
          >
            <div className="text-2xl font-bold py-2">{recipe.name}</div>
            <ol className="list-decimal pb-0 m-4">
              {getOverviewList(recipe.overview)}
            </ol>
            <div className="text-justify">{getListOfIconHtml(recipe.icon)}</div>
          </div>
        </div>
      );
    }
  } else {
    recipeList.push(
      <div
        className="flex flex-col justify-center items-center max-w-sm mx-auto"
        key="0"
      >
        <div className={"bg-white shadow-lg rounded-lg m-3 p-10 text-center"}>
          <div className="text-2xl font-bold py-2">{ERROR.title}</div>
          {ERROR.text}
        </div>
      </div>
    );
  }
  return (
    <section className="text-gray-700 body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">
            Quick Recipe List
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base text-gray-500">
            Just a bunch of filler recipies to get the layout and meta for DB
            proper. Please do not follow these recipies untill further notice.
            Be warned! Thanks.
          </p>
        </div>
        <div className="flex flex-wrap m-3">{recipeList}</div>
      </div>
    </section>
  );
}
function getOverviewList(listOfOverview) {
  const overviewList = [];
  for (let [index, overview] of listOfOverview.entries()) {
    overviewList.push(<li key={index}>{overview}</li>);
  }
  return overviewList;
}
function getListOfIconHtml(listOfIcons) {
  const iconList = [];
  for (let [index, icon] of listOfIcons.entries()) {
    iconList.push(
      <button className="p-1 pb-2 text-sm cursor-not-allowed" key={index}>
        <img
          className="h-8 w-8 object-cover mx-1"
          src={getIconImage(icon)}
          // src="\icons\svg\garlic.svg"
        />
      </button>
    );
  }
  return iconList;
}
