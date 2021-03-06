import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { GET_CATEGORIES } from "../../graphql";
import CategoryList from "./CategoryList";

const Categories = () => {
	const { loading, data } = useQuery(GET_CATEGORIES);

	return (
		<div className="col m7 categories_section">
			<h3>Category List</h3>
			<ul className="">
				{data ? (
					data.categories.map((category) => (
						<CategoryList key={category.id} category={category} />
					))
				) : (
					<h5>Loading Categories...</h5>
				)}
			</ul>
		</div>
	);
};

export default Categories;
