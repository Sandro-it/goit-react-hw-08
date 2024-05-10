import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleChangeInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBoxContainer}>
      <p className={css.searchBoxLabel}>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        placeholder="Find by name"
        value={filterValue}
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default SearchBox;
