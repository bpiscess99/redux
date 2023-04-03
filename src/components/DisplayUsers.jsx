import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {MdDeleteForever} from 'react-icons/all.js';
import { removeUser } from '../store/slices/UserSlice';


const DisplayUsers = () => {

const dispatch = useDispatch();  

const data = useSelector((state) => {
    return state.users;
});
// console.log(data);

const deleteUser = (id) => {
    dispatch(removeUser(id))
}

  return (
    <Wrapper>
      {
        data.map((user, id) => {
            return <li key={id}>
                {user}
                <button className='btn-delete' onClick={() => deleteUser(id)}>
                  <MdDeleteForever className='delete-icon'/>
                </button>
            </li>
        })
      }
    </Wrapper>
  )
}

const Wrapper= styled.section`

`;

export default DisplayUsers;
