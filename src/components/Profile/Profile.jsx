import { Avatar, Box, Button, Card, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../Post/PostCard';
import UserReelCard from '../Reels/UserReelCard';
import { useSelector } from 'react-redux';
import ProfileModel from './ProfileModel';

const tabs = [
  { value: 'post', name: 'Post' },
  { value: 'reels', name: 'Reels' },
  { value: 'saved', name: 'Saved' },
  { value: 'repost', name: 'Repost' },
];
const posts = [1, 1, 1, 1, 1];
const reels = [1, 1, 1, 1, 1];
const savedPost = [1, 1, 1, 1, 1, 1];

const Profile = () => {
  const { id } = useParams();
  const { auth } = useSelector((store) => store);
  const [value, setValue] = React.useState('post');
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpenProfileModel = () => setOpen(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: '10rem', height: '10rem' }}
            src="data:image/jpeg;base64,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"
          />

          {true ? (
            <Button onClick={handleOpenProfileModel} sx={{ borderRadius: '20px' }} variant="outlined">
              Edit Profile
            </Button>
          ) : (
            <Button variant="outlined">Follow</Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">
              {auth.user?.firstName + ' ' + auth.user?.lastName}
            </h1>
            <p>
              @
              {auth.user?.firstName.toLowerCase() +
                '_' +
                auth.user?.lastName.toLowerCase()}
            </p>
          </div>

          <div className="flex gap-5 items-center py-3">
            <span>5 post</span>
            <span>25 followers</span>
            <span>52 followings</span>
          </div>

          <div>
            <p>bio text jan ł bo rodo</p>
          </div>
        </div>

        <section>
          <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => (
                <Tab value={item.value} label={item.name} wrapped />
              ))}
            </Tabs>
          </Box>

          <div className="flex justify-center">
            {value === 'post' ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((item) => (
                  <div className="border-slate-100 border rounded-md">
                    {/*<PostCard />{' '}*/}
                  </div>
                ))}
              </div>
            ) : value === 'reels' ? (
              <div className="flex justify-center my-10 flex-wrap gap-2">
                {reels.map((item) => (
                  <UserReelCard />
                ))}
              </div>
            ) : value === 'saved' ? (
              <div className="space-y-5 w-[70%] my-10">
                {savedPost.map((item) => (
                  <div className="border-slate-100 border rounded-md">
                   {/*<PostCard />{' '}*/}
                  </div>
                ))}
              </div>
            ) : (
              <div>RePost</div>
            )}
          </div>
        </section>
      </div>
      <section>
        <ProfileModel open={open} handleClose={handleClose} />
      </section>
    </Card>
  );
};

export default Profile;
