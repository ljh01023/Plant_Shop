export default function ProductCard({ cardList, i }) {
  return (
    <div className='card'>
      <div className='imgCon'>
        <img
          src={`${process.env.PUBLIC_URL}/img/${cardList.pImg}`}
          alt={cardList.pName}
        />
      </div>
      <div className='desc'>
        <p className='pName'>{cardList.pName}</p>
        <p className='pPrice'>{cardList.pPrice}</p>
      </div>
    </div>
  );
}
