import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meertup",
    image:
      "https://vtv1.mediacdn.vn/thumb_w/600/2018/4/14/58d919eaf2d0331b008b4bbd-750-562-15236798033729910265.jpg",
    address: "Some address 5, 1234 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meertup",
    image:
      "https://vtv1.mediacdn.vn/thumb_w/600/2018/4/14/58d919eaf2d0331b008b4bbd-750-562-15236798033729910265.jpg",
    address: "Some address 110, 1234 Some City",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A Third Meertup",
    image:
      "https://vtv1.mediacdn.vn/thumb_w/600/2018/4/14/58d919eaf2d0331b008b4bbd-750-562-15236798033729910265.jpg",
    address: "Some address 54, 1234 Some City",
    description: "This is a third meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps() {
  const req = content.req;
  const res = content.res;

  // fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1,
//   };
// }

export default HomePage;
