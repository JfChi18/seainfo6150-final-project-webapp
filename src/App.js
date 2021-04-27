import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";
import Home from "./Home/Home.jsx";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import ArticleList from "./ArticleList/ArticleList.jsx";
import Form from "./Form/Form.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Error from "./Error/Error.jsx";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import style from "./App.module.css";

function App() {

  const [fetchedData, setFetchedData] = useState();


  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1023875.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? <div>Please wait.</div> : (
    <>
      <Header/>
      <div className={style.bodyContainer}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aboutus" exact render={() => <AboutUs/>}/>
            <Route path="/form" exact><Form stories={Object.values(fetchedData)} /></Route>
         

            <Route
          exact
          path={`/articlelist/:slug`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            return fetchedData ? <DynamicArticle
              article={fetchedData[match.params.slug]}
            /> : null
          }}
        />
            <Route exact path="/articlelist">
                <ArticleList articles={Object.values(fetchedData)} />
            </Route>


            <Route component={Error} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
