const apiKey = 'prj_live_pk_161b37206bb981b2c3504e802fa622d93f10414e';
Radar.initialize(apiKey);

// Radar.setDescription('This is a Test app');

Radar.trackOnce(function(err, result) {
    if (!err) {
      // do something with result.location, result.events, result.user
      console.log(result.location.latitude, result.location.longitude);
      Radar.searchPlaces({
        near: {
            latitude: result.location.latitude,
            longitude: result.location.longitude
        },
        // radius: 1000,
        // chains: ['pizza-hut'],
        categories: ['education'],
        limit: 10
        }, function(err, result) {
        if (!err) {
          // do something with result.places
          console.log('Places', result.places);
        }
    });
    Radar.reverseGeocode({
        latitude: result.location.latitude,
        longitude: result.location.longitude,

    }, (err, result) => {
        if (!err) {
            // do something with result.addresses
            console.log('Address', result.addresses)
        }
    })
    }
});
// Radar.getDistance({
//     origin: {
//       latitude: 40.78382,
//       longitude: -73.97536
//     },
//     destination: {
//       latitude: 40.70390,
//       longitude: -73.98670
//     },
//     modes: [
//       'foot',
//       'car'
//     ],
//     units: 'imperial'
//   }, function(err, result) {
//     if (!err) {
//       // do something with result.routes
//       console.log(result.routes)
//     }
// });



// Radar.trackOnce(function(status , location, user, events) {
//     status = 'SUCCESS'
//     console.log(Radar.STATUS.SUCCESS == status)
//     console.log(user)
// });
