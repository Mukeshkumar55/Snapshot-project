import React from "react";
class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  arrobj = [
    {
      picName:
        "https://thumbs.dreamstime.com/b/mountain-landscape-hiking-trail-view-beautiful-lakes-ponta-delgada-sao-miguel-island-azores-portugal-75384203.jpg",
      picName1:
        "https://thumbs.dreamstime.com/z/peru-mountain-sunrise-panorama-12905788.jpg",
      picName2: "https://thumbs.dreamstime.com/b/mountain-top-11232956.jpg",
      picName3:
        "https://thumbs.dreamstime.com/b/woman-mountain-top-26329008.jpg",
      title: "Mountain",
      title1: "mountain",
    },
    {
      picName:
        "https://thumbs.dreamstime.com/b/miami-beach-florida-usa-ocean-drive-74275357.jpg",
      picName1:
        "https://thumbs.dreamstime.com/z/hammock-beach-marimegmeg-view-bacuit-archipelago-islands-el-nido-philippines-43799440.jpg",
      picName2:
        "https://thumbs.dreamstime.com/b/happy-couple-love-beach-summer-vacations-joyful-asian-girl-piggybacking-young-caucasian-boyfriend-playing-having-fun-51387309.jpg",
      picName3:
        "https://thumbs.dreamstime.com/b/honeymoon-couple-romantic-love-beach-sunset-newlywed-happy-young-embracing-enjoying-ocean-travel-34259129.jpg",
      title: "Beach",
      title1: "beach",
    },
    {
      picName: "https://thumbs.dreamstime.com/b/bali-mynah-birds-19173506.jpg",
      picName1: "https://thumbs.dreamstime.com/b/birds-4788290.jpg",
      picName2:
        "https://thumbs.dreamstime.com/b/birds-animals-peacock-expanded-feathers-thailand-asia-closeup-portrait-bright-colorful-male-travel-to-tourism-65226953.jpg",
      picName3: "https://thumbs.dreamstime.com/b/two-motley-birds-20029835.jpg",
      title: "Birds",
      title1: "birds",
    },
    {
      picName:
        "https://thumbs.dreamstime.com/b/greek-salad-wood-bowl-fresh-ingredients-32867859.jpg",
      picName1:
        "https://thumbs.dreamstime.com/b/halloumi-orange-rocket-salad-grilled-pomegranate-36754985.jpg",
      picName2:
        "https://thumbs.dreamstime.com/b/penne-pasta-tomato-sauce-chicken-tomatoes-decorated-parsley-wooden-background-54383879.jpg",
      picName3:
        "https://thumbs.dreamstime.com/b/high-contrast-hero-shot-bruschetta-al-pesto-spinaci-pizza-minimal-white-background-degree-angle-zoomed-out-156861800.jpg",
      title: "Foods",
      title1: "food",
    },
  ];

  render() {
    let images = this.arrobj.map((val) => {
      if (val.title == this.props.display || val.title1 == this.props.display)
        return (
          <div className="image">
            <img src={val.picName}></img>;<img src={val.picName1}></img>;
            <img src={val.picName2}></img>;<img src={val.picName3}></img>;
          </div>
        );
    });
    return <div>{images}</div>;
  }
}
export default Display;
