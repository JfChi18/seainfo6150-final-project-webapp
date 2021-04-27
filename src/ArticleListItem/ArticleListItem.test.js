import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
    var article = {
        "Jane Addams" :{
            "slug": "Jane Addams",
            "title" : "Jane Addams",
            "category" : "political",
            "description" : "An American settlement activist, reformer, social worker, sociologist, public administrator and author. She was an important leader in the history of social work and women's suffrage in the United States and advocated for world peace.",
            "Born":"September 6, 1860, Cedarville, IL",
            "Died":"May 21, 1935, Chicago, IL",
            "image": "https://en.wikipedia.org/wiki/Jane_Addams#/media/File:Jane_Addams_-_Bain_News_Service.jpg "
        }
    };

    it("renders correctly", () => {  
        const { container } = render(<ArticleListItem article={article}/>);
        expect(container).toMatchSnapshot();
    });

});