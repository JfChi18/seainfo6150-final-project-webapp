import React from 'react';
import ArticleList from './ArticleList';

describe('ArticleList tests', () => {
	const articles = {
        "Jane Addams" :{
            "slug": "Jane Addams",
            "title" : "Jane Addams",
            "category" : "political",
            "description" : "An American settlement activist, reformer, social worker, sociologist, public administrator and author. She was an important leader in the history of social work and women's suffrage in the United States and advocated for world peace.",
            "Born":"September 6, 1860, Cedarville, IL",
            "Died":"May 21, 1935, Chicago, IL",
            "image": "https://en.wikipedia.org/wiki/Jane_Addams#/media/File:Jane_Addams_-_Bain_News_Service.jpg "
          },
          "Louisa May Alcott" :{
            "slug": "Louisa May Alcott",
            "title" : "Louisa May Alcott",
            "category" : "writer",
            "description" : "An American novelist, short story writer and poet best known as the author of the novel Little Women and its sequels Little Men and Jo's Boys.",
            "Born":"November 29, 1832, Germantown, Philadelphia, PA",
            "Died":"March 6, 1888, Boston, MA",
            "image": "https://en.wikipedia.org/wiki/Louisa_May_Alcott#/media/File:Louisa_May_Alcott,_c._1870_-_Warren's_Portraits,_Boston.jpg"
          }
	};
	it('renders correctly', () => {
		const { container } = render(<ArticleList articles={Object.values(articles)} />);
		expect(container).toMatchSnapshot();
	});
});