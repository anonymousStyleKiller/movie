import React from "react";


const Pagination = (props) => {
    const {page, updatePages, total_pages} = props;

    let thisPage;

    const prevClick = page => () => {
        if (page !== 1) {
            thisPage = --page;
            updatePages(thisPage);
        }
    };

    const nextClick = (page, total_pages) => () => {
        if(page<total_pages){
            thisPage = ++page;
            updatePages(thisPage);
        }
    };

    const totalClick = (total_pages) => () =>{
        thisPage = total_pages;
        updatePages(total_pages);
    };
    return (
        <nav aria-label="...">
            <ul className="pagination d-flex justify-content-center">
                <li className="page-item">
                    <button onClick={prevClick(page)} className="page-link">Previous</button>
                </li>
                <li className="page-item active" aria-current="page">
                  <span className="page-link">
                      {page}
                      <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item"><button onClick={totalClick(total_pages)} className="page-link">{total_pages}</button></li>
                <li className="page-item">
                    <button onClick={nextClick(page, total_pages)} className="page-link">Next</button>
                </li>
            </ul>
        </nav>
    )
};

export default Pagination;