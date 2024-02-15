import Profile from './profile.js'

export default function Gallery() {
  return (
    <div>
      <h1>Profiles: </h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}

// create another component called gallery. NOT returning any HTML. Returning the custom-made 
// ...