const Details = () => {
  const detailsDummyData = [
    {
      title: "Enjoy on your TV.",
      description:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    },
    {
      title: "Enjoy on your TV.",
      description:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "52px",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h3 style={{ fontFamily: "sans-serif", fontSize: 36, fontWeight: 700 }}>
        More reasons to Buy Netflix
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "20px 0",
          width: "100%",
        }}
      >
        {detailsDummyData.map((data, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                gap: 40,
                alignItems: "center",
                justifyContent: "space-center",
                borderBottom: "1px solid white",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h3>{data.title}</h3>
                <h5>{data.description}</h5>
              </div>
              <div style={{ width: "100%" }}>
                <img
                  src={data.img}
                  alt="tv"
                  style={{ width: 400, height: 300 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Details;
