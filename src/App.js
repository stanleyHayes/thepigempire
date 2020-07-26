import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import CareersPage from "./pages/careers/CareersPage";
import NewsPage from "./pages/news/NewsPage";
import CareerDetailPage from "./pages/careers/CareerDetailPage";
import NewsDetailPage from "./pages/news/NewsDetailPage";
import FeedMillPage from "./pages/feed/FeedMillPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>

          <Route path="/about" exact={true}>
            <AboutPage />
          </Route>

          <Route path="/contact" exact={true}>
            <ContactPage />
          </Route>

          <Route path="/careers" exact={true}>
            <CareersPage />
          </Route>

          <Route path="/news" exact={true}>
            <NewsPage />
          </Route>

          <Route path="/careers/:career" exact={true}>
            <CareerDetailPage />
          </Route>

          <Route path="/news/:slug" exact={true}>
            <NewsDetailPage />
          </Route>

          <Route path="/feed" exact={true}>
            <FeedMillPage />
          </Route>

        </Switch>
      </ScrollToTop>

    </BrowserRouter>
  );
}

export default App;
