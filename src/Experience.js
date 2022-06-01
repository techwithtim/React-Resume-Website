import "./Experience.css";

const Experience = () => {
  const items = [
    {
      title: "CEO",
      company: "Tech With Tim Inc.",
      date: "2016 - Current",
      description: "Helping millions of programmers learn to code.",
      points: [
        "Over 700 videos",
        "Over 80M Views",
        "Nearly 1 Million Subscribers",
      ],
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQXx-JXf1NsSUtVHcYhx4B4MaIYE0m7I_H0GHmu-w=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Software Engineer",
      company: "Microsoft",
      date: "May 2020 - August 2020",
      description:
        "Built data science related features in the Python extension for VSCode.",
      points: [],
      image:
        "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80660_960_720.png",
    },
  ];

  return (
    <div className="experience">
      <h1 className="header">Work Experience</h1>
      <div className="work-items">
        {items.map((item) => (
          <div className="item" key={Math.random()}>
            <img src={item.image} alt="logo" className="logo" />
            <div className="item-content">
              <div className="item-header">
                <h2 className="no-margin">{item.title}</h2>
                <h4 className="no-margin">{item.company}</h4>
                <p className="no-margin text-muted">{item.date}</p>
              </div>
              <p className="no-margin">{item.description}</p>
              <ul className="points">
                {item.points.map((point) => (
                  <li key={Math.random()}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
