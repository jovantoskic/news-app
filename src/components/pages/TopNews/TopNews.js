import React, { useEffect } from 'react';
import axios from 'axios';

import Layout from '../../shared/Layout';
import './TopNews.scss';

function TopNews() {
  const API =
    'https://newsapi.org/v2/top-headlines?country=gb&apiKey=4fb663e3742946789f8ea32c55d8f54b';

  const fetchData = async () => {
    const response = await axios.get(API);
    console.log(response);
  };
  useEffect(() => {
    fetchData();
  });

  return <Layout>content</Layout>;
}

export default TopNews;
