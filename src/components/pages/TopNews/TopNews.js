import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { API_NEWS_US } from '../../../constants/apiRoutes';
import Layout from '../../shared/Layout';
import NewsBox from '../../shared/NewsBox';
import Loading from '../../shared/Loading';

import './TopNews.scss';

function TopNews() {
  const [news, setNews] = useState();

  async function fetchNews() {
    const response = await axios.get(API_NEWS_US);
    const { articles } = response.data;

    setNews(articles);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return news ? (
    <Layout>
      {news.map(item => {
        const { title, description, urlToImage } = item;
        return (
          <NewsBox
            key={title}
            description={description}
            img={urlToImage}
            title={title}
          />
        );
      })}
    </Layout>
  ) : (
    <Loading />
  );
}

export default TopNews;
