import {useDispatch, useSelector} from 'react-redux';
import { nextPage } from "../feature/display/displaySlice";

const InfoPage = () => {
  const {page1} = useSelector((store) => store.display);
  const dispatch = useDispatch();

  return (
    <div className={`page1 split ${page1}`}>
      <div className="padding-top infoPage-form">
        <h1>Personal info</h1>
        <p className="description">Please provide your name, email address, and phone number.</p>
        <form action="post">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="e.g. Stephen King" />
          </div>
          <div className="email">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" placeholder="e.g. stephenking@lorem.com"/>
          </div>
          <div className="number">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="e.g. +1 234 567 890"/>
          </div>
          <button 
          type="button" 
          onClick={() => dispatch(nextPage()) }>
            Next Step
          </button>
        </form>
      </div>
    </div>
  )
}

export default InfoPage;
