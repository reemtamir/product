const Header = () => {
  const day = new Date();
  let hours = Number(day.getHours());
  let html;
  let color;
  let image;

  if (hours >= 0 && hours < 7) {
    html = 'Good night';
    color = 'lightblue';
    image = 'https://i.scdn.co/image/ab67616d0000b273b8d0c7fe7082be8a563b2618';
  }
  if (hours >= 7 && hours < 12) {
    html = 'Good morning';
    color = 'orange';
    image =
      'https://img.freepik.com/free-vector/creative-good-morning-lettering-illustration_23-2148236489.jpg?w=2000';
  }
  if (hours >= 12 && hours < 16) {
    html = 'Good day';
    color = 'lightcoral';
    image = 'https://i.ytimg.com/vi/svWNlwoDEPg/maxresdefault.jpg';
  }
  if (hours >= 16 && hours < 20) {
    html = 'Good after noon';
    color = 'brown';
    image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJq2zsyDdGEGVRxV2qrmpVh0HuAj_lv-et7Q&usqp=CAU';
  }
  if (hours >= 20 && hours <= 24) {
    html = 'Good evening';
    color = 'lightblue';
    image =
      'https://goodmorningland.com/wp-content/uploads/2020/04/Best-Good-Evening-Pictures.jpg';
  }
  return (
    <>
      <div className="row  ">
        <img
          className="m-auto"
          style={{ width: 300, height: 150 }}
          src={image}
          alt={`${html}' image`}
        />
      </div>
      <h1 style={{ color: color }} className="text-center">
        {html}
      </h1>
    </>
  );
};

export default Header;
