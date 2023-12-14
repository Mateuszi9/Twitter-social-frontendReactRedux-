import { Avatar, Card, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import StoryCircle from './StoryCircle';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from '../Post/PostCard';
import CreatePostModel from '../CreatePost/CreatePostModel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostAction } from '../../Redux/Post/post.action';

const story = [11, 1, 1, 1];
const posts = [1,1,1,1,1];

const MiddlePart = () => {
  

  const dispatch = useDispatch();
  const {post} = useSelector(store=>store);

  const [openCreatePostModel, setOpenCreatePostModel] = useState();

  const handleCloseCreatePostModel=()=>setOpenCreatePostModel(false);


  const handleOpenCreatePostModel = () => {
    setOpenCreatePostModel(true);
    console.log('open post model...', openCreatePostModel);
  };


  useEffect(()=>
  {
    dispatch(getAllPostAction())
  },[])

  return (
    <div className="px-20">
      <section className="flex items-center p-5 rounded-b-md">
        <dic className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: '5rem', height: '5rem' }}
            // src='https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg'
          >
            <AddIcon sx={{ fontSize: '3rem' }} />
          </Avatar>
          <p>New</p>
        </dic>
        {story.map((item) => (
          <StoryCircle />
        ))}
      </section>

      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            onClick={handleOpenCreatePostModel}
            readOnly
            className="outline-none w-[90%]
            rounded-full px-5 bg-transparent border-[#b4054] border "
            type="text"
          />
        </div>
        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ImageIcon />
            </IconButton>

            <span>media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <VideocamIcon />
            </IconButton>

            <span>video</span>
          </div>
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ArticleIcon />
            </IconButton>

            <span>write articel</span>
          </div>
        </div>
      </Card>


      <div className='mt-5 space-y-5'>
           {post.posts.map((item)=>(<PostCard item={item} />)) }
      </div>


      <div>
        <CreatePostModel handleClose={handleCloseCreatePostModel} open={openCreatePostModel}/>
      </div>
    </div>
  );
};

export default MiddlePart;
