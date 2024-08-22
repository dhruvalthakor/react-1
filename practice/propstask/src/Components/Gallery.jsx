import GetImageUrl from './GetImageUrl'; 

function Gallery(props) {
  return (
    <div>
      <section className="profile  p-3" style={{width:450,height:250}}>
        <h2 className="text-decoration-underline">-{props.name}</h2>
        <div className="d-flex mt-4">
        <img
          className="avatar"
          src={GetImageUrl(`${props.img}`)}
          alt={`${props.alt}`}
          width={90}
          height={90}
          style={{borderRadius:50}}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {props.Profession}
          </li>
          <li>
            <b>Awards: {props.num}</b> 
            {props.Awards}
          </li>
          <li>
            <b>Discovered: </b>
        {props.Discovered}
          </li>
        </ul>
        </div>
      </section>

    </div>
  );
}


export default Gallery;
