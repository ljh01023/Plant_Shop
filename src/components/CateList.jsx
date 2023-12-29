import { Link } from 'react-router-dom';

export default function CateList({ cateList }) {
  return (
    <div className='cate'>
      <div className='imgCon'>
        <img
          src={`${process.env.PUBLIC_URL}/img/${cateList.img}`}
          alt={cateList.name}
        />
      </div>
      <div className='desc'>
        <p className='cateName'>{cateList.name}</p>
        <p className='cateDesc'>{cateList.desc}</p>
        <Link to='/' className='more'>
          Explore
        </Link>
      </div>
    </div>
  );
}
