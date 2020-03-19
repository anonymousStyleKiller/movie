import React from "react";

const MovieTabs = (props) => {
    const {sortBy, updateSortBy} = props;

    const handleClick = value => () => {
        updateSortBy(value);
    };

    const getClassLink = value => {
        return `nav-link   ${sortBy === value ? "active" : ""}`;
    };

    return (
        <ul className="tabs nav nav-pills">
            <li className="nav-item">
                <button className={getClassLink("popularity.desc")}
                        onClick={handleClick("popularity.desc")}>
                    Popularity desc
                </button>
            </li>
            <li className="nav-item">
                <button className={
                    getClassLink("revenue.desc")}
                        onClick={handleClick("revenue.desc")}>
                    Revenue desc
                </button>
            </li>
            <li className="nav-item">
                <button className={getClassLink("vote_average.desc")}
                        onClick={handleClick("vote_average.desc")}>
                    Vote average desc
                </button>
            </li>
        </ul>
    )
};

export default MovieTabs;