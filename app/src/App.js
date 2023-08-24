import React, { useEffect } from 'react';
import './App.css';
import { Offer } from './components/Offer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const [campaigns, setCampaigns] = React.useState([]);

  async function fetchData() {
    const response = await fetch('https://www.plugco.in/public/take_home_sample_feed');
    const data = await response.json();
    setCampaigns(data.campaigns);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className='offers'>
        {campaigns.map((campaign, index) => {
          const { campaign_name, campaign_icon_url, pay_per_install } = campaign;
          const medias = campaign.medias;
          return (
            <Offer
              key={index}
              campaign_name={campaign_name}
              campaign_icon_url={campaign_icon_url}
              pay_per_install={pay_per_install}
              medias={medias}
            />
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
