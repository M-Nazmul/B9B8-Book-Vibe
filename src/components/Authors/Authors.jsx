import { useEffect, useState } from "react";
import AuthorDetails from "../AuthorDetails/AuthorDetails";

const Authors = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        fetch('../../../public/books.json')
        .then(res => res.json())
        .then(data => setAuthors(data))
    },[])
    return (
        <div className="text-center">
            <h2 className="text-xl md:text-3xl font-bold my-6 bg-slate-100 p-3 rounded-md">Authors Details</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 my-12">
                {
                    authors.map((authorDet, idx) => <AuthorDetails key={idx} authorDet={authorDet}></AuthorDetails>)
                }
            </div>
        </div>
    );
};

export default Authors;