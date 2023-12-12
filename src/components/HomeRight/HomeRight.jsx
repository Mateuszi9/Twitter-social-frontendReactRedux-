import React from 'react';
import SearUser from '../SearUser/SearUser';
import PopularUserCard from './PopularUserCard';
import { Card } from '@mui/material';

const popularUser = [1, 1, 1, 1, 1];
const HomeRight = () => {
  return (
    <div className="p-5">
      <SearUser />

      <Card className="p-5">
        <div className="flex justify-between py-5 items-center">
          <p className="font-semibold opacity-70">Suggestions for</p>
          <p className="text-xs font-semibold placeholder-opacity-95">
            View All
          </p>
        </div>

        <div>
          <div className="">
            {popularUser.map((item)=><PopularUserCard/>)}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomeRight;
