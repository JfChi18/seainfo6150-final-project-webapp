import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";
import Home from "./Home/Home.jsx";
import stories from "./stories/stories.jsx";
import storiesList from "./storiesList/storiesList.jsx";
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
      const response = await fetch("https://demo6984292.mockable.io/stories");
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
              path={`/id/:id`}
              render={({ match }) => {
                return fetchedData[match.params.id] ? <stories
                  stories={fetchedData[match.params.id]}
                /> : <Error/>
              }}
            />
            <Route path="/storiesList" exact><storiesList stories={Object.values(fetchedData)} /></Route>
            <Route component={Error} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
