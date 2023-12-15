import { Avatar, Card, CardHeader } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../../Redux/Auth/auth.action';
import { createChat } from '../../Redux/Message/message.action';

const SearchUser = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  const handleSearchUser = (e) => {
    setUsername(e.target.value);
    console.log('search user....');
    dispatch(searchUser(username));
  };

  const handleClick = (id) => {
    dispatch(createChat({userId:id}))
  };

  return (
    <div>
      <div className="py-5 relative">
        <input
          className="bg-transparent border border-[#3b4054]
             outline-none w-full px-5 py-3 rounded-full"
          onChange={handleSearchUser}
          placeholder="Search user..."
          type="text"
        />
        {username &&
          auth.searchUser.map((item) => (
            <Card key={item.id} className="absolute w-full z-10 top-[4.5rem] cursor-pointer">
              <CardHeader
                onClick={() => {
                  handleClick(item.id);
                  setUsername('');
                }}
                avatar={
                  <Avatar src="https://cdn.pixabay.com/photo/2016/11/22/21/42/woman-1850703_1280.jpg" />
                }
                title={item.firstName+" "+item.lastName}
                subheader={item.firstName.toLowerCase()+"_"+item.lastName.toLowerCase()}
              />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default SearchUser;
