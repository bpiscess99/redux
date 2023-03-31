import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearAllUsers } from '../store/slices/UserSlice';



const DeleteAllUser = () => {

const dispatch = useDispatch();  

const deleteUsers = () => {
   dispatch(clearAllUsers())
};
  return (
    <Wrapper>
  <button className='btn clear-btn' onClick={() => deleteUsers()}>clear user</button>
    </Wrapper>
  )
}


const Wrapper = styled.section`
 .clear-btn{
     text-transform: Capitalize;
     background-color: #db338a;
     margin-top: 2rem;
 }
 `
;


export default DeleteAllUser;

