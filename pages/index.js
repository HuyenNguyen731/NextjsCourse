import MeetupItem from "../components/meetups/MeetupItem";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meertup",
    image:
      "https://yt3.ggpht.com/yti/APfAmoGRXr6Ob6y40L_BDc84imxW9H5l6zbbDxRFUa1c0w=s88-c-k-c0x00ffffff-no-rj-mo",
    address: "Some address 5, 1234 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meertup",
    image:
      "https://yt3.ggpht.com/yti/APfAmoGRXr6Ob6y40L_BDc84imxW9H5l6zbbDxRFUa1c0w=s88-c-k-c0x00ffffff-no-rj-mo",
    address: "Some address 110, 1234 Some City",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A Third Meertup",
    image:
      "https://yt3.ggpht.com/yti/APfAmoGRXr6Ob6y40L_BDc84imxW9H5l6zbbDxRFUa1c0w=s88-c-k-c0x00ffffff-no-rj-mo",
    address: "Some address 54, 1234 Some City",
    description: "This is a third meetup",
  },
];

function HomePage() {
  return <MeetupItem meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
