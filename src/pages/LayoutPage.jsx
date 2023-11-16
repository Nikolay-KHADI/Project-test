import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { TransitionsModal } from '../components/TransitionsModal';
import { getParkingsThunk } from '../components/getParkingsThunk';
import Link from '@mui/material/Link';




export function LayoutPage() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpen = useSelector(state => state.modal.isModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParkingsThunk())
  }, [dispatch])

  const closeModal = () => {
    dispatch({ type: 'PASS_FALSE_TO_IS_MODAL_OPEN' })
  }

  console.log("Render LayoutPage");

  return (
    <div>
      <div>

        <div className='navbar'>
          <Link href="/">Головна сторінка</Link>
          <Link href="list">Адреси парковок</Link>
          <Link href="map">Парковки на карті</Link>
          <Link href="fav">Обрані парковки</Link>
        </div>

        <Outlet />

      </div>


      <TransitionsModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      ></TransitionsModal>

    </div>
  )
}
