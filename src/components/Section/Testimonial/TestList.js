import React from 'react'
import classes from './TestList.module.css';
import IconStar from '../../../UI/StarIcon';
import photo from '../../../asset/photo1.jpeg'

const testList = () => {
  return (
    <li className={classes.testList}>
       <div className={classes['test-star']}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
         </div>
       <div className={classes.user}>
        <img className={classes['test-img']} src={photo} alt='userphoto' />
        <span>Yussif faisal</span>
       </div>
       <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, iste.</div>
    </li>
  )
}

export default testList