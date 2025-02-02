const Filter = ({ searchTerm, handleSearchChange }) => {
	return (
		<div>
			Filter search field:{" "}
			<input
				value={searchTerm}
				onChange={handleSearchChange}
			/>
		</div>
	);
};

export default Filter;
