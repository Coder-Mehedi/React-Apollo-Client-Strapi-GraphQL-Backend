import React from "react";
import Categories from "../components/category/Categories";
import AddCategory from "../components/category/AddCategory";

const Home = () => {
	return (
		<div className="row">
			<AddCategory />
			<Categories />
		</div>
	);
};

export default Home;
