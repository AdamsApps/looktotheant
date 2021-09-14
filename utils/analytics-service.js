const analyticsService = {
    trackConversion : ()=> {

        var callback = function () {
              console.log("We got a conversion!")
          };
    
          gtag('event', 'conversion', {
              'send_to': 'AW-300427578/XB11CNnCu_QCELrSoI8B',
              'event_callback': callback
          });

          return false;

    }
}

export default analyticsService