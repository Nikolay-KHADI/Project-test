import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getParkingsThunk } from '../components/getParkingsThunk';
import { TransitionsModal } from '../components/TransitionsModal';



export function LayoutPage() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpen = useSelector(state => state.modal.isModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParkingsThunk())
  }, [dispatch])

  const closeModal = () => {
    dispatch({type: 'PASS_FALSE_TO_IS_MODAL_OPEN'})
  }

  console.log("Render LayoutPage");

  return (
    <div>
      <div className='navbar'>
        <NavLink to="/" >Головна сторінка </NavLink>
        <NavLink to="list">Адреса парковок </NavLink>
        <NavLink to="map">Парковки на карті </NavLink>
        <NavLink to="fav">Обрані парковки </NavLink>

      </div>

      <Outlet />

      <TransitionsModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      ></TransitionsModal>

    </div>
  )
}
