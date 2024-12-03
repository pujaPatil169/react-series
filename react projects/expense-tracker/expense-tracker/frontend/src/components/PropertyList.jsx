import ImgMediaCard from "./ImgMediaCard";
import "../styles/PropertyList.css"
export default function PropertyList({ properties, images }) {
  return (
    // <div className="PropertyList">---this was not working kyiki ye flexDirection property is div ke items par apply hoti hai matlab agar isme do div hai to vo dono align honge accordingly par hame to ul  ke items ko align karana hai isliye ye PropertyList class ham us par lagayenge 
        <div >
      <ul className="PropertyList">
        {properties.map((property, index) => {
          return (
            <ImgMediaCard
              key={property.id}
              data={property}
              image={images[index]}
            />
          );
        })}
      </ul>
    </div>
      // </div>-----ye div hamane propertyList class ke effects ko check karane ke liye liya tha 
  );
}

//----------wrong code(the mistake you made )-----------------
// export default function PropertyList({properties,images}){

//     return(
//         <ul>
//             {images.map(img=>(
//                 {properties.map(i=>(<ImgMediaCard key=
//                                 {i.id} image={img} data = {i}/>))}
//             ))}
//         </ul>
//     )
// }

//above one is wrong code it's explaination is below

// Nested Curly Braces in JSX:
// In JSX, curly braces {} are used to embed expressions. If you're already inside curly braces (for instance, in a map function), you don’t need another pair of curly braces inside that.
// Misuse of images.map() Function:
// If each property corresponds to an image, you don't need to loop through images separately. Instead, you should map through the properties array and, based on the index of each property, grab the corresponding image from the images array.
// ImgMediaCard Component Structure:
// Ensure that your ImgMediaCard component is structured to accept an image prop for the image URL and a data prop for the property data (e.g., its name, description, etc.).
// Corrected Code:
// Assuming you have two arrays — properties and images — and you want to display a list of ImgMediaCard components where each card corresponds to a property and its associated image, here's how the corrected code might look:

// jsx
// Copy code
// export default function PropertyList({ properties, images }) {
//   return (
//     <ul>
//       {properties.map((property, index) => (
//         // For each property, pass the corresponding image and property data
//         <ImgMediaCard key={property.id} image={images[index]} data={property} />
//       ))}
//     </ul>
//   );
// }

// It looks like there are a few issues with your current code that might be preventing it from rendering correctly on the web page. I'll walk through the potential issues and provide solutions.

// Issues:
// PropertyList rendering issue:

// You're using the images.map function but you're not returning anything from the callback. The properties.map should return the ImgMediaCard component, but it seems like there's an extra set of curly braces around the return statement, which is causing no output.
// Props naming inconsistency:

// In your ImgMediaCard component, you're passing the imgage prop, but you are referencing image in the component itself. This is a typo and will break the component rendering.
// BasicRating component might be affecting the rendering if it's not correctly implemented (we can assume this is another potential issue).

// Solution:
// Fix the PropertyList Component:

// You need to ensure that you return the ImgMediaCard components correctly inside the images.map loop. Right now, you're missing the return statement.
// Fix the ImgMediaCard Prop Naming:

// The prop you pass to ImgMediaCard is imgage, but it should be image to match your destructuring in the component.
// BasicRating Component:

// Ensure that BasicRating is implemented correctly, as any issues here will also affect the UI.
// Updated Code:
// 1. App.jsx:

// jsx
// Copy code
// import PropertyList from "./components/PropertyList";

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

// const Img = [
//   "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/944463/pexels-photo-944463.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=600"
// ];

// function App() {
//   return (
//     <div>
//       <PropertyList properties={properties} images={Img} />
//     </div>
//   );
// }

// export default App;
// 2. PropertyList.jsx:

// jsx
// Copy code
// import ImgMediaCard from "./ImgMediaCard";

// export default function PropertyList({ properties, images }) {
//   return (
//     <ul>
//       {images.map((img, index) => {
//         const property = properties[index]; // Match property with image
//         return <ImgMediaCard key={property.id} image={img} data={property} />;
//       })}
//     </ul>
//   );
// }
// The important fix here is making sure the images.map returns an ImgMediaCard and ensuring each property is matched with the correct image via the index.
// 3. ImgMediaCard.jsx:

// jsx
// Copy code
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import BasicRating from './BasicRating';

// export default function ImgMediaCard({ data, image }) {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt={data.name}
//         height="140"
//         image={image}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {data.name}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           <h1>Price: {data.price}$ per night</h1>
//           <h2>Rating: {data.rating} <BasicRating /> </h2>
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
// I've fixed the prop name imgage to image to match the destructuring inside the ImgMediaCard component.
// Also ensured that the alt attribute uses the name from data instead of a static string, for better accessibility and accuracy.
// Additional Considerations:
// Ensure BasicRating is implemented correctly: If you're using a custom component for BasicRating, make sure it's not causing any rendering issues. If you don't need it or it's incomplete, you can comment it out temporarily.

// Check Browser Console for Errors: Open the browser's developer tools (F12 or right-click > Inspect > Console) and check if there are any errors in the console. This might help you debug further.

// Final Check:
// If you still don't see anything on the page after this, ensure you have the correct imports for Material UI components and BasicRating.
// If the BasicRating component is not yet created or has issues, temporarily remove it from the code to isolate the problem.
// Let me know if you're still facing issues after these changes!
