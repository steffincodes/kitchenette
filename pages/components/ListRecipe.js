import getIconImage from "./Utilities";
export default function ListRecipe() {
  const recipeList = [];
  for (let recipe of listOfRecipes) {
    recipeList.push(
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto">
        <div className="bg-white  shadow-lg rounded-lg overflow-hidden m-3 p-10">
          {getCategoryBadge(recipe.category)}
          <div className="text-2xl font-bold py-2">{recipe.name}</div>
          <ol className="list-decimal pb-0 m-4">
            {getOverviewList(recipe.overview)}
          </ol>
          <div className="text-justify">{getListOfIconHtml(recipe.icon)}</div>
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
            Just a bunch of filler recipies to get the layout and meta for DB proper. Please do
            not follow these recipies untill further notice. Be warned! Thanks.
          </p>
        </div>
        <div className="flex flex-wrap m-3">{recipeList}</div>
      </div>
    </section>
  );
}
function getOverviewList(listOfOverview) {
  const overviewList = [];
  for (let overview of listOfOverview) {
    overviewList.push(<li>{overview}</li>);
  }
  return overviewList;
}
function getCategoryBadge(listOfCategory) {
  const categoryList = [];
  for (let category of listOfCategory) {
    switch (category) {
      case "veg":
        categoryList.push(
          <div className="header-content inline-flex ">
            <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
              <div className="h-2 w-2 rounded-full m-1 bg-green-500 "></div>
            </div>
            <div className="category-title flex-1 text-sm"> {category}</div>
          </div>
        );
        break;
      case "non-veg":
        categoryList.push(
          <div className="header-content inline-flex ">
            <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-red-100">
              <div className="h-2 w-2 rounded-full m-1 bg-red-500 "></div>
            </div>
            <div className="category-title flex-1 text-sm"> meat</div>
          </div>
        );
        break;
      default:
        categoryList.push(
          <div className="header-content inline-flex ">
            <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
              <div className="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
            </div>
            <div className="category-title flex-1 text-sm"> {category}</div>
          </div>
        );
    }
  }
  return categoryList;
}
function getListOfIconHtml(listOfIcons) {
  const iconList = [];
  for (let icon of listOfIcons) {
    iconList.push(
      <button className="p-1 pb-2 text-sm cursor-not-allowed">
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

const listOfRecipes = [
  {
    name: "Garlic Chutney",
    time: "30m",
    category: ["veg"],
    icon: ["garlic", "onion", "chili"],
    overview: [
      "Soak tamarind and extract water",
      "Sautee Mustard seeds, Curry Leaves, Garlic, Onion and Chili in Oil",
      "Cool and grind with coconut",
    ],
  },
  {
    name: "Tomato Chutney",
    time: "30m",
    category: ["veg"],
    icon: ["tomato", "onion", "chili"],
    overview: [
      "Sautee Mustard seeds, Curry Leaves, Tomato, Onion and Chili in Oil",
      "Cool and grind with coconut",
    ],
  },
  {
    name: "Fried Rice",
    time: "30m",
    category: ["veg"],
    icon: ["rice", "vegetables"],
    overview: [
      "Soak rice and drain",
      "Boil rice with salt and oil and drain",
      "Chop available vegetables and saute in oil and ginger",
      "Add Sauce, pepper and rice and stir",
    ],
  },
  {
    name: "Schezwan Fried Rice",
    time: "30m",
    category: ["veg"],
    icon: ["rice", "sauce", "vegetables"],
    overview: [
      "Soak rice and drain",
      "Boil rice with salt and oil and drain",
      "Chop available vegetables and saute in oil and ginger",
      "Add Sauce, pepper and rice and stir",
    ],
  },
  {
    name: "Fried Noodles",
    time: "30m",
    category: ["veg"],
    icon: ["noodles", "vegetables"],
    overview: [
      "Boil water with salt and oil",
      "Add noodles into hot water",
      "Strain and rince in cold water",
      "Add oil and toss in fried vegetables",
    ],
  },
  {
    name: "Schezwan Fried Noodles",
    time: "30m",
    category: ["veg"],
    icon: ["noodles", "sauce", "vegetables"],
    overview: [
      "Boil water with salt and oil",
      "Add noodles into hot water",
      "Strain and rince in cold water",
      "Add oil, sauce, vinegar and toss in fried vegetables",
    ],
  },
  {
    name: "Mutton Biriyani",
    time: "60m",
    category: ["non-veg"],
    icon: ["rice", "meat"],
    overview: [
      "Marinate meat",
      "Sautee biriyani masala and onion and add meat",
      "Roast rice in ghee, cook and drain",
      "Add Rice to masala and low heat",
    ],
  },
  {
    name: "Chicken Biriyani",
    time: "50m",
    category: ["non-veg"],
    icon: ["rice", "chicken"],
    overview: [
      "Marinate meat",
      "Sautee biriyani masala and onion and add meat",
      "Roast rice in ghee, cook and drain",
      "Add Rice to masala and low heat",
    ],
  },
  {
    name: "Prawn Biriyani",
    time: "50m",
    category: ["non-veg"],
    icon: ["rice", "prawn"],
    overview: [
      "Marinate meat",
      "Sautee biriyani masala and onion and add meat",
      "Roast rice in ghee, cook and drain",
      "Add Rice to masala and low heat",
    ],
  },
];
