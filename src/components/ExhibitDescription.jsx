import React from 'react';

function ExhibitDescription({ mobile }) {
  // Define your styles as an object
  const descStyle = mobile ? {} : { padding: '40px 180px' };

  return (
    <div style={descStyle}>
      <p>This exhibit draws on the 120-year-old collections of photographs in the San Francisco Municipal Transportation Agency Photo Dept. & Archive. For twelve decades, photographers working for private transit companies and city departments have documented San Francisco's transportation system inside and out. This day-to-day work has been compounded over the years into one of the largest single repositories of images focused on how people move around our city.</p>
      <p>Capturing everything from buses and streetcars on the streets to major historical events, the images inadvertently document the growth of San Francisco from a sandy backwater to a major metropolis. Well over 100,000 images have been created by more than two dozen people between 1903 and 2023.</p>
      <p>Today, the mission of the SFMTA Photo Archive is to preserve this record for future generations and provide access to these valuable resources for the public and SFMTA staff.</p>
    </div>
  );
}

export default ExhibitDescription;
